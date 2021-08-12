import { useState, useEffect } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogle } from "../../firebase/utils";
import { Link, withRouter } from "react-router-dom";
import FormInput from "../../components/Forms/FormInput";
import { signInUser } from "../../redux/User/user.action";

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const SignIn = (props) => {
  const { signInSuccess } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      props.history.push("/");
    }
  }, [signInSuccess]);

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(signInUser({ email, password }));
  };

  return (
    <Container className="py-4">
      <Card className="p-2 text-center mx-auto" style={{ width: "50rem" }}>
        <Card.Header as="h2">LOGIN</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSignin}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              inputIcon="user"
              size="lg"
              handleChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              inputIcon="lock"
              size="lg"
              handleChange={(e) => setPassword(e.target.value)}
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
};

export default withRouter(SignIn);
