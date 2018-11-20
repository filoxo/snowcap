import React, { Component } from 'react';
import {navigateToUrl} from 'single-spa'
import './App.css';
import PropTypes from 'prop-types';

import Content from './Content';
import styles from './App.css';
import logo from './logotype.svg';

const { number, string, func } = PropTypes;

class App extends Component {
  static propTypes = {
    search: string,
    userId: number.isRequired,
    role: string.isRequired,
    partnerId: number,
    onSearch: func.isRequired
  };

  static defaultProps = {
    search: '',
    partnerId: null
  };

  constructor(props) {
    super(props);
    this.state = {
      search: props.search
    };
  }

  onKeyPress = event => {
    if (event.key !== 'Enter') return;
    this.props.onSearch(encodeURIComponent(this.state.search));
  };

  onChange = event => {
    const { value } = event.target;

    this.setState({ search: value });
  };

  getLogo = () => {
    const chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 3) {
      return 'podiumSnail';
    }
    return 'logotype';
  };

  render() {
    const { userId, role, partnerId } = this.props;

    return (
      <header className={styles.main}>
        <Content>
          <div className={styles.left}>
            <a
              href=""
              onClick={navigateToUrl}
            >
              <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M16.6.2H.4C.2.2 0 .3 0 .6v26.8c0 .7.4.8.9.4l2.5-2.4 3.2-3.1c.1-.1.3-.1.4-.1h9.8c5.9 0 10.5-5.1 10.5-10.9C27.2 5.3 22.5.2 16.6.2zM5.5 5.8c0-.1.1-.2.2-.2h12.9c.1 0 .2.1.2.2v1.6c0 .1-.1.2-.2.2H5.8c-.1 0-.2-.1-.2-.2V5.8zm13.4 10.5c0 .1-.1.2-.2.2H5.8c-.1 0-.2-.1-.2-.2v-1.6c0-.1.1-.2.2-.2h12.9c.1 0 .2.1.2.2v1.6zm2.7-4.4c0 .1-.1.2-.2.2H5.8c-.1 0-.2-.1-.2-.2v-1.6c0-.1.1-.2.2-.2h15.6c.1 0 .2.1.2.2v1.6z" fill="#fffffe"/></svg>
              </div>
            </a>
            <input
              className={styles.input}
              type="text"
              placeholder={"Search"}
              value={this.state.search}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
            <a className="link" href="/" onClick={navigateToUrl}>Admin</a>
            <a className="link" href="/rosie" onClick={navigateToUrl}>Rosie</a>

          </div>
        </Content>
      </header>
    );
  }
}

export default App;
