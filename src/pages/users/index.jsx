import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "../../components/searchbar";
import usersIcon from "../../assets/users-icon.svg";
import membersIcon from "../../assets/members-icon.svg";
import activeUsersIcon from "../../assets/active-users-icon.svg";
import styles from "./users.module.css";
import { ArrowDown, ArrowUp } from "lucide-react";
import Showcase from "../../components/showcase";
import TableComponent from "../../components/table";
import { fetchUsers } from '../../state/users/userSlice';

const Users = () => {
  const dispatch = useDispatch();
  const {users, loading} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return (
    <main className={styles.mainWrapper}>
      <header>
        <h1>Hello Evano,</h1>
        <Searchbar background="#FFFFFF" />
      </header>
      <section>
        <div className={styles.card}>
          <div className={styles.cardItem}>
            <img src={usersIcon} alt="users" />
            <div className={styles.cardDetails}>
              <h6>Total Users</h6>
              <span className={styles.total}>5,423</span>
              <div className={styles.cardInfo}>
                <ArrowUp size={18} color="#00AC4F" />
                <div>
                  <span className={styles.green}>16%</span> this month
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vertDivider} />
          <div className={styles.cardItem}>
            <img src={membersIcon} alt="members" />
            <div className={styles.cardDetails}>
              <h6>Members</h6>
              <span className={styles.total}>1,893</span>
              <div className={styles.cardInfo}>
                <ArrowDown size={18} color="#D0004B" />
                <div>
                  <span className={styles.red}>1%</span> this month
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vertDivider} />
          <div className={styles.cardItem}>
            <img src={activeUsersIcon} alt="active users" />
            <div className={styles.cardDetails}>
              <h6>Active Now</h6>
              <span className={styles.total}>189</span>
              <div className={styles.cardInfo}>
                <Showcase />
              </div>
            </div>
          </div>
        </div>
        <div>
          <TableComponent users={users} loading={loading} />
        </div>
      </section>
    </main>
  );
};

export default Users;
