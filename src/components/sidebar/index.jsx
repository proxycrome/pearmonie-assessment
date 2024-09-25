import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userIcon from "../../assets/user-icon.png";
import messageIcon from "../../assets/message-icon.png";
import avatar from "../../assets/avatar.svg";
import { string } from "prop-types";
import settingIcon from "../../assets/settings.svg";
import styles from "./sidebar.module.css";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { setIsSidebarCollapsed } from "../../state/global/globalSlice";
import useWindowWidth from "../hooks/useWindowWidth";
import { logout } from "../../state/auth/authSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const { width } = useWindowWidth();
  const dispatch = useDispatch();
  const isSidebarCollapsed = useSelector(
    (state) => state.global.isSidebarCollapsed
  );

  useEffect(() => {
    if (width < 1150) {
      dispatch(setIsSidebarCollapsed(true));
    } else {
      dispatch(setIsSidebarCollapsed(false));
    }
  }, [dispatch, width]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [])

  const handleLogout = () => {
      dispatch(logout());
      localStorage.clear();
      navigate("/login");
  }

  return (
    <div className={styles.sidebar}>
      {isSidebarCollapsed ? (
        <div className={styles.minWrapper}>
          <div
            className={styles.arrow}
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <ArrowRight />
          </div>
          <div className={styles.content}>
            <div>
              <div className={styles.logo}>
                <img src={settingIcon} alt="settings" />
              </div>
              <nav>
                <MinSidebarLink
                  href="/dashboard/users"
                  label="Users"
                  icon={userIcon}
                />
                <MinSidebarLink
                  href="/dashboard/help"
                  label="Help"
                  icon={messageIcon}
                />
              </nav>
            </div>
            <div className={styles.profileBox}>
              <div className={styles.profileContainer}>
                <div className={styles.profileItems}>
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
              <div className={styles.logout} onClick={handleLogout}>
                <LogOut color="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div
            className={styles.arrow}
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <ArrowLeft />
          </div>
          <div className={styles.content}>
            <div>
              <div className={styles.logo}>
                <img src={settingIcon} alt="settings" />
                <div className={styles.logoname}>
                  <h1>Dashboard</h1>
                  <small>v.01</small>
                </div>
              </div>
              <nav>
                <SidebarLink
                  href="/dashboard/users"
                  label="Users"
                  icon={userIcon}
                />
                <SidebarLink
                  href="/dashboard/help"
                  label="Help"
                  icon={messageIcon}
                />
              </nav>
            </div>
            <div className={styles.profileBox}>
              <div className={styles.gradientBox}>
                <div className={styles.text}>
                  <p>
                    Upgrade to PRO to get <br /> access all features
                  </p>
                  <button>Get Pro Now!</button>
                </div>
              </div>
              <div className={styles.profileContainer}>
                <div className={styles.profileItems}>
                  <img src={avatar} alt="avatar" />
                  <div className={styles.profileDets}>
                    <h5>Evano</h5>
                    <small>Project Manager</small>
                  </div>
                </div>
                <ChevronDown />
              </div>
              <div className={styles.logout} onClick={handleLogout}>
                <LogOut color="#ffffff" />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SidebarLink = ({ href, icon, label }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => {
        return isActive
          ? [styles.activeLink, styles.navWrapper].join(" ")
          : [styles.inactiveLink, styles.navWrapper].join(" ");
      }}
    >
      <div className={styles.nav}>
        <div className={styles.navContent}>
          <img src={icon} alt={label} />
          <span className={styles.navText}>{label}</span>
        </div>
        <ChevronRight />
      </div>
    </NavLink>
  );
};

const MinSidebarLink = ({ href, icon, label }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => {
        return isActive
          ? [styles.activeLink, styles.navWrapper].join(" ")
          : [styles.inactiveLink, styles.navWrapper].join(" ");
      }}
    >
      <div className={styles.minNav}>
        <div className={styles.minNavContent}>
          <img src={icon} alt={label} />
        </div>
      </div>
    </NavLink>
  );
};

SidebarLink.propTypes = {
  href: string,
  icon: string,
  label: string,
};

MinSidebarLink.propTypes = {
  href: string,
  icon: string,
  label: string,
};

export default Sidebar;
