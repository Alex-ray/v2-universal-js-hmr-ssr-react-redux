// Libraries
import React, {Component, PropTypes} from 'react';
import {StaticRouter} from 'react-router';
import {renderToString} from 'react-dom/server';

// Redux
import { Provider } from 'react-redux';

class Html extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    assets: PropTypes.object
  }

  render () {
    const PROD = process.env.NODE_ENV === 'production';

    const {
      title,
      store,
      assets,
      url,
      context
    } = this.props;

    const {
      manifest,
      app,
      vendor
    } = assets || {};

    let state = store.getState();

    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`;
    const Layout =  PROD ? require( '../../build/prerender.js') : () => {};

    const root = PROD && renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <Layout />
        </StaticRouter>
      </Provider>
    );

    return (
     <html>
       <head>
         <meta charSet="utf-8"/>
         <title>{title}</title>

         {PROD && <link rel="stylesheet" href="/static/prerender.css" type="text/css" />}
       </head>
       <body>
         <script dangerouslySetInnerHTML={{__html: initialState}} />
         {PROD ? <div id="root" dangerouslySetInnerHTML={{__html: root}}></div> : <div id="root"></div>}
          {PROD && <script dangerouslySetInnerHTML={{__html: manifest.text}}/>}
          {PROD && <script src={vendor.js}/>}
         <script src={PROD ? app.js : '/static/app.js'} />
       </body>
     </html>
    );
  }

}

export default Html;
