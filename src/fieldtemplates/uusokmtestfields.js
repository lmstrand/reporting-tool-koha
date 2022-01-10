let fields = [
    {
        label: "Kirjastotunnus",
        key: "library",
        sortable: true,
        stickyColumn: true,
        isRowHeader: true,
        variant: "primary",
      },
        
        
        { label: "Kokoelmat: Yhteensä", key: "collection_by_holdingbranch.total", sortable: true, },
        { label: "Kokoelmat: Kirjat Yhteensä", key: "collection_by_holdingbranch.books_total" , sortable: true, },
        { label: "Kokoelmat: Kirjat Suomenkieliset ", key: "collection_by_holdingbranch.book_finnish" , sortable: true, },
        { label: "Kokoelmat: Kirjat Ruotsinkieliset ", key: "collection_by_holdingbranch.books_swedish" , sortable: true, },
        { label: "Kokoelmat: Kirjat Saamenkieliset", key: "collection_by_holdingbranch.books_sami" , sortable: true, },
        { label: "Kokoelmat: Kirjat Muunkieliset", key: "collection_by_holdingbranch.books_other_lang" , sortable: true, },
        { label: "Kokoelmat: Kirjat Kaunokirjat, aikuiset", key: "collection_by_holdingbranch.books_fiction_adult" , sortable: true, },
        { label: "Kokoelmat: Kirjat Kaunokirjat, lapset", key: "collection_by_holdingbranch.books_fiction_juvenile" , sortable: true, },
        { label: "Kokoelmat: Kirjat Tietokirjat, aikuiset", key: "collection_by_holdingbranch.books_fact_adult" , sortable: true, },
        { label: "Kokoelmat: Kirjat Tietokirjat, lapset", key: "collection_by_holdingbranch.books_fact_juvenile" , sortable: true, },
        { label: "Kokoelmat: Nuotit ja partituurit", key: "collection_by_holdingbranch.sheet_music_score" , sortable: true, },
        { label: "Kokoelmat: Musiikkiäänitteet", key: "collection_by_holdingbranch.musical_regordins" , sortable: true, },
        { label: "Kokoelmat: Muut äänitteet", key: "collection_by_holdingbranch.other_regording" , sortable: true, },
        { label: "Kokoelmat: Videotallenteet", key: "collection_by_holdingbranch.videos" , sortable: true, },
        { label: "Kokoelmat: Celia", key: "collection_by_holdingbranch.celia" , sortable: true, },
        { label: "Kokoelmat: Muut aineistot", key: "collection_by_holdingbranch.other" , sortable: true, },
        
        { label: "Hankinnat: Yhteensä", key: "acquisitions.total" },
        { label: "Hankinnat: Kirjat Yhteensä", key: "acquisitions.books_total" },
        { label: "Hankinnat: Kirjat Suomenkieliset", key: "acquisitions.book_finnish" },
        { label: "Hankinnat: Kirjat Ruotsinkieliset", key: "acquisitions.books_swedish" },
        { label: "Hankinnat: Kirjat Saamenkieliset", key: "acquisitions.books_sami" },
        { label: "Hankinnat: Kirjat Muunkieliset", key: "acquisitions.books_other_lang" },
        { label: "Hankinnat: Kirjat Kaunokirjat, aikuiset", key: "acquisitions.books_fiction_adult" },
        { label: "Hankinnat: Kirjat Kaunokirjat, lapset", key: "acquisitions.books_fiction_juvenile" },
        { label: "Hankinnat: Kirjat Tietokirjat, aikuiset", key: "acquisitions.books_fact_adult" },
        { label: "Hankinnat: Kirjat Tietokirjat, lapset", key: "acquisitions.books_fact_juvenile" },
        { label: "Hankinnat: Nuotit ja partituurit", key: "acquisitions.sheet_music_score" },
        { label: "Hankinnat: Musiikkiäänitteet", key: "acquisitions.musical_regordins" },
        { label: "Hankinnat: Celia", key: "acquisitions.celia" },
        { label: "Hankinnat: Muut äänitteet", key: "acquisitions.other_regording" },
        { label: "Hankinnat: Videotallenteet", key: "acquisitions.videos" },
        { label: "Hankinnat: Muut aineistot", key: "acquisitions.other" },
        
        { label: "Lainaus: Yhteensä", key: "issues.total" },
        { label: "Lainaus: Kirjat Yhteensä", key: "issues.books_total" },
        { label: "Lainaus: Kirjat Suomenkieliset", key: "issues.books_finnish" },
        { label: "Lainaus: Kirjat Ruotsinkieliset", key: "issues.books_swedish" },
        { label: "Lainaus: Kirjat Saamenkieliset", key: "issues.books_sami" },
        { label: "Lainaus: Kirjat Muunkieliset", key: "issues.books_other_lang" },
        { label: "Lainaus: Kirjat Kaunokirjat, aikuiset", key: "issues.books_fiction_adult" },
        { label: "Lainaus: Kirjat Kaunokirjat, lapset", key: "issues.books_fiction_juvenile" },
        { label: "Lainaus: Kirjat Tietokirjat, aikuiset", key: "issues.books_fact_adult" },
        { label: "Lainaus: Kirjat Tietokirjat, lapset", key: "issues.books_fact_juvenile" },
        { label: "Lainaus: Nuotit ja partituurit", key: "issues.sheet_music_score" },
        { label: "Lainaus: Musiikkiäänitteet", key: "issues.musical_regordins" },
        { label: "Lainaus: Celia", key: "issues.celia" },
        { label: "Lainaus: Muut äänitteet", key: "issues.other_regording" },
        { label: "Lainaus: Videotallenteet", key: "issues.videos" },
        { label: "Lainaus: Muut aineistot", key: "issues.other" },
        
        { label: "Sanomalehdet", key: "serials.newspaper" },
        { label: "Aikakauslehdet", key: "serials.serials" },
        
        { label: "Poistot", key: "deleted.total" },
        
        { label: "Aktiiviset asiakkaat", key: "active_borrowers" },
        
        { label: "Hankinta(kulut) yhteensä", key: "acquisitions.expenditure_acquisitions" },
        { label: "Kirjojen hankinta(kulut)", key: "acquisitions.expenditure_acquisitions_books" },
        
        
        
        
        
        
  ];
  
  export default fields;
  
  
  //uusokmtest.json
  
  
  //näitä ei käytetä

//   "acquisitions": {
//     "expenditure_acquisitions_books": 2004.81,

//     "books_finnish": 0,

//     "itemtypes": {
//         "": 6,
//         "KONSOLIP": 9,
//         "CD": 11,
//         "NUOTTI": 2,
//         "DVD": 12,
//         "KIRJA": 116
//     },
//     "expenditure_acquisitions": 3509.23,

// },

//   "collection_by_holdingbranch": {
//     "": 2339,
//     "itemtypes": {
//         "NUOTTI": 156,
//         "DVD": 45,
//         "PUHECD": 238,
//         "KARTTA": 3,
//         "DIA": 2,
//         "ESINE": 1,
//         "KONSOLIP": 19,
//         "ATLAS": 4,
//         "KIRJA": 22528,
//         "CD": 192,
//         "MONIVIES": 84
//     },
   // "books_finnish": 0,
//},

// "issues": {
  
// },

// "serials": {
//   "serials": 0,
//   "total": 0,
//   "journals": 0,
//   "newspaper": 0
// },


//  	 	 	