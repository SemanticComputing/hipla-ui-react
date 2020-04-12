export default {
  languageLabel: 'English',
  appTitle: {
    short: 'NameSampo',
    long: 'NameSampo: A Workbench for Toponomastic Research'
  },
  appDescription1: `
    NameSampo is a web service for searching and studying place names. The search results
    can be viewed as a table, on maps, and as statistical distributions. 
    Historical and current background maps are provided.
  `,
  appDescription2: `
    Start by choosing source dataset(s) and input a place name on the search field.
    Alternatively you can search by area. 
  `,
  appDescription3: `
    
  `,
  appDescription4: `
  
  `,
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Project blog',
      blogUrl: 'https://seco.cs.aalto.fi',
      aboutThePortal: 'About the Portal'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions'
  },
  facetBar: {
    results: 'Results',
    narrowDownBy: 'Narrow down by'
  },
  tabs: {
    table: 'table',
    map_clusters: 'clustered map',
    map_markers: 'map',
    heatmap: 'heatmap',
    statistics: 'statistics',
    download: 'download'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  exportToYasgui: 'open the result table query in yasgui sparql editor',
  openInLinkedDataBrowser: 'open in linked data browser',
  resultsAsCSV: 'download the search results as a CSV table',
  facets: {
    dateFacet: {
      invalidDate: 'Epäkelpo päivämäärä.',
      toBeforeFrom: 'Alkupäivämäärän täytyy olla ennen loppupäivämäärää.',
      minDate: 'Aikaisin sallittu päivämäärä on {minDate}',
      maxDate: 'Myöhäisin sallittu päivämäärä on {maxDate}',
      cancel: 'Peruuta',
      fromLabel: 'Alku',
      toLabel: 'Loppu'
    },
    textFacet: {
      inputLabel: 'Etsi nimellä'
    }
  },
  leafletMap: {
    externalLayers: {
      arkeologiset_kohteet_alue: 'Register of Archaeological Sites, areas',
      arkeologiset_kohteet_piste: 'Register of Archaeological Sites, points'
    },
    mapModeButtons: {
      markers: 'Markers',
      heatmap: 'Heatmap'
    },
    wrongZoomLevel: 'The map zoom level has to at least 11',
    tooManyResults: 'More than 3000 results, please use clustered map or heatmap'
  },
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        This landing page provides a human-readable summary of the data points that link
        to this {entity}. The data included in this summary reflect only those data points
        used in the MMM Portal. Click the Open in Linked Data Browser on button on the
        Export tab to view the complete set of classes and properties linked to this record.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        To cite this record, use its url. You can use also use the url to return directly
        to the record at any time.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Repetition of data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The same or similar data may appear within a single data field multiple times.
        This repetition occurs due to the merging of multiple records from different datasets
        to create the MMM record.
      </p>
    `
  },
  perspectives: {
    placesClientFS: {
      facetResultsType: '',
      searchPlaceNames: 'Search place names',
      searchByArea: 'Search by area',
      searchByAreaTitle: `
        Siirrä karttanäkymä tutkittavalle alueelle, aseta zoomaustasoksi 
        vähintään 11 ja käytä alareunan hakupainiketta.
      `,
      searchByAreaCancel: 'Cancel',
      searchByAreaSearch: 'Search',
      properties: {
        datasetSelector: {
          label: 'Choose dataset(s)',
          description: 'Description'
        },
        prefLabel: {
          label: 'Name',
          description: 'Description'
        },
        broaderTypeLabel: {
          label: 'Type',
          description: 'Description'
        },
        broaderAreaLabel: {
          label: 'Area',
          description: 'Description'
        },
        modifier: {
          label: 'Modifier',
          description: 'Description'
        },
        basicElement: {
          label: 'Base',
          description: 'Description'
        },
        collectionYear: {
          label: 'Year',
          description: 'Description'
        },
        source: {
          label: 'Source',
          description: 'Description'
        }
      }
    }
  }
}
