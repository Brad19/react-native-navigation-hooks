(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(84)),i={id:"use-navigation-search-bar-cancel-press",title:"useNavigationSearchBarCancelPress",sidebar_label:"useNavigationSearchBarCancelPress",hide_title:!0,hide_table_of_contents:!0},c={unversionedId:"use-navigation-search-bar-cancel-press",id:"use-navigation-search-bar-cancel-press",isDocsHomePage:!1,title:"useNavigationSearchBarCancelPress",description:"useNavigationSearchBarCancelPress (iOS 11+ only)",source:"@site/docs/use-navigation-search-bar-cancel-press.mdx",permalink:"/react-native-navigation-hooks/docs/use-navigation-search-bar-cancel-press",editUrl:"https://github.com/underscopeio/react-native-navigation-hooks/edit/master/website/docs/use-navigation-search-bar-cancel-press.mdx",sidebar_label:"useNavigationSearchBarCancelPress",sidebar:"docs",previous:{title:"useNavigationSearchBarUpdate",permalink:"/react-native-navigation-hooks/docs/use-navigation-search-bar-update"}},s=[{value:"<code>useNavigationSearchBarCancelPress (iOS 11+ only)</code>",id:"usenavigationsearchbarcancelpress-ios-11-only",children:[{value:"Examples",id:"examples",children:[]},{value:"Reference",id:"reference",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usenavigationsearchbarcancelpress-ios-11-only"},Object(o.b)("inlineCode",{parentName:"h2"},"useNavigationSearchBarCancelPress (iOS 11+ only)")),Object(o.b)("p",null,"Called when the cancel button on the SearchBar from NavigationBar gets pressed. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#searchbarcancelpressed-ios-11-only"}),"more info")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("h4",{id:"using-navigation-context"},"Using Navigation Context"),Object(o.b)("samp",{id:"use-navigation-search-bar-cancel-press-using-navigation-context"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationSearchBarCancelPress } from 'react-native-navigation-hooks'\n\nconst ExampleScreen = () => {\n  // Listen events only for this screen if screen was wrapped with NavigationProvider\n  useNavigationSearchBarCancelPress((e) => {\n    console.log('Seach bar cancel button pressed on this screen')\n  })\n\n  return <Text>Example Screen</Text>\n}\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Provide a Navigation Context")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If your screen wasn't wrapped with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"contexts#navigationprovider"}),"NavigationProvider")," nor using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"hocs#withnavigationproviders"}),"withNavigationProvider")," HOC it will ",Object(o.b)("inlineCode",{parentName:"p"},"console.warn")," you about it!"))),Object(o.b)("h4",{id:"manually"},"Manually"),Object(o.b)("samp",{id:"use-navigation-search-bar-cancel-press-without-navigation-context"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationSearchBarCancelPress } from 'react-native-navigation-hooks'\n\nconst ExampleScreen = ({ componentId }) => {\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationSearchBarCancelPress(\n    (e) => {\n      console.log('Seach bar cancel button pressed on this screen')\n    },\n    { componentId }\n  )\n\n  return <Text>Example Screen</Text>\n}\n")),Object(o.b)("h3",{id:"reference"},"Reference"),Object(o.b)("h4",{id:"methods"},"Methods"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useNavigationSearchBarCancelPress(handler: (event: SearchBarCancelPressedEvent) => any, options: Options): void")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useNavigationSearchBarCancelPress(handler: (event: SearchBarCancelPressedEvent) => any, componentId?: string): void")),Object(o.b)("h4",{id:"types"},"Types"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Options: { componentId?: string, global?: boolean }")),Object(o.b)("h4",{id:"options"},"Options"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"componentId?: string")),Object(o.b)("p",null,"Filters the event from being triggered on every mounted screen but rather the one you've hooked with the event."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"global?: boolean")),Object(o.b)("p",null,"Disables the ",Object(o.b)("inlineCode",{parentName:"p"},"console.warn")," for the cases you don't provide a ",Object(o.b)("inlineCode",{parentName:"p"},"componentId")," through options nor context. In case you want to handle events globally for doing stuff like tracking/logging we encourage you to use the ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.events()")," from ",Object(o.b)("strong",{parentName:"p"},"React Native Navigation")))}p.isMDXComponent=!0},84:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return v}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,v=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return t?r.a.createElement(v,c(c({ref:n},l),{},{components:t})):r.a.createElement(v,c({ref:n},l))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);