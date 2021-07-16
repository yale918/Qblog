//import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Profile from './components/views/Profile'

function App() {
  /*
    const btn = () => {
      console.log("hi")
      fetch('/test', {
        method: "get"
      })
        .then(res => res.json())
        .then(data => console.log("data:", data))
        .catch(err => {
          console.log(err)
        })
  
    <input type="button" value="api測試" onClick={() => { btn() }} />
  
    }
  */
  return (

    <>
      <BrowserRouter>
        <div className="App">
          <div className="mynav">
            <ul className="nav">
              <li ><Link className="link-css" to='/profile'>履歷CV</Link></li>
              <li ><Link className="link-css" to='/layout'>切版作品</Link></li>
              <li ><a className="link-css" href="https://igclone918.herokuapp.com" target="_blank" rel="noreferrer">網站作品</a></li>
            </ul>
            <div className="logo"><Link to="/blog" className="link-css">部落格</Link> </div>
          </div>

          <section className="main">

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/blog">...部落格 施工中...</Route>

          </section>
        </div>
      </BrowserRouter>


    </>


  );

}
export default App;
