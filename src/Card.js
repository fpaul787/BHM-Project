//import React, {useState, useEffect} from 'react'
import React from 'react'
import PropTypes from 'prop-types'


const Card = ({property}) => {
    const {index, name, picture} = property

    /* Doing too much */
    // const [index, setIndex] = useState("")
    // const [name, setName] = useState("")
    // const [picture, setPicture] = useState("")

    // useEffect(() => {
    //     setIndex(property.index)
    //     setName(property.name)
    //     setPicture(property.picture)
    // }, [property])
    

    console.log(name)
    return(
        
        <div id={`card-${index}`} className="card"> 
            <img src={picture} alt={name}/>
            <h2>{name}</h2>         
        </div>
    )
}
Card.propTypes = {
    property: PropTypes.object.isRequired
}
export default Card