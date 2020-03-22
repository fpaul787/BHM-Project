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
    
    // in order to get the right amount of cards to show up,
    // everytime new item is added to json file, please 
    // change for loop in App.scss 
    return(      
        <React.Fragment> 
        <div id={`card-${index}`} className="card"> 
            <img src={picture} alt={name}/>
            <h2>{name}</h2>
            
            {
                bio.map(b => <h3>{b}</h3>)
            }
            <a target="_blank" rel="noopener noreferrer" className="more-info" href={property.link}>Click for more info</a>            
        </div>       
        </React.Fragment> 
    )
}
Card.propTypes = {
    property: PropTypes.object.isRequired
}
export default Card