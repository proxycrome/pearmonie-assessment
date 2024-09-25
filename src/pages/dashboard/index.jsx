import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar"
import styles from "./dashboard.module.css";


const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
        <Sidebar />
        {/* Main Content */}
        <div className={styles.main}>
            <Outlet />
        </div>
    </div>
  )
}


export default Dashboard