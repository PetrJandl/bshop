<template>
  <div class="books">
    <h1>Knihy</h1>
    <div class="items">
      <ItemLine
        v-for="book in this.$parent.books"
        :key="book.iditem"
        :item="book"
        @add-item-to-basked="addBookToBasked($event)"
      ></ItemLine>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addBookToBasked: function ($book) {
      this.$emit("add-to-basked", $book);
    },
  },
};
</script>
