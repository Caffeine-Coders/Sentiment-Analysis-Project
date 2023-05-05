import React from 'react'

export const Bootstrapprogress = ({positive, negative, neutral}) => {
  return (
    <div className='pro'>
    <div class="progress" role="progressbar" aria-label="Success example 40px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "40px"}}>
        <div class="progress-bar bg-success" style={{width:positive}}>POSITIVE: {positive}</div>
    </div>
    <div class="progress" role="progressbar" aria-label="Warning example 50px high" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: "40px"}}>
        <div class="progress-bar bg-warning text-dark" style={{width:neutral}}>Neutral: {neutral}</div>
    </div>
    <div class="progress" role="progressbar" aria-label="Warning example 50px high" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: "40px"}}>
        <div class="progress-bar bg-danger" style={{width:negative}}>Negative: {negative}</div>
    </div>
    <br/>
    </div>
  )
}
