<template>
  <div class="tools">
    <h1>Pomůcky</h1>
    <div class="items">
      <ItemLine
        v-for="tool in this.$parent.tools"
        :key="tool.iditem"
        :item="tool"
        @add-item-to-basked="addToolToBasked($event)"
      ></ItemLine>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToolToBasked: function ($tool) {
      this.$emit("add-to-basked", $tool);
    },
  },
};
</script>
