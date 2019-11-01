import { connect } from 'react-redux';
import { retrieveBackendDataThunkCreator } from './state';
import App from "./App";

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
    onClick: (numberOfClicks) => {
        dispatch(retrieveBackendDataThunkCreator(numberOfClicks))
    }
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
