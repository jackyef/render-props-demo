import React, { Component } from 'react';

import ComicList from './ComicList';
import { HomeContainer } from './styles';
import exampleResponse from './exampleResponse';

class Home extends Component {
  constructor() {
    super();

    this.comicIds = [564, 462, 452, 610, 1374];
  }

  renderInfoSection = () => {
    return (
      <div>
        <p>
          The xkcd comics in this page are fetched from the{' '}
          <a href="https://github.com/mrmartineau/xkcd-api" target="_blank" rel="noreferrer noopener">
            cors-enabled version of xkcd open API
          </a>. The API is very simple to use, you only need to make a GET request to the following url:
        </p>
        <pre>https://xkcd.now.sh/614</pre>
        <p>and it will return the following JSON response:</p>
        <pre>{JSON.stringify(exampleResponse, null, 2)}</pre>
      </div>
    );
  };

  renderComics = () => {
    return <ComicList comicIds={this.comicIds} />;
  };

  render() {
    return (
      <HomeContainer>
        <h1>Render props demo</h1>
        {this.renderComics()}
        {this.renderInfoSection()}
      </HomeContainer>
    );
  }
}

export default Home;
