import React from 'react'

const About = () => {

    const aboutStyle = {
        border: "2px solid #d3d3d3",
        borderRadius: "7px",
        margin: "50px auto",
        padding: "25px",
        minHeight : "80vh",
    }
    return (
        <div className="container" style={aboutStyle}>
            <h4 className="pb-2">About TO-DO LIST Application</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><ion-icon name="arrow-forward-outline"></ion-icon> This application is a single page react application.</li>
                <li class="list-group-item">single page application means, Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.</li>
                <li class="list-group-item">In this application you also do not lose the list to do the reloading of the page.</li>
                <li class="list-group-item">Also you can add and delete To-Do list.</li>
                <li class="list-group-item">For learning React.js, visit on <a href="https://reactjs.org/" target="_blank" >https://reactjs.org/</a></li>
            </ul>
        </div>
    )
}

export default About
