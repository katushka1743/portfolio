<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute()

function upBtn() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}



</script>

<template>

  <div class="content">
    <header class="header">
      <nav>
        <RouterLink class="navRouter" :class="{'activePage': route.path === '/portfolio/'}" :to="{ name: 'mainPage' }">Главная</RouterLink>
        <RouterLink class="navRouter" :class="{'activePage': route.path === '/portfolio/aboutPage'}" :to="{ name: 'aboutPage' }">Обо мне</RouterLink>
        <RouterLink class="navRouter" :class="{'activePage': route.path === '/portfolio/skillsPage'}" :to="{ name: 'skillsPage' }">Навыки</RouterLink>
        <RouterLink class="navRouter" :class="{'activePage': route.path === '/portfolio/casePage'}" :to="{ name: 'casePage' }">Работы</RouterLink>
        <RouterLink class="navRouter" :class="{'activePage': route.path === '/portfolio/contactsPage'}" :to="{ name: 'contactsPage' }">Контакты</RouterLink>
      </nav>
    </header>
    <main class="main">
      <router-view></router-view>
      <button class="upBtn" @click="upBtn">
        <img src="../img/Group 12.png" alt="up">
      </button>
    </main>
    <footer class="footer ">
      <div class="copyright footerElem" translate="no">
        © 2025 katushka1743
      </div>
      <div class="social footerElem ">
        <a target="_blank" translate="no" href="https://vk.com/katushka1743group">Vkontakte &#8599;</a>
        <a target="_blank" translate="no" href="https://github.com/katushka1743">GitHub &#8599;</a>
        <a target="_blank" translate="no" href="https://www.behance.net/katushka1743">Behance &#8599;</a>
      </div>
      <div class="menu footerElem ">
        <RouterLink class="navRouter"  :to="{ name: 'mainPage' }">Главная</RouterLink>
        <RouterLink class="navRouter"  :to="{ name: 'aboutPage' }">Обо мне</RouterLink>
        <RouterLink class="navRouter"  :to="{ name: 'skillsPage' }">Навыки</RouterLink>
        <RouterLink class="navRouter"  :to="{ name: 'casePage' }">Работы</RouterLink>
        <RouterLink class="navRouter"  :to="{ name: 'contactsPage' }">Контакты</RouterLink>
      </div>
    </footer>
  </div>

</template>

<style scoped>
.content {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
  position: relative;
}

.header {
  background: var(--colorGradientPT);
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
}

.navRouter {
  color: var(--colorBlack);
}

.activePage {
  font-family: "Raleway";
  font-weight: 900;
}


.upBtn {
  background-color: transparent;
  width: 2.8rem;
  height: 2.8rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
}

.footer {
  background: var(--colorGradientTP);
  height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.footerElem {
  width: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.social {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-align: center;
}

@media screen and (width <=1200px) {
  .footer {
    flex-direction: column;
  }

  .menu {
    flex-direction: row;
    gap: 2rem;
  }
}



@media screen and (width <=576px) {
  .footer {
    flex-direction: column-reverse;
  }

  .menu {
    flex-direction: row;
    gap: 1rem;
  }
}
</style>
