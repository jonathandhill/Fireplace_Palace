'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './styleReviews.module.css'

export default function ReviewsComponent() {
    const [ selectedCountry, setCountry ] = useState(null);
    const [ england, setEngland ] = useState(false);
    const [ scotland, setScotland ] = useState(false);
    const [ wales, setWales ] = useState(false);

function handleClick(place){
console.log(selectedCountry);
setCountry(place)
        }
    //    let btn = [
    //     {place:'england', text:''},
    //     {place:'england', text:''},
    //     {place:'england', text:''}

    //    ]
useEffect(()=>{
    setEngland(selectedCountry === 'England');
    setScotland(selectedCountry === 'Scotland');
    setWales(selectedCountry === 'Wales');
}, [ selectedCountry])

  return (
    <>
<section>

    <article className={styles.reviewContainer}>
        <h1>Trusted</h1>
        <p>We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</p>
        <div class={styles.buttonContainer}>
        
            <button onClick={()=>handleClick('England')} 
            className={`${styles.countryButtons} ${england && styles.buttonSelected}`}>England</button>

            <button onClick={()=>handleClick('Wales')} 
            className={`${styles.countryButtons} ${wales && styles.buttonSelected}`}>Wales</button>

            <button onClick={()=>handleClick('Scotland')}
             className={`${styles.countryButtons} ${scotland && styles.buttonSelected}`}>Scotland</button>
        </div>
    </article>
</section>
    </>
  )
}
