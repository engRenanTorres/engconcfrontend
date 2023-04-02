import { FormEventHandler, useCallback } from 'react';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button';
import { Container } from './styles';
import useAuth from '../../utils/hooks/useAuth';

interface eventTarget extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

const Login = () => {
  const { signin } = useAuth();
  const handleLogin: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { email, password } = (event.target as HTMLFormElement)
        .elements as eventTarget;
      try {
        signin(email.value, password.value);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [signin],
  );

  //if (!currentUser) return router.push('/');
  return (
    <Container>
      <h1>Bem Vindo! {process.env.REACT_APP_BACKEND_DEV}</h1>
      <form onSubmit={handleLogin}>
        <Input label="Email" name="email" type="email" placeholder="Email..." />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password..."
        />
        <div className="options">
          <Button type="submit">Login</Button>

          <hr />
          <a className="link">Esqueceu a senha? </a>
        </div>
      </form>
    </Container>
  );
};

export default Login;
