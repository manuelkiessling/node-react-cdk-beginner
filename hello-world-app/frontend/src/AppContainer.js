import { Component } from 'react';
import { connect } from 'react-redux';
import { clickAction } from './state';
import App from "./App";

const mapStateToProps = (state, ownProps) => ({
    numberOfClicks: state.numberOfClicks
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
        dispatch(clickAction)
    }
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;
