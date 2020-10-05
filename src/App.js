import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';


export default () => {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Accordion} />
                        <Route path="/list" exact component={Search} />
                        <Route path="/dropdown" exact component={Dropdown} />
                        <Route path="/translate" exact component={Translate} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};