import { useRef } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";

const FormData = ({ onSubmitForm }) => {
  const textRef = useRef("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    onSubmitForm({ text: textRef.current.value });
    textRef.current.value = "";
  };

  return (
    <Container className="d-flex justify-content-center bg-danger">
      <Form onSubmit={onSubmit} className="d-flex justify-content-center">
        <Form.Control
          ref={textRef}
          required
          id="text"
          name="text"
          className="m-2"
          placeholder="Insertar texto"
        />
        <Button className="m-2" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

FormData.defaultProps = {
  onSubmitForm: () => {},
};

FormData.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default FormData;
