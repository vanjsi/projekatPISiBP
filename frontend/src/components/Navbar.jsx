import { Link } from "react-router-dom"
import { FaBars, FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";


const Navbar = () => {
  const[menu,setMenu]=useState(false)

  const showMenu=()=>{
    setMenu(!menu)
  }

    const {user}=useContext(UserContext)
    
    return(
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl text-pink-700 font-extrabold"><Link to="/">Extra News</Link></h1>
        <div className="flex justify-center items-center space-x-0">
            <p><FaSearch /></p>
            <input className="outline-none px-3" placeholder="Pretrazi" type="text"/>
        </div>
        <div className="hidden md:flex items-center text-pink-700 justify-center space-x-2 md:space-x-4">
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