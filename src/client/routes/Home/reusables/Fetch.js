import React from 'react';
import { func, string } from 'prop-types';

export default class Fetch extends React.Component {
  static propTypes = {
    render: func.isRequired,
    url: string.isRequired,
  };

  state = {
    loading: true,
    error: false,
    data: null,
    errorMessage: '',
  };

  componentDidMount() {
    const { url } = this.props;

    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({ data: json, loading: false, error: false }))
      .catch(err => this.setState({ loading: false, error: false, errorMessage: err }));
  }

  render() {
    return this.props.render(this.state);
  }
}