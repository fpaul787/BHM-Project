import React from 'react'
import PropTypes from 'prop-types'

const Card = ({property}) => {
    const {index, name, picture} = property

    

    return(
        <div id={`card-${index}`} className="card">
            <img src={require(`${picture}`)} alt={name}/>            
        </div>
    )
}
Card.propTypes = {
    property: PropTypes.object.isRequired
}
export default Card