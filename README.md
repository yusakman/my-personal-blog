# [yusak.netlify.com](https://yusak.netlify.com)

<p>
	My personal blog. Forked from <a= href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">Gatsby V2 Tutorial Starter</a>.
</p>

<p>
	View the demo at <a href="https://gatsby-tutorial-starter.netlify.com">gatsby-tutorial-starter.netlify.com</a>.
</p>

<p>
	Read the full step by step guide: <a href="https://justinformentin.com/guide-to-building-a-gatsby-site">Guide to Build a Gatsby Site with Perfect Pagespeed Scores</a>.
</p>

## Features

- Gatsby v2
- Emotion for styling
- Code syntax highlighting
- Tags
- SEO
  - Sitemap generation
  - Schema.org JSON-LD for Google Rich Snippets
  - Twitter Tags
  - OpenGraph Tags for Facebook/Google+/Pinterest
  - robots.txt
- Typography.js
- Typefaces for faster font loading
- Offline Support
- Manifest Support
- Gatsby Image
  - Responsive images
  - Traced SVG Loading with Lazy-Loading
  - WebP Support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - CircleCI support
  - Google Lighthouse Optimization

# Lighthouse Audit

<p align="center">
  <a href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">
	<img
	  src="https://i.imgur.com/YOVC76X.png"
	  alt="Google Lighthouse Audit"
	  title="Google Lighthouse Audit"
	/>
  </a>
</p>

# Usage

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinformentin/gatsby-v2-tutorial-starter)

```bash
Download project
# With `gatsby-cli`
gatsby new my-site https://github.com/justinformentin/gatsby-v2-tutorial-starter

OR

# Cloning
git clone my-site https://github.com/justinformentin/gatsby-v2-tutorial-starter.git
cd my-site

THEN

# Install dependencies
npm i

# Start dev server
gatsby develop

# Build for production
gatsby build

# Format with Prettier
npm format

```

## Folder structure
```bash
├──.circleci # Circleci integration
├── config # Theme and site metadata
├── content # Post markdown and images
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── style
│   └── templates # For Post and Tag page generation
├── static # Images for logo and favicon, and robots.txt
├── gatsby-config.js # Plugin loading and configuration
└── gatsby-node.js # Generate posts/tags and modify webpack
```
