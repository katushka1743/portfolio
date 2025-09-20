<script setup>

</script>



<template>
  <div class="contentPage">
    <h2 class="Pink">Мои навыки</h2>
    <div class="elements" translate="no">
      <div class="element One">
        <div class="titleImg">
          <img class="starImg" src="../../img/star_15321456.png" alt="starPoint">
          <div class="title Turquoise">Языки и технологии</div>
        </div>
        <p class="textAbout">
        <ul>
          <li>HTML5 — семантическая вёрстка, формы, таблицы, мультимедиа</li>
          <li>CSS3 — Flexbox, Grid, адаптивная и&nbsp;отзывчивая верстка, медиа-запросы, базовые анимации
            и&nbsp;переходы
          </li>
          <li>JavaScript — DOM, события, localStorage, базовые функции и&nbsp;объекты, работа с&nbsp;массивами
            и&nbsp;строками
          </li>
          <li>Python — изучение основ и&nbsp;базовой логики
          </li>
          <li>1C — базовые навыки работы в&nbsp;процессе изучения
          </li>
        </ul>

        </p>
      </div>
      <div class="element Two">
        <div class="titleImg">
          <img class="starImg" src="../../img/star_15321456.png" alt="starPoint">
          <div class="title Pink">Фреймворки и библиотеки</div>
        </div>
        <p class="textAbout">
        <ul>
          <li>Vue 3 — компоненты, props, emits, v-for/v-if, Vue&nbsp;Router</li>
          <li>Bootstrap — для&nbsp;быстрого прототипирования интерфейсов</li>
          <li>Emmet — набор плагинов для&nbsp;текстовых редакторов</li>
        </ul>
        </p>
      </div>
      <div class="element Three">
        <div class="titleImg">
          <img class="starImg" src="../../img/star_15321456.png" alt="starPoint">
          <div class="title Pink">Софт скиллы</div>
        </div>
        <p class="textAbout">
        <ul>
          <li>Работа с&nbsp;макетами из&nbsp;Figma
          </li>
          <li>Разбиение задачи на&nbsp;маленькие шаги и&nbsp;проектное мышление
          </li>
          <li>Самостоятельное обучение новым технологиям
          </li>
        </ul>

        </p>
      </div>
      <div class="element Four">
        <div class="titleImg">
          <img class="starImg" src="../../img/star_15321456.png" alt="starPoint">
          <div class="title Turquoise">Инструменты разработки</div>
        </div>
        <p class="textAbout">
        <ul>
          <li>Git & GitHub — коммиты, ветки, pull requests, деплой проектов</li>
          <li>VS Code — настройка рабочего пространства, плагины для&nbsp;фронтенда</li>
          <li>Vite / npm scripts — сборка и&nbsp;запуск проектов
          </li>
          <li>DevTools — отладка и&nbsp;профилирование кода в&nbsp;браузере
          </li>
        </ul>
        </p>
      </div>




    </div>

    <RouterLink :to="{ name: 'casePage' }"><button class="buttonTurquoise">Посмотреть работы</button></RouterLink>

  </div>
</template>



<style scoped>
.contentPage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.elements {
  display: grid;
  grid-template-columns: repeat(2, 25rem);
  row-gap: 2rem;
  column-gap: 10rem;
  justify-content: center;
}

.element {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  text-align: justify;
}


.titleImg {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
}

.starImg {
  width: 3rem;
}


.title {
  font-size: 1.3rem;
}

.textAbout {
  font-size: 0.9rem;
}

@media screen and (width <=576px) {

  .contentPage {
    padding-inline: 1rem;
    padding-top: 1rem;
  }

  .elements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .element {
    width: 25rem;
  }



}
</style>
