<script setup></script>

<template>
  <h2 class="Pink">Упс, что-то пошло не так</h2>
  <div class="contentPage">
    <p>Простите, но такой страницы не существует&#40;</p>
    <RouterLink :to="{ name: 'mainPage' }"><button class="buttonPink">Перейти на главную</button></RouterLink>

  </div>
</template>

<style scoped>
.contentPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  hyphens: none;

}
</style>