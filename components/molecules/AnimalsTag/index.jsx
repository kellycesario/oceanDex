import React from 'react'
import Text from "@atoms/Text/Text";
import oceananimals from "../../../../javascript-oceandex/oceananimals.json"
import styles from "./AnimalsTag.module.scss";


function AnimalsTag(props) {
    console.log(oceananimals)
    const animals = oceananimals
    console.log(animals.map((animal => animal.id)))
    console.log(animals)
  return (
  <>
  
    
    
    	<div className={styles[`AnimalsTag--bg`]}>
      <Text className={styles[`AnimalsTag--text`]} color="black" size="1.2rem" key={animals.id}>this is us</Text>
      
      </div>

    
    
    
   
  

 
  
    
    </>
  )
 
  
}

export default AnimalsTag