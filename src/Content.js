import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Content.module.css';

const { node } = PropTypes;

export default class Content extends Component {
  static propTypes = {
    children: node.isRequired
  };

  render() {
    return <div className={styles.main}>{this.props.children}</div>;
  }
}
