import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Foorm() {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="number" placeholder="Enter Number" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Enter your message..." />
      </Form.Group>
      <Button variant="primary" type="submit" style={{}}>
        Submit
      </Button>
    </Form>
  );
}

export default Foorm;