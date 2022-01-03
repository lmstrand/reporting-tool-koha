<template>
  <div id="app" class="container-fluid">
    <div class="b-container-fluid">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">REPORTS PLUGIN</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Takaisin kohaan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">1</a>
            </li>
          </ul>
          <span class="navbar-text"> 2 </span>
        </div>
      </nav>
    </div>

    <div>
      <b-card no-body>
        <b-tabs
          pills
          card
          active-nav-item-class="font-weight-bold text-uppercase"
        >
          <b-tab class="butt" title="Lainat(issues)" active @click="showOkm"
            ><b-card-text>Tab contents 1</b-card-text>
            <b-dropdown id="dropdown-divider" text="Kuukausi" class="m-2">
              <b-dropdown-item-button>Tammikuu</b-dropdown-item-button>
              <b-dropdown-item-button>Helmikuu</b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button>Koko vuosi</b-dropdown-item-button>
            </b-dropdown>
            <button type="button" class="btn btn-secondary" v-on:click="greet">
              Greet
            </button>

            <button type="button" class="btn btn-secondary">Secondary</button>
            <b-button type="button" class="btn btn-success" @click="exportToCsv"
              >CSV</b-button
            >
            <b-button @click="toggleBusy">Toggle Busy State</b-button>
            <b-button @click="showIssues2">Issues</b-button>
            <b-button @click="showCities">API Cities</b-button>

            <b-dropdown id="dropdown-divider" text="Kuukausi" class="m-2">
              <b-dropdown-item-button>Tammikuu</b-dropdown-item-button>
              <b-dropdown-item-button>Helmikuu</b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button>Koko vuosi</b-dropdown-item-button>
            </b-dropdown>

            <b-dropdown id="dropdown-divider" text="Vuosi" class="m-2">
              <b-dropdown-item-button>2021</b-dropdown-item-button>
              <b-dropdown-item-button>2020</b-dropdown-item-button>
              <b-dropdown-item-button>2019</b-dropdown-item-button>
            </b-dropdown>

            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
                class="mt-3"
              ></b-form-select>
              <div class="mt-3">
                Selected: <strong>{{ selectedMonth }}</strong>
              </div>
            </div>

            <b-row class="mb-6">
              <b-col lg="2" class="my-1">
                <b-form-datepicker
                  id="example-datepicker"
                  v-model="lowDate"
                ></b-form-datepicker>
              </b-col>
              <b-col lg="2" class="my-1">
                <b-form-datepicker
                  v-b-popover.hover="
                    'Valitse loppupvm:ksi viimeiseksi raportoitavaa päivää seuraava päivä'
                  "
                  title="Ohje:"
                  id="example-datepicker"
                  v-model="maxDate"
                ></b-form-datepicker>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Hankinnat"
            ><b-card-text>Tab contents 2</b-card-text></b-tab
          >
          <b-tab title="Kokoelmat(collection)"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
          <b-tab title="Asiakkaat(users)"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
          <b-tab title="Varausmäärät"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
          <b-tab title="Poistot"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
          <b-tab title="Kaukopalvelu"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
          <b-tab title="okmdata:issues" @click="showOkm"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
          <b-tab title="orig-issues" @click="showIssues"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
          <b-tab title="API Cities" @click="showCities">
            <b-card-text>Postinumerot tietokannassa (API)</b-card-text>

              <div class="row">
                <div class="col-md-12 bg-light float-right">
                  <b-button
                    type="button"
                    class="btn btn-success"
                    @click="exportToCsv"
                    >Vie CSV</b-button
                  >
                </div>

            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>

    <b-row>
      <b-col lg="4" class="my-1">
        <b-form-group
          label="Suodata"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Etsi..."
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''"
                >Tyhjennä</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- sido tablen näyttämä data muuttujaan v-model: filtered, kutsu metodissa this.filtered -->
    <b-table
      v-model="filtered"
      striped
      hover
      responsive="sm"
      bordered
      outlined
      small
      sort-icon-left
      :fields="fields"
      :items="myJson.data"
      :busy="isBusy"
      :filter="filter"
    >
      <template #table-busy>
        <div class="text-center text-info my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>

      <template #cell(itemtypes)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? "Piilota" : "Näytä" }} tiedot
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <!--      <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox>  -->
      </template>

      <template #row-details="row">
        <b-table
          class="w-100 p-3 bordered outlined text-light"
          striped
          hover
          responsive="sm"
          :items="row.item.itemtypes"
        >
          <!--      <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>{{ row.item.itemtypes.KALVO }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
            <b-col>{{ row.item.itemtypes.isActive }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
        
        -->
          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-table>
      </template>

      ></b-table
    >
  </div>
</template>




  
  
<script>
import issuesjson from "./json/issues.json";
import cities from "./json/cities.json";
import issues2 from "./json/issues.json";
import okmissues from "./json/okmissues.json";
import axios from "axios";

import cityfields from "./fieldtemplates/cityfields.js";
import okmissuefields from "./fieldtemplates/okmissuefields.js";

let fields = [
  {
    label: "Kirjasto",
    key: "library",
    sortable: true,
    stickyColumn: true,
    isRowHeader: true,
    variant: "primary",
  },
  { label: "Kirjat suomenkieliset", key: "books_finnish", sortable: true },
  { label: "Kirjat ruotsinkieliset", key: "books_swedish", sortable: true },
  { label: "Kirjat saamenkieliset", key: "books_sami", sortable: true },
  { label: "Kirjat muunkieliset", key: "books_other_lang", sortable: true },
  { label: "Kirjat fakta aikuiset", key: "books_fact_adult", sortable: true },
  { label: "Kirjat fakta nuoret", key: "books_fact_juvenile", sortable: true },
  { label: "Kirjat fiktio aikuiset", key: "books_fact_adult", sortable: true },
  { label: "Kirjat fiktio nuoret", key: "books_fact_juvenile", sortable: true },
  { label: "Kirjat Yhteensä", key: "books_total", sortable: true },
  { label: "Musiikkiäänitteet", key: "musical_regordins", sortable: true },
  { label: "Celia", key: "celia", sortable: true },
  { label: "Muut äänitteet", key: "other_regording", sortable: true },
  { label: "Videot", key: "videos", sortable: true },
  { label: "Yhteensä", key: "total", sortable: true },
  { label: "Itemtypes", key: "itemtypes" },
];

let itemtypefields = [
  { label: "Celia", key: "CELIA" },
  { label: "KALVO", key: "KALVO" },
];

export default {
  name: "App",

  data() {
    return {
      selected: null,
      filtered: null,
      selectedMonth: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      lowDate: "",
      maxDate: "",
      filter: "",
      isBusy: false,
      fields: null,
      itemtypefields: null,
      myJson: issues2.data, //oletusdata
    };
  },

  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },

  // define methods under the `methods` object
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
    greet: function (event) {
      // `this` inside methods points to the Vue instance, filtered table data printing

      let moddedData = JSON.stringify(this.filtered);
      alert("Hello " + this.filtered + moddedData + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },

    showSomething() {
      this.isBusy = !this.isBusy;
      this.fields = [
        { label: "City", key: "city_name", sortable: true },
        { label: "Zipcode", key: "city_zipcode" },
      ];
      this.itemtypefields = itemtypefields;
      this.myJson.data = cities;
      this.isBusy = !this.isBusy;
    },

    showIssues() {
      this.myJson.data = null;
      this.fields = null;
      this.itemtypefields = null;
      this.isBusy = !this.isBusy;

      this.fields = fields;
      this.itemtypefields = itemtypefields;

      this.myJson.data = issuesjson.data;
      (this.filter = ""), (this.isBusy = !this.isBusy);
    },

    showIssues2() {
      this.myJson.data = null;
      this.fields = null;
      this.isBusy = !this.isBusy;

      this.fields = fields;

      this.myJson.data = issues2.data;
      this.isBusy = !this.isBusy;
    },

    showOkm() {
      this.myJson.data = null;
      this.fields = null;
      this.isBusy = !this.isBusy;
      //this.fields = [
      //  { label: "City", key: "city_name", sortable: true },
      //  { label: "Zipcode", key: "city_zipcode" },
      //];
      this.fields = okmissuefields;
      this.myJson.data = okmissues.issues;
      this.isBusy = !this.isBusy;
    },

    showAllOkm() {
      this.myJson.data = null;
      this.fields = null;
      this.isBusy = !this.isBusy;
      //this.fields = [
      //  { label: "City", key: "city_name", sortable: true },
      //  { label: "Zipcode", key: "city_zipcode" },
      //];
      //this.myJson.data = okmjson;
      this.isBusy = !this.isBusy;
    },

    async showCities() {
      this.myJson.data = null;
      this.fields = null;
      this.isBusy = !this.isBusy;
      try {
        const response = await axios.get(
          `http://127.0.1.1:8080/api/v1/cities/`
        );

        this.fields = cityfields;
        this.myJson.data = response.data;
        this.isBusy = !this.isBusy;
      } catch (e) {
        console.log(e);
        this.isBusy = !this.isBusy;
      }
    },

    exportToCsv() {
      let moddedData = this.filtered;

      var items = moddedData;
      const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
      const header = Object.keys(items[0]);
      let csv = items.map((row) =>
        header
          .map((fieldName) => JSON.stringify(row[fieldName], replacer))
          .join(",")
      );
      csv.unshift(header.join(","));
      csv = csv.join("\r\n");

      //Download the file as CSV
      var downloadLink = document.createElement("a");
      var blob = new Blob(["\ufeff", csv]);
      var url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = "DataDump.csv"; //Name the file here
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    },
  },
};
</script>

