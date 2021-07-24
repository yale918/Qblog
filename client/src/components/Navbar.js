import { Link, Route } from "react-router-dom"
//import popup from './handycom/popup.js'
import './Navbar.css'

const NavBar = () => {


  const navCol1 = (flag) => {
    const subL = document.querySelector('.subLinks1')
    if(flag==='show'){
      console.log("show block 1")
      subL.children[0].classList.remove('hidden')
      subL.children[1].classList.remove('hidden')
      subL.classList.toggle('show')
    }
    else {
      console.log("hide block 1")
    }

  }
  const navCol2 = (flag) => {
    if(flag==="show"){
      console.log("enter block: 2")
      const subL2 = document.querySelector('.subLinks2')
      //console.log("subL: ", subL)
      subL2.children[0].classList.remove('hidden')
      subL2.children[1].classList.remove('hidden')
      //console.log("subL child:", subL.children[0].children[0])
      subL2.classList.add('show')
    }
    else{
      console.log("hide navCol2")
    }
  }
  const navCol3 = (flag) => {
    if(flag==="show"){
      console.log("enter block: 3")
      const subL2 = document.querySelector('.subLinks3')
      //console.log("subL: ", subL)
      subL2.children[0].classList.remove('hidden')
      subL2.children[1].classList.remove('hidden')
      subL2.children[2].classList.remove('hidden')
      subL2.children[3].classList.remove('hidden')
      //console.log("subL child:", subL.children[0].children[0])
      subL2.classList.add('show')
    }
    else if(flag==="hidden"){
      console.log("hide navCol3")
      
    }
  }


  return (
    <>
      {//<div id="cv" onClick={() => { popup()}}>click</div>//
      }
      <Route>
        <div className="mynav">
          <ul className="nav">

            <li onMouseEnter={() => { navCol1('show') }} onMouseOut={() => { navCol1('hidden') }}>
              <div className="link-title-css" to='/profile'>CV履歷▼</div>
              <div className="subLinks1">
                <div className="hidden"><Link className="link-css" to='/main_profile'>中文履歷</Link></div>
                <div className="hidden"><Link className="link-css" to='/eng_profile'>Eng. CV</Link></div>
              </div>
            </li>

            <li onMouseEnter={() => { navCol2('show') }}>
              <div className="link-title-css" to='/layout'>切版練習▼</div>
              <div className="subLinks2">
              <div className="hidden"><a className="link-css" href="https://igclone918.herokuapp.com" target="_blank" rel="noreferrer">PS5練習</a></div>
              <div className="hidden"><a className="link-css" href="https://igclone918.herokuapp.com" target="_blank" rel="noreferrer">Netflix練習</a></div>
              </div>
              </li>
            <li onMouseEnter={() => { navCol3('show') }}>
              <div className="link-title-css" >網站作品▼</div>
              <div className="subLinks3">
                <div className="hidden"><a className="link-css" href="https://igclone918.herokuapp.com" target="_blank" rel="noreferrer">qp社群網站</a></div>
                <div className="hidden"><a className="link-css" href="https://qdoc918.herokuapp.com" target="_blank" rel="noreferrer">qd雲端共筆</a></div>
                <div className="hidden"><Link className="link-css" to='/qblog'>qb部落格(x)</Link></div>
                <div className="hidden"><Link className="link-css" to='/qadmin'>qa後台系統(x)</Link></div>
              </div>
              </li>
          </ul>
          <div className="logo"><Link to="/blog" className="link-css">部落格</Link> </div>
        </div>
      </Route>
    </>
  )
}
export default NavBar
