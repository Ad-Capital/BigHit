export default {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Disable image optimization (GitHub Pages doesn't support it)
  },
  basePath: '/repository-name', // Set the repository name as the base path
  assetPrefix: '/repository-name/', // Set asset prefix for correct asset loading
};
