import fetch from 'cross-fetch'

const initialState = {
    numberOfClicks: 0,
    backendData: null
};

const createActionCreator = (type) => {
    const f = (payload = null) => ({ type: type, payload: payload });
    f.toString = () => type;
    return f;
};

export const buttonHasBeenClickedAction = createActionCreator('buttonHasBeenClicked');
export const backendDataHasBeenRetrievedAction = createActionCreator('backendDataHasBeenRetrievedAction');

export const retrieveBackendDataThunkCreator = (searchTerm) => {
    return (dispatch) => {
        dispatch(buttonHasBeenClickedAction());
        return fetch(`https://www.reddit.com/subreddits/search.json?q=${searchTerm}&limit=1`)
            .then((res) => res.json(), (err) => console.error(err))
            .then((json) => dispatch(backendDataHasBeenRetrievedAction(json)))
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${buttonHasBeenClickedAction}`:
            return {
                numberOfClicks: (state.numberOfClicks + 1),
                backendData: state.backendData
            };
        case `${backendDataHasBeenRetrievedAction}`:
            return {
                numberOfClicks: state.numberOfClicks,
                backendData: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
