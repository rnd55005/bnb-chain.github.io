"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4581],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14002:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var i=t(87462),a=t(63366),o=(t(67294),t(3905)),r=["components"],l={},c="Install Binaries",s={unversionedId:"beaconchain/develop/node/install",id:"beaconchain/develop/node/install",isDocsHomePage:!1,title:"Install Binaries",description:"This guide will explain how to install the binaries: bnbchaind  and bnbcli, onto your server. With these installed on a server, you can participate in the mainnet or testnet as a Full Node. Full Nodes of Beacon Chain  also help the network by accepting transactions from other nodes and then relaying them to the core Binance network.",source:"@site/docs/beaconchain/develop/node/install.md",sourceDirName:"beaconchain/develop/node",slug:"/beaconchain/develop/node/install",permalink:"/docs/beaconchain/develop/node/install",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/node/install.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Encoding Examples",permalink:"/docs/beaconchain/learn/encoding/amino-example"},next:{title:"Join Mainnet",permalink:"/docs/beaconchain/develop/node/join-mainnet"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[{value:"Option One: Installation Script",id:"option-one-installation-script",children:[],level:3},{value:"Option Two: Manual Installation",id:"option-two-manual-installation",children:[],level:3}],level:2},{value:"Next",id:"next",children:[],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-binaries"},"Install Binaries"),(0,o.kt)("p",null,"This guide will explain how to install the binaries: ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbchaind"),"  and ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli"),", onto your server. With these installed on a server, you can participate in the mainnet or testnet as a Full Node. Full Nodes of Beacon Chain  also help the network by accepting transactions from other nodes and then relaying them to the core Binance network."),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("p",null,"We support running a full node on ",(0,o.kt)("inlineCode",{parentName:"p"},"Mac OS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Windows")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux"),"."),(0,o.kt)("h3",{id:"option-one-installation-script"},"Option One: Installation Script"),(0,o.kt)("p",null,"We have a community-maintained installer script (",(0,o.kt)("inlineCode",{parentName:"p"},"install.sh"),") that takes care of chain directory setup. This uses the following defaults:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Home folder in ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.bnbchaind")),(0,o.kt)("li",{parentName:"ul"},"Client executables stored in ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"lightd")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"bnbchaind"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# One-line install\nsh <(wget -qO- https://raw.githubusercontent.com/binance-chain/node-binary/master/install.sh)\n")),(0,o.kt)("p",null,"The script will install the ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbchain"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli")," binaries. Verify that everything is OK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bnbchaind version\n$ bnbcli version\n")),(0,o.kt)("h3",{id:"option-two-manual-installation"},"Option Two: Manual Installation"),(0,o.kt)("p",null,"We currently use this repo to store historical versions of the compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"node-binaries"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Git LFS")),(0,o.kt)("p",null,"Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise."),(0,o.kt)("p",null,"Please go to ",(0,o.kt)("a",{parentName:"p",href:"https://git-lfs.github.com/"},"https://git-lfs.github.com/")," and install ",(0,o.kt)("inlineCode",{parentName:"p"},"git lfs"),"."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Download Binary with Git LFS:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git lfs clone https://github.com/binance-chain/node-binary.git\n")),(0,o.kt)("p",null,"Please go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/node-binary/blob/master/fullnode/Changelog.md"},"changelog")," to get the information about the latest release of full node version."),(0,o.kt)("p",null,"Go to directory according to the network you want to join in."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"li"},"network")," variable with ",(0,o.kt)("inlineCode",{parentName:"li"},"testnet")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"prod")," in the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd node-binary/fullnode/{network}/{version}\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Copy the executables (i.e.bnbchaind or bnbcli) to /usr/local/bin")),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("p",null,"Now you can join the ",(0,o.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/node/join-mainnet"},"mainnet"),", the public testnet or create you own testnet"))}u.isMDXComponent=!0}}]);