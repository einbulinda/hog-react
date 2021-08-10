import { Component } from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormInput from "../../components/Forms/FormInput";
import { auth, handleUserProfile } from "../../firebase/utils";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const err = ["Passwords provided do not match."];
      this.setState({
        errors: err,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      this.setState({ ...initialState });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword, errors } =
      this.state;

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
            <Form onSubmit={this.handleFormSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                placeholder="Enter Name"
                onChange={this.handleChange}
                inputIcon="user"
                size="lg"
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email address"
                onChange={this.handleChange}
                inputIcon="envelope"
                size="lg"
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={this.handleChange}
                inputIcon="lock"
                size="lg"
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={this.handleChange}
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
  }
}

export default Register;
