<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div class="fixed top-0 w-screen z-50 between-center regular-padding">
    <div class="between-center">
      <template v-if="colorMode.preference === 'light'">
        <a href="#inicio">
          <svg
            class="bg-white w-20 xl:w-24"
            width="87"
            height="32"
            viewBox="0 0 87 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.88 31.308V4.292H0.22L0.66 0.199998H7.612C8.844 0.199998 9.84133 0.581332 10.604 1.344C11.3667 2.07733 11.748 3.06 11.748 4.292V13.532C11.748 13.9427 11.6893 14.3387 11.572 14.72C12.276 15.4827 12.628 16.4507 12.628 17.624V27.216C12.628 28.448 12.1587 29.4453 11.22 30.208C10.3107 30.9413 9.24 31.308 8.008 31.308H0.88ZM7.348 4.292H5.06V13.532H7.348C7.49467 13.532 7.568 13.4587 7.568 13.312V4.512C7.568 4.36533 7.49467 4.292 7.348 4.292ZM8.228 17.624H5.06V27.216H8.228C8.37467 27.216 8.448 27.1427 8.448 26.996V17.844C8.448 17.6973 8.37467 17.624 8.228 17.624ZM28.0122 27.084C28.0122 28.316 27.6309 29.3133 26.8682 30.076C26.1055 30.8093 25.1082 31.176 23.8762 31.176H20.7082C19.4762 31.176 18.4789 30.8093 17.7162 30.076C16.9535 29.3133 16.5722 28.316 16.5722 27.084V4.116C16.5722 2.884 16.9535 1.90133 17.7162 1.168C18.4789 0.405331 19.4762 0.0239975 20.7082 0.0239975H23.8762C25.1082 0.0239975 26.1055 0.405331 26.8682 1.168C27.6309 1.90133 28.0122 2.884 28.0122 4.116V27.084ZM20.9722 4.116C20.8255 4.116 20.7522 4.18933 20.7522 4.336V26.864C20.7522 27.0107 20.8255 27.084 20.9722 27.084H23.6122C23.7589 27.084 23.8322 27.0107 23.8322 26.864V4.336C23.8322 4.18933 23.7589 4.116 23.6122 4.116H20.9722ZM36.1436 22.2V26.864C36.1436 27.0107 36.2169 27.084 36.3636 27.084H38.1236C38.2703 27.084 38.3436 27.0107 38.3436 26.864V18.944L34.8676 17.404C34.6036 17.316 34.2369 17.1693 33.7676 16.964C33.2983 16.7293 32.8729 16.392 32.4916 15.952C32.1396 15.512 31.9636 14.9107 31.9636 14.148V4.116C31.9636 2.884 32.3449 1.90133 33.1076 1.168C33.8703 0.405331 34.8676 0.0239975 36.0996 0.0239975H38.3876C39.6196 0.0239975 40.6169 0.405331 41.3796 1.168C42.1423 1.90133 42.5236 2.884 42.5236 4.116V10.628L38.3436 10.276V4.336C38.3436 4.18933 38.2703 4.116 38.1236 4.116H36.3636C36.2169 4.116 36.1436 4.18933 36.1436 4.336V13.532L39.6196 15.072C39.8836 15.1893 40.2503 15.3507 40.7196 15.556C41.1889 15.7613 41.5996 16.084 41.9516 16.524C42.3329 16.964 42.5236 17.5653 42.5236 18.328V27.084C42.5236 28.316 42.1423 29.3133 41.3796 30.076C40.6169 30.8093 39.6196 31.176 38.3876 31.176H36.0996C34.8676 31.176 33.8703 30.8093 33.1076 30.076C32.3449 29.3133 31.9636 28.316 31.9636 27.084V22.2H36.1436ZM50.6756 22.2V26.864C50.6756 27.0107 50.749 27.084 50.8956 27.084H52.6556C52.8023 27.084 52.8756 27.0107 52.8756 26.864V18.944L49.3996 17.404C49.1356 17.316 48.769 17.1693 48.2996 16.964C47.8303 16.7293 47.405 16.392 47.0236 15.952C46.6716 15.512 46.4956 14.9107 46.4956 14.148V4.116C46.4956 2.884 46.877 1.90133 47.6396 1.168C48.4023 0.405331 49.3996 0.0239975 50.6316 0.0239975H52.9196C54.1516 0.0239975 55.149 0.405331 55.9116 1.168C56.6743 1.90133 57.0556 2.884 57.0556 4.116V10.628L52.8756 10.276V4.336C52.8756 4.18933 52.8023 4.116 52.6556 4.116H50.8956C50.749 4.116 50.6756 4.18933 50.6756 4.336V13.532L54.1516 15.072C54.4156 15.1893 54.7823 15.3507 55.2516 15.556C55.721 15.7613 56.1316 16.084 56.4836 16.524C56.865 16.964 57.0556 17.5653 57.0556 18.328V27.084C57.0556 28.316 56.6743 29.3133 55.9116 30.076C55.149 30.8093 54.1516 31.176 52.9196 31.176H50.6316C49.3996 31.176 48.4023 30.8093 47.6396 30.076C46.877 29.3133 46.4956 28.316 46.4956 27.084V22.2H50.6756ZM65.4277 0.199998V13.488H67.9357V0.199998H72.1157V31H67.9357V17.58H65.4277V31H61.2477V4.292H60.5877L61.0277 0.199998H65.4277ZM86.2782 26.908L85.9262 31H76.2902V4.292H75.6302L76.0702 0.199998H86.2782L85.8382 4.292H80.4702V13.532H85.3982L84.9582 17.624H80.4702V26.908H86.2782Z"
              fill="#1D1D1D"
            />
          </svg>
        </a>
      </template>

      <template v-else>
        <a href="#inicio">
          <svg
            class="bg-light_black w-20 xl:w-24"
            width="87"
            height="32"
            viewBox="0 0 87 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.88 31.308V4.292H0.22L0.66 0.199998H7.612C8.844 0.199998 9.84133 0.581332 10.604 1.344C11.3667 2.07733 11.748 3.06 11.748 4.292V13.532C11.748 13.9427 11.6893 14.3387 11.572 14.72C12.276 15.4827 12.628 16.4507 12.628 17.624V27.216C12.628 28.448 12.1587 29.4453 11.22 30.208C10.3107 30.9413 9.24 31.308 8.008 31.308H0.88ZM7.348 4.292H5.06V13.532H7.348C7.49467 13.532 7.568 13.4587 7.568 13.312V4.512C7.568 4.36533 7.49467 4.292 7.348 4.292ZM8.228 17.624H5.06V27.216H8.228C8.37467 27.216 8.448 27.1427 8.448 26.996V17.844C8.448 17.6973 8.37467 17.624 8.228 17.624ZM28.0122 27.084C28.0122 28.316 27.6309 29.3133 26.8682 30.076C26.1055 30.8093 25.1082 31.176 23.8762 31.176H20.7082C19.4762 31.176 18.4789 30.8093 17.7162 30.076C16.9535 29.3133 16.5722 28.316 16.5722 27.084V4.116C16.5722 2.884 16.9535 1.90133 17.7162 1.168C18.4789 0.405331 19.4762 0.0239975 20.7082 0.0239975H23.8762C25.1082 0.0239975 26.1055 0.405331 26.8682 1.168C27.6309 1.90133 28.0122 2.884 28.0122 4.116V27.084ZM20.9722 4.116C20.8255 4.116 20.7522 4.18933 20.7522 4.336V26.864C20.7522 27.0107 20.8255 27.084 20.9722 27.084H23.6122C23.7589 27.084 23.8322 27.0107 23.8322 26.864V4.336C23.8322 4.18933 23.7589 4.116 23.6122 4.116H20.9722ZM36.1436 22.2V26.864C36.1436 27.0107 36.2169 27.084 36.3636 27.084H38.1236C38.2703 27.084 38.3436 27.0107 38.3436 26.864V18.944L34.8676 17.404C34.6036 17.316 34.2369 17.1693 33.7676 16.964C33.2983 16.7293 32.8729 16.392 32.4916 15.952C32.1396 15.512 31.9636 14.9107 31.9636 14.148V4.116C31.9636 2.884 32.3449 1.90133 33.1076 1.168C33.8703 0.405331 34.8676 0.0239975 36.0996 0.0239975H38.3876C39.6196 0.0239975 40.6169 0.405331 41.3796 1.168C42.1423 1.90133 42.5236 2.884 42.5236 4.116V10.628L38.3436 10.276V4.336C38.3436 4.18933 38.2703 4.116 38.1236 4.116H36.3636C36.2169 4.116 36.1436 4.18933 36.1436 4.336V13.532L39.6196 15.072C39.8836 15.1893 40.2503 15.3507 40.7196 15.556C41.1889 15.7613 41.5996 16.084 41.9516 16.524C42.3329 16.964 42.5236 17.5653 42.5236 18.328V27.084C42.5236 28.316 42.1423 29.3133 41.3796 30.076C40.6169 30.8093 39.6196 31.176 38.3876 31.176H36.0996C34.8676 31.176 33.8703 30.8093 33.1076 30.076C32.3449 29.3133 31.9636 28.316 31.9636 27.084V22.2H36.1436ZM50.6756 22.2V26.864C50.6756 27.0107 50.749 27.084 50.8956 27.084H52.6556C52.8023 27.084 52.8756 27.0107 52.8756 26.864V18.944L49.3996 17.404C49.1356 17.316 48.769 17.1693 48.2996 16.964C47.8303 16.7293 47.405 16.392 47.0236 15.952C46.6716 15.512 46.4956 14.9107 46.4956 14.148V4.116C46.4956 2.884 46.877 1.90133 47.6396 1.168C48.4023 0.405331 49.3996 0.0239975 50.6316 0.0239975H52.9196C54.1516 0.0239975 55.149 0.405331 55.9116 1.168C56.6743 1.90133 57.0556 2.884 57.0556 4.116V10.628L52.8756 10.276V4.336C52.8756 4.18933 52.8023 4.116 52.6556 4.116H50.8956C50.749 4.116 50.6756 4.18933 50.6756 4.336V13.532L54.1516 15.072C54.4156 15.1893 54.7823 15.3507 55.2516 15.556C55.721 15.7613 56.1316 16.084 56.4836 16.524C56.865 16.964 57.0556 17.5653 57.0556 18.328V27.084C57.0556 28.316 56.6743 29.3133 55.9116 30.076C55.149 30.8093 54.1516 31.176 52.9196 31.176H50.6316C49.3996 31.176 48.4023 30.8093 47.6396 30.076C46.877 29.3133 46.4956 28.316 46.4956 27.084V22.2H50.6756ZM65.4277 0.199998V13.488H67.9357V0.199998H72.1157V31H67.9357V17.58H65.4277V31H61.2477V4.292H60.5877L61.0277 0.199998H65.4277ZM86.2782 26.908L85.9262 31H76.2902V4.292H75.6302L76.0702 0.199998H86.2782L85.8382 4.292H80.4702V13.532H85.3982L84.9582 17.624H80.4702V26.908H86.2782Z"
              fill="#ECECEC"
            />
          </svg>
        </a>
      </template>
    </div>

    <div class="text-color flex">
      <!--mobile menu button-->
      <div class="md:hidden lg:hidden">
        <SwitchModeBtn />
        <Icon
          name="ic:baseline-menu"
          class="ml-5 text-2xl cursor-pointer"
          @click="showMenu = !showMenu"
        />
        <transition name="menu-transition">
          <div
            v-if="showMenu"
            class="flex flex-col p-3 gap-y-4 regular-bg border-2 dark:border-white border-light_black fixed top-20 right-2"
          >
            <span class="flex items-center" @click="showMenu = !showMenu">
              <a href="#inicio" :class="{ active: activeSection === 'inicio' }">
                <Icon name="heroicons:home-20-solid" class="mr-2" />
                Início
              </a>
            </span>

            <span class="flex items-center" @click="showMenu = !showMenu">
              <a
                href="#quem-somos"
                :class="{ active: activeSection === 'quem-somos' }"
              >
                <Icon name="heroicons:user-group-16-solid" class="mr-2" />
                Quem Somos
              </a>
            </span>

            <span class="flex items-center" @click="showMenu = !showMenu">
              <a
                href="#catalogo"
                :class="{ active: activeSection === 'catalogo' }"
              >
                <Icon name="heroicons:book-open-solid" class="mr-2" />
                Catálogo
              </a>
            </span>

            <span class="flex items-center" @click="showMenu = !showMenu">
              <a
                href="#fale-conosco"
                :class="{ active: activeSection === 'fale-conosco' }"
              >
                <Icon name="heroicons:chat-bubble-left-16-solid" class="mr-2" />
                Fale Conosco
              </a>
            </span>
          </div>
        </transition>
      </div>
      <!--desktop menu-->
      <div class="hidden md:flex lg:flex">
        <div
          class="between-center regular-text gap-x-16 pr-5 text-transparent_gray"
        >
          <a href="#inicio" :class="{ active: activeSection === 'inicio' }">
            Início</a
          >
          <a
            href="#quem-somos"
            :class="{ active: activeSection === 'quem-somos' }"
          >
            Quem Somos</a
          >
          <a href="#catalogo" :class="{ active: activeSection === 'catalogo' }">
            Catálogo</a
          >
          <a
            href="#fale-conosco"
            :class="{ active: activeSection === 'fale-conosco' }"
          >
            Fale Conosco
          </a>
          <SwitchModeBtn />
        </div>
      </div>
    </div>
  </div>
  <slot />
</template>

<script setup>
import { onMounted } from "vue";
import SwitchModeBtn from "~/components/buttons/SwitchModeBtn.vue";

const colorMode = useColorMode();
const showMenu = ref(false);
const activeSection = ref("inicio");

const sections = ["inicio", "quem-somos", "catalogo", "fale-conosco"];

const smoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    });
  });
};

const handleScroll = () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement && window.scrollY >= sectionElement.offsetTop - 10) {
      currentSection = section;
    }
  });
  activeSection.value = currentSection;
};

onMounted(() => {
  smoothScroll();
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.active {
  @apply border-b-2 font-medium dark:text-white text-black;
}

.menu-transition-enter-active,
.menu-transition-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.menu-transition-enter,
.menu-transition-leave-to

/* .menu-transition-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-transition-enter-to,
.menu-transition-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>
