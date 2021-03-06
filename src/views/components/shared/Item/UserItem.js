import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import AvatarInfo from '../AvatarInfo';
import IconButton from '../Button/IconButton';
import ActionButtons from '../../Photos/PhotoDetail/ActionButtons';
import { IconAddUser } from '../../../../icons';
import GridList from '../List/GridList';
import UserPhotoItem from './UserPhotoItem';

const UserItem = ({ item }) => {
  const {
    name,
    profile_image,
    username,
    photos,
  } = item;

  return (
    <Container>
      <UserHeader>
        <AvatarInfo
          imageUrl={profile_image.large}
          name={name}
          description={username}
          size="large"
        />
        <ActionButtons>
          <IconButton
            icon={<IconAddUser />}
            size={18}
          />
        </ActionButtons>
      </UserHeader>
      <PreviewPhotos>
        <GridList
          data={photos.length > 0 ? photos : Array(3).fill(1)}
          gutter={4}
        >
          {(items) => <UserPhotoItem item={items} />}
        </GridList>
      </PreviewPhotos>
      <ButtonProfile>
        View profile
      </ButtonProfile>
    </Container>
  )
}

const Container = styled.div`
  padding: 16px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
`;

const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviewPhotos = styled.div`
  margin: 16px 0;
`;

const ButtonProfile = styled(Link)`
  height: 32px;
  border: 1px solid #d1d1d1;
  color: #767676;
  font-size: 14px;
  transition: 0.2s;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  

  &:hover {
    color: #111;
    border-color: #111;
  }
`;

export default UserItem;
