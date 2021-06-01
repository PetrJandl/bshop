<template>
  <div class="basked">
    <h1>Nákupní košík</h1>
    <div class="items">
      <div
        class="baskedItem row pb-1"
        v-for="item in this.$parent.basked"
        :key="item.id"
        v-show="item.pieceInBasket > 0"
      >
        <div class="col-md-12">
          <strong class="mt-4 mb-2">{{ item.name }} </strong>
        </div>
        <div class="row justify-content-end">
          <div class="col-12 col-sm-3 col-md-2 text-right">
            {{ item.price }},- Kč
          </div>
          <button
            @click="addOneToBasked(item)"
            type="button"
            class="btn btn-sm btn-success col-1 col-sm-1"
          >
            +
          </button>
          <input
            type="number"
            v-model.number="item.pieceInBasket"
            min="0"
            @change="updateBasked(item)"
            class="btn btn-default col-3 col-sm-2 col-md-1"
          />
          <button
            @click="removeOneFromBasked(item)"
            type="button"
            class="btn btn-sm btn-danger col-1 col-sm-1"
          >
            -
          </button>
          <div class="col-6 col-sm-3 col-md-2 text-right">
            {{ item.pieceInBasket * item.price }},- Kč
          </div>
        </div>
      </div>
      <div class="sumary mt-5 border-top border-dark">
        Celkem v košíku zboží za
        <strong class="price">{{ this.$parent.sumPrice }},- Kč</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeFromBasked: function ($item) {
      this.$emit("remove-from-basked", $item);
    },
    updateBasked: function ($item) {
      this.$emit("update-basked", $item);
    },
    addOneToBasked: function ($item) {
      $item.pieceInBasket = $item.pieceInBasket + 1;
      this.$emit("update-basked", $item);
    },
    removeOneFromBasked: function ($item) {
      $item.pieceInBasket = $item.pieceInBasket - 1;
      this.$emit("update-basked", $item);
    },
  },
};
</script>
