//import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Profile from './components/views/Profile/Profile'
import Eng_profile from './components/views/Eng_profile/Eng_profile'
//import NFclone from './components/views/layout/NFclone/NFclone'
import Navbar from './components/Navbar'
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
  }
  */


  const Main = () => {
    return (
      <div className="App">
        { /*<input type="button" value="api測試" onClick={() => { btn() }} />*/}
        <section className="main">
          <Route path="/main_profile">
            <Profile />
          </Route>
          <Route path="/eng_profile">
            <Eng_profile />
          </Route>


          <Route path="/layout">
            <div className="sub-nav-con">
              <div>上傳中　 </div>
              <div className="sub-nav">
                <a href="#1" className="link-css" >PS4 clone </a>  |
                <a href="#2" className="link-css" > NETFLIX clone </a>  |
                <a href="#3" className="link-css" > Discuz! clone</a>
              </div>
            </div>
          </Route>


          <Route path="/blog">...部落格 施工中...</Route>

        </section>
      </div>
    )
  }


  return (

    <BrowserRouter>
      <Navbar />
      <Main />
    </BrowserRouter>

  );

}
export default App;
