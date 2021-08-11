import { useState } from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import FormInput from "../../components/Forms/FormInput";
import { auth } from "../../firebase/utils";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          alert("Password reset link sent successfully.");
          this.props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not registered. Lets register!"];
          setErrors([err]);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className="p-4">
      <Card className="col-sm-6 col-md-4 text-center mt-4 mx-auto">
        <Card.Header as="h2">LOGIN</Card.Header>
        <Card.Body>
          <Form onSubmit={handleForgotPassword}>
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="dark" className="px-4" size="lg">
              RESET PASSWORD
            </Button>
          </Form>
          <Card.Text className="p-3">
            <Link to="/login">Sign In</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default withRouter(ResetPassword);
