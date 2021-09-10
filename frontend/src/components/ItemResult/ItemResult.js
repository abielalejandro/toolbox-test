import { Alert } from "react-bootstrap";

const ItemResult = ({ result }) => {
  return (
    <Alert variant={result.isPalindrome ? "success" : "warning"}>
      <p>Enviado: {result.origin}</p>
      <p>Recibido: {result.text}</p>
      <p>Es palindrome: {result.isPalindrome ? "Si" : "No"}</p>
    </Alert>
  );
};

export default ItemResult;
