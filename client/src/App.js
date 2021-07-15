//import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter } from 'react-router-dom'


function App() {
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
  }

  return (

    <>
      <BrowserRouter>
        <div className="App">
          <input type="button" value="api測試" onClick={() => { btn() }} />

          <nav>
            <div className="nav-wrapper">
              <a href="#k" className="brand-logo right"><Link to='/blog'>部落格</Link></a>
              <ul id="nav-mobile" className="left ">
              <li><Link to='/'></Link> </li>
                <li><Link to='/cv'>履歷</Link> </li>
                <li><Link to='/ttest'>切版練習<i className="material-icons right">arrow_drop_down</i></Link> </li>
                <li><a href="https://igclone918.herokuapp.com" target="_blank" rel="noreferrer">網站作品</a></li>
              </ul>
            </div>
          </nav>

          <section className="main">
          <Route exact path="/">

            </Route>
            <Route path="/cv">

            </Route>
            <Route path="/layout">切版練習
              <ul id="dropdown1" className="dropdown-content">
                <li>PS5</li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
              </ul>

            </Route>
            <Route path="/blog">...部落格 施工中...</Route>
            <Route path="/ttest">
              <div style={{margin:"10px"}}>

                <a href="#3"></a>
              </div>


            </Route>
          </section>
        </div>
      </BrowserRouter>


    </>


  );

}
export default App;
