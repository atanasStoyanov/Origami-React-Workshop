import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Publications from './pages/publications/index';
import ShareThoughtsPage from './pages/share-thoughts';

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Publications} />
                <Route path='/share' exact component={ShareThoughtsPage} />

            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;