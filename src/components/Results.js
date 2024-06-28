import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
// import FlipMove from 'react-flip-move'
import './css/Results.css'
import axios from '../axios'
import { Skeleton } from 'antd'

function Results ({selectedOption}) {

  const [movies, setMovies] = useState()
  useEffect(() => {
    async function fetchData(){
      setMovies()
      const request = await axios.get(selectedOption)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [selectedOption])

  console.log(movies)
  return (
    
    <div className='results'>
        {/* <FlipMove> */}
        { !movies && 
          [...Array(20)].map((_, idx) => (<>

          <div key={idx}>
            <Skeleton.Input 
            active style={{
              width:240,
              height:350,
              margin:"20px",
              borderRadius: "4%"
            }}
            
            
            
            />
          </div>
          
          
          
          </>)
          
          
          
        )
        }
        {
          movies?.map((data, idx) => 
          <VideoCard key={idx} data={data}/>
          )
        }
        <VideoCard />

        {/* </FlipMove> */}
      

    </div>
  )
}

export default Results
