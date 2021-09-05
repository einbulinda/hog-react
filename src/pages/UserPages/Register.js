import { useState, useEffect } from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import FormInput from "../../components/Forms/FormInput";
import { signUpUserStart } from "../../redux/User/user.action";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN, ROOT } from "../../navigation/CONSTANTS";
import { useHistory } from "react-router";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userError: user.userError,
});

const Register = (props) => {
  const { currentUser, userError } = useSelector(mapState);
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      resetForm();
      // alert("Password reset link has been sent to registered email.");
      history.push(ROOT);
    }
  }, [history, currentUser]);

  useEffect(() => {
    if (Array.isArray(userError) && userError.length > 0) {
      setErrors(userError);
    }
  }, [userError]);

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUpUserStart({
        displayName,
        email,
        password,
        confirmPassword,
      })
    );
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
              <Link to={LOGIN}>Sign In </Link>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default withRouter(Register);
