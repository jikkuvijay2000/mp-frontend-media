import React, { useState } from 'react'
import Add from '../Components/Add';
import View from '../Components/View';
import Category from '../Components/Category';
import { Link } from 'react-router-dom';

function Home() {

  const [uploadVideoResponse, setUploadVideoResponse] = useState({});
  const [dropVideoResponse, setDropVideoResponse] = useState({});

  return (
    <>
    <div className="container mt-3 mb-5 d-flex  justify-content-between">
      <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
      </div>

      <Link to={'/watchhistory'} style={{textDecoration:'none', color:'blueviolet', fontSize:'20px'}} className='fs-6 mt-2'>
        Watch-History <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>

    <div className="container-fluid row w-100 mt-5 mb-5">
      <div className="all-videos col-lg-9">
        <h2>All-Videos</h2>
        <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
      </div>

      <div className="category col-lg-3">
        <Category dropVideoResponse={dropVideoResponse}/>
      </div>
    </div>
    </>
  )
}

export default Home