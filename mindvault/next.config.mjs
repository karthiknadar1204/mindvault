/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async headers() {
//       return [
//         {
//           source: "/(.*)",
//           headers: [
//             {
//               key: "Content-Security-Policy",
//               value: `
//                 default-src 'self' diverse-turkey-5.accounts.dev diverse-turkey-5.clerk.accounts.dev cdn.jsdelivr.net js.sentry-cdn.com browser.sentry-cdn.com *.ingest.sentry.io challenges.cloudflare.com scdn.clerk.com segapi.clerk.com;
//                 script-src 'self' 'unsafe-inline' 'unsafe-eval' diverse-turkey-5.accounts.dev diverse-turkey-5.clerk.accounts.dev cdn.jsdelivr.net js.sentry-cdn.com browser.sentry-cdn.com *.ingest.sentry.io challenges.cloudflare.com scdn.clerk.com segapi.clerk.com;
//               `.replace(/\s{2,}/g, " ").trim(),
//             },
//           ],
//         },
//       ];
//     },
//   };
  
//   export default nextConfig;
  