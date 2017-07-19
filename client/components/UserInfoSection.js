import React from 'react';
import UserInfo from '../containers/UserInfo';

const UserInfoSection = ({ letter, users }) => {
  return (
    <section>
      <h2>{letter}</h2>
      <hr></hr>
      {
        users && users.map((user, i) => {
          return <UserInfo {...user} key={i} />;
        })
      }
    </section>
  )
}

export default UserInfoSection;