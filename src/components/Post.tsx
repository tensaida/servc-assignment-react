import React from 'react'
import {PostType} from '../types/Post.types'
import {Link} from 'react-router-dom'

interface Props {
    post: PostType;
}

export const images: { [id: string]: string; } = {
    "1": "https://images.unsplash.com/photo-1609372332255-611485350f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "9": "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg",
    "2": "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg",
    "3": "https://images.unsplash.com/photo-1643725173053-ed68676f1878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "4": "https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "5": "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05465_dtkwef.jpg",
    "6": "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05626_ytsf3j.jpg",
    "7": "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05462_b33uvp.jpg",
    "8": "https://images.unsplash.com/photo-1613951085587-cfe5d0a6cffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
 };

const Post:React.FC<Props> = ({post}) => {
    const id = [...post.url].reverse()[1];
    return (
    <li>
        <Link to={"/"+id} title={post.name}><img src={images[id]} /></Link>
    </li>)
}

export default Post