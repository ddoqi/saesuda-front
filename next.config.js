module.exports = async () => {
  return {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/:path*",
          // destination: "http://180.224.245.90:9090/:path*",
          destination: "http://192.168.17.239:9090/:path*",
        },
      ];
    },
  };
};
// next.config.js
// module.exports = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: "/:path*",
//         destination: "http://180.224.245.90:9090/:path*",
//       },
//     ];
//   },
//   async headers() {
//     return [
//       {
//         // 모든 페이지에 대해 CSP 설정
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Content-Security-Policy",
//             value: "upgrade-insecure-requests",
//           },
//         ],
//       },
//     ];
//   },
// };
