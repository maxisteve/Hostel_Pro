<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <student-details-add :model="model"> </student-details-add>
      </div>
      <!-- <div class="col-md-4">
        <user-card :user="user"></user-card>
      </div> -->
    </div>
  </div>
</template>
<script>
import StudentDetailsAdd from "./StudentDetails/StudentDetailsAdd.vue";
// import UserCard from "./Profile/UserCard.vue";

export default {
  components: {
    StudentDetailsAdd,
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
