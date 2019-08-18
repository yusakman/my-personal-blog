module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Yusak Blog', // Navigation and Site Title
  titleAlt: 'Yusak Blog', // Title for JSONLD
  description: 'My journey to become a blockchain developer',
  url: 'https://yusak.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://yusak.netlify.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'YusakBlog', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Yusak', // Author for schemaORGJSONLD
  themeColor: '#00cdac',
  backgroundColor: '#d3e0ff',
  twitter: '@yusak_man', // Twitter Username
};
