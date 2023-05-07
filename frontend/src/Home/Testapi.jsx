import React, {useState} from 'react'
import { Nav } from '../common/Nav';
import { BootstrapLoader } from '../common/BootstrapLoader';

import GaugeChart from 'react-gauge-chart';

export const Testapi = () => 
{
    const [max, setmax] = useState(0);
    const [wait, setwait] = useState(false);
    const [label, setlabel] = useState("")
    const [text, settext] = useState("");

    var error = {
      error: "Model AK776161/birdseye_roberta-base-tweet-eval is currently loading",
      estimated_time: 20
    }

    const handleClick = () => 
    {
      async function query(data) {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/AK776161/birdseye_roberta-base-tweet-eval",
          {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
          }
        );
        const result = await response.json();
        return result;
      }

      async function query_18(data) {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/AK776161/birdseye_roberta-base-18",
          {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
          }
        );
        const result = await response.json();
        return result;
      }
    
      var test_target = text+""

      console.log(test_target)
  
      query({"inputs": test_target}).then((response) => 
      {
        console.log(response)   
        if(response.error === error.error)
        {
          setwait(true);
        }   

        response.map((item) => {
          setwait(false);

          if(item[0].label === "LABEL_0")
          {
            setmax(33.333 - ((((item[0].score)*100)*33.3333)/100))
            setlabel("Negative")
          }
          else if(item[0].label === "LABEL_2")
          {
            setmax(item[0].score *100)
            setlabel("Positive")
          }
          else if(item[0].label === "LABEL_1")
          {
              if(item[1].label === "LABEL_0" && item[1].score >= 0.108)
              {
                query_18({"inputs": test_target}).then((response) => {
                  if(response.error === error.error)
                  {
                    setwait(true);
                  } 
                  response.map((item) => {
                    setmax(33.333 - ((((item[0].score)*100)*33.3333)/100))
                    setlabel("Negative")
                  })
                })
            }
            else{
              setmax(33.33 +(item[0].score *100)*(66.66-33.33)/133.33)
              setlabel("Neutral")
            }
          }
      });
     })
  }
     
    const handleChange = (event)=> {
      settext(event.target.value)
    }
    


  console. log(max);

  return (
    <div className='test'>
    <Nav/>
          <div className='search_test'>
          
          <div className='heading'><h1>API Testing</h1></div>

            <div class="input-group mb-3">
            
                <input type="text" class="form-control border-success" placeholder="Enter Any Text" aria-label="Enter Any Text" aria-describedby="button-addon2" onChange={handleChange}/>
                <button class="btn btn-success" type="button" id="button-addon2" onClick={handleClick}>Get Label</button>
            </div>
            <div className='gauge'>
              <h2>Negative</h2>
              {
                wait? 
              <BootstrapLoader/>
               :
              (<><GaugeChart id ='gauge-chart' 
                percent={max/100}
                nrOfLevels = {35}
                colors= {["#FF0000", "#d8392b", "#00FF00"]}
                arcWidth = {0.3}
                needleBaseColor = "#0000000"
                style={{width : '800px'}}
                animate = {false}
                hideText = {true}
              />
              <h2>Positive</h2>
              </>)
              }
            </div>
            <h3>Label: {label}</h3>
        </div>
    </div>
  )
}
