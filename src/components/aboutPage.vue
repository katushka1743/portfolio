<script setup>

</script>



<template>
  <div class="contentPage">
    <h2 class="Pink">Обо мне</h2>
    <div class="elements">
      <div class="element One">
        <div class="titleImg">
          <img class="starImg" src="../../img/star_15321456.png" alt="starPoint">
          <div class="title Turquoise">Мой путь</div>
        </div>
        <p class="textAbout">
          Когда-то я планировала связать жизнь с&nbsp;психологией, но&nbsp;компьютеры всегда вызывали у&nbsp;меня особый
          интерес. С&nbsp;самого детства я пробовала писать что-то своё, хотя поначалу мало что получалось. К&nbsp;концу
          школы стало понятно
          — больше всего меня вдохновляет программирование. Со&nbsp;временем я открыла для&nbsp;себя веб-разработку —
          сферу, где
          можно соединить строгую логику кода и&nbsp;красоту дизайна. Так был выбран путь во&nbsp;frontend-разработку
          и&nbsp;веб-дизайн.
        </p>
      </div>
      <div class="element Two">
        <div class="titleImg">
          <img class="starImg" src="../../img/star_15321456.png" alt="starPoint">
          <div class="title Turquoise">Навыки и подход</div>
        </div>
        <p class="textAbout">
          Мне нравится создавать сайты, которые выглядят аккуратно и&nbsp;минималистично. Чаще всего я тяготею
          к&nbsp;простоте и&nbsp;чистому стилю, но&nbsp;иногда позволяю себе поиграть с&nbsp;цветом и&nbsp;добавить
          яркие детали. Я горжусь
          тем, что начала развиваться в&nbsp;этой&nbsp;сфере и&nbsp;каждый день продолжаю двигаться вперёд.
          Для&nbsp;меня важны удобство,
          адаптивность и&nbsp;внимание к&nbsp;деталям — именно это делает проект целостным и&nbsp;полезным.
        </p>
      </div>
      <div class="element Three">
        <div class="titleImg">
          <img class="starImg" src="../../img/star_15321456.png" alt="starPoint">
          <div class="title Turquoise">Немного обо мне</div>
        </div>
        <p class="textAbout">
          Помимо разработки, я люблю то, что помогает расслабляться и&nbsp;вдохновляться. Читаю романы и&nbsp;веду
          читательский дневник. В&nbsp;свободное время занимаюсь рукоделием: вышиваю крестиком, валяю из&nbsp;шерсти.
          Музыка
          сопровождает меня почти всегда, а&nbsp;занятия растяжкой помогают находить баланс между работой
          и&nbsp;отдыхом. <br><br>
          Ещё одна маленькая радость — я люблю ходить в&nbsp;уютные кафе и&nbsp;наслаждаться вкусным кофе. Это
          для&nbsp;меня
          способ отдохнуть, подумать о&nbsp;чём-то новом и&nbsp;просто поймать атмосферу.
        </p>
      </div>
      <div class="element Four">
        <div class="titleImg">
          <img class="starImg" src="../../img/star_15321456.png" alt="starPoint">
          <div class="title Pink">Мой взгляд на работу</div>
        </div>
        <p class="textAbout">
          Я верю, что лучшие проекты рождаются там, где встречаются логика и&nbsp;креатив. Поэтому для&nbsp;меня
          одинаково важны и&nbsp;техническая часть, и&nbsp;визуальная гармония. Мне нравится соединять эти две стороны,
          чтобы сайты были и&nbsp;удобными,
          и&nbsp;вдохновляющими. Каждый проект рассматриваю как возможность найти оптимальное сочетание
          функциональности,
          эстетики и&nbsp;пользовательского опыта, уделяя внимание деталям и&nbsp;продумывая интерфейс до&nbsp;мелочей.
          Такой подход
          помогает создавать решения, которые работают эффективно и&nbsp;остаются актуальными с&nbsp;течением времени.
        </p>
      </div>
      <div class="element Five">
        <div class="titleImg">
          <img class="starImg" src="../../img/star_15321456.png" alt="starPoint">
          <div class="title Pink">Как я учусь и расту</div>
        </div>
        <p class="textAbout">
          Мой главный инструмент — практика. Анализирую чужие сайты, изучаю, как они устроены, и&nbsp;стараюсь
          перенимать лучшие решения. Также черпаю идеи и&nbsp;полезные советы из&nbsp;профильных Telegram-каналов, где
          делятся актуальными трендами и&nbsp;фишками. Дополняю это обучающими роликами на&nbsp;YouTube, прохожу курсы,
          читаю
          статьи и&nbsp;постоянно пробую новые подходы. Каждый новый проект — это шаг к&nbsp;тому, чтобы стать лучше
          и&nbsp;увереннее в&nbsp;своём деле.
        </p>
      </div>



    </div>
    <div class="buttonsStart">
      <RouterLink :to="{ name: 'casePage' }"><button class="buttonTurquoise">Посмотреть работы</button></RouterLink>
      <RouterLink :to="{ name: 'contactsPage' }"><button class="buttonPink">Связаться</button></RouterLink>
    </div>
  </div>
</template>

<style scoped>
p {
  line-height: 1.4rem;
}



.elements {
  display: grid;
  grid-template-columns: repeat(2, 25rem);
  row-gap: 2rem;
  column-gap: 15rem;
  justify-content: center;
}

.element {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  text-align: justify;
}

.element:nth-child(3) {
  grid-column: 1 / span 2;
  justify-self: center;
  width: 25rem;
}

.titleImg {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.starImg {
  width: 3rem;
}

.Three .title {
  background: var(--colorGradientTP);
  background-clip: text;
  -webkit-text-fill-color: transparent;

}

.title {
  font-size: 1.3rem;
}

.textAbout {
  font-size: 0.9rem;
  text-indent: 2rem;
}

.buttonsStart {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
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

  .element:nth-child(3) {
    width: 25rem;
  }

  .buttonsStart {
    gap: 1rem;
  }

}
</style>
