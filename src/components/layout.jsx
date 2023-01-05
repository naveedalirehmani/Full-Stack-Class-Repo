import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function Layout({ children }) {

    // in routes/index.jsx file I have created a single route and nested multiple routes in it, also I have added a common layout for all the nested routes, this layout will ofcourse only render if any of it nested children's path is matched, and outlet is where the matched route is render in the layout compoennt

    // context is a way to pass common data to all the sibling nested routes.

    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <div className="container mx-auto mt-12">
                <div className="p-6">
                    <Outlet context={{ hello: 'world' }}></Outlet>
                </div>
            </div>
        </div>
    );
}