import fetch from 'cross-fetch'

const initialState = {
    numberOfClicks: 0,
    numberOfClicks: 0
};

const createAction = (actionType, data = null) => ({
    type: actionType,
    data: data
});

export const clickAction = () => {
    return (dispatch) => {
        dispatch(buttonHasBeenClickedAction)
        return fetch(`https://www.reddit.com/r/javascript.json`)
            .then((res) => res.json(), (err) => console.error(err))
            .then((json) => dispatch(createAction('backendDataReceived', json)))
    }
};


export const buttonHasBeenClickedAction = createAction('buttonHasBeenClicked');

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case buttonHasBeenClickedAction.type:
            return { numberOfClicks: (state.numberOfClicks + 1) };
        case 'backendDataReceived':

        default:
            return state;
    }
};

export default reducer;
