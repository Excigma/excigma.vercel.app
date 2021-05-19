import React from "react";

export default function InternalError() {
    return (
        <div className="container">
            <h1>500 - Internal Server Error</h1>
            <p>You broke the server. I don't know how you got here, but please <b>goto</b> <a href="/" className="btn-flat waves-effect waves-dark">home</a> and stop trying to break me :(</p>
        </div>
    );
}