
const Footer = () => {
    return(
      <>
      <div className="mt-8 w-full bg-gray-500 px-8 md:px-[300px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 md:mt-8" >
        <div className="flex flex-col text-white">
            <p></p>
        </div>
        <div className="flex flex-col text-white">
            <p>Najnovije vesti</p>
            <p>Najcitanije vesti</p>
        </div>
        <div className="flex flex-col text-white">
            <p>Pravila koriscenja</p>
            <p>Politika privatnosti</p>
        </div>
        <div className="flex flex-col text-white">
            <p>O nama</p>
            <p>Kontakt</p>
        </div>
      </div>
      <p className="py-2 pb-6 text-center text-white bg-gray-500 text-sm">Srbija  |  @eNovine 2024</p>
      </>
    )
  }
  
  export default Footer