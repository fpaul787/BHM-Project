import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../Card'
import data from '../data/data.json'

// Make sure component renders as it
it("renders without crashing", () =>{
    const div = document.createElement("div")
    // attach component to div
    ReactDOM.render(<Card property={data.properties[0]}></Card>, div)
})