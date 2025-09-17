<script setup>
import formVue from './form.vue';
</script>



<template>
  <div class="contentPage">
    <h2 class="Pink">Мои контакты</h2>

    <div class="contactsInfo" translate="no">
      <img class="myPhoto" src="../../img/166553552.jpg" alt="myPhoto">


      <div class="socials">
        <div class="social">
          <img src="../../img/vk_733639.png" class="iconSkills" alt="iconImg">
          <a class="aPink" href="https://vk.com/katushka1743group" target="_blank">https://vk.com/katushka1743group</a>
        </div>
        <div class="social">
          <img src="../../img/github_1051377.png" class="iconSkills" alt="iconImg">
          <a class="aTurquoise" href="https://github.com/katushka1743"
            target="_blank">https://github.com/katushka1743</a>
        </div>
        <div class="social">
          <img src="../../img/social_14083679.png" class="iconSkills" alt="iconImg">
          <a class="aPink" href="https://www.behance.net/katushka1743"
            target="_blank">https://www.behance.net/katushka1743</a>
        </div>
        <div class="social">
          <img src="../../img/mention_8317498.png" class="iconSkills" alt="iconImg">
          <a href="mailto:katushka1743@yandex.ru" class="aTurquoise">katushka1743@yandex.ru</a>
        </div>
      </div>
    </div>

    <formVue class="formVue"></formVue>

  </div>
</template>



<style scoped>
.contactsInfo {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  /* justify-content: space-around; */
  justify-content: center;
}

.myPhoto {
  height: 25rem;
}

.socials {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

}

.social {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

.iconSkills {
  width: 5.5rem;
}

</style>
