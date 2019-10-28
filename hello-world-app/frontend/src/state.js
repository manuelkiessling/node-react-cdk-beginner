const initialState = {
    numberOfClicks: 0
};

const createAction = (actionType) => ({
    type: actionType
});

export const clickAction = createAction('click');

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case clickAction.type:
            return { numberOfClicks: (state.numberOfClicks + 1) };
        default:
            return state;
    }
};

export default reducer;
