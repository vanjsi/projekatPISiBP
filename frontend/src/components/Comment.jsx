import axios from "axios";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import { URL } from "../url";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Comment = ({ c }) => {
    const { user } = useContext(UserContext);

    const likeComment = async (id) => {
        try {
            await axios.post(URL + "/api/comments/" + id + "/like", {}, { withCredentials: true });
            window.location.reload(true);
        } catch (err) {
            console.error(err);
        }
    };

    const dislikeComment = async (id) => {
        try {
            await axios.post(URL + "/api/comments/" + id + "/dislike", {}, { withCredentials: true });
            window.location.reload(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@{c.author}</h3>
                <div className="flex justify-center items-center space-x-4"></div>
                <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
                <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
                <div className="flex items-center justify-center space-x-2">
                    <p className="cursor-pointer" onClick={() => likeComment(c._id)}><MdThumbUp /></p>
                    <p className="cursor-pointer" onClick={() => dislikeComment(c._id)}><MdThumbDown /></p>
                </div>
            </div>
            <p className="px-4 mt-2">{c.comment}</p>
            <div className="flex items-center justify-between mt-2">
                <div>
                    <span>Likes: {c.likes}</span> 
                    <span>Dislikes: {c.dislikes}</span> 
                </div>
            </div>
        </div>
    );
};

export default Comment;
