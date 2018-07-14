import React, { Component, Fragment } from 'react';
import { number } from 'prop-types';

import Fetch from './reusables/Fetch';
import { ComicCard } from './styles';

class Comic extends Component {
  static baseComicUrl = `https://xkcd.now.sh/:comicId`;
  static propTypes = {
    id: number.isRequired,
  };

  constructor(props) {
    super(props);

    this.url = Comic.baseComicUrl.replace(':comicId', props.id);
  }

  //eslint-disable-next-line
  renderContent = ({ data, error, loading, errorMessage }) => {
    const { id } = this.props;
    
    if (error) {
      return <p>an error happened while trying to fetch comic #{id}</p>;
    }
    
    if (loading) {
      return <p>loading...</p>;
    }

    if (data) {
      const { alt, img, title } = data;

      return (
        <Fragment>
          <h3>{title}</h3>
          <figure>
            <a href={img} target="_blank" rel="noreferrer nofollow noopener"><img src={img} /></a>
            <figcaption>{alt}</figcaption>
          </figure>
        </Fragment>
      )
    }

  } 

  render() {
    return (
      <ComicCard>
        <Fetch render={this.renderContent} url={this.url} />
      </ComicCard>
    )
  }
}

export default Comic;
