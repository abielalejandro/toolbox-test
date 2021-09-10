import { Container } from "react-bootstrap";

const Wrapper = (props) => {
  return <Container fluid>{props.children}</Container>;
};

export default Wrapper;
