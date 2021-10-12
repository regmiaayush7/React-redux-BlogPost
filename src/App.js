import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Blogcontainer from './components/Blogcontainer';
import Blogbody from './components/Blogbody'
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Blogcontainer/>
      <Blogbody/>
    </div>
  );
}
export default App;
