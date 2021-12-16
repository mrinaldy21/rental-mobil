import actionType from "../actions/type";

let initState = {
  cars: [],
  reservasi: [],
  total : 0
};

const storeReducer = (state = initState, action) => {
  const reservasi = action.playload;
  switch (action.type) {
    case actionType.LIST_CARS:
      return {
        ...state,
        cars: action.data,
      };
    case actionType.ADD_TO_RESERVASI:
      let dataReservasi = state.cars.filter(
        (value) => value.id == action.id
      )[0];
      let cekReservasi = state.reservasi.findIndex(
        (value) => value.id == action.id
      );

      if (dataReservasi) {
        if (cekReservasi >= 0) {
          state.reservasi[cekReservasi].qty += 1;
          return state
        } else {
          dataReservasi.qty = 1;
          return {
            ...state,
            reservasi: [...state.reservasi, dataReservasi],
          };
        }
      } else {
        return state;
      }
      break;
    case actionType.PLUS_CAR:
      let indexPlus = state.reservasi.findIndex(
        (value) => value.id == action.id
      );
      state.reservasi[indexPlus].qty += 1;
      return {
        ...state,
        reservasi: [...state.reservasi]
      };
      break;
    case actionType.MINUS_CAR:
      let indexMin = state.reservasi.findIndex(
        (value) => value.id == action.id
      );
      if (state.reservasi[indexMin].qty <= 1) {
        state.reservasi = state.reservasi.filter((value, i) => i !== indexMin);
      } else {
        state.reservasi[indexMin].qty -= 1;
      }
      return {
        ...state,
        reservasi: [...state.reservasi]
      };
      break;
    case actionType.REMOVE_CAR:
      let indexRemove = state.reservasi.findIndex(
        (value) => value.id == action.id
      );
      state.reservasi = state.reservasi.filter((value, i) => i !== indexRemove);
      return {
        ...state,
        reservasi: state.reservasi,
      };
      break;
      case actionType.TOTAL_CAR:
      let totals = state.reservasi.reduce((prev, value) =>{
        return prev + (value.harga_sewa * value.qty)
      },0)
      return {
        ...state,
        total: totals
      };
      break;
    default:
      return state;
  }
};

export default storeReducer;
