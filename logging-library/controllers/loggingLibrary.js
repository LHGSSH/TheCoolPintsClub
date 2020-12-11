const { createProxyMiddleware } = require('http-proxy-middleware');

const addLog = createProxyMiddleware({
    target: process.env.LOGGING_SERVICE_ENDPOINT,
    changeOrigin: true
});

module.exports = {
    addLog
};