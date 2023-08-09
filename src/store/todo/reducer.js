import * as ActionTypes from "./actionTypes";

// DEFAULT STATE
const defaultState = {
  missions: [],
  isLoadingAdd: false,
  loadingDelete: [],
  loadingUpdate: [],
  selected: [],
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    //Them
    case ActionTypes.ADD_MISSION: {
      return { ...state, isLoadingAdd: true };
    }
    case ActionTypes.ADD_MISSION_SUCCESS: {
      const newData = [
        ...state.missions,
        {
          id: Math.floor(Date.now()),
          name: action.payload,
        },
      ];
      return { ...state, missions: newData, isLoadingAdd: false };
    }

    case ActionTypes.ADD_MISSION_FAILED: {
      return { ...state, isLoadingAdd: false };
    }
    //Xoa
    case ActionTypes.DELETE_MISSION: {
      return {
        ...state,
        loadingDelete: [...state.loadingDelete, action.payload],
      };
    }

    case ActionTypes.DELETE_MISSION_SUCCESS: {
      const newData = state.missions.filter(
        (item) => item.id !== action.payload
      );
      const newLoading = state.loadingDelete.filter(
        (item) => item !== action.payload
      );

      return { ...state, missions: newData, loadingDelete: newLoading };
    }
    //Check
    case ActionTypes.CHECKED_MISSION: {
      console.log("««««« action »»»»»", action);
      let newList = [];

      if (state.selected.length > 0) {
        const checkedMission = state.selected.find(
          (item) => item === action.payload
        );
        if (checkedMission) {
          newList = state.selected.filter((item) => item !== action.payload);
        } else {
          newList = [...state.selected, action.payload];
        }
      } else {
        newList = [...state.selected, action.payload];
      }

      return {
        ...state,
        selected: newList,
      };
    }
    // check All
    case ActionTypes.CHECKED_ALL_MISSION: {
      let checkList = [];

      if (state.selected.length < state.missions.length) {
        checkList = state.missions.map((item) => item.id);
      }

      return {
        ...state,
        selected: checkList,
      };
    }
    // Delete ALL
    case ActionTypes.DELETE_SELECTED_MISSION: {
      return {
        ...state,
        loadingDelete: state.selected,
      };
    }

    case ActionTypes.DELETE_SELECTED_MISSION_SUCCESS: {
      const newList = state.missions.filter(
        (item) => !state.selected.includes(item.id)
      );

      return {
        ...state,
        missions: newList,
        loadingDelete: [],
        selected: [],
      };
    }
    //Update
    case ActionTypes.UPDATE_MISSION: {
      return {
        ...state,
        loadingUpdate: [...state.loadingUpdate, action.payload],
      };
    }

    case ActionTypes.UPDATE_MISSION_SUCCESS: {
      const newData = state.missions.map((item) => {
        if (item.id !== action.payload.id) {
          return { ...item, mission: action.payload.mission };
        }

        return item;
      });
      const newLoading = state.loadingUpdate.filter(
        (item) => item !== action.payload.id
      );

      return { ...state, missions: newData, loadingUpdate: newLoading };
    }

    case ActionTypes.UPDATE_MISSION_FAILED: {
      const newLoading = state.loadingUpdate.filter(
        (item) => item !== action.payload.id
      );
      return { ...state, loadingUpdate: newLoading };
    }
    default:
      return state;
  }
};

export default todoReducer;