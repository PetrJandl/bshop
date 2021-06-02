<template>
  <div class="item row mb-2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
    <strong class="mt-3 mb-2">{{ item.name }}</strong>
    <div class="text-justify col-12 col-sm-12 col-md-9 col-lg-10 col-xl-10">
      <div class="obalObalky" v-if="item.isbn != ''">
        <a
          :href="'https://www.obalkyknih.cz/view?isbn=' + item.isbn"
          target="_blank"
        >
          <img
            :src="'https://www.obalkyknih.cz/api/cover?isbn=' + item.isbn"
            alt="obákla knihy"
            class="obalka"
          />
        </a>
      </div>
      <div v-if="item.isbn == '' && item.imgUrl != ''">
        <a :href="item.url" target="_blank">
          <img
            :src="item.imgUrl"
            :alt="'ilustrační foto - ' + item.name"
            class="nahledPomucky"
          />
        </a>
      </div>
      <span v-if="item.isbn != ''">
        Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský
        text užívaný v grafickém designu a navrhování jako demonstrativní
        výplňový text při vytváření pracovních ukázek grafických návrhů (např.
        internetových stránek, rozvržení časopisů či všech druhů reklamních
        materiálů). Lipsum tak pracovně znázorňuje text v ukázkových maketách
        (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný
        obsah.
      </span>
      <span v-if="item.isbn == ''">
        <a :href="item.url" target="_blank"
          >Více informací na stránce prodejce</a
        >
      </span>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 d-block">
      <div class="numAdd m-3 mt-1">
        <button
          @click="addToBasked(item)"
          type="button"
          class="btn btn-success"
        >
          přidat do košíku
        </button>
        <div class="price">
          {{ item.price }}{{ "\xa0" }}Kč
          <small>{{ "\xa0" }}bez{{ "\xa0" }}DPH</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    addToBasked: function (item) {
      this.$emit("add-item-to-basked", item);
    },
  },
};
</script>
