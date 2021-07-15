//import logo from './logo.svg';
import './App.css';

function App() {


  const btn = () => {
    console.log("hi")
    fetch('/test',{
      method:"get"
    })
    .then(res=>res.json())
    .then(data=>console.log("data:",data))
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="App">
      <input type="button" value="click" onClick={() => { btn() }} />
    </div>
  );

}
export default App;
