import React, { Component } from 'react';
import { arrayOf, number } from 'prop-types';

// import Comic from './Comic';
import Comic from './ComicWithRenderProps';

class ComicList extends Component {
  static propTypes = {
    comicIds: arrayOf(number),
  };
  static defaultProps = {
    comicIds: [],
  }

  render() {
    const { comicIds } = this.props;

    return comicIds.map(comicId => (
      <Comic id={comicId} key={comicId} />
    ))
  }
}

export default ComicList;
