import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import Home from '../../pages/home/Home';

const Rightbar = ({profile}) => {

  const HomeRightBar = () => {
    return (
      <>
         <div className="birthdayContainer">
          <img src="/assets/gift.svg" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Toka</b> and <b>2 others</b> have birthdays today</span>
        </div>
        <img src="/assets/ad.jfif" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>  
        <ul className="rightbarFriendList">
        {Users.map(u => (
          <Online key={u.id} user={u} />
        ))}
        </ul>
      </>
      
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:{" "}</span>
            <span className="rightbarInfoValue">Bloemfontein</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:{" "}</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:{" "}</span>
            <span className="rightbarInfoValue"><em>not specified</em></span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/people/8.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righrbarFollowingName">Johannes</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
    {profile ? <ProfileRightBar /> : <HomeRightBar/>}
      </div>
    </div>
  )
}

export default Rightbar;
