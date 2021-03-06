const initialState = {
  // get
  loading: false,
  searchQuery: '',
  plantsData: null,
  zoneQuery: [],
  page: 1,
  sortBy: 'commonName',
  order: 'asc',
  limit: 20,
  queryDocumentCount: 0,
  openPlantID: '',
  operatingPlant: {
    commonName: '',
    otherCommonName: [],
    varietyName: '',
    image: [],
    fullDescription: '',
    hardinessZones: [],
    lightRequirement: [],
    waterRequirement: 1,
    seasonDuration: '',
    minimumTemperature: 0,
    maximumTemperature: 0,
    sowSeedsIndoor: '',
    stemSupportRequired: '',
    regularHarvest: '',
    NumberDaysFromSeedToHarvest: 0,
    maximumHeight: 0,
    plantsPerSqFt: 0,
    minimumDistanceToNeighbour: 0,
  },
  // =====  alert =======
  alertModalOpen: false,
  alertModalMessage: '',
};

export default initialState;
