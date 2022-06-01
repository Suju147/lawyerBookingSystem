import React , {Component, lazy, Suspense} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch , withRouter} from 'react-router-dom'
import { createBrowserHistory } from "history";
import RouteLayout from "../src/Components/RouteLayout";
export const history=createBrowserHistory();

const MainPage=lazy(()=>import('../src/Components/MainPage'));
const BookingPage=lazy(()=>import('../src/Components/Booking'));
const LawyerDetails=lazy(()=>import('../src/Components/LawyerDetails'))


class AppRouter extends Component {
    render()
    {
        return (
               <Router history={history} forceRefresh={true}>
                    <Switch>
                    <Route exact  path='/history' component={LawyerDetails}/>
                    <Route exact  path='/booking' component={BookingPage}/>
                        <Route exact path='/' component={MainPage}/>
                        
                    </Switch>
                </Router>
        
        )
    }
}

export default AppRouter;