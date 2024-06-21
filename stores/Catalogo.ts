import axios from "axios";
import { defineStore } from "pinia";
import type { CarInfo, CarCategories } from "~/types/types";
import { useNotificationStore } from "./Notification";

export const useCatalogoStore = defineStore("catalogo", {
  state: () => ({
    cars: {
      suv: [] as CarInfo[],
      sedan: [] as CarInfo[],
      hatch: [] as CarInfo[],
      "4x4": [] as CarInfo[],
    } as CarCategories,
  }),
  actions: {
    async getCars(): Promise<void> {
      const storeNotification = useNotificationStore();
      const gistId: string = useRuntimeConfig().public.GIST_ID;

      try {
        const { data } = await axios.get(
          `https://api.github.com/gists/${gistId}`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          },
        );
        const fileContent = JSON.parse(data.files["catalogo.json"].content);
        this.cars = fileContent;
      } catch (error) {
        storeNotification.showNotification(
          "Não foi possível obter os carros do catálogo, tente novamente.",
          "error",
        );
      }
    },
    async updateGist(updatedContent: string, operation: string): Promise<void> {
      const storeNotification = useNotificationStore();
      const gistId: string = useRuntimeConfig().public.GIST_ID;
      const accessToken: string = useRuntimeConfig().public.ACCESS_TOKEN;

      try {
        await axios.patch(
          `https://api.github.com/gists/${gistId}`,
          {
            files: {
              "catalogo.json": {
                content: updatedContent,
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/vnd.github+json",
              "Content-Type": "application/json",
            },
          },
        );
        operation === "addNewCar"
          ? storeNotification.showNotification(
              "Ação efetuada com sucesso, dentro de alguns segundos o carro será adicionado!",
              "success",
            )
          : storeNotification.showNotification(
              "Ação efetuada com sucesso, dentro de alguns segundos o carro será exlcuído!",
              "success",
            );
        await this.getCars();
      } catch (error) {
        storeNotification.showNotification(
          "Não foi possível efetuar a alteração.",
          "error",
        );
      }
    },
    async addNewCar(category: string, newCar: CarInfo): Promise<void> {
      const storeNotification = useNotificationStore();

      try {
        this.cars[category]
          ? this.cars[category].push(newCar)
          : (this.cars[category] = [newCar]);

        this.updateGist(JSON.stringify(this.cars, null, 2), "addNewCar");
      } catch (error) {
        storeNotification.showNotification(
          "Não foi possível adicionar o carro.",
          "error",
        );
      }
    },
    async uploadImage(file: File, category: string): Promise<string> {
      const storeNotification = useNotificationStore();
      const repoOwner: string = useRuntimeConfig().public.REPO_OWNER;
      const accessToken: string = useRuntimeConfig().public.ACCESS_TOKEN;
      const repoName: string = useRuntimeConfig().public.REPO_NAME;
      const base64Content = await this.fileToBase64(file);
      const filePath = `assets/images/catalogo/${category}/${file.name}`;

      try {
        const response = await axios.put(
          `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
          {
            message: `add ${file.name}`,
            content: base64Content,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/vnd.github+json",
              "Content-Type": "application/json",
            },
          },
        );
        return response.data.content.download_url;
      } catch (error) {
        storeNotification.showNotification(
          "Não foi possível adicionar a imagem do carro.",
          "error",
        );
        throw error;
      }
    },
    fileToBase64(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64String = (reader.result as string).split(",")[1]; // Remove a parte do prefixo da data URL
          resolve(base64String);
        };
        reader.onerror = (error) => reject(error);
      });
    },
    async deleteCar(category: string, carName: string): Promise<void> {
      console.log(category, carName);

      if (this.cars[category]) {
        const carToRemove: CarInfo = this.cars[category].filter(
          (car: CarInfo) => car.name === carName,
        );

        console.log(carToRemove);

        if (carToRemove) {
          const imageUrl = carToRemove[0].image;
          this.cars[category] = this.cars[category].filter(
            (car: CarInfo) => car.name !== carName,
          );
          this.updateGist(JSON.stringify(this.cars, null, 2), "deleteCar");
          await this.deleteImage(imageUrl);
        }
      }
    },
    async deleteImage(imageUrl: string): Promise<void> {
      const storeNotification = useNotificationStore();
      const repoOwner: string = useRuntimeConfig().public.REPO_OWNER;
      const accessToken: string = useRuntimeConfig().public.ACCESS_TOKEN;
      const repoName: string = useRuntimeConfig().public.REPO_NAME;
      console.log(imageUrl);

      const filePath: string = imageUrl.split("/master/")[1];

      try {
        const response = await axios.get(
          `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/vnd.github+json",
              "Content-Type": "application/json",
            },
          },
        );

        const sha = response.data.sha;

        await axios.delete(
          `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/vnd.github+json",
              "Content-Type": "application/json",
            },
            data: {
              message: `delete ${filePath}`,
              sha: sha,
            },
          },
        );
      } catch (error) {
        storeNotification.showNotification(
          "Não foi possível excluir a imagem do carro.",
          "error",
        );
      }
    },
  },
});
