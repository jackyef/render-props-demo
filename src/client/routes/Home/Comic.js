import React, { Component, Fragment } from 'react';
import { number } from 'prop-types';
import { ComicCard } from './styles';

class Comic extends Component {
  static baseComicUrl = `https://xkcd.now.sh/:comicId`;
  static propTypes = {
    id: number.isRequired,
  };

  state = {
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { id } = this.props;
    const url = Comic.baseComicUrl.replace(':comicId', id);

    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({ ...json, loading: false, error: false }))
      .catch(err => this.setState({ loading: false, error: false, errorMessage: err }));
  }

  renderContent() {
    const { id } = this.props;
    const { alt, error, img, loading, title } = this.state;

    if (error) {
      return <p>an error happened while trying to fetch comic #{id}</p>;
    }

    if (loading) {
      return <p>loading...</p>;
    }

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

  render() {
    const { loading } = this.state;

    return (
      <ComicCard loading={loading}>
        {this.renderContent()}
      </ComicCard>
    )
  }
}

export default Comic;
