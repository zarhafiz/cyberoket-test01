
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/about.js")),
  "component---src-pages-blog-2-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/blog-2.js")),
  "component---src-pages-blog-3-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/blog-3.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/blog.js")),
  "component---src-pages-blog-single-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/blog-single.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/index.js")),
  "component---src-pages-portfolio-details-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/portfolio-details.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/portfolio.js")),
  "component---src-pages-service-details-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/service-details.js")),
  "component---src-pages-service-js": preferDefault(require("/Users/hafiz/Documents/GitHub/cyberoket-test01/src/pages/service.js"))
}

