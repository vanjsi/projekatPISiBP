import { Link } from "react-router-dom"
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaYoutube  } from "react-icons/fa";


const Footer = () => {
    return(
      <>
      <div className="mt-8 w-full bg-gray-400 px-8 md:px-[300px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 md:mt-8" >
        <div className="flex flex-col text-black font-bold">
            <p></p>
        </div>
        <div className="flex flex-col text-black font-bold hover:text-white">
            <p><Link to="/termsofuse">Pravila koriscenja</Link></p>
            <p><Link to="/privacypolicy">Politika privatnosti</Link></p>
        </div>
        <div className="flex flex-col text-black font-bold hover:text-white">
            <p><Link to="/aboutus">O nama</Link></p>
            <p><Link to="/contact">Kontakt</Link></p>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <div className="flex justify-center items-center space-x-2">
                    <a href=""><FaFacebook size={24} color="#000" /></a>
                    <a href=""><CiInstagram size={24} color="#000" /></a>
                    <a href=""><FaYoutube size={24} color="#000" /></a>
                </div>
            </div>
      </div>
      <p className="py-2 pb-6 text-center text-black font-bold bg-gray-400 text-sm">Srbija  |  @eNovine 2024</p>
      </>
    )
  }
  
  export default Footer