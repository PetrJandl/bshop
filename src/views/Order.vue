<template>
  <div class="basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
    <h1>Objednávka</h1>

    <form
      id="registration"
      action="/bookstart/registrace/rekapitulace3"
      method="post"
      data-toggle="validator"
    >
      <div class="box-body">
        <div class="row">
          <label for="ic" class="col-md-3">IČ</label>
          <div class="col-md-3">
            <input
              type="text"
              class="form-control valid"
              id="ic"
              name="ic"
              maxlength="8"
              placeholder="IČ"
              value=""
              required=""
              list="firmy"
            />
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-2"></div>
        </div>

        <div class="row">
          <label for="dic" class="col-md-3 col-form-label">DIČ</label>
          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              id="dic"
              name="dic"
              maxlength="14"
              placeholder="DIČ"
              value=""
            />
          </div>
        </div>

        <div class="row">
          <label for="oName" class="col-md-3">Obchodní název</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="oName"
              name="oName"
              maxlength="200"
              placeholder="Obchodní název"
              value=""
              required=""
            />
          </div>
        </div>

        <div class="row">
          <label for="libStreet" class="col-md-3">Ulice a číslo</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="libStreet"
              name="libStreet"
              maxlength="200"
              placeholder="Ulice a číslo"
              value=""
              required=""
            />
          </div>
        </div>
        <div class="row line">
          <label for="libCity" class="col-md-3">Město, PSČ</label>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="libCity"
              name="libCity"
              maxlength="200"
              placeholder="Celý oficiální název města"
              value=""
              required=""
            />
          </div>
          <div class="col-md-3">
            <input
              type="number"
              class="form-control"
              id="libPSC"
              name="libPSC"
              placeholder="PSČ"
              value=""
              required=""
            />
          </div>
        </div>
        <div id="adresbox" class="row line">
          <label for="deliveryAddress" class="col-md-3">Adresa doručení</label>
          <div class="col-md-1">
            <input
              type="checkbox"
              class="custom-control-label"
              name="deliveryAddress"
              id="deliveryAddress"
              value="1"
            />
          </div>
          <div class="col-md-8">
            (Pokud mají být sety doručeny na jinou adresu)
          </div>
        </div>
        <div class="row deliadr" style="display: none">
          <label for="deliveryName" class="col-md-3">Místo doručení</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="deliveryName"
              name="deliveryName"
              maxlength="200"
              placeholder="Název místa doručení"
              value=""
            />
          </div>
        </div>

        <div class="row deliadr" style="display: none">
          <label for="deliveryStreet" class="col-md-3">Ulice doručení</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="deliveryStreet"
              name="deliveryStreet"
              maxlength="200"
              placeholder="Ulice doručení"
              value=""
            />
          </div>
        </div>
        <div class="row line deliadr" style="display: none">
          <label for="deliveryCity" class="col-md-3">Město doručení, PSČ</label>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="deliveryCity"
              name="deliveryCity"
              maxlength="200"
              placeholder="Město doručení"
              value=""
            />
          </div>
          <div class="col-md-3">
            <input
              type="number"
              class="form-control"
              id="deliveryPSC"
              name="deliveryPSC"
              placeholder="PSČ"
              value=""
            />
          </div>
        </div>

        <div class="row">
          <label for="libName" class="col-md-3">Jméno knihovny</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="libName"
              name="libName"
              maxlength="200"
              placeholder="Celý oficiální název knihovny"
              value=""
              required=""
              list="libNames"
            />
            <datalist id="libNames"></datalist>
          </div>
        </div>

        <div class="row line">
          <label for="libEmail" class="col-md-3">Email knihovny</label>
          <div class="col-md-9">
            <input
              type="email"
              class="form-control"
              id="libEmail"
              name="libEmail"
              maxlength="200"
              placeholder="Email knihovny"
              value=""
              required=""
            />
          </div>
        </div>
        <div class="row">
          <label for="contactPerson" class="col-md-3">Jméno kontaktu</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="contactPerson"
              name="contactPerson"
              maxlength="200"
              placeholder="Jméno kontaktní osoby"
              value=""
              required=""
            />
          </div>
        </div>
        <div class="row">
          <label for="contactPersonEmail" class="col-md-3"
            >Email kontaktu</label
          >
          <div class="col-md-9">
            <input
              type="email"
              class="form-control"
              id="contactPersonEmail"
              name="contactPersonEmail"
              maxlength="200"
              placeholder="Email kontaktní osoby"
              value=""
              required=""
            />
          </div>
        </div>
        <div class="row line">
          <label for="contactPersonTele" class="col-md-3"
            >Telefon kontaktu</label
          >
          <div class="col-md-9">
            <input
              type="number"
              class="form-control"
              id="contactPersonTele"
              name="contactPersonTele"
              placeholder="9 místné číslo bez mezer na kontaktní osobu"
              value=""
              required=""
            />
          </div>
        </div>
        <div class="row">
          <label for="inSKIPfromYear" class="col-md-4"
            >Knihovna je členem SKIP od</label
          >
          <div class="col-md-2">
            <select
              class="form-control"
              id="inSKIPfromYear"
              name="inSKIPfromYear"
              required=""
            >
              <option value="" selected="" disabled="">rok</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <div class="col-md-6 row">
            <div class="col-md-3">Knihovna</div>
            <label class="col-md-9" for="newLibJoinedYES" id="joinAsNewLabel">
              <input
                type="radio"
                class="custom-control-label"
                name="newLibJoined"
                id="newLibJoinedYES"
                value="1"
                required=""
              />
              pokračuje v projektu</label
            >
            <label class="col-md-9 offset-md-3" for="newLibJoinedNO">
              <input
                type="radio"
                class="custom-control-label"
                name="newLibJoined"
                id="newLibJoinedNO"
                value="2"
                required=""
              />
              se nově zapojuje</label
            >
          </div>
        </div>

        <div class="row line">
          <label for="newborn" class="col-md-9"
            >Počet novorozených dětí v&nbsp;obci, v&nbsp;předchozím roce</label
          >
          <div class="col-md-3">
            <input
              type="number"
              class="form-control"
              id="newborn"
              name="newborn"
              placeholder="Počet"
              value=""
              required=""
            />
          </div>
        </div>

        <div class="row">
          <label for="description" class="col-md-2">Poznámka</label>
          <div class="col-md-10">
            <textarea
              class="form-control"
              rows="3"
              id="description"
              name="description"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <router-link
            to="/nakupniKosik"
            v-slot="{ href, route, navigate }"
            custom
            v-show="this.$parent.sumPrice > 0"
          >
            <a
              :href="href"
              @click="navigate"
              class="btn btn-sm text-white btn-secondary nav-link p-3 col-6 col-sm-5 col-md-4 col-lg-3"
            >
              <i class="fas fa-chevron-left"></i>
              Zpět
            </a>
          </router-link>

          <a
            v-show="this.$parent.sumPrice > 0"
            @click="checkForm()"
            class="btn btn-sm text-white btn-success nav-link p-3 col-6 offset-sm-2 col-sm-5 offset-md-4 col-md-4 offset-lg-6 col-lg-3"
          >
            Pokračovat
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    checkForm: function () {
      console.log("yes");
      alert("bohužel");
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 5pt;
}
</style>
