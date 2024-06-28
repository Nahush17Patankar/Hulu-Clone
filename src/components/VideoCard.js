import React, { useEffect, useState } from 'react'
import {MdPoll} from 'react-icons/md'
import {FaImdb, FaPlayCircle} from 'react-icons/fa'
import './css/VideoCard.css'
import ReactCardFlip from 'react-card-flip'
import PreviewModal from '../utils/PreviewModal'
import { truncate } from '../utils/truncate'
import movieTrailer from 'movie-trailer'
export const base_url = "https://image.tmdb.org/t/p/original"



const VideoCard = ({data}) => {
    const [flipped, setFlipped] = useState(false)
    const [visible, setVisible] = useState(false)
    const [url, setUrl ] = useState("")

    useEffect(() => {
        movieTrailer(data?.original_title || data?.title).
        then((res) => {
                setUrl(res)

        }).catch((err) => {
            console.log("Temporarily unavailable")
        })

    }, [data?.original_title, data?.title])
    
    


  return (<>
   <ReactCardFlip isFlipped={!flipped} flipDirection='horizontal' >
    
    <div style={{
        width: 250,
        height: 435,
        cursor: 'pointer',

    }} onClick= {() => setFlipped(!flipped)}
    className='videoCard'>
        
            <h2 style={{color: '#fff'}}>{truncate(data?.original_title || data?.title, 18)}</h2>
            <p>{truncate(data?.overview, 150)}</p>
            <span style={{
                display: "flex",
                alignItems: 'center'
            }}>
                <MdPoll 
                size={"30px"} 
                style={{marginRight: "10px"}}
                />{data?.vote_count} | {data?.release_data}</span>


            <span style={{
                display: "flex",
                alignItems: 'center',
                flex: 1,
                margin: '5px 0px',
            }}>
                <FaImdb 
                size={"30px"} 
                style={{marginRight: "10px"}} />{data?.vote_average}
            </span>
            <span onClick = {() => setVisible(true)}
            style={{
                display: "flex",
                alignItems: 'center',
                flex: 1,
                margin: '50px 0px',
            }}>
                <FaPlayCircle color='#16DA8E' size={"60px"} style={{marginRight: "10px"}} />
                <strong style={{
                    fontSize: "28px",
                    fontWeight: 400,
                    margin: "0px 5px"
                }}>
                    Watch Now
                </strong>



            </span>
                            
        </div>

        
        <div style= {{
            width: 250,
            height: 435,
            cursor: 'pointer'
        }} onClick= {() => setFlipped(!flipped)}
        className='videoCard'>
            <img 
            src = {`${base_url}${data?.poster_path}`} 
            alt= 'poster'/>
            <h3 style={{
                color: "#fff",
                margin: "10px  10px "
            }}>{truncate(data?.original_title || data?.title, 18)}</h3>

        </div>
        </ReactCardFlip>

        <PreviewModal 
        visible={visible} 
        setVisible={setVisible}
        data = {data}
        url= {url}
        
        />
        </>
  )
}

export default VideoCard