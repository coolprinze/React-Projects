import React, { Component, Fragment } from 'react';
import { Provider } from "react-redux";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux"
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';


// all main layout
import Admin from './views/Admin'
import Agent from './views/Agent'
import User from './views/User'
import Public from './views/Public'
import NotFound from './views/NotFound'
import reducers from './reducers';
import Alerts from './common/Alerts';

// Alert Options
const alertOptions = {
    timeout: 15000,
    position: 'top right'
};

class App extends Component {

    componentDidMount() {

    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return ( 
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Alerts />

                    <Router>
                        <Fragment>
                            <Route exact path="/admin" component={Admin}/>
                            <Route exact path="/agent" component={Agent}/>
                            <Route exact path="/user" component={User}/> 
                            <Route exact path="/register" component={Public}/>   
                            <Route exact path="/login" component={Public}/> 
                            <Route exact path="/advertise-with-us" component={Public} />
                            <Route exact path="/download-magazine" component={Public} />
                            {/* "/user/savedproperties" also serves as the dashboard after user login login */}
                            <Route exact path="/user/search-history" component={User}/>
                            <Route exact path="/user/alerts" component={User}/>
                            <Route exact path="/user/profile" component={User} /> 
                            <Route exact path="/user/post-request" component={User} /> 
                            <Route exact path="agent/profile" component={Agent} />
                            <Route exact path="/agent/agent-listing" component={Agent} />
                            <Route exact path="/agent/listing-statistics" component={Agent} />
                            <Route exact path="/agent/add-property" component={Agent} /> 
                            <Route exact path="/agent/edit-property/:slug" component={Agent} /> 
                            <Route exact path="/propertyadvice-categories" component={Public} />
                            <Route exact path="/propertyadvice/:category" component={Public} />
                            <Route exact path="/propertyadvice/:category/:advice" component={Public} />
                            <Route exact path="/agents" component={Public} /> 
                            <Route exact path="/" component={Public} />
                            <Route exact path="/about-us" component={Public} />
                            <Route exact path="/search" component={Public} />
                            <Route exact path="/postrequest" component={Public} />
                            <Route exact path="/propertylisting" component={Public} />
                            <Route exact path="/propertylisting/:slug" component={Public} />
                            <Route exact path="/notfound" component={NotFound} />
                            {/* <Route  component={NotFound} /> */}
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>

        )

    }

}

export default App;