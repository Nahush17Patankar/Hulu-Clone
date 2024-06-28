import React from 'react'
import { MdHome, MdTrendingUp, MdLiveTv, MdCollectionsBookmark, MdSearch, MdPerson } from 'react-icons/md'
import './css/Header.css'
import request from '../request'
import { Dropdown, Input } from 'antd'




const Header = ({setSelectedOption}) =>  {
  const onSearch = (value) => {
    let val = String(value).replace(" ", "+")
    setSelectedOption(request.searchMovies + val)

  }
  return (
    <div className='header'>
      <div className='header_icons'>
        <div onClick={()=> setSelectedOption(request.fetchAnimation)} className='header_icon'>
            <MdHome size={'30px'} />

        <p>Home</p>
        </div>

        <div onClick={()=> setSelectedOption(request.fetchTrending)} className='header_icon'>
        <MdTrendingUp size={'30px'}/>

        <p>Trending</p>
        </div>

        <div onClick={()=> setSelectedOption(request.fetchTV)} className='header_icon'>
        <MdLiveTv  size={'30px'}/>
        <p>Verified</p>
        </div>

        <div onClick={()=> setSelectedOption(request.fetchTrending)} className='header_icon'>
        <MdCollectionsBookmark size={'30px'} />
        <p>Collections</p>
        </div>

        <div className='header_icon'>
        <Dropdown overlay=
        {
          <Input.Search 
          placeholder='Search Movies, Collections, TV...'
          enterButton="Search"
          size='large'
          onSearch={onSearch}

          
          
          />

        }
        placement={"bottomLeft"}
        overlayStyle={{
          background: "transparent"
        }}
        
        >
        
        
        <MdSearch size={'30px'} />
        
        
        
        </Dropdown>
        </div>

        <div className='header_icon'>
        <MdPerson size={'30px'}/> 
        <p>Account</p>
        </div>

    </div>
    <img src={'https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png'}/>
      
    </div>
  )
}

export default Header 
 