<template>
  <card>
    <template slot="header">
      <base-button style="float: right;" @click="BacktoDashboard"  type="success" fill>Back To Dashboard</base-button>
      <h5 class="title">Attendance Register</h5>
    </template>
    <div class="row">
    <div class="col-md-6 pr-md-1 text-left">
        <base-input label="Mobile Number" placeholder="Mobile Number" v-model="model.RoomNumber">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-button style="margin-top: 24px;" type="success" fill>Get Student Detail</base-button>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="Student Name" readonly placeholder="Student Name">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <div class="row" style="margin-top: 24px;">
          <!-- <input
                        type="radio"
                        @click="initBigChart(index)"
                        name="options"
                        autocomplete="off"
                        :checked="bigLineChart.activeIndex === index"
                      /> -->
          <div class="col-md-2 pr-md-1 text-left"> <base-radio name="options" id="InOut"><label>IN</label> </base-radio> </div>
          <div class="col-md-6 pl-md-1 text-left"> <base-radio name="options" id="InOut" > <label>Out</label> </base-radio> </div>
        
        </div>
        
      </div>
    </div>

   

   
    <div class="row">
      <div class="col-md-8 text-left">
        <base-input>
          <label>Remarks</label>
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
    BacktoDashboard(){
      this.$router.push({
                  name: 'Bill Details'
              })
    },
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
