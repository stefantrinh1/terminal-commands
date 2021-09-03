import initialState from './initialState';

export default (state, action) => {
  switch (action.type) {
    // ============================
    // ==== Fetching Plants =====
    // ============================

    case 'FINISH_LOADING':
      return {
        ...state,
        loading: false,
        loadingError: false,
      };

    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action?.page ? action?.page : state.page,
        loading: true,
      };

    case 'SEARCH_QUERY_UPDATE':
      return {
        ...state,
        searchQuery: action?.searchQuery,
      };

    case 'ZONE_QUERY_UPDATE':
      return {
        ...state,
        zoneQuery: action?.zoneQuery ? action?.zoneQuery : state.zoneQuery,
      };

    case 'SORT_BY_UPDATE':
      return {
        ...state,
        sortBy: action?.sortBy ? action?.sortBy : state.sortBy,
      };
    case 'ORDER_UPDATE':
      return {
        ...state,
        order: action?.order ? action?.order : state.order,
      };
    case 'LIMIT_UPDATE':
      return {
        ...state,
        limit: action?.limit ? action?.limit : state.limit,
      };
    case 'PLANTS_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'SET_PLANTS':
      return {
        ...state,
        queryDocumentCount: action?.queryDocumentCount,
        plantsData: action?.plantsData ? action?.plantsData : null,
        loading: action.loading,
        loadingError: action.loadingError,
      };
    // ===========================
    // ==== Creating Plants ====
    // ===========================

    case 'TOGGLE_CREATE_MODAL':
      return {
        ...state,
        createModalOpen: action.toggle,
      };

    case 'CREATING_PLANT':
      console.log('Entering input into create modal field');
      // create new state object
      const { propertyToChange, propertyValue } = action;

      // handles everything on the first state layer.(shallow)
      const createProperty = {
        [propertyToChange]: propertyValue,
      };

      return {
        ...state,
        operatingPlant: {
          ...state.operatingPlant,
          ...createProperty,
        },
        // }
      };

    case 'ADD_OTHER_COMMON_NAME':
      console.log('Adding Common Name To State');
      const { commonNameToAdd } = action;
      return {
        ...state,
        operatingPlant: {
          ...state.operatingPlant,
          otherCommonName: [
            ...state.operatingPlant.otherCommonName,
            ...commonNameToAdd,
          ],
        },
      };

    case 'DELETE_OTHER_COMMON_NAME':
      console.log('Deleting Common Name To State');
      const { commonNameToDelete } = action;

      const newArrayAfterDelete = state.operatingPlant.otherCommonName.filter(
        (name) => name !== commonNameToDelete
      );

      return {
        ...state,
        operatingPlant: {
          ...state.operatingPlant,
          otherCommonName: newArrayAfterDelete,
        },
      };

    case 'COMMIT_IMAGES':
      console.log('Adding Images To State');
      const { files } = action;
      return {
        ...state,
        imagesToAdd: files,
      };

    case 'PLANTS_POST_REQUEST':
      console.log('Post Request Made');
      return {
        ...state,
        posting: true,
      };

    case 'PLANTS_FINISH_POSTING':
      console.log('Finishing post Request and clearing operating plant state');
      return {
        ...state,
        operatingPlant: initialState.operatingPlant,
        posting: false,
      };

    // ===========================
    // ==== Patching Zipcodes =====
    // ===========================

    case 'TOGGLE_EDIT_MODEL':
      console.log('Toggling Edit Modal');
      return {
        ...state,
        editModalOpen: action.toggle,
        operatingPlant: {
          ...initialState.operatingPlant,
          ...action.operatingPlant,
        },
      };

    case 'EDITTING_PLANT':
      console.log('Editing plant field changed');
      const {
        propertyToChange: propertyToEdit,
        propertyValue: editPropertyValue,
      } = action;

      const edittingProperty = {
        [propertyToEdit]: editPropertyValue,
      };

      // handles everything on the first state layer.(shallow)
      return {
        ...state,
        operatingPlant: {
          ...state.operatingPlant,
          ...edittingProperty,
        },
        // }
      };

    case 'PATCH_PLANT_REQUEST':
      console.log('patch request Made');
      return {
        ...state,
        patching: true,
      };
    case 'FINISH_PATCHING':
      console.log('finished patch request');
      return {
        ...state,
        patching: false,
      };

    // ===========================
    // ==== Deleting Zipcodes =====
    // ===========================

    case 'DELETE_PLANT_REQUEST':
      console.log('delete request made');
      return {
        ...state,
        deleting: true,
      };

    case 'FINISH_DELETING':
      console.log('delete request finishing');
      return {
        ...state,
        deleting: false,
      };

    // ===========================
    // ==== Operating Plant  =====
    // ===========================

    case 'OPENED_PLANT_ID':
      console.log('setting operating plant id');
      return {
        ...state,
        openPlantID: action.id,
      };

    // ===========================
    // ======  Alert Modal  ======
    // ===========================

    case 'ALERT_MODAL_TOGGLE':
      console.log('alert Toggle Action Hit');
      // creating a timeout function to run after 2 seconds to close the modal again. as its a flash pop up modal
      // setTimeout(() => {
      //   dispatch({ type: 'ALERT_MODAL_TOGGLE', message: '', toggle: false })
      // }, 2000)
      return {
        ...state,
        alertModalMessage: action.message,
        alertModalOpen: action.toggle,
      };

    default:
      alert('Error - No Action Could Be Found');
      throw new Error();
  }
};
