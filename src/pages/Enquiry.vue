<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <enquiry-add :model="model"> </enquiry-add>
      </div>
      <!-- <div class="col-md-4">
        <user-card :user="user"></user-card>
      </div> -->
    </div>
  </div>
</template>
<script>
import EnquiryAdd from "./Enquiry/EnquiryAdd.vue";
// import UserCard from "./Profile/UserCard.vue";

export default {
  components: {
    EnquiryAdd,
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
