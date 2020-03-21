import React, {useState} from 'react';
import './css/App.css';
import Card from './components/Card'
import data from './data/data.json'


const App = () => {
  
  const properties = data.properties
  const [property, setProperty] = useState(data.properties[0])
  

  const nextProperty = () => {
    // Number wrapper object which allows
    // you to work with numerical values

    let newIndex = Number(property.index) + 1    
    setProperty(properties[newIndex])
  }

  const prevProperty = () => {

    let newIndex = Number(property.index) - 1        
    setProperty(properties[newIndex])
  }


  return (
    
    
    <div >      

      <div className="nav-buttons">
      <button onClick={prevProperty}
        disabled={Number(property.index) === 0}>Previous</button> 
      <button onClick={nextProperty}
        disabled={Number(property.index) === properties.length -1}>Next</button>
      </div>
      
        
      <div className="page">
        <section>
        <h1 className="App-header">
          Prominent Women in Black History
        </h1>
        </section>
        
        <div className="col">        
        <div className={`cards-slider active-slide-${property.index}`}>
          <div className="cards-slider">
            <div className="cards-slider-wrapper" style={{
              'transform': `translateX(-${property.index*(100/properties.length)}%)`
            }}> 
              {
                properties.map(property => <Card key={property._key} property={property} />)
              }
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
