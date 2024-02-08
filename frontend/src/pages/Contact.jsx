import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import React from "react";

const Contact = () => {
    return (
        <>
            <div className="flex items-center bg-gray-400 justify-between px-6 md:px-[200px] py-12">
                <h1 className="text-lg md:text-xl text-white font-extrabold"><Link to="/">Extra News</Link></h1>
                <h3 className="text-white"><Link to="/register">Registruj se</Link></h3>
            </div>
            <div className="w-full flex justify-center bg-pink-100 items-center h-[80vh]">
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl text-pink-700 font-bold italic underline text-center">Kontaktirajte nas</h1>
                    <p className="text-gray-700">Za sva pitanja, sugestije ili podršku, možete nas kontaktirati putem emaila na <a href="extranews@gmail.com" className="text-pink-700 underline">info@extranews.com</a> ili nas pozvati na broj +381 64 90 52 314.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
