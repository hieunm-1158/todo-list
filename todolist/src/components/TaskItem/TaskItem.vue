<template>
  <tr>
    <td>{{ task.id }}</td>
    <td>{{ task.content }}</td>
    <td class="text-center">
      <span class="label" :class="task.status | textLabel()">{{
        $tc("status", labelText)
      }}</span>
      <!-- <span>{{ $tc("car", 30) }}</span> -->
      <!-- <span>{{ $tc("car", 1) }}</span>
      <span>{{ $tc("car", 2) }}</span> -->
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
      if (this.task.status === "noactive") {
        return 0;
      } else if (this.task.status === "active") {
        return 1;
      } else {
        return 2;
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
  filters: {
    textLabel(value) {
      if (value === "active") {
        return "success";
      } else if (value === "noactive") {
        return "pending";
      } else {
        return "disable";
      }
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
