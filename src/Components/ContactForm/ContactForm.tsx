import { FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./ContactForm.css"

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

{/* contact form doesn't currently store data on back-end */}

  return (
    
    <div id='contact-form'>
    <Form  noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className='form-label'>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback className='form-feedback'>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className='form-label'>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback className='form-feedback'>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label className='form-label'>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback className='form-feedback' type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='form-label'>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback className='form-feedback' type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label className='form-label'>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback className='form-feedback' type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label className='form-label'>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback className='form-feedback' type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group>
        <Form.Label className='form-label'>Message</Form.Label>
          <Form.Control type="text" placeholder="Question/Message" required />
          <Form.Control.Feedback className='form-feedback' type="invalid">
            Please enter a message or question.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
      </Form.Group>
      <Button variant="outline-light" id="contact-button" type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default ContactForm;