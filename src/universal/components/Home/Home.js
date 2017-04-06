import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';

import styles from './Home.css';

class Home extends Component {
  render () {
    return (
      <div className={styles.home}>
        <h1 className={styles.title}>⚡ Universal JS, HMR and SSR ⚡</h1>

        <div>
          <h2>What is it?</h2>
          <ul>
            <li>
              <b>Universal JS: -</b><br />
              <p>JavaScript that can run on both the server and client (or any other JS platform for that matter) !</p>
            </li>

            <li>
              <b>Hot Module Reloading: -</b><br />
              <p>Replaces modules that have been changed in real time while preserving the state.</p>
            </li>

            <li>
              <b>Server Side Rendering: -</b><br />
              <p>Renders Pages on the initial for fast page loads and search engine optimization</p>
            </li>
          </ul>
        </div>


        <div>
          <h2>Why?</h2>
          <ul>
            <li>Incredibly Productive</li>
            <li>Extremely Flexible</li>
            <li>Blazing Fast</li>
            <li>... And its just plain cool 😎</li>
          </ul>
        </div>

        <div>
          <h2>How?</h2>

          <p>The Basic setup goes like this...</p>

          <ol>
            <li><p>An express server to handle requests, render the page and handle all our file requests.</p></li>
            <li><p>Webpack to bundle everything up listen for files changes and hot reload them to the client.</p></li>
            <li><p>We will be using React, Redux and React Router to match url requests, and render the state to html that we can then send back to the client.</p></li>
          </ol>

          <p>Lets check it out...</p>
        </div>


        <div className={styles.center}>
          <Link className={styles.button} to='/counter'>Go to App</Link>
        </div>
      </div>
    );
  }
}

export default Home;
