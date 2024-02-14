import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import HomePosts from "../components/HomePosts";
import Loader from "../components/Loader";

const MyNews = () => {
    const { search } = useLocation();
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);
    const { user } = useContext(UserContext);

    const fetchPosts = async () => {
        setLoader(true);
        try {
            if (user) {
                const res = await axios.get(URL + "/api/posts/user/" + user._id);
                setPosts(res.data);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        if (!user) return; 
        fetchPosts();
    }, [search, user]);

    return (
        <div>
            <Navbar />
            <div className="px-8 bg-pink-100 md:px-[200px] min-h-[80vh]">
                {loader ? (
                    <div className="h-[40vh] flex justify-center items-center"><Loader /></div>
                ) : posts.length > 0 ? (
                    posts.map((post) => (
                        <Link key={post._id} to={user ? `posts/post/${post._id}` : "/login"}>
                            <HomePosts post={post} />
                        </Link>
                    ))
                ) : (
                    <h3 className="text-center font-bold mt-16">Niste objavili ništa još uvek</h3>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MyNews;
