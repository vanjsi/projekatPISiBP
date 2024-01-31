import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"
import Comment from "../components/Comment"

const PostDetails = () => {
    return(
        <div>
            <Navbar/>
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">Moj prvi clanak</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p><BiEdit/></p>
                        <p><MdDelete/></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                <p>@vanja</p>
              <div className="flex space-x-2">
                <p>29/01.2024</p>
                <p>10:23</p>
                </div>
                </div>
                <img src="https://www.pexels.com/photo/a-mountain-with-sprawling-green-grass-and-trees-10549472/" className="w-full mx-auto mt-8" alt=""/>
                <p className="mx-auto mt-8">Природа је, у најширем смислу, еквивалент природном свету, физичком универзуму, материјалном свету или материјалном универзуму. Природа се односи на феномен физичког света, као и на живот уопште. Њен распон сеже од субатомског до космичког. Израз обично не укључује произведене објекте, као ни људску интеракцију, осим ако се тако квалификује, као на пример људска природа. Појам природе и природног је такође супротан појму натприродног.</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Kategorije:</p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Priroda</div>
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Sport</div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <h3 className="mt-6 mb-4 font-semibold">Komentari:</h3>
                    <Comment/>
                </div>
                {/* napisi komentar */}
                <div className="w-full flex flex-col mt-4 md:flex-row">
                    <input type="text" placeholder="Napisi komentar" className="md-w-[80%] border-2 border-pink-700 outline-0 py-2 px-4 mt-4 md:mt-0"/>
                    <button className="bg-pink-700 text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Dodaj komentar</button>
                </div>
                

            </div>
            <Footer/>
        </div>

    )
}

export default PostDetails