
<template>

 <div id="app" class="container-fluid">
   
   <div class="b-container-fluid">
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">

   <a class="navbar-brand" href="#">REPORTS PLUGIN</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Issues</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">1</a>
      </li>
    </ul>
    <span class="navbar-text">
      2
    </span>
  </div>
    
  </nav>
</div>

 <button type="button" class="btn btn-secondary" v-on:click="greet">Greet</button>

<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<b-button @click="toggleBusy">Toggle Busy State</b-button>

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
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selectedMonth }}</strong></div>
  </div>


<b-row class="mb-6">
<b-col lg="2" class="my-1">
<b-form-datepicker id="example-datepicker" v-model="lowDate" ></b-form-datepicker>
</b-col>
<b-col lg="2" class="my-1">
<b-form-datepicker id="example-datepicker" v-model="maxDate" ></b-form-datepicker>




</b-col>


</b-row>

  
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
              <b-button :disabled="!filter" @click="filter = ''">Tyhjennä</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
 </b-row>     
      
   
  <b-table v-model="filtered" striped responsive="sm" bordered outlined small sort-icon-left :fields=fields :items=myJson.data :busy="isBusy"  :filter="filter">
  
  <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      
      <template #cell(itemtypes)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Piilota' : 'Näytä'}} tiedot
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
  <!--      <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox>  -->
      </template>

      <template #row-details="row">
        <b-table class="w-100 p-3 bordered outlined text-light" striped hover responsive="sm" :items=row.item.itemtypes>
        
        
        
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
  
      ></b-table>
 </div>
 
 
</template>




  
  
<script>
import json from './json/issues.json'

let fields = [
 
                { label:"Kirjasto",key: "library", sortable: true, stickyColumn: true, isRowHeader: true, variant: 'primary' },
                { label:"Kirjat suomenkieliset", key:"books_finnish", sortable: true},
                { label:"Kirjat ruotsinkieliset", key:"books_swedish" , sortable: true},
                { label:"Kirjat saamenkieliset",key: "books_sami" , sortable: true },
                { label:"Kirjat muunkieliset", key:"books_other_lang" , sortable: true},
                { label:"Kirjat fakta aikuiset",key: "books_fact_adult"  , sortable: true},
                { label:"Kirjat fakta nuoret",key: "books_fact_juvenile" , sortable: true },
                { label:"Kirjat fiktio aikuiset",key: "books_fact_adult"  , sortable: true},
                { label:"Kirjat fiktio nuoret",key: "books_fact_juvenile" , sortable: true },
                { label:"Kirjat Yhteensä",key: "books_total"  , sortable: true},
                { label:"Musiikkiäänitteet", key:"musical_regordins", sortable: true },
                { label:"Celia", key:"celia" , sortable: true},
                { label:"Muut äänitteet", key:"other_regording" , sortable: true},
                { label:"Videot", key:"videos" , sortable: true},
                { label:"Yhteensä", key:"total" , sortable: true},
                { label:"Itemtypes", key:"itemtypes" },
                
                
            ];

let itemtypefields = [
 
                { label:"Celia",key: "CELIA" },
                { label:"KALVO",key: "KALVO" },
                
            ];



            
            
 export default {
  name: "App",
  
  data() {
    
    
   return {
     selectedMonth: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
     lowDate: '',
     maxDate: '',
     filter: '',
     isBusy: false,
     fields,
     itemtypefields,
    myJson: json 
    };
  },
  
  computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
  
 // define methods under the `methods` object
  methods: {
    toggleBusy() {
        this.isBusy = !this.isBusy
    },
    greet: function (event) {
      // `this` inside methods points to the Vue instance, filtered table data printing


      let moddedData = JSON.stringify(this.filtered)
      alert('Hello ' + this.filtered  + moddedData + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
    
    showIssues() {
        this.isBusy = !this.isBusy
    },
    
        
  }
  
  
 }
</script>

