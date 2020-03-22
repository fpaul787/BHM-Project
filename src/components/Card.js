import React from 'react'
import PropTypes from 'prop-types'


const Card = ({property}) => {
    var index   // index of property in json file
    var name    // name of property    
    var picture // link to picture for property
    var bio     // bio for property
    var years   // (BirthDate - DateofDeath)
    
    
    
    if(property == null){
        index = -1
        name = "Test Image"
        picture = "https://projectphotos.blob.core.windows.net/photos/testImage.jpg"
    }else{
        index = property.index
        name = property.name
        picture = property.picture
        bio = property.bio
        years = property.years
    }
    
    // in order to get the right amount of cards to show up,
    // everytime new item is added to json file, please 
    // change for loop in App.scss 
    return(      
        <React.Fragment> 
        <div id={`card-${index}`} className="card"> 
            <img src={picture} alt={name}/>
            <h2 className="name">{name}</h2>
            <h4>{years}</h4>
            {
                bio.map(b => <h3 className="bio">{b}</h3>)
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