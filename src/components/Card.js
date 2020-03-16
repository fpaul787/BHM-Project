import React from 'react'
import PropTypes from 'prop-types'


const Card = ({property}) => {
    var index
    var name
    var picture
    var bio
    
    if(property == null){
        index = -1
        name = "Test Image"
        picture = "https://projectphotos.blob.core.windows.net/photos/testImage.jpg"
    }else{
        index = property.index
        name = property.name
        picture = property.picture
        bio = property.bio

    }
    
    return(        
        <div id={`card-${index}`} className="card"> 
            <img src={picture} alt={name}/>
            <h2>{name}</h2>
            {
                bio.map(b => <h3>{b}</h3>)
            }
                    
        </div>
    )
}
Card.propTypes = {
    property: PropTypes.object.isRequired
}
export default Card