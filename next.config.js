const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

module.exports = async () => {
  return {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "https://hamseyoun.github.io/:path*",
        },
      ];
    },
    webpack(config) {
      config.resolve.alias["@"] = path.resolve(__dirname);
      return config;
    },
  };
};
