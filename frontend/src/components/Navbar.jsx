import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaBars, FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";


const Navbar = () => {

  const [prompt,setPrompt]=useState("")
  const[menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  //console.log(prompt)

  const showMenu=()=>{
    setMenu(!menu)
  }

    const {user}=useContext(UserContext)
    
    return(
      <div className="flex items-center bg-gray-400 justify-between px-8 md:px-[200px] py-12">
        <h1 className="text-lg md:text-xl text-white font-extrabold"><Link to="/">Extra News</Link></h1>
        {path==="/" && <div className="flex justify-center items-center space-x-0">
            <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><FaSearch /></p>
            <input onChange={(e)=>setPrompt(e.target.value)} className="border-2 border-black outline-0 px-3" placeholder="Pretrazi" type="text"/>
        </div>}
        <div className="hidden font-extrabold md:flex items-center text-white justify-center space-x-2 md:space-x-4">
            {user? <h3><Link to="/write">Napisi</Link></h3> : <h3><Link to="/login">Uloguj se</Link></h3> }
            {user? <div onClick={showMenu}>
              <p className="cursor-pointer relative"><FaBars/></p>
              {menu && <Menu/>}
              </div> : <h3><Link to="/register">Registruj se</Link></h3> }
        </div>
        <div onClick={showMenu} className="md:hidden text-lg">
          <p className="cursor-pointer relative"><FaBars/></p>
          {menu && <Menu/>}
        </div>
        
      </div>
    )
  }
  
  export default Navbar