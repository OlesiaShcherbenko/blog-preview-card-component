import React from "react";
import image from "/Users/shcherbenkoolesia/Desktop/fe-projects/newbie/02-24-blog-preview-card-main/src/assets/blogimage.png";
import './BlogImage.css';

function BlogImage() {
    return (
        <div className="image">
            <img src={image} className="image-blog" alt='' />
        </div>
    )
}

export default BlogImage;