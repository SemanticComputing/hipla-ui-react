export default {
  languageLabel: 'Suomi',
  appTitle: {
    short: 'Nimisampo',
    long: 'Nimisampo: nimistöntutkijan työpöytä'
  },
  appDescription1: `
    Nimisampo on kaikille avoin verkkopalvelu
    suomalaisesta paikannimistöstä kiinnostuneiden tutkijoiden ja
    suuren yleisön käytettäväksi. Nimistöä voi tarkastella kartoilla,
    datana ja tilastollisesti. Nykyisten karttapohjien ohella voi käyttää
    myös historiallisia luovutetun Karjalan karttoja ja 1900-luvun vaihteen
    venäläisiä Senaatin kartastoja eli Venäjän armeijan 1800–1900-luvulla
    laatimia Etelä-Suomen karttoja.
  `,
  appDescription2: `
    Aloita haku valitsemalla vasemmalta lähdeaineisto ja syöttämällä paikannimi. 
    Vaihtoehtoisesti voit hakea kaikki paikannimet kartalta rajatulta alueelta.
  `,
  appDescription3: `
    Paikannimien haussa voi käyttää jokerimerkkiä (*), esimerkiksi
    haulla "orava*" löytyvät kaikki orava-alkuiset ja haulla "*haara" kaikki
    haara-loppuiset nimet.
  `,
  appDescription4: `
    Hakutermejä voi myös yhdistellä käyttämällä "or"-sanaa, esimerkiksi
    "ukko* or ukon*" löytää kaikki ukko- tai ukon-alkuiset nimet.
  `,
  topBar: {
    feedback: 'palaute',
    info: {
      info: 'tietoja',
      blog: 'Project blog',
      blogUrl: 'https://seco.cs.aalto.fi'
    }
  },
  facetBar: {
    results: 'Tuloksia',
    narrowDownBy: 'Rajoita tulosjoukkoa'
  },
  tabs: {
    table: 'taulukko',
    map_clusters: 'klusteroitu kartta',
    map_markers: 'kartta',
    heatmap: 'lämpökartta',
    statistics: 'tilastot',
    download: 'lataus'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  resultsAsCSV: 'lataa hakutulokset csv-taulukkona',
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
    wrongZoomLevel: 'Hakutuloksien suuren määrän johdosta kartan zoomaustason täytyy olla vähintään 11',
    tooManyResults: 'Hakutuloksia on yli 3000, jolloin täytyy käyttää joko klusteroitua karttaa tai lämpökartta.'
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
      searchPlaceNames: 'Hae paikannimellä',
      searchByArea: 'Hae kaikki paikannimet alueelta',
      searchByAreaTitle: `
        Siirrä karttanäkymä tutkittavalle alueelle, aseta zoomaustasoksi 
        vähintään 11 ja käytä alareunan hakupainiketta.
      `,
      searchByAreaCancel: 'Peruuta',
      searchByAreaSearch: 'Hae',
      properties: {
        datasetSelector: {
          label: 'Valitse lähdeaineisto(t)',
          description: 'Haku suoritetaan kaikkiin valittuihin lähdeainoistoihin samanaikaisesti.'
        },
        prefLabel: {
          label: 'Nimi',
          description: 'Paikan nimi'
        },
        broaderTypeLabel: {
          label: 'Paikanlaji',
          description: 'Paikanlaji'
        },
        broaderAreaLabel: {
          label: 'Alue',
          description: 'Alue'
        },
        modifier: {
          label: 'Määriteosa',
          description: 'Määriteosa'
        },
        basicElement: {
          label: 'Perusosa',
          description: 'Perusosa'
        },
        collectionYear: {
          label: 'Keruuvuosi',
          description: 'Keruuvuosi'
        },
        source: {
          label: 'Lähde',
          description: 'Lähde'
        }
      }
    }
  }
}
