<template>
  <div class="tools">
    <h1>Pomůcky</h1>
    <div class="items">
      <div class="tool" v-for="tool in this.$parent.tools" :key="tool.id">
        <a :href="tool.url" target="_blank">
          <img
            :src="tool.imgUrl"
            :alt="'ilustrační foto - ' + tool.name"
            class="nahledPomucky"
          />
        </a>
        <div class="numAdd">
          <div>{{ tool.price }},- Kč</div>
          <button
            @click="addToBasked(tool)"
            type="button"
            class="btn btn-success btn-sm"
          >
            přidat do košíku
          </button>
        </div>
        {{ tool.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToBasked: function ($tool) {
      this.$emit("add-to-basked", $tool);
    },
  },
};
</script>
