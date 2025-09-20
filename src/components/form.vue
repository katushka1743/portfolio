<script setup>
import { reactive, ref } from 'vue';
import { watch } from 'vue';


const local = reactive({
  name: '',
  nameError: false,
  nameErrorText: '',
  phoneNum: '',
  phoneNumError: false,
  phoneNumErrorText: '',
  email: '',
  emailError: false,
  emailErrorText: '',
  idea: '',
  okForm: false,
})

const usersLocalStorage = ref([]);



function checkForm() {
  if (local.name === '') {
    local.nameError = true;
    local.okForm = false;

    local.nameErrorText = 'Вы не заполнили поле';
  } else if (!(/^[A-ZА-ЯЁ][a-zа-яё]+ [A-ZА-ЯЁ][a-zа-яё]+$/).test(local.name.trim())) {
    local.nameError = true;
    local.okForm = false;

    local.nameErrorText = 'Поле заполнено неверно';
  } else {
    local.nameError = false;
  }

  if (local.phoneNum === '') {
    local.phoneNumError = true;
    local.okForm = false;

    local.phoneNumErrorText = 'Вы не заполнили поле';
  } else if (local.phoneNum.length != 12) {
    local.phoneNumError = true;
    local.okForm = false;

    local.phoneNumErrorText = 'В номере телефона +7 и ещё 10 цифр'
  } else if (!(/^(\+7\d{10})$/).test(local.phoneNum)) {
    local.phoneNumError = true;
    local.phoneNumErrorText = 'Поле заполнено неверно';
  } else {
    local.phoneNumError = false;
  }

  if (local.email === '') {
    local.emailError = true;
    local.okForm = false;

    local.emailErrorText = 'Вы не заполнили поле';
  } else if (!(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/).test(local.email)) {
    local.emailError = true;
    local.okForm = false;

    local.emailErrorText = 'Поле заполнено неверно';
  } else {
    local.emailError = false;
  }

  if (!local.nameError && !local.phoneNumError && !local.emailError) {

    usersLocalStorage.value.push({
      name: local.name,
      phone: local.phoneNum,
      email: local.email,
      idea: local.idea,
    });

    local.okForm = true;

    // Очистка полей после сохранения
    local.name = '';
    local.phoneNum = '';
    local.email = '';
    local.idea = '';
  }
}

try {
  usersLocalStorage.value = JSON.parse(localStorage.getItem('user')) || [];
} catch (e) {
  usersLocalStorage.value = [];
}

// 2. Сохраняем в localStorage при изменении массива
watch(usersLocalStorage, (newValue) => {
  localStorage.setItem('user', JSON.stringify(newValue));
}, { deep: true });


// localStorage.clear()
</script>

<template>

  <div class="section contacts">
    <h2 class="Pink">Связаться со мной</h2>
    <div class="inputs">
      <div class="inputPoint">
        <label for="name" class="Pink">Фамилия Имя(обязательное поле)</label>
        <input type="text" id="name" placeholder="Иванов Иван" v-model="local.name"
          title="С заглавных букв, через пробел">
        <div class="error" v-if="local.nameError">Ошибка: {{ local.nameErrorText }}</div>
      </div>
      <div class="inputPoint">
        <label for="phone" class="Pink">Номер телефона(обязательное поле)</label>
        <input type="tel" id="phone" placeholder="+78888888888" minlength="12" maxlength="12" v-model="local.phoneNum"
          title="+7 и ещё 10 цифр">
        <div class="error" v-if="local.phoneNumError">Ошибка: {{ local.phoneNumErrorText }}</div>
      </div>
      <div class="inputPoint">
        <label for="email" class="Pink">Электронная почта(обязательное поле)</label>
        <input type="email" id="email" placeholder="ivanivanov@mail.ru" v-model="local.email"
          title="имя пользователя, '@', доменное имя, '.', доменная зона от 2 букв">
        <div class="error" v-if="local.emailError">Ошибка: {{ local.emailErrorText }}</div>
      </div>
      <div class="inputPoint">
        <label for="text" class="Pink">Комментарии</label>
        <textarea id="text" class="inputPointComm" placeholder="Комментарий, идея, задумка, описание"
          v-model="local.idea"></textarea>
      </div>
    </div>
    <br>
    <div v-if="local.okForm" class="Pink">Форма отправлена</div>
    <p class="info Pink">Отправляя свои данные через форму, вы соглашаетесь с&nbsp;их обработкой исключительно для&nbsp;связи со&nbsp;мной. Я&nbsp;не&nbsp;передаю информацию третьим лицам и&nbsp;не&nbsp;использую её&nbsp;в&nbsp;рекламных целях.</p>
    <button class="buttonPink" @click="checkForm()">Отправить форму</button>


  </div>
</template>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.inputPoint {
  display: flex;
  flex-direction: column;
}

.error {
  color: red;
  font-size: 0.8rem;
}

.info {
  font-size: 0.7rem;
  text-align: center;
  width: 30rem;
  padding-top: 1rem;
}
</style>