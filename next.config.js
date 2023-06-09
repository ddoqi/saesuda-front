module.exports = async () => {
  return {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "http://180.224.245.90:9090/:path*",
          // destination: "http://192.168.17.239:9090/:path*",
        },
      ];
    },
  };
};
