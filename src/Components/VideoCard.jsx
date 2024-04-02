  import React, { useState } from 'react'
  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import Modal from 'react-bootstrap/Modal';
  import { addVideosToHistoryAPI, deleteVideoAPI } from '../../services/allAPI';



  function VideoCard({video,setDeleteVideoResponse,insideCategory}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () =>{
      setShow(true);

      const {caption, link} = video;

      let today = new Date();
      let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(today);
      let videoHistory = {caption,link,timeStamp};

      await addVideosToHistoryAPI(videoHistory);
    };


    const removeVideo = async (id)=>{
      await deleteVideoAPI(id);
      setDeleteVideoResponse(true);
    }


    const dragStarted=(e,id) =>
    {
      console.log("Drag started...video ID:"+id);
      e.dataTransfer.setData("VideoId",id);
    }
    

    return (
      <div>
        <Card draggable onDragStart={e=>dragStarted(e,video?.id)} className='m-2' style={{ width: '16rem' }}>
          <Card.Img variant="top" src={video.url} height={350}  onClick={handleShow} />
          <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-center'>
              <h6 className='m-2'>{video?.caption}</h6>

              {insideCategory?null:<Button onClick={()=>removeVideo(video?.id)} variant="primary"><i className="fa-solid fa-trash"></i></Button>}
            </Card.Title>

          </Card.Body>
        </Card>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Video</Modal.Title>
          </Modal.Header>
          <iframe width="100%" height="574" src={video?.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal>
      </div>
    )
  }

  export default VideoCard