import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Foorm() {
  return (
    <Form>
      <Form.Group className="mb-2" style={{padding: "2px 0"}}>
        <Form.Control type="text" placeholder="Enter Name" style={{padding: "2px 0"}}/>
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Control type="number" placeholder="Enter Number" style={{padding: "2px 0"}}/>
      </Form.Group>
      <Form.Group className="mb-2" >
        <Form.Control type="email" placeholder="Enter Email" style={{padding: "2px 0"}}/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Enter your message..." style={{padding: "2px 0"}}/>
      </Form.Group>
      <Button variant="primary" type="submit" style={{padding: "2px 5px", fontSize:"12px"}}>
        Submit
      </Button>
    </Form>
  );
}

export default Foorm;