import Logo from "../../assets/logos/mainLogo.png";
import "./admin-header.css";
import { NotificationsNone } from "@material-ui/icons";
import Avatar from "../../assets/place-holder-avatar.jpg";

const TopbarNav = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img src={Logo} alt="House of Glamour" />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <img src={Avatar} alt="Profile Avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default TopbarNav;
