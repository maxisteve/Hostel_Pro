<template>
  <card>
    <template slot="header">

      <base-button style="float: right;" @click="Dashboard"  type="success" fill>Dashboard</base-button>
      <h5 class="title">Enquiry</h5>
    </template>
    <div class="row">
      <div class="col-md-5 pr-md-1 text-left">
        <base-input label="Name" placeholder="Name" v-model="model.company">
        </base-input>
      </div>
      <div class="col-md-3 px-md-1 text-left">
        <base-input label="Phone" placeholder="Phone" v-model="model.username">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1 text-left">
        <base-input label="Email address" type="email" placeholder="@email">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="Occuption" v-model="model.firstName" placeholder="Occuption">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="Company / institution" v-model="model.lastName" placeholder="Company / institution">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-left">
        <base-input label="Address" v-model="model.address" placeholder="Home Address">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input label="City" v-model="model.city" placeholder="City">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1 text-left">
        <base-input label="Country" v-model="model.country" placeholder="Country">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1 text-left">
        <base-input label="Postal Code" placeholder="ZIP Code"> </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 text-left">
        <base-input>
          <label>About Me</label>
          <textarea rows="4" cols="80" class="form-control" placeholder="Here can be your description" v-model="model.about">
          </textarea>
        </base-input>
      </div>
    </div>
    <template slot="footer">
      <base-button type="success" fill>Save</base-button>
    </template>
  </card>
</template>
<script>
import { Card, BaseInput } from "@/components/index";

import BaseButton from "@/components/BaseButton";

export default {
  components: {
    Card,
    BaseInput,
    BaseButton,
  },
  methods:{
    Dashboard(){
      alert("Dashboard");
    }
  },  
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style></style>
