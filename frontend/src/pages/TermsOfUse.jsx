import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import React from "react";

const TermsOfUse = () => {
    return (
        <>
            <div className="flex items-center bg-gray-400 justify-between px-6 md:px-[200px] py-12">
                <h1 className="text-lg md:text-xl text-white font-extrabold"><Link to="/">Extra News</Link></h1>
                <h3 className="text-white font-extrabold"><Link to="/register">Registruj se</Link></h3>
            </div>
            <div className="w-full flex justify-center bg-pink-100 items-center h-[80vh]">
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl text-pink-700 font-bold italic underline text-center">Pravila korišćenja</h1>
                    <p className="text-gray-700">Korišćenjem naše platforme, slažete se sa našim <Link to="/terms-of-use" className="text-pink-700 underline">pravilima korišćenja</Link>. Molimo vas da pažljivo pročitate ova pravila pre korišćenja naše platforme.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsOfUse;
