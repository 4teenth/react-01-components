import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li>
    {/* <span
      className={isOnline === true ? styles.isOnline : styles.isOffline}
    ></span> */}
    <span className={isOnline ? styles.isOnline : styles.isOffline}>
      {isOnline}
    </span>
    {/* {isOnline === true ? (
      <span className={styles.isActive}>Online</span>
    ) : (
      <span className={styles.isNotActive}>Offline</span>
    )} */}
    <img src={avatar} alt="user" width="48" />
    <p>{name}</p>
  </li>
);

export default FriendListItem;
