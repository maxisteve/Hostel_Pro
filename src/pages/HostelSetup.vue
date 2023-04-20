<template>
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <hostel-setup-edit :model="model"> </hostel-setup-edit>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HostelSetupEdit from "./HostelSetup/HostelSetupEdit.vue";
  // import UserCard from "./Profile/UserCard.vue";
  
  export default {
    components: {
        HostelSetupEdit,
      // UserCard,
    },
    data() {
      return {
        model: {
          company: "",
          email: "",
          username: "",
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          country: "",
          about:"",
        },
        user: {
          fullName: "",
          title: "",
          description: ``,
        },
      };
    },
  };
  </script>
  <style></style>