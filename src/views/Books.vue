<template>
  <div class="books">
    <h1>Knihy</h1>

    <div class="items">
      <div class="book row mb-2" v-for="book in this.$parent.books" :key="book.id">
        <strong class="mt-3 mb-2">{{ book.name }}</strong>
        <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
        <div>
        <a class=""
          :href="'https://www.obalkyknih.cz/view?isbn=' + book.isbn"
          target="_blank"
        >
          <img
            :src="'https://www.obalkyknih.cz/api/cover?isbn=' + book.isbn"
            alt="obákla knihy"
            class="obalka"
          />
        </a>
        </div>

        <div class="d-none d-sm-block d-md-block d-lg-none">
          <div class="numAdd m-4 mt-0">
            <button
             @click="addToBasked(book)"
              type="button"
             class="btn btn-success"
            >
              přidat do košíku
            </button>
            <div class="price">{{ book.price }},- Kč</div>
          </div>
        </div>

          Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný obsah.
         
        </div>
        <div class="col-lg-2 col-xl-2 d-block d-sm-none d-lg-block">
          <div class="numAdd m-3 mt-1">
            <button
             @click="addToBasked(book)"
              type="button"
             class="btn btn-success"
            >
              přidat do košíku
            </button>
            <div class="price">{{ book.price }},- Kč</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToBasked: function ($book) {
      this.$emit("add-to-basked", $book);
      //this.updateBooks()
    },
  },
};
</script>
