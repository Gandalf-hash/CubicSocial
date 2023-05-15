import React from 'react'
import './closeFriend.css';

const CloseFriend = ({user}) => {
  return (
    <div>
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
          </li>
    </div>
  )
}

export default CloseFriend
