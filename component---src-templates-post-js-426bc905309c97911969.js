(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{611:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",function(){return E});var r=n(1),a=n.n(r),o=n(3),i=n.n(o),c=n(80),l=n(79),m=n(623),s=n.n(m),u=n(652),p=n.n(u),d=n(621),f=n(617),g=n.n(f),h=l.c.article.withConfig({displayName:"post__Content",componentId:"lq4eaz-0"})(["grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);max-width:1000px;border-radius:1rem;padding:2rem 4.5rem;background-color:",";z-index:9000;margin-top:-3rem;@media (max-width:","){padding:3rem 3rem;}@media (max-width:","){padding:2rem 1.5rem;}p{font-size:1.1rem;letter-spacing:-0.003em;line-height:1.58;--baseline-multiplier:0.179;--x-height-multiplier:0.35;@media (max-width:","){font-size:1rem;}}.prism-code{padding:0.75rem;border-radius:5px;margin-bottom:1rem;font-size:16px;}"],function(e){return e.theme.colors.bg},function(e){return e.theme.breakpoints.tablet},function(e){return e.theme.breakpoints.phone},function(e){return e.theme.breakpoints.phone}),b=l.c.h1.withConfig({displayName:"post__Title",componentId:"lq4eaz-1"})(["margin-bottom:1rem;"]),y=l.c.div.withConfig({displayName:"post__PostContent",componentId:"lq4eaz-2"})(["margin-top:4rem;"]),x=function(e){var t=e.pageContext,n=t.slug,r=t.prev,o=t.next,i=e.data.mdx,l=i.frontmatter;return a.a.createElement(d.d,{customSEO:!0},a.a.createElement(d.i,null,a.a.createElement(d.f,{postPath:n,postNode:i,article:!0}),a.a.createElement(d.c,null,a.a.createElement(c.Link,{to:"/"},g.a.siteTitle)),a.a.createElement(h,null,a.a.createElement(b,null,l.title),a.a.createElement(d.h,null,l.date," — ",i.timeToRead," Min Read — In"," ",l.categories.map(function(e,t){return a.a.createElement(a.a.Fragment,{key:e},!!t&&", ",a.a.createElement(c.Link,{to:"/categories/"+s()(e)},e))})),a.a.createElement(y,null,a.a.createElement(p.a,null,i.code.body)),a.a.createElement(d.e,{prev:r,next:o}))))};t.default=x,x.propTypes={pageContext:i.a.shape({slug:i.a.string.isRequired,next:i.a.object,prev:i.a.object}),data:i.a.shape({mdx:i.a.object.isRequired}).isRequired},x.defaultProps={pageContext:i.a.shape({next:null,prev:null})};var E="3228379098"},617:function(e,t){e.exports={pathPrefix:"/",siteTitle:"Adblock Thai",siteTitleAlt:"Adblock Thai บล็อคโฆษณา ลบโฆษณา",siteTitleManifest:"Adblock Thai",siteUrl:"https://adblock-thai.github.io",siteLanguage:"th",siteHeadline:"รายการตัวกรองโฆษณาสำหรับประเทศไทย",siteBanner:"/social/banner.jpg",favicon:"src/favicon.png",siteDescription:"บล็อคโฆษณาและการติดตามต่างๆในเว็บของประเทศไทย",siteKeyword:"ลบโฆษณา,บล็อคโฆษณา,adblock,adblock thai,block ads",author:"adblock-thai",siteLogo:"/social/logo.png",ogSiteName:"Adblock Thai",ogLanguage:"th_TH",googleAnalyticsID:"UA-142553035-1",themeColor:"#d02e77",backgroundColor:"#f6efef"}},620:function(e){e.exports={data:{site:{buildTime:"2019-07-04"}}}},621:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(3),i=n.n(o),c=n(79),l=n(80),m=n(623),s=n.n(m),u=(n(618),c.c.div.withConfig({displayName:"Subline",componentId:"sc-2pjf43-0"})(["font-size:",";color:",";",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.light},function(e){return e.sectionTitle&&"margin-top: -3rem"},function(e){return e.sectionTitle&&"margin-bottom: 4rem"},function(e){return e.sectionTitle&&"text-align: center"})),p=c.c.article.withConfig({displayName:"Article__Post",componentId:"sc-1p7dbao-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;@media (max-width:","){margin-top:2rem;margin-bottom:2rem;}"],function(e){return e.theme.breakpoints.phone}),d=c.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-1p7dbao-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;a{color:",";&:hover{color:",";}}"],function(e){return e.theme.colors.grey.dark},function(e){return e.theme.colors.primaryLight}),f=c.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1p7dbao-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),g=c.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1p7dbao-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),h=function(e){var t=e.title,n=e.date,r=e.excerpt,o=e.slug,i=e.timeToRead,c=e.categories,m=t.charAt(0);return a.a.createElement(p,null,a.a.createElement(d,null,a.a.createElement(f,null,m),a.a.createElement(l.Link,{to:o},t)),a.a.createElement(u,null,n," — ",i," Min Read — In"," ",c.map(function(e,t){return a.a.createElement(a.a.Fragment,{key:e},!!t&&", ",a.a.createElement(l.Link,{to:"/categories/"+s()(e)},e))})),a.a.createElement(g,null,r))},b=h;h.propTypes={title:i.a.string.isRequired,date:i.a.string.isRequired,excerpt:i.a.string.isRequired,slug:i.a.string.isRequired,timeToRead:i.a.number.isRequired,categories:i.a.array.isRequired};n(626);var y=c.c.button.withConfig({displayName:"Button",componentId:"f0k30h-0"})(["background:",";border:none;display:inline-flex;align-items:center;border-radius:",";font-size:",";color:",";padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:",";}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.theme.colors.white},function(e){return e.big?"0.5rem 1.75rem":"0.35rem 1.65rem"},function(e){return e.theme.transitions.normal},function(e){return e.theme.colors.primaryLight},function(e){return e.theme.colors.white}),x=n(619),E=c.c.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1uevezl-0"})(["background:linear-gradient( 45deg,",","," );grid-column:1 / -1;margin-left:-1rem;margin-right:-1rem;padding:2rem 2rem 5rem 2rem;box-shadow:inset 0px -10px 30px 0px rgba(0,0,0,0.1);"],function(e){return Object(x.a)(.1,e.theme.colors.primary)},function(e){return Object(x.b)(.1,e.theme.colors.primary)}),v=c.c.div.withConfig({displayName:"Header__Content",componentId:"sc-1uevezl-1"})(["max-width:",";margin:0 auto;a{color:",";font-size:2rem;&:hover{opacity:0.85;color:",";}}"],function(e){return e.theme.maxWidth},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),w=function(e){var t=e.children;return a.a.createElement(E,null,a.a.createElement(v,null,t))},k=w;w.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired};var z=n(627),T=n.n(z),_=n(622),N=n.n(_),P=n(617),I=n.n(P),S=function(e){var t,n,r,o=e.postNode,i=e.postPath,c=e.article,l=e.buildTime,m="/"===I.a.pathPrefix?"":I.a.pathPrefix,s=""+I.a.siteUrl+m,u=""+s+(i||""),p=""+s+I.a.siteBanner;c?(t=o.frontmatter.title+" | "+I.a.siteTitle,n=o.excerpt):(t=I.a.siteTitleAlt,n=I.a.siteDescription,r=I.a.siteKeyword);var d={"@context":"http://schema.org","@type":"WebPage",url:u,headline:I.a.siteHeadline,inLanguage:I.a.siteLanguage,mainEntityOfPage:u,description:I.a.siteDescription,name:I.a.siteTitle,author:{"@type":"Person",name:I.a.author},copyrightHolder:{"@type":"Person",name:I.a.author},copyrightYear:"2018",creator:{"@type":"Person",name:I.a.author},publisher:{"@type":"Person",name:I.a.author},datePublished:"2019-01-07T10:30:00+01:00",dateModified:l,image:{"@type":"ImageObject",url:p}},f=[{"@type":"ListItem",item:{"@id":s,name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":s+"/report",name:"Report"},position:2}],g=null;c&&(g={"@context":"http://schema.org","@type":"Article",author:{"@type":"Person",name:I.a.author},copyrightHolder:{"@type":"Person",name:I.a.author},copyrightYear:o.parent.birthtime,creator:{"@type":"Person",name:I.a.author},publisher:{"@type":"Organization",name:I.a.author,logo:{"@type":"ImageObject",url:""+s+I.a.siteLogo}},datePublished:o.parent.birthtime,dateModified:o.parent.mtime,description:n,headline:t,inLanguage:"en",url:u,name:t,image:{"@type":"ImageObject",url:p},mainEntityOfPage:u},f.push({"@type":"ListItem",item:{"@id":u,name:t},position:3}));var h={"@context":"http://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:f};return a.a.createElement(N.a,null,a.a.createElement("html",{lang:I.a.siteLanguage}),a.a.createElement("title",null,t),a.a.createElement("meta",{name:"description",content:n}),a.a.createElement("meta",{name:"keywords",content:r}),a.a.createElement("meta",{name:"image",content:p}),a.a.createElement("meta",{name:"gatsby-starter",content:"Gatsby Starter Minimal Blog"}),a.a.createElement("meta",{property:"og:locale",content:I.a.ogLanguage}),a.a.createElement("meta",{property:"og:site_name",content:I.a.ogSiteName?I.a.ogSiteName:""}),a.a.createElement("meta",{property:"og:url",content:u}),a.a.createElement("meta",{property:"og:type",content:c?"article":"website"}),a.a.createElement("meta",{property:"og:title",content:t}),a.a.createElement("meta",{property:"og:description",content:n}),a.a.createElement("meta",{property:"og:image",content:p}),a.a.createElement("meta",{property:"og:image:alt",content:n}),I.a.siteFBAppID&&a.a.createElement("meta",{property:"fb:app_id",content:I.a.siteFBAppID}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:I.a.userTwitter?I.a.userTwitter:""}),a.a.createElement("meta",{name:"twitter:title",content:t}),a.a.createElement("meta",{name:"twitter:url",content:I.a.siteUrl}),a.a.createElement("meta",{name:"twitter:description",content:n}),a.a.createElement("meta",{name:"twitter:image",content:p}),a.a.createElement("meta",{name:"twitter:image:alt",content:n}),!c&&a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),c&&a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)))},L=S;S.propTypes={postNode:i.a.object,postPath:i.a.string,article:i.a.bool,buildTime:i.a.string},S.defaultProps={postNode:null,postPath:null,article:!1,buildTime:null};var C={colors:{primary:"#d02e77",primaryLight:Object(x.b)(.05,"#d02e77"),bg:"#f6efef",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"},white:"white"},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem"},breakpoints:{tablet:"1200px",phone:"600px"},fontFamily:{serif:"'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif",sansSerif:"'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif"},maxWidth:"1000px",baseFontSize:"18px"},O=n(620),R=function(){return O.data.site.buildTime},j=n(624),A=n(628),q=n(625);function F(){var e=T()(["\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n  html,\n  body {\n    padding: 0;\n    margin: 0;\n  }\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  html {\n    font-family: ",";\n    font-size: ",";\n    h1 {\n      font-size: 3.052rem;\n    }\n    h2 {\n      font-size: 2.441rem;\n    }\n    h3 {\n      font-size: 1.953rem;\n    }\n    h4 {\n      font-size: 1.563rem;\n    }\n    h5 {\n      font-size: 1.25rem;\n    }\n    @media (max-width: ",") {\n      font-size: 16px;\n      h1 {\n        font-size: 2.488rem;\n      }\n      h2 {\n        font-size: 2.074rem;\n      }\n      h3 {\n        font-size: 1.728rem;\n      }\n      h4 {\n        font-size: 1.444rem;\n      }\n      h5 {\n        font-size: 1.2rem;\n      }\n    }\n  }\n  body {\n    background: ",";\n    color: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  a:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none;\n    &:hover,\n    &:focus {\n      color: inherit;\n      text-decoration: none;\n    }\n    &:focus {\n      outline: 0;\n    }\n  }\n  h1, h2, h3, h4, h5, h6 {\n    color: ",";\n    font-family: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea, button {\n    font-size: 1rem;\n  }\n  textarea {\n    font-family: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .4rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  pre {\n    margin-top: 0;\n    margin-bottom: 1rem;\n    overflow: auto;\n  }\n  figure {\n    margin: 0 0 1rem 0;\n  }\n  img {\n    vertical-align: middle;\n  }\n  [role='button'] {\n    cursor: pointer;\n  }\n  a,\n  area,\n  button,\n  [role='button'],\n  input,\n  label,\n  select,\n  summary,\n  textarea {\n    touch-action: manipulation;\n  }\n  table {\n    border-collapse: collapse;\n    background-color: ",";\n  }\n  caption {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: ",";\n    text-align: center;\n    caption-side: bottom;\n  }\n  th {\n    text-align: left;\n  }\n  fieldset {\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n  }\n  legend {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1.5rem;\n    line-height: inherit;\n  }\n  input[type='search'] {\n    -webkit-appearance: none;\n  }\n  output {\n    display: inline-block;\n  }\n  svg:not(:root) {\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  [hidden] {\n    display: none !important;\n  }\n"]);return F=function(){return e},e}j.b.add(A.a);var B=Object(c.b)(F(),function(e){return e.theme.colors.bg},function(e){return e.theme.colors.primary},function(e){return e.theme.fontFamily.sansSerif},function(e){return e.theme.baseFontSize},function(e){return e.theme.breakpoints.phone},function(e){return e.theme.colors.bg},function(e){return e.theme.colors.grey.default},function(e){return e.theme.colors.primary},function(e){return e.theme.transitions.normal},function(e){return e.theme.colors.primaryLight},function(e){return e.theme.colors.grey.dark},function(e){return e.theme.fontFamily.serif},function(e){return e.theme.colors.primary},function(e){return e.theme.colors.grey.dark},function(e){return e.theme.fontFamily.sansSerif},function(e){return e.theme.colors.bg},function(e){return e.theme.colors.color}),H=c.c.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-6xzn7e-0"})(["text-align:center;padding:3rem 1rem;span{font-size:0.75rem;}"]),M=function(e){var t=e.children,n=e.customSEO,r=R();return a.a.createElement(c.a,{theme:C},a.a.createElement(a.a.Fragment,null,!n&&a.a.createElement(L,{buildTime:r}),a.a.createElement(B,null),t,a.a.createElement(H,null,"© 2019 by Adblock Thai. All rights reserved."," ",a.a.createElement("a",{href:"https://github.com/adblock-thai/thai-ads-filter"},a.a.createElement(q.a,{size:"lg",icon:["fab","github"]})," GitHub")," ",a.a.createElement("br",null),a.a.createElement("span",null,"Last build: ",r))))},D=M;M.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired,customSEO:i.a.bool},M.defaultProps={customSEO:!1};var W=c.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-5pxgbz-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),U=c.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-5pxgbz-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),J=c.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-5pxgbz-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),Y=function(e){var t=e.next,n=e.prev;return a.a.createElement(W,null,n&&a.a.createElement(U,null,a.a.createElement("span",null,"Previous"),a.a.createElement(l.Link,{to:n.fields.slug},n.frontmatter.title)),t&&a.a.createElement(J,null,a.a.createElement("span",null,"Next"),a.a.createElement(l.Link,{to:t.fields.slug},t.frontmatter.title)))},G=Y;Y.propTypes={next:i.a.object,prev:i.a.object},Y.defaultProps={next:null,prev:null};var K=c.c.div.withConfig({displayName:"SectionTitle",componentId:"bmdq58-0"})(["font-size:",";text-transform:uppercase;font-weight:bold;text-align:center;color:",";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.dark},function(e){return e.theme.colors.grey.ultraLight}),X=c.c.div.withConfig({displayName:"Wrapper",componentId:"sc-1v6sncg-0"})(["display:grid;grid-template-columns:1fr minmax(280px,",") 1fr;padding:0 1rem;"],function(e){return e.theme.maxWidth});n.d(t,"a",function(){return b}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return k}),n.d(t,"d",function(){return D}),n.d(t,"e",function(){return G}),n.d(t,"g",function(){return K}),n.d(t,"f",function(){return L}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return X})},652:function(e,t,n){var r=n(653);n(81),n(52),n(40),n(655);var a=n(12),o=n(68),i=n(1),c=n(39),l=c.useMDXComponents,m=c.mdx,s=n(95).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,c=e.children,u=o(e,["scope","components","children"]),p=l(n),d=s(t),f=i.useMemo(function(){if(!c)return null;var e=a({React:i,mdx:m},d),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(t,[""+c])).apply(void 0,[{}].concat(n))},[c,t]);return i.createElement(f,a({components:p},u))}},653:function(e,t,n){var r=n(654);function a(t,n,o){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=a=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o}:e.exports=a=Reflect.construct,a.apply(null,arguments)}e.exports=a},654:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},655:function(e,t,n){var r=n(32),a=n(26);n(656)("keys",function(){return function(e){return a(r(e))}})},656:function(e,t,n){var r=n(10),a=n(22),o=n(17);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-templates-post-js-426bc905309c97911969.js.map