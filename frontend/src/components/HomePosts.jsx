

const HomePosts = () => {
    return(
        <div className="w-full flex mt-8 space-x-4">
         {/*left */}
          <div className="w-[35%] h-[200px] flex justify-center items-center">
          <img src="" alt="" className="h-full w-full object-cover"/>
          </div>
          {/*right*/}
          <div className="flex flex-col w-[65%]">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
              Moj prvi clanac
            </h1>
            <div className="flex mb-2 text-sm font-semibold text=gray-500 items-center justify-between space-x-4 md:mb-4">
              <p>@vanja</p>
              <div className="flex space-x-2">
                <p>29/01.2024</p>
                <p>10:23</p>
              </div>
            </div>
            <p className="text-sm md:text-lg">Prvi clanak Ovih ElektronskihNovina</p>
  
          </div>
  
        </div>
      )
    }
    
    export default HomePosts