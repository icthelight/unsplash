import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Route, Switch, useLocation, useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';

import { ContentContainer } from '../components/shared/Layout/Layout.Styled';
import { Action } from '../../redux/search/redux';
import { CLIENT_ID } from '../../constants/common';
import PhotoList from '../components/shared/List/PhotoList';
import SearchLnb from '../components/shared/lnb/SearchLnb';
import GridList from '../components/shared/List/GridList';
import CollectionItem from '../components/shared/Item/CollectionItem';
import UserItem from '../components/shared/Item/UserItem';
import RelatedKeywords from '../components/Search/RelatedKeywords';

const SearchContainer = ({ match }) => {
  const dispatch = useDispatch();
  const {
    photos, collections, users, related_searches,
  } = useSelector((state) => state.search);
  // const query = match.params.query;

  const { query } = useParams();
  const location = useLocation();
  const { orientation, color, order_by } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const searchPhotos = () => {
    dispatch(Action.Creators.searchPhotos({
      client_id: CLIENT_ID,
      query,
      orientation,
      color,
      order_by,
    }));
  };

  useEffect(() => {
    searchPhotos();
  }, [query, orientation, color, order_by]);

  return (
    <Container>
      <SearchLnb />
      <ContentContainer>
        <SearchKeyword>
          <h1>{query}</h1>
        </SearchKeyword>
        <RelatedKeywords data={related_searches} />
        <Switch>
          <Route exact path="/search/photos/:query">
            <PhotoList data={photos.results} />
          </Route>
          <Route exact path="/search/collections/:query">
            <GridList data={collections.results}>
              {(item) => <CollectionItem item={item} />}
            </GridList>
          </Route>
          <Route exact path="/search/users/:query">
            <GridList data={users.results}>
              {(item) => <UserItem item={item} />}
            </GridList>
          </Route>
        </Switch>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`

`;

const SearchKeyword = styled.div`
  margin-top: 60px;
  font-size: 46px;
  color: #111;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 16px;
`;
export default SearchContainer;
