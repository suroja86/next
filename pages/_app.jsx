import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import {INCREMENT_COUNTER} from '../redux/actions/counterActions';
import store from "../redux/store";
import withRedux from "next-redux-wrapper";

function MyApp (props) {

    // render() {
        //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
        const {Component, pageProps} = props;

        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    // }

}

export async function getInitialProps({Component, ctx: context}) {
    const pageProps = {};
    // const pageProps = Component.getInitialProps(context) ? await Component.getInitialProps(context) : {};

    //Anything returned here can be access by the client
    return {pageProps: pageProps};
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);