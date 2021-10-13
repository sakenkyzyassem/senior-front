import React, { FC, ReactNode } from 'react';
import RouteItem from "../model/RouteItem.model";

import useToken from '../config/useToken';
import { Redirect, Route } from 'react-router';

interface ProtectedRouteItem extends RouteItem {
    exact: boolean;
    children?: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteItem> = (props) => {
    const {token} = useToken();
    
    return token ?
        <Route {...props} >{props.children}</Route>
        : <Redirect to="/login"></Redirect>
} 

export default ProtectedRoute;