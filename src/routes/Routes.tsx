

import React from 'react'

import {Routes as Switch, Route} from "react-router-dom";
import { Components } from '../components';
import { Routers } from '../pages';
import { PATH } from '../service/Path';

const Routes: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Components.Header/>
        <React.Suspense fallback={<>Loading....</>}>
          <Switch>
            <Route path={PATH.MainPath.layout} element={<Routers.LayoutRoutes/>} />
            <Route path={PATH.MainPath.auth} element={<Routers.AuthRoutes/>}/>
          </Switch>
        </React.Suspense>
    </React.Fragment>
  )
}

export default Routes;
