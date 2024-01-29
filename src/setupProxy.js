// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // This is the path you'll use in your React app for API requests
    createProxyMiddleware({
      target: 'https://api.themoviedb.org',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the '/api' part when forwarding the request
      },
    })
  );
};
