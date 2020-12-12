<template>
  check
  <Dialog header="Header" v-model:visible="display">
    Content
  </Dialog>
  <SplitButton
    label="Show"
    icon="pi pi-plus"
    :model="items"
    class="p-button-danger p-mb-2"
    @click="display = true"
  ></SplitButton>
  <Toast />
</template>

<script>
import Dialog from "primevue/dialog";
import SplitButton from "primevue/splitbutton";
import Toast from "primevue/toast";
export default {
  components: { Dialog, SplitButton, Toast },
  data() {
    return {
      display: false,
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000
            });
          }
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            this.$toast.add({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000
            });
          }
        },
        {
          label: "Vue Website",
          icon: "pi pi-external-link",
          command: () => {
            window.location.href = "https://vuejs.org/";
          }
        },
        {
          label: "Upload",
          icon: "pi pi-upload",
          to: "/fileupload"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
