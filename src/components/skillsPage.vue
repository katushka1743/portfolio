<template>
  <div class="contentPage">
    <h2 class="Pink">Мои навыки</h2>
    <div class="elements" translate="no">
      <!-- Левая колонка: Инструменты -->
      <div class="column left">
        <div class="element One">
          <div class="titleImg">
            <img class="starImg" src="../../img/star_15321456.webp" alt="starPoint">
            <div class="title Turquoise">Языки и&nbsp;технологии</div>
          </div>
          <ul class="textAbout">
            <li>HTML5 — семантическая вёрстка, формы, таблицы, мультимедиа</li>
            <li>CSS3 — Flexbox, Grid, адаптивная и&nbsp;отзывчивая верстка, медиа-запросы, базовые анимации
              и&nbsp;переходы</li>
            <li>JavaScript — DOM, события, localStorage, базовые функции и&nbsp;объекты, работа с&nbsp;массивами
              и&nbsp;строками</li>
            <li>Python — базовый уровень: синтаксис, условия, циклы, функции</li>
            <li>1C — учебная разработка конфигураций: документы, движения по&nbsp;регистрам, учёт товаров и&nbsp;скидок,
              отчёты</li>
          </ul>
        </div>

        <div class="element Two">
          <div class="titleImg">
            <img class="starImg" src="../../img/star_15321456.webp" alt="starPoint">
            <div class="title Pink">Фреймворки и&nbsp;библиотеки</div>
          </div>
          <ul class="textAbout">
            <li>Vue&nbsp;3 — компоненты, props, emits, v-for/v-if, Vue&nbsp;Router</li>
            <li>Django — backend-фреймворк на&nbsp;Python для&nbsp;создания веб-приложений: модели, CRUD, регистрация,
              роли, работа с&nbsp;базой данных</li>
            <li>Bootstrap — для&nbsp;быстрого прототипирования интерфейсов</li>
            <li>Emmet — набор плагинов для&nbsp;текстовых редакторов</li>
          </ul>
        </div>

        <div class="element Three">
          <div class="titleImg">
            <img class="starImg" src="../../img/star_15321456.webp" alt="starPoint">
            <div class="title Turquoise">Софт скиллы</div>
          </div>
          <ul class="textAbout">
            <li>Работа с&nbsp;макетами из&nbsp;Figma</li>
            <li>Разбиение задачи на&nbsp;маленькие шаги и&nbsp;проектное мышление</li>
            <li>Самостоятельное обучение новым технологиям</li>
            <li>Проектирование пользовательских сценариев и&nbsp;логической структуры приложения</li>
            <li>Усидчивость и доведение задач до рабочего результата</li>
          </ul>
        </div>
      </div>

      <!-- Правая колонка: Языки, Фреймворки, Софт скиллы -->
      <div class="column right">
        <div class="element Four">
          <div class="titleImg">
            <img class="starImg" src="../../img/star_15321456.webp" alt="starPoint">
            <div class="title Pink">Практика разработки</div>
          </div>
          <ul class="textAbout">
            <li>Git & GitHub — коммиты, ветки, pull requests, деплой проектов</li>
            <li>VS Code, PyCharm — настройка рабочего пространства, плагины для&nbsp;работы</li>
            <li>Vite / npm scripts — сборка и&nbsp;запуск проектов, автоматизация задач при&nbsp;разработке</li>
            <li>DevTools — отладка и&nbsp;профилирование кода в&nbsp;браузере</li>
            <li>Postman — практика с&nbsp;API: отправка запросов (GET/POST), работа с&nbsp;ответами</li>
            <li>SPA на&nbsp;Vue&nbsp;3 — динамический интерфейс без&nbsp;перезагрузки страниц, работа
              с&nbsp;компонентами и&nbsp;маршрутизацией&nbsp;(роутером)</li>
            <li>Практика соединения frontend на&nbsp;Vue с&nbsp;backend на&nbsp;Django: отправка и&nbsp;получение данных
            </li>
            <li>Работа с&nbsp;базами данных — SQLite, PostgreSQL; перенос данных через JSON, настройка моделей Django
              и&nbsp;миграций</li>
            <li>Оптимизация — проверка адаптивности, кроссбраузерности, единообразия интерфейса, контроль
              производительности</li>
            <li>Тестирование — юнит-тестирование функций и&nbsp;компонентов, проверка работы форм и&nbsp;API</li>
            <li>SEO — использование семантических тегов, meta-тегов, alt-атрибутов для&nbsp;изображений, базовая
              оптимизация под&nbsp;поисковые системы</li>
          </ul>
        </div>

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
  grid-template-columns: 25rem 25rem;
  gap: 2rem 10rem;
  justify-content: center;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

@media screen and (width <=582px) {

  .contentPage {
    padding-inline: 1rem;
    padding-top: 1rem;
  }

  .elements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .column {
    width: 25rem;
  }

  .element {
    width: 25rem;
  }
}
</style>