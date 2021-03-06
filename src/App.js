import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom'

import { GlobalStyle } from './styled/GlobalStyle';
import Home from './views/pages/Home';
import Search from './views/pages/Search';
import HeaderContainer from './views/containers/HeaderContainer';
import TopicBySlug from './views/pages/TopicBySlug';
import Topic from './views/pages/Topic';
import PhotoPopupContainer from './views/containers/PhotoPopupContainer';
import Photo from './views/pages/Photo';

const App = () => (
  <Container>
    <GlobalStyle />
    <HeaderContainer />
    <PhotoPopupContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search/:category/:query" component={Search} />
      <Route exact path="/topics/:slug" component={TopicBySlug} />
      <Route exact path="/topics" component={Topic} />
      <Route exact path="/photos/:id" component={Photo} />

    </Switch>
  </Container>
)

const Container = styled.div`

`;
export default App;
