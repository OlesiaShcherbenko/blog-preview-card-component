import React from "react";
import './Author.css';
import avatar from '/Users/shcherbenkoolesia/Desktop/fe-projects/newbie/02-24-blog-preview-card-main/src/assets/image-avatar.webp';

function Author() {
    return (
        <div className="author">
            <img src={avatar} className="authorimg" alt="" />
            <p>Greg Hooper</p>
        </div>
    )
}

export default Author;