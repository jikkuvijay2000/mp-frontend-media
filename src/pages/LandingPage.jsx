import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import {useNavigate} from 'react-router-dom'

function LandingPage() {

  const navigateByUrl = useNavigate();

  return (
    <>
      <Row className='mt-5 align-items-center justify-content-evenly w-100'>
        <Col lg={5}>
          <h1 style={{ fontSize: '40px' }}>Welcome to <span className='text-warning'>Media Player</span></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nulla suscipit iusto voluptates, deleniti illo laudantium, aspernatur labore molestias quia, ea dolorum! Modi laudantium ut maxime aperiam eius numquam tempore.
          </p>
          <button onClick={()=>navigateByUrl('./home')} className='btn btn-info mt-4'>Get Started</button>
        </Col>
        <Col lg={5}>
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*f7cZomxEUsR2AYQVlUXZog.gif" alt="gif" style={{ width: '100%' }} />
        </Col>
      </Row>


      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>

          <Card style={{ width: '18rem', height:'25rem' }} className='p-4 bg-info'>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1138853/screenshots/4846677/media/1ba6b620f6fac5cc0e19e507847b53a1.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', height:'25rem' }} className='p-4 bg-info'>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1912990/screenshots/6129020/cloud_computing.gif" />
            <Card.Body>
              <Card.Title>Categorized Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', height:'25rem' }} className='p-4 bg-info'>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1262406/screenshots/10965278/media/1d3b1fa4ca5f0ddcb5a67bebab95452b.gif" />
            <Card.Body>
              <Card.Title>Playing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>

      </div>

      <div className='container border border-light rounded-5 p-5 mb-5 d-flex alignt-items-center justify-content-between w-100'>
        <div className='col-lg-5'>
          <h1 className='text-warning'>Simple, Poweful & Fast</h1>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>:
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore est, maiores nisi repellendus vel, laboriosam beatae doloribus laborum, voluptate officiis neque eos! Inventore nemo quod voluptate aliquid facilis, odit iure.
          </h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Categorize Videos</span>:
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore est, maiores nisi repellendus vel, laboriosam beatae doloribus laborum, voluptate officiis neque eos! Inventore nemo quod voluptate aliquid facilis, odit iure.
          </h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing Videos</span>:
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore est, maiores nisi repellendus vel, laboriosam beatae doloribus laborum, voluptate officiis neque eos! Inventore nemo quod voluptate aliquid facilis, odit iure.
          </h6>
        </div>

        <div className="video col-lg-5">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/9AizchSQURA?si=UCYG3mr8Bqyfg7NG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded-4 mt-5'></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage