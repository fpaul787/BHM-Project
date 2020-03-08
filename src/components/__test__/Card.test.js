import React from 'react'
import ReactDOM from 'react-dom' // we need to render stuff
import Card from '../Card' // import our component
import data from '../../data/data.json'

import {cleanup} from '@testing-library/react'

afterEach(cleanup)
// Make sure component renders as it is
it("renders without crashing", () =>{
    const div = document.createElement("div")
    // attach component to div
    ReactDOM.render(<Card ></Card>, div)
})

// Make sure component renders as it is
it("renders card without crashing", () =>{
    const div = document.createElement("div")
    // attach component to div
    ReactDOM.render(<Card property={data.properties[0]}></Card>, div)
})

