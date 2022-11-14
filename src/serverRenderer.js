import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import fs from 'fs';
import path from 'path';
import App from '../src/components/App';

function renderHtml(html) {
  const data = fs.readFileSync(path.join('./build', 'index.html'), 'utf8');
  return data.replace('<div id="app"></div>', `<div id="app">${html}</div>`);
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};

    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
      />
    );

    renderToString(renderRoot());

    if (context.url) {
      res.writeHead(302, {
        Location: context.url
      });
      res.end();
      return;
    }

    const html = renderToString(renderRoot());
    res.send(renderHtml(html));
  };
}