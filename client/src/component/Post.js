import { posts } from "./data"
import { useLocation } from "react-router-dom"
import "./Post.css"
const Post =()=>
{
    const location=useLocation().pathname.split('/')[2]
    const post=posts.find(p=> p.id.toString() === location)
    return (
        <div className="post">

            <img src={post.img} alt="" className="postImg"></img>
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>

        </div>
    )
}
export default Post