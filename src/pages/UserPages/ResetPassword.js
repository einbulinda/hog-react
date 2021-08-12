import { useState, useEffect } from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import FormInput from "../../components/Forms/FormInput";
import { resetUser } from "../../redux/User/user.action";

const mapState = ({ user }) => ({
  resetUserSuccess: user.resetUserSuccess,
  resetUserError: user.resetUserError,
});

const ResetPassword = (props) => {
  const { resetUserSuccess, resetUserError } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetUserSuccess) {
      alert("Password reset link sent successfully.");
      props.history.push("/login");
    }
  }, [resetUserSuccess]);

  useEffect(() => {
    if (Array.isArray(resetUserError) && resetUserError.length > 0) {
      setErrors(resetUserError);
    }
  }, [resetUserError]);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(
      resetUser({
        email,
      })
    );
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
