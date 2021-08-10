import { Component } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { auth, signInWithGoogle } from "../../firebase/utils";
import { Link } from "react-router-dom";
import FormInput from "../../components/Forms/FormInput";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
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
  handleSignin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container className="py-4">
        <Card className="p-2 text-center mx-auto" style={{ width: "50rem" }}>
          <Card.Header as="h2">LOGIN</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSignin}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                inputIcon="user"
                size="lg"
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                inputIcon="lock"
                size="lg"
                handleChange={this.handleChange}
              />
              <Button type="submit" variant="dark" className="px-4" size="lg">
                SIGN IN
              </Button>
            </Form>
            <Button
              size="lg"
              variant="dark"
              className="d-block mx-auto px-4 my-3"
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </Button>
            <Card.Text className="row">
              <div className="col-6">
                <Link to="/register">Register Account?</Link>
              </div>
              <div className="col-6">
                <Link to="/reset-password">Forgot Password?</Link>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default SignIn;
