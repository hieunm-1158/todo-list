<template>
  <div class="panel panel-warning border p-4">
    <div class="panel-heading">
      <h3 class="panel-title">
        {{ editTaskItem.id ? "Sửa công việc" : "Thêm công việc" }}
        <span
          @click="$emit('onToggleForm')"
          class="fa fa-times-circle text-right"
        />
      </h3>
    </div>
    <div class="panel-body">
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <form @submit.prevent="handleSubmit(onSubmitForm)">
          <ValidationProvider
            v-slot="{ errors }"
            class="form-group"
            tag="div"
            rules="required"
          >
            <label>{{ $t("nameTitle") }} :</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy="taskEdit.content"
              name="name"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="form-group" tag="div" v-slot="{ errors }">
            <label>{{ $t("statusTitle") }} :</label>
            <select
              class="form-control"
              v-model.lazy="taskEdit.status"
              name="jobStatus"
            >
              <option value="active">Success</option>
              <option value="noactive">Pending</option>
              <option value="disable">Disable</option>
            </select>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <br />
          <div class="text-center">
            <button
              v-if="editTaskItem.id"
              type="submit"
              class="btn btn-warning"
            >
              Sửa
            </button>
            <button v-else type="submit" class="btn btn-warning">Thêm</button
            >&nbsp;
            <button
              @click="$emit('onToggleForm')"
              type="button"
              class="btn btn-danger"
            >
              Hủy Bỏ
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "TaskForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      taskEdit: {
        id: "",
        content: "",
        status: "disable",
      },
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask", "updateTask", "setEditTaskItem"]),
    onSubmitForm() {
      if (!this.taskEdit.id) {
        const body = {
          content: this.taskEdit.content,
          status: this.taskEdit.status,
        };
        this.addTask(body);
        this.taskEdit.content = "";
        this.taskEdit.status = "disable";
        this.$nextTick(() => {
          console.log("reset form");
          this.$refs.form.reset();
        });
      } else {
        this.updateTask(this.taskEdit);
        this.setEditTaskItem({
          id: "",
          content: "",
          status: "disable",
        });
        this.taskEdit = {
          id: "",
          content: "",
          status: "disable",
        };
      }
      this.$emit("onToggleForm");
    },
  },
  computed: {
    ...mapState({ editTaskItem: (state) => state.tasks.editTaskItem }),
  },
  watch: {
    editTaskItem: {
      handler() {
        this.taskEdit = { ...this.editTaskItem };
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
