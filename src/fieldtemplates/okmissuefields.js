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
  ];
  
  export default fields;