import React from 'react';
import {
    BrowserRouter,
    Routes as ReactRoutes,
    Route
} from "react-router-dom";

import { Routes } from '../consts';
import { Root } from '../pages';


export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path={Routes.chatRoom} element={<Root />} />
            </ReactRoutes>
        </BrowserRouter>
    );
};