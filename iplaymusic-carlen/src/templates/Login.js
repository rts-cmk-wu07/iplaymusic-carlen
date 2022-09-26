import Input from "../comp/sub-comp/Input";

const Login = () => {
  return (
    <div>
      <Input type="text" typeName="usernameInput" />
      <Input type="password" typeName="userPasswordInput" />
    </div>
  );
};

export default Login;
