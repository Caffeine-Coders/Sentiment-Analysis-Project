import React, {useState} from 'react'
import { Nav } from '../common/Nav';

export const Testapi = () => 
{
    const [postive, setpositive] = useState(0);
    const [neutral, setneutral] = useState(0);
    const [negative, setnegative] = useState(0);

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
    
    query({"inputs": "h"}).then((response) => 
    {
      console.log(JSON.stringify(response));
    });

  return (
    <div className='test'>
    <Nav/>
        <div className='search_test'>
        <div class="input-group mb-3">
            <input type="text" class="form-control border-success" placeholder="Enter Any Text" aria-label="Enter Any Text" aria-describedby="button-addon2" />
            <button class="btn btn-success" type="button" id="button-addon2">Get Label</button>
        </div>
        </div>
    </div>
  )
}
