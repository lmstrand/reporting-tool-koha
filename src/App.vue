
<template>

 <div id="app" class="container-fluid">
   
   <div class="container">
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">

   <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
    
  </nav>
</div>

 <button type="button" class="btn btn-secondary" v-on:click="greet">Greet</button>

<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<b-button @click="toggleBusy">Toggle Busy State</b-button>

   
  <b-table striped responsive="sm" small sort-icon-left :fields=fields :items=myJson.data :busy="isBusy"  >
  
  <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      
      <template #cell(itemtypes)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox>
      </template>

      <template #row-details="row">
        <b-table striped hover :items=row.item.itemtypes.data>
        
        
        
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
                { label:"Kirjat suomenkieliset", key:"books_finnish" },
                { label:"Kirjat ruotsinkieliset", key:"books_swedish" },
                { label:"Kirjat saamenkieliset",key: "books_sami"  },
                { label:"Kirjat muunkieliset", key:"books_other_lang" },
                { label:"Kirjat fakta aikuiset",key: "books_fact_adult"  },
                { label:"Kirjat fakta nuoret",key: "books_fact_juvenile"  },
                { label:"Kirjat fiktio aikuiset",key: "books_fact_adult"  },
                { label:"Kirjat fiktio nuoret",key: "books_fact_juvenile"  },
                { label:"Kirjat Yhteensä",key: "books_total"  },
                { label:"Musiikkiäänitteet", key:"musical_regordins" },
                { label:"Celia", key:"celia" },
                { label:"Muut äänitteet", key:"other_regording" },
                { label:"Videot", key:"videos" },
                { label:"Itemtypes", key:"itemtypes" },
                { label:"Yhteensä", key:"total" },
                
            ];

let itemtypefields = [
 
                { label:"Celia",key: "CELIA" },
                { label:"KALVO",key: "KALVO" },
                
            ];



            
            
 export default {
  name: "App",
  
  data() {
    
    
   return {
     isBusy: false,
     fields,
     itemtypefields,
    myJson: json 
    };
  },
  
 // define methods under the `methods` object
  methods: {
    toggleBusy() {
        this.isBusy = !this.isBusy
    },
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
    
    
  }
 }
</script>

