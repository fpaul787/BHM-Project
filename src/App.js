import React, {useState} from 'react';
import './App.css';
import Card from './Card'
import data from './data/data.json'


const App = () => {
  
  const [properties, setProperties] = useState(data.properties)
  const [property, setProperty] = useState(data.properties[0])
  

  const nextProperty = () => {
    const newIndex = property.index + 1
    setProperty(properties[newIndex])
  }

  const prevProperty = () => {
    const newIndex = property.index - 1
    setProperty(properties[newIndex])
  }

  return (
    
    <div className="App">
      
      <button onClick={() => prevProperty}
        disabled={property.index === properties.length -1}>Previous</button> 
      <button onClick={() => nextProperty}
        disabled={property.index === properties.length -1}>Next</button>      
        
      <div className="page">
        <section>
        <h1 className="App-header">
          Black History Month Project
        </h1>
        </section>
        
        <div className="col">
          <div className="cards-slider">
            <div className="cards-slider-wrapper"> 
              <Card property={property}>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
