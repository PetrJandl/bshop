<template>
  <div class="books">
    <h1>Knihy</h1>

    <div class="items" >
      <div class="book" v-for="book in this.$parent.books" :key="book.id">
          <a :href="'https://www.obalkyknih.cz/view?isbn='+book.isbn">
            <img :src="'https://www.obalkyknih.cz/api/cover?isbn='+book.isbn" alt="obákla knihy" class="obalka" />
          </a>
        <div class="numAdd">
          <div>{{book.price}},- Kč</div>
          <button @click="addToBasked(book)">přidat do košíku</button>
        </div>
          {{book.name}} 
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods:{
    addToBasked: function($book) {
      this.$emit('add-to-basked', $book)
      //this.updateBooks()
    },
    
  },
}
</script>

