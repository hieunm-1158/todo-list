<template>
  <tr>
    <td>{{ task.id }}</td>
    <td>{{ task.content }}</td>
    <td class="text-center">
      <span class="label" :class="labelText">{{ labelText }}</span>
    </td>
    <td class="text-center">
      <button
        @click="handleSetEditTaskItem"
        type="button"
        class="btn btn-warning"
      >
        <span class="fa fa-pencil mr-5" />Sửa
      </button>
      &nbsp;
      <button type="button" @click="deleteTask(task.id)" class="btn btn-danger">
        <span class="fa fa-trash mr-5" />Xóa
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    task: Object,
  },
  computed: {
    labelText() {
      if (this.task.status === "active") {
        return "success";
      } else if (this.task.status === "noactive") {
        return "pending";
      } else {
        return "disable";
      }
    },
  },
  methods: {
    ...mapActions("tasks", ["deleteTask", "setEditTaskItem"]),
    handleSetEditTaskItem() {
      this.$emit("onOpenForm");
      this.setEditTaskItem(this.task);
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  padding: 5px 20px;
  border-radius: 25px;
  &.success {
    background-color: greenyellow;
  }
  &.pending {
    background-color: aqua;
  }
  &.disable {
    background-color: orange;
  }
}
</style>
