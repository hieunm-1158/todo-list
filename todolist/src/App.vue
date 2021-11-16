<template>
  <div id="app">
    <div class="container">
      <div class="text-center">
        <h1>Quản Lý Công Việc</h1>
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
            <span class="fa fa-plus mr-5" />Thêm Công Việc
          </button>
          <task-control></task-control>
          <div class="row mt-15">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <task-list @onOpenForm="handleOpenForm"></task-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskControl from "./components/Control/TaskControl.vue";
import TaskForm from "./components/TaskForm/TaskForm.vue";
import TaskList from "./components/TaskList/TaskList.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    TaskForm,
    TaskControl,
    TaskList,
    // HelloWorld,
  },
  data() {
    return {
      isDisplayForm: false,
    };
  },
  methods: {
    handleToggleForm() {
      this.isDisplayForm = !this.isDisplayForm;
    },
    handleOpenForm() {
      this.isDisplayForm = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
