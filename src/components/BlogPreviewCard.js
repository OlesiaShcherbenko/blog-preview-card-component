import React from "react";
import './BlogPreviewCard.css';
import BlogImage from "./BlogImage";
import Content from "./Content";

function BlogPreviewCard() {
    return (
       <div className="card">
            <BlogImage />
            <Content />
       </div>
    )
};

export default BlogPreviewCard;