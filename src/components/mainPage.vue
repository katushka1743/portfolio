<script setup>
import formVue from './form.vue';
</script>



<template>
  <div class="contentPage">
    <div class="section hero">
      <img src="../../img/image 5.png" class="photo" alt="my photo">
      <div class="TextAndBtn">
        <p class="heroText">Привет! Я Катя — <span class="accent dash" translate="no">frontend-разработчик</span>
          и&nbsp;немного <span class="accent dash">веб-дизайнер</span><br>
          Мой ник в&nbsp;сети — <span class="accent" translate="no">katushka1743</span> <br>
          Люблю превращать идеи в&nbsp;красивые
          и&nbsp;понятные <span class="accent">сайты</span>
        </p>
        <div class="buttonsStart">
          <RouterLink :to="{ name: 'casePage' }"><button class="buttonTurquoise">Посмотреть работы</button></RouterLink>
          <RouterLink :to="{ name: 'contactsPage' }"><button class="buttonPink">Связаться</button></RouterLink>
        </div>
      </div>

    </div>
    <div class="section about">
      <p class="textAbout"><span class="accent">Создаю сайты от идеи до готового продукта, используя современные
          технологии</span><br>
        Для меня важно, чтобы проект был красивым и удобным<br>
        <span class="accent">Люблю, когда дизайн и код работают вместе, а каждая деталь выглядит гармонично и приносит
          пользу пользователю.</span>
      </p>
      <RouterLink :to="{ name: 'aboutPage' }"><button class="buttonTurquoise">Обо мне</button></RouterLink>

    </div>

    <div class="section skills">
      <h2 class="Pink">Что я использую</h2>
      <div class="skillsImges">
        <img class="iconSkills" src="../../img/file_14969887.png" alt="iconHTML">
        <img class="iconSkills" src="../../img/file_2425406.png" alt="iconCSS">
        <img class="iconSkills" src="../../img/brands_1183724.png" alt="iconVueJS">
        <img class="iconSkills" src="../../img/figma_5968704.png" alt="iconFigma">
      </div>
      <RouterLink :to="{ name: 'skillsPage' }"><button class="buttonPink">Подробнее</button></RouterLink>
    </div>

    <div class="section cases">
      <h2 class="Turquoise">Некоторые работы</h2>
      <div class="casesDiv">
        <figure>
          <img class="imgCases" src="../../img/Снимок экрана 2025-09-05 153704.png" alt="exampleCase">
          <figcaption><a href="https://katushka1743.github.io/FitProShop/" class="aTurquoise"
              target="_blank">Многостраничный интернет-магазин спортивной одежды. Учебная работа</a></figcaption>
        </figure>
        <figure>
          <img class="imgCases" src="../../img/Снимок экрана 2025-09-05 153222.png" alt="exampleCase">
          <figcaption><a
              href="https://www.figma.com/design/J7KHnN33bxhH5nNkyGJ0uv/%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D1%81%D0%B0%D0%B9%D1%82-%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BA%D0%B0?node-id=0-1&t=S9FmOErlsSQBjHcJ-1"
              class="aTurquoise" target="_blank">Макет сайта-портфолио для дизайнера</a></figcaption>
        </figure>
        <figure>
          <img class="imgCases" src="../../img/Снимок экрана 2025-09-05 153408.png" alt="exampleCase">
          <figcaption><a
              href="https://www.figma.com/design/JFZIcP6KBTBY8N9pc0MMBK/%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80-%D0%BA%D0%B8%D0%BD%D0%BE%D0%B0%D1%84%D0%B8%D1%88%D0%B0?node-id=0-1&t=LJkLKh7sb68tk7Rj-1"
              class="aTurquoise" target="_blank">Макет постера-афиши для кинотеатра</a></figcaption>
        </figure>
      </div>
      <RouterLink :to="{ name: 'casePage' }"><button class="buttonTurquoise">Все проекты</button></RouterLink>



    </div>

    <formVue></formVue>


  </div>
</template>



<style scoped>
.section {
  padding-block: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero {
  padding-top: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  justify-content: center;
}

.photo {
  height: 25rem;
}

p {
  flex-wrap: wrap;
}

span {
  flex-wrap: wrap;
}

.heroText {
  color: var(--colorTurquoise);
  font-size: 2.6rem;
}

.accent {
  color: var(--colorPink);
  font-size: 2.6rem;
}

.dash {
  white-space: nowrap;
}

.TextAndBtn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 25rem; */
  gap: 3rem;
  align-items: center;
}

.buttonsStart {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
}

.buttonsStart button {
  flex: 1 0 8rem;
}

.textAbout {
  color: var(--colorTurquoise);
  font-size: 1.5rem;
  text-align: center;
  line-height: 2.2rem;
}

.textAbout .accent {
  font-size: 1.5rem;
}


.skillsImges {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10rem;
}

.iconSkills {
  width: 8rem;
}

.cases {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.casesDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

}

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 17rem;
  width: 23rem;
  text-align: center;
}

.imgCases {
  width: 23rem;
}

@media screen and (576 <=width <=1200px) {
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .photo {
    height: 22rem;
  }

  .heroText {
    font-size: 1.8rem;
    hyphens: none;
  }

  .accent {
    font-size: 1.8rem;
  }

  .TextAndBtn {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2rem;
  }

  .buttonsStart {
    display: flex;
    gap: 2rem;
  }

  .skillsImges {
    gap: 2rem;
    justify-content: center;
  }
}

@media screen and (width <=576px) {
  .contentPage {
    padding-inline: 0.5rem;
    padding-top: 1rem;
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .photo {
    height: 18rem;
  }

  .heroText {
    font-size: 1.6rem;
    hyphens: none;
  }

  .textAbout {
    hyphens: none;

  }

  .accent {
    font-size: 1.6rem;
    hyphens: none;

  }

  .TextAndBtn {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2rem;
  }

  .buttonsStart {
    display: flex;
    gap: 1rem;
  }

  .skillsImges {
    gap: 2rem;
    justify-content: center;
  }
}
</style>
