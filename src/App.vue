<template>
  <div id="app" class="container">
    <div class="row justify-content-md-center">
      <div id="nav" class="fixed-top bg-light">
        <router-link to="/">S knížkou do života</router-link>
        <router-link to="/knihy">Knihy</router-link>
        <router-link to="/pomucky">Pomůcky</router-link>
        <router-link to="/nakupniKosik"
          >Nákupní košík
          <span v-show="sumPrice != 0">{{ sumPrice }}</span>
        </router-link>
      </div>
      <router-view
        @add-to-basked="addToBasked($event)"
        @remove-from-basked="removeFromBasket($event)"
        @update-basked="updateBasked($event)"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

var localBasked;
localBasked = JSON.parse(localStorage.getItem("basked"));
if (!localBasked) {
  localBasked = [];
  //console.log("lb clean");
}

export default {
  data() {
    return {
      books: [],
      tools: [],
      basked: localBasked,
      backdoor: 0,
    };
  },
  computed: {
    sumPrice: {
      get: function () {
        this.backdoor;
        var sum = 0;
        this.basked.forEach((item) => {
          sum = sum + item.price * item.pieceInBasket;
        });
        //console.log("sumPrice:"+sum)
        return sum;
      },
      set: function (updateItem) {
        this.basked.forEach((item) => {
          if (item.id == updateItem.id) {
            //item.pieceInBasket = item.pieceInBasket + updateItem.piece
            //console.log("setSumPrice:"+ item.pieceInBasket)
            this.backdoor++;
          }
        });
      },
    },
  },
  watch: {
    value() {
      this.backdoor++;
    },
  },
  methods: {
    getData() {
      axios
        .get("/data.json")
        .then((response) => {
          response.data.items.forEach((item) => {
            item.piece = 1;
            if (item.type === "book") {
              this.books.push(item);
            }
            if (item.type === "tool") {
              this.tools.push(item);
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      //console.log(this.books)
    },
    addToBasked: function ($newItem) {
      var maxPriceSum = 9500;
      if (this.sumPrice + $newItem.price * $newItem.piece < maxPriceSum) {
        var update = 0;
        this.basked.forEach((item) => {
          if (item.id == $newItem.id) {
            update = 1;
            //console.log(" id exist ")
          }
        });
        if (update == 0) {
          $newItem.pieceInBasket = $newItem.piece;
          this.basked.push($newItem);
        } else {
          this.basked.forEach((item) => {
            if (item.id == $newItem.id) {
              item.pieceInBasket = item.pieceInBasket + $newItem.piece;
              this.sumPrice = item;
            }
          });
        }
        localStorage.setItem("basked", JSON.stringify(this.basked));
      } else {
        alert("Celková částka objednávky nesmí překročit " + maxPriceSum);
      }
    },
    removeFromBasket: function ($removeItem) {
      //console.log($removeItem)
      this.basked.splice(this.basked.indexOf($removeItem), 1);
      localStorage.setItem("basked", JSON.stringify(this.basked));
      this.backdoor--;
    },
    updateBasked: function ($updateItem) {
      this.backdoor++;
      var maxPriceSum = 9500;
      var sum = 0;
      this.basked.forEach((item) => {
        if (item.id != $updateItem.id) {
          sum = sum + item.price * item.pieceInBasket;
        }
      });
      //console.log("x: "+(sum + ($updateItem.price*$updateItem.pieceInBasket)));

      if (sum + $updateItem.price * $updateItem.pieceInBasket < maxPriceSum) {
        //console.log("OK - save local storage");
        localStorage.setItem("basked", JSON.stringify(this.basked));
      } else {
        this.basked[this.basked.indexOf($updateItem)].pieceInBasket =
          this.basked[this.basked.indexOf($updateItem)].pieceInBasket - 1;
        alert("Celková částka objednávky nesmí překročit " + maxPriceSum);
        this.backdoor++;
      }
    },
  },
  beforeMount() {
    this.getData();
    //console.log("App: "+this.books)
  },
  mounted() {
    this.backdoor++;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
.home,
.books,
.tools,
.basked{
  margin-top: 140pt !important;
}
#nav {
  text-align: center;
  min-width: 247px;
  padding: 0 !important;
  /*background-color: white !important;*/
}

#nav a {
  padding: 5pt;
  margin: 2pt;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  width: 160pt;
}

#nav a.router-link-exact-active {
  background-color: rgba(244, 151, 12, 0.5);
  color: rgb(0, 0, 0);
}
#nav a:hover {
  -webkit-box-shadow: 0px 0px 6px 1px rgba(244, 152, 12, 1);
  -moz-box-shadow: 0px 0px 6px 1px rgba(244, 152, 12, 1);
  box-shadow: 0px 0px 6px 1px rgba(244, 152, 12, 1);
}
.items {
  font-size: 130%;
}
.items div {
  /*text-align: left;
  display: block;
  border: 1px solid gray;*/
  /*min-height: 40pt;*/
}
.numAdd {
  float: right;
  font-size: 90%;
}
.items input {
  text-align: right;
}
.items button {
  /*text-align: center;*/
}

.home {
  width: 100%;
  max-width: 1044px;
  max-height: 435px;
  margin: 0 auto;
  text-align: center;
}
.home img {
  width: 100%;
}
#bslogo {
  max-width: 1044px;
}

.book,
.tool,
.baskedItem {
  border-top: gray 1pt solid;
  padding-top: 5pt;
}
.text-right {
  text-align: right;
}
.book,
.tool {
  /*min-height: 200pt;*/
  /*min-width: 600px;*/
}
.obalka,
.nahledPomucky {
  /*float: left;*/
  padding: 0 10pt 10pt 10pt;
}
.obalka {
  float: left;
}
.nahledPomucky {
  max-height: 200pt;
}
.sumary {
  text-align: right !important;
}
.price {
  text-align: right;
  font-weight: bold;
}

@media (min-width: 600px){
  #nav {
    padding: 20pt;
  }
  #nav a {
    padding: 9pt;
    margin: 5pt;
    width: 160pt;
  }
  .items div.book:hover,
  .items div.tool:hover,
  .items div.baskedItem:hover {
    background-color: rgba(244, 151, 12, 0.25);
  }
  .home,
  .books,
  .tools,
  .basked{
    margin-top: 70pt !important;
  }
}
@media (max-width: 930px) and (min-width: 600px){
  .home,
  .books,
  .tools,
  .basked{
    margin-top: 100pt !important;
  }
}

</style>
