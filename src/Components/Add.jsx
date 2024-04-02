import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../../services/allAPI';

function Add({ setUploadVideoResponse }) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [uploadVideos, setuploadVideos] = useState({
    id: "", caption: "", url: "", link: ""
  });

  console.log(uploadVideos);

  const getYoutubeEmbedLink = (e) => {
    const { value } = e.target;
    if (value.includes("v=")) {
      let videoID = value.split("v=")[1].slice(0, 11);
      setuploadVideos({ ...uploadVideos, link: `https://www.youtube.com/embed/${videoID}?autoplay=1` });
    } else {
      setuploadVideos({ ...uploadVideos, link: "" });
    }
  }

  // upload video
  const handleAdd = async () => {
    const { id, caption, url, link } = uploadVideos;

    if (!id || !caption || !url || !link) {
      alert("Fields should not empty");
    }
    else {
      // Store uploaded videos to json server
      const result = await uploadVideoAPI(uploadVideos);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setuploadVideos({
          id: "", caption: "", url: "", link: ""
        })

        // Update videos after uploading it to the server
        setUploadVideoResponse(result.data);
      }
      else {
        alert("Id already exists!!")
      }
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <button className='btn' onClick={handleShow}>
          <span className='fs-6'>Upload Videos</span> <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <FloatingLabel controlId="floatingInput" label="Video Id" className="mb-3">
            <Form.Control type="text" placeholder="Video Id" onChange={(e) => setuploadVideos({ ...uploadVideos, id: e.target.value })} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Video Name" className="mb-3">
            <Form.Control type="text" placeholder="Video Name" onChange={(e) => setuploadVideos({ ...uploadVideos, caption: e.target.value })} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
            <Form.Control type="text" placeholder="Image URL" onChange={(e) => setuploadVideos({ ...uploadVideos, url: e.target.value })} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Video URL">
            <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeEmbedLink} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add