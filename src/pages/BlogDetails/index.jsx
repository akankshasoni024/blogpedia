import React from "react";
import "./styles.css"
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";

const BlogDetails = () => {
    const { state } = useLocation();
    const { title, desc, image } = state

    return (
        <div className="blog-details">
         {/* <Header title="BLOGPEDIA"/> */}
            <div className="blog-title">{title}</div>
            <div className="blog-desc"><p>{desc}</p></div>
            <div ><img className="blog-image" src={image} alt={title} /></div>
        </div>
    )
}

export default BlogDetails