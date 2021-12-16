import actionType from './type'

export const getCars= (dispatch, ownProps, data) => dispatch({
        type: actionType.LIST_CARS,
        data: data
    });

//add cart action
export const addToCart = (dispatch, ownProps, id) => dispatch ({
        type: actionType.ADD_TO_RESERVASI,
        id
    });
//remove item action
export const removeItem=(dispatch, ownProps, id)=>dispatch({
        type: actionType.REMOVE_CAR,
        id
    });
//plus qty action
export const plusCar=(dispatch, ownProps, id)=> dispatch ({
        type: actionType.PLUS_CAR,
        id
    });
//minus qty action
export const minusCar=(dispatch, ownProps, id)=> dispatch ({
        type: actionType.MINUS_CAR,
        id
    });
export const total=(dispatch, ownProps, id)=> dispatch ({
        type: actionType.TOTAL_CAR,
    });