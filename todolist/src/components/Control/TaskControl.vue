<template>
  <div class="row mt-15">
    <task-search></task-search>
    <task-sort></task-sort>
  </div>
</template>

<script>
import TaskSearch from "../Search/TaskSearch.vue";
import TaskSort from "../Sort/TaskSort.vue";

export default {
  components: { TaskSearch, TaskSort },
};
</script>

<style lang="scss" scoped></style>
