import { Chat, Person, Search, Notifications } from '@mui/icons-material';
import './topbar.css';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='logo'>CubicSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <Search className='searchIcon' />
        <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/people/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar;
