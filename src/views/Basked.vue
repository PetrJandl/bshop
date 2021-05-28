<template>
  <div class="Basked">
    <h1>Nákupní košík</h1>
    <div class="items" >
      <div class="baskedItem" v-for="item in this.$parent.basked" :key="item.id" v-show="item.pieceInBasket>0">
        <div class="numAdd">
            <button class="green" @click="addOneToBasked(item)">+</button>
          <input type="number" v-model.number="item.pieceInBasket" min=0 @change="updateBasked(item)">
            <button class="red" @click="removeOneFromBasked(item)">-</button>
          </div>
          <div class="numAdd">
           <div class="price">{{item.price}},- Kč</div>
          </div>
        {{item.name}} 
      </div>
     <div class="sumary">Celkem v košíku zboží za <strong class="price">{{this.$parent.sumPrice}},- Kč</strong></div>
    </div>
  </div>
</template>


<script>
export default {
  methods:{
    removeFromBasked: function($item) {
      this.$emit('remove-from-basked', $item)
    },
    updateBasked: function($item) {
      this.$emit('update-basked', $item)
    },
    addOneToBasked: function($item) {
      $item.pieceInBasket=$item.pieceInBasket+1
      this.$emit('update-basked', $item)
    },
    removeOneFromBasked: function($item) {
      $item.pieceInBasket=$item.pieceInBasket-1
      this.$emit('update-basked', $item)
    },
  }
}


</script>
