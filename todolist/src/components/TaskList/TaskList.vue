<template>
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th class="text-center">STT</th>
        <th class="text-center">Tên</th>
        <th class="text-center">Trạng Thái</th>
        <th class="text-center">Hành Động</th>
      </tr>
    </thead>
    <tbody>
      <task-item
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @onOpenForm="handleOpenForm"
      ></task-item>
    </tbody>
  </table>
</template>

<script>
import TaskItem from "../TaskItem/TaskItem.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { TaskItem },
  props: {
    onOpenForm: Function,
  },
  methods: {
    ...mapActions("tasks", ["getTaskAll"]),
    handleOpenForm() {
      this.$emit("onOpenForm");
    },
  },
  created() {
    this.getTaskAll();
  },
  computed: {
    ...mapState({
      tasks: (state) => state.tasks.tasks,
    }),
  },
  watch: {
    tasks: {
      handler(newTasks) {
        return newTasks;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
