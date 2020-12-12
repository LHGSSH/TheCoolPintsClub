const { createProxyMiddleware } = require('http-proxy-middleware');

const addLog = createProxyMiddleware({
    target: "http://localhost:4000/",
    changeOrigin: true
});

module.exports = {
    addLog
};