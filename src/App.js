import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Alert from './components/AlertDelete/Alert';
// import AutoChangeColor from './components/AutoChangeColor';
// import LoginLogout from './components/Check/LoginLogout';
// import CountClick from './components/CountClick';
// import Expand from './components/Expand/Expand';
// import LoginForm from './components/Login_logout/LoginForm';
// import TodoList from './components/TodoList/TodoList';
import StudentManager from './components/StudentManager/StudentManager';

function App() {
  return (
    <>
      <StudentManager/>
      {/* <hr/>
      <CountClick />
      <AutoChangeColor />
      <Alert/>
      <LoginLogout/>
      <Expand/>
      <LoginForm/>
      <TodoList/>   */}
    </>
  );
}

export default App;
