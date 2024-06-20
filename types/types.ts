export const formDataDefault: FormData = {
  fullname: { value: "", error: "" },
  phone: { value: "", error: "" },
  simular: { value: false, error: "" },
  cpf: { value: "", error: "" },
  valorEntrada: { value: "", error: "" },
  cnh: { value: false, error: "" },
};

export type FormDataProp<T> = {
  value: T;
  error: string;
};

export type FormData = {
  fullname: FormDataProp<string>;
  phone: FormDataProp<string>;
  message: FormDataProp<string>;
  simular: FormDataProp<boolean>;
  cpf: FormDataProp<string>;
  valorEntrada: FormDataProp<number | string>;
  cnh: FormDataProp<boolean>;
};

export type CarInfo = {
  image: string;
  price: string;
  name: string;
};

export type CarCategories = {
  suv: CarInfo[];
  sedan: CarInfo[];
  hatch: CarInfo[];
  "4x4": CarInfo[];
};

export type FormDataCar = {
  price: string;
  name: string;
  image: string;
  category: string;
};
