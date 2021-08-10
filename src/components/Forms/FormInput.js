import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, InputGroup } from "react-bootstrap";

const FormInput = ({ handleChange, label, inputIcon, ...otherProps }) => {
  return (
    <Form.Group className="mb-3">
      <InputGroup size="lg">
        {label && <Form.Label>{label}</Form.Label>}
        {inputIcon && (
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon className="text-dark" icon={inputIcon} />
          </InputGroup.Text>
        )}
        <Form.Control onChange={handleChange} {...otherProps} />
      </InputGroup>
    </Form.Group>
  );
};

export default FormInput;
