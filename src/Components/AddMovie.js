import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddMovie({Add}) { 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [rating,setRating] = useState("")
  const [posterUrl,setPosterUrl] = useState("")
  const [trailer,setTrailer] = useState("")


  const handletDescription =(e)=>{
    setDescription(e.target.value)
  }
  const handleTitle =(e)=>{
    setTitle(e.target.value)
  }
  const handleRating =(e)=>{
    setRating(e.target.value)
  }
  const handlePosterUrl =(e)=>{
    setPosterUrl(e.target.value)
  }
  const handleTrailer =(e)=>{
    setTrailer(e.target.value)
  }

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name='Title'
                onChange={(e)=>handleTitle(e)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control type='text' name='Description' onChange={(e)=>handletDescription(e)}/>
            </Form.Group>

            <Form.Group
              className="mb-3"
            >
              <Form.Label>posterURL</Form.Label>
              <Form.Control type='text' name='posterURL' onChange={(e)=>handlePosterUrl(e)}/>
            </Form.Group>

            <Form.Group
              className="mb-3"
            >
              <Form.Label>rating</Form.Label>
              <Form.Control type='text' name='rating' onChange={(e)=>handleRating(e)}/>
            </Form.Group>

            <Form.Group
              className="mb-3"
            >
              <Form.Label>Trailer</Form.Label>
              <Form.Control type='text' name='Trailer' onChange={(e)=>handleTrailer(e)}/>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>(Add({id:Math.random(),title:title,description:description,rating:rating,posterUrl:posterUrl,trailer:trailer}),handleClose())}>
            Add New Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;