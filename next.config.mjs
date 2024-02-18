/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/sexyshit',
          destination: 'https://gallery.manifold.xyz/pornomusic',
          permanent: false
        },
        {
          source: '/twitterx',
          destination: 'https://twitter_8bit_titty',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;