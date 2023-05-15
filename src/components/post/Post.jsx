import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from '../../dummyData';

const Post = ({post}) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }



  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
            <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postButtonLeft">
            <img onClick={likeHandler} src="/assets/like.svg" alt="" className="likeIcon" />
            <img onClick={likeHandler} src="/assets/heart.svg" alt="" className="likeIcon" />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postButtonRight">
            <span className="postCommentText">{post.comment}{" "}comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
