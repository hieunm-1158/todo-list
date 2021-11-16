<template>
  <div id="app">
    <div class="container">
      <div class="text-center">
        <p>{{ $d(new Date(), "short", "en-US") }}</p>
        <p>{{ $d(new Date(), "long", "ja-JP") }}</p>
        <div>
          <button
            v-for="entry in languages"
            class="btn-flag"
            :key="entry.title"
            @click="changeLocale(entry.language)"
          >
            <flag :iso="entry.flag" v-bind:squared="false" />
            {{ entry.title }}
          </button>
        </div>
        <h1>{{ $t("appTitle") }}</h1>
        <hr />
      </div>
      <div class="row">
        <div v-show="isDisplayForm" class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <task-form @onToggleForm="handleToggleForm"></task-form>
        </div>
        <div
          :class="
            isDisplayForm
              ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8'
              : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'
          "
        >
          <button
            @click="handleToggleForm"
            type="button"
            class="btn btn-primary"
          >
            <span class="fa fa-plus mr-5" />{{ $t("addJobTitle") }}
          </button>
          <task-control></task-control>
          <div class="row mt-15">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <task-list @onOpenForm="handleOpenForm"></task-list>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center p-5">
        <ValidationObserver ref="form" tag="form" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submit)">
            <ValidationProvider
              name="email"
              rules="required|email"
              v-slot="{ errors }"
              class="d-block text-center"
            >
              <input
                type="text"
                v-model="email"
                placeholder="type some email"
              />
              <span class="d-block">{{ errors[0] }}</span>
            </ValidationProvider>

            <ValidationProvider
              class="d-block text-center"
              name="password"
              rules="required|min:6"
              v-slot="{ errors }"
            >
              <input
                type="password"
                v-model="password"
                placeholder="type something"
                class="mt-5"
              />
              <span class="d-block">{{ errors[0] }}</span>
            </ValidationProvider>
            <button type="submit">OK</button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import TaskControl from "./components/Control/TaskControl.vue";
import TaskForm from "./components/TaskForm/TaskForm.vue";
import TaskList from "./components/TaskList/TaskList.vue";
import i18n from "./i18n/i18n";
import moment from "moment";
import { ValidationProvider, ValidationObserver } from "vee-validate";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    TaskForm,
    TaskControl,
    TaskList,
    ValidationProvider,
    ValidationObserver,
    // HelloWorld,
  },
  data() {
    return {
      isDisplayForm: false,
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "vn", language: "vi", title: "Tiếng Việt" },
      ],
      time: Date.now(),
      date: "2019-10-01 00:00:00",
      email: "",
      password: "",
    };
  },
  methods: {
    handleToggleForm() {
      this.isDisplayForm = !this.isDisplayForm;
    },
    handleOpenForm() {
      this.isDisplayForm = true;
    },
    changeLocale(locale) {
      i18n.locale = locale;
      this.$refs.form.validate();
    },
    submit() {
      console.log(this.email, this.password);
    },
  },
  computed: {
    display() {
      return moment(this.time).format("HH:mm:ss");
    },
  },
  created() {
    setInterval(() => {
      this.time = Date.now();
    }, 1000);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-flag {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}
#clock {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: red;
  text-shadow: 0px 0px 25px red;

  .time {
    font-size: 6.5em;
  }

  .text {
    font-size: 1em;
    margin-top: 10px;
    text-transform: uppercase;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
