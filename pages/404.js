import React from "react";

export default function NotFound() {
    return (
        <div className="container">
            <h1>404 - Page not found</h1>
            <p>I don't know how you got here, but maybe you want to <b>goto</b> <a href="/" className="btn-flat waves-effect waves-dark">home</a> ?</p>
        </div>
    );
}