import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";

import ItemResult from "../../components/ItemResult/ItemResult";
const ItemResultList = ({ items }) => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "60%" }}>
        <Card.Body>
          <Card.Title>Solicitudes</Card.Title>
          {items &&
            items.length > 0 &&
            items.map((item, i) => {
              return <ItemResult key={i} result={item} />;
            })}
        </Card.Body>
      </Card>
    </Container>
  );
};

ItemResultList.defaultProps = {
  items: [],
};

ItemResultList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      isPalindrome: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default ItemResultList;
