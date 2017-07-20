import React from 'react';
import UserInfo from '../containers/UserInfo';
import { Container, Col } from 'react-grid-system'

const UserInfoSection = ({ letter, users }) => {
  const userInfoBoxes = users && users.map((user, i) => (
    <Col xs={6} md={4} lg={3} key={i}>
      <UserInfo {...user}/>
    </Col>
  ))

  return (
    <Container style={{ margin: 0 }}>
      <h2>{letter}</h2>
      <hr></hr>
      {userInfoBoxes}
    </Container>
  )
}

export default UserInfoSection;