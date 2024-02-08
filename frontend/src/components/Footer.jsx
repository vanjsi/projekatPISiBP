import { Link } from "react-router-dom"

const Footer = () => {
    return(
      <>
      <div className="mt-8 w-full bg-gray-400 px-8 md:px-[300px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 md:mt-8" >
        <div className="flex flex-col text-black font-bold">
            <p></p>
        </div>
        <div className="flex flex-col text-black font-bold hover:text-white">
            <p>Najnovije vesti</p>
            <p>Najcitanije vesti</p>
        </div>
        <div className="flex flex-col text-black font-bold hover:text-white">
            <p><Link to="/termsofuse">Pravila koriscenja</Link></p>
            <p><Link to="/privacypolicy">Politika privatnosti</Link></p>
        </div>
        <div className="flex flex-col text-black font-bold hover:text-white">
            <p><Link to="/aboutus">O nama</Link></p>
            <p><Link to="/contact">Kontakt</Link></p>
        </div>
      </div>
      <p className="py-2 pb-6 text-center text-black font-bold bg-gray-400 text-sm">Srbija  |  @eNovine 2024</p>
      </>
    )
  }
  
  export default Footer