import React from "react";


const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', height: '80vh' }}>
            {props.children}
            {/* We reference the Cardlist placed within the Scroll tag in our App.js */}
        </div>
    );
}


export default Scroll;