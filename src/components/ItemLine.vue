<template>
  <div class="item row mb-2">
    <strong class="mt-3 mb-2">{{ item.item_name }}</strong>
    <div class="text-justify">
      <div class="previewCover">
        <a
          v-if="item.item_type_idtype == 1 && item.isbn != ''"
          :href="'https://www.obalkyknih.cz/view?isbn=' + item.isbn"
          target="_blank"
        >
          <img
            v-if="item.isbn != '' && item.imgUrl == null"
            :src="'https://www.obalkyknih.cz/api/cover?isbn=' + item.isbn"
            alt="obákla knihy"
            class="cover"
          />
          <!-- TODO
            obalky knih musí být ve formátu
            https://cache.obalkyknih.cz/file/cover/901302/medium
            adresy smerujici na web nefungují při případném výpadku!!!
            https://www.obalkyknih.cz/file/cover/2076601/medium
          /-->
          <img
            v-if="item.imgUrl != null"
            :src="item.imgUrl"
            alt="obákla knihy"
            class="cover"
          />
        </a>
        <a
          v-if="item.item_type_idtype == 2 && item.imgUrl != null"
          :href="item.url"
          target="_blank"
        >
          <img
            :src="'/img/tools/' + item.imgUrl"
            :alt="'ilustrační foto - ' + item.name"
            class="preview"
          />
        </a>
        <div v-if="item.item_type_idtype == 1" class="m-3">
          <button
            @click="addToBasked(item)"
            type="button"
            class="btn btn-success"
          >
            přidat do košíku
          </button>
          <div class="">
            {{ item.price }}{{ "\xa0" }}Kč
            <small>{{ "\xa0" }}bez{{ "\xa0" }}DPH</small>
          </div>
        </div>
      </div>
      <span v-if="item.item_type_idtype == 1 && item.description != null"
        >{{ item.description }}
      </span>
      <span v-if="item.item_type_idtype == 2 && item.description == null">
        <a :href="item.url" target="_blank"
          >Více informací na stránce prodejce</a
        >
      </span>
      <div v-if="item.item_type_idtype == 2" class="m-3">
        <button
          @click="addToBasked(item)"
          type="button"
          class="btn btn-success"
        >
          přidat do košíku
        </button>
        <div class="">
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
