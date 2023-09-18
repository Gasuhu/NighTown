import React from "react";
import "./overview.css"
import Nav from "./nav";
import Card from "./Card";
import { posts } from "./data";
const Overview = () =>
{
    return (
        <>    

            <div className="home">
                {posts.map(post=>(
                    <Card key={post.id} post={post}/>
                ))}
            </div>



            <div className="start-button">
           <a href="/game"><button> Play </button> </a>
           </div>
        </>
    )
}
export default Overview