<!-- eslint-disable vue/no-use-v-if-with-v-for -->

<template>
  <table class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
      <tr>
        <slot name="columns">
          <th v-for="column in columns" :key="column">{{ column }}</th>
        </slot>
      </tr>
    </thead>

    <tbody :class="tbodyClasses">
      <tr v-for="(item, index) in data" :key="index">
        <slot :row="item">
          <td
            v-for="(column, index_1) in columns"
            :key="index_1"
            v-if="hasValue(item, column)"
          >
            {{ itemValue(item, column) }}
          </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "base-table",
  props: {
    tableClass: {
      type: String,
      default: "",
    },
    theadClasses: {
      type: String,
      default: "",
    },
    tbodyClasses: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    hasValue(item, column) {
      console.log(item[column]);
      return item[column] !== "undefined";
    },
    itemValue(item, column) {
      return item[column];
    },
  },
};
</script>

<style></style>
