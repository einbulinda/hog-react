import { useState } from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormInput from "../../components/Forms/FormInput";
import { auth, handleUserProfile } from "../../firebase/utils";

const Register = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      const err = ["Passwords provided do not match."];
      setErrors([err]);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="py-4">
      <Card className="p-2 text-center mx-auto" style={{ width: "50rem" }}>
        <Card.Header as="h2">REGISTER ACCOUNT</Card.Header>
        <Card.Body>
          {errors.length > 0 && (
            <ListGroup className="mb-3" variant="flush">
              {errors.map((err, index) => {
                return (
                  <ListGroup.Item
                    variant="danger"
                    className="text-danger"
                    key={index}
                  >
                    {err}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
          <Form onSubmit={handleFormSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Enter Name"
              onChange={(e) => setDisplayName(e.target.value)}
              inputIcon="user"
              size="lg"
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              inputIcon="envelope"
              size="lg"
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              inputIcon="lock"
              size="lg"
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              inputIcon="lock"
              size="lg"
            />
            <Button type="submit" variant="dark" className="px-4" size="lg">
              REGISTER
            </Button>
          </Form>
          <Card.Text className="my-3">
            <span>
              <Link to="/account">Sign In </Link>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
