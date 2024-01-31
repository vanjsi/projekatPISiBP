import { Link } from "react-router-dom"


const Login = () => {
    return(
        <>
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl text-pink-700 font-extrabold"><Link to="/">Extra News</Link></h1>
        <h3 className="text-pink-700"><Link to="/register">Registruj se</Link></h3>
        </div>
        <div className="w-full flex justify-center items-center h-[80vh] ">
            <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                <h1 className="text-xl text-pink-700 font-bold text-left">Uloguj se na svoj nalog</h1>
                <input className="w-full px-4 py-2 border-2 border-pink-700 outline-0" type="text" placeholder="Unesi svoj email" />
                <input className="w-full px-4 py-2 border-2 border-pink-700 outline-0" type="password" placeholder="Unesi svoju sifru" />
                <button className="w-full px-4 py-4 text-lg font-pink-700 text-white bg-pink-500 rounded-lg hover:bg-gray-500 hover:text-black">Uloguj se</button>
                <div className="flex justify-center items-center space-x-3">
                    <p>Nemate nalog?</p>
                    <p className="text-gray-500 hover:text-black"><Link to="/register">Registruj se</Link></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login