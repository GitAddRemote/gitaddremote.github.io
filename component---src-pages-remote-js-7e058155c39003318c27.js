(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{242:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));a(111),a(112);var n=a(0),r=a.n(n),o=a(65),l=a(234),i=a(232),s=a(233),c=a(235),p=a(30);var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.site.siteMetadata.menuLinks,n=e.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:this.props.location,title:t},r.a.createElement(s.a,{title:"All posts"}),r.a.createElement(c.a,{menuLinks:a}),r.a.createElement(l.a,null),n.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug,n=t.frontmatter.published,l=t.frontmatter.categories;return!0===n&&l.includes("remote")?r.a.createElement("article",{key:t.fields.slug},r.a.createElement("header",null,r.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},r.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),r.a.createElement("small",null,t.frontmatter.date)),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))):void 0})))},n}(r.a.Component);t.default=u;var m="676925172"}}]);
//# sourceMappingURL=component---src-pages-remote-js-7e058155c39003318c27.js.map