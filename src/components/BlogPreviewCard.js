import React from "react";
import './BlogPreviewCard.css';
import Content from "./Content";
//import BlogImage from "./BlogImage";
import Author from "./Author";

function BlogPreviewCard() {
    return (
        <div className="card">
            <Content />
            <Author />
       </div>
    )
};

export default BlogPreviewCard;