import React from 'react'
import PropTypes from 'prop-types'


const Card = ({property}) => {
    var index
    var name
    var picture
    
    if(property == null){
        index = -1
        name = "Test Image"
        picture = "https://projectphotos.blob.core.windows.net/photos/testImage.jpg"
    }else{
        index = property.index
        name = property.name
        picture = property.picture
    }
    
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