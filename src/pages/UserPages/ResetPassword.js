import { Component } from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import FormInput from "../../components/Forms/FormInput";
import { auth } from "../../firebase/utils";

const initialState = {
  email: "",
  errors: [],
};

class ResetPassword extends Component {
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

  handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const { email } = this.state;

      const config = {
        url: "http://localhost:3000/account",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          alert("Password reset link sent successfully.");
          this.props.history.push("/account");
        })
        .catch(() => {
          const err = ["Email not registered. Lets register!"];
          this.setState({
            errors: err,
          });
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { email, errors } = this.state;
    return (
      <Container className="p-4">
        <Card className="col-sm-6 col-md-4 text-center mt-4 mx-auto">
          <Card.Header as="h2">LOGIN</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleForgotPassword}>
              {errors.length > 0 && (
                <ListGroup className="mb-3" variant="flush">
                  {errors.map((err, index) => {
                    return (
                      <ListGroup.Item
                        variant="danger"
                        className="text-danger"
                        key={index}
                      >
                        <Link className="text-danger" to="/register">
                          {err}
                        </Link>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              )}
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Enter registered email"
                inputIcon="user"
                size="lg"
                onChange={this.handleChange}
              />
              <Button type="submit" variant="dark" className="px-4" size="lg">
                RESET PASSWORD
              </Button>
            </Form>
            <Card.Text className="p-3">
              <Link to="/account">Sign In</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default withRouter(ResetPassword);
