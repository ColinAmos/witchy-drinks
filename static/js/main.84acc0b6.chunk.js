(window["webpackJsonpwitchy-drinks"]=window["webpackJsonpwitchy-drinks"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/potion__cyan.3d3c66bc.png"},function(e,t,n){e.exports=n.p+"static/media/potion__blue.3ee3aa24.png"},function(e,t,n){e.exports=n.p+"static/media/potion__orange.f505d1fa.png"},function(e,t,n){e.exports=n.p+"static/media/potion__green.b8228b60.png"},function(e,t,n){e.exports=n.p+"static/media/potion__brown.11bf51e3.png"},function(e,t,n){e.exports=n.p+"static/media/potion__gray.2b30d28a.png"},,,,,function(e,t,n){e.exports=n.p+"static/media/potion-mask.eae7f448.png"},,,,function(e,t,n){e.exports=n.p+"static/media/cauldron.3ec68944.png"},,function(e,t,n){e.exports=n.p+"static/media/placeholder-background-image.defe5c60.jpg"},,,,function(e,t,n){e.exports=n(38)},,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),o=n.n(r),s=(n(31),n(3)),l=n(4),c=n(12),u=n(5),d=n(13),m=(n(32),n(6)),g=n.n(m),p=n(7),b=n.n(p),h=n(8),f=n.n(h),y=n(9),k=n.n(y),v=n(10),w=n.n(v),E=n(11),x=n.n(E),S=n(20),C=n.n(S),M=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateDimensions=function(){n.log([document.body.clientHeight/i,document.documentElement.clientHeight/i].join(", "));var e=document.getElementById("mixing-station"),t=window.getComputedStyle(e),a=parseFloat(t.getPropertyValue("width"))-1,i=parseFloat(t.getPropertyValue("height"))-1,r=Math.min(document.body.clientWidth/a,document.body.clientHeight/i);e&&(e.style.transform="translate(-50%, -50%) scale("+r+") "),n.setState({scale:r})},n.handleDragMove=function(e,t){var a=n.state.inCauldron;n.isIngredientWithinCauldronArea(e)?a[t]=!0:a[t]=!1,n.setState({inCauldron:a})},n.handleDragStop=function(e,t){var a=n.state.inCauldron,i=0,r=[];a.forEach(function(e,t){!0===e&&(i++,r.push(t))}),i>=2&&n.setState({resultTime:!0,indexesInCauldron:r})},n.isIngredientWithinCauldronArea=function(e){var t=document.getElementById("cauldron"),a=n.getRawCursorPosition(e),i=t.getBoundingClientRect();return!!n.pointIsWithinRectangle(a,i)},n.resetApp=function(){n.setState({inCauldron:[!1,!1,!1,!1,!1,!1],indexesInCauldron:[],resultTime:!1,timeToReset:!0})},n.state={scale:1,inCauldron:[!1,!1,!1,!1,!1,!1],indexesInCauldron:[],resultTime:!1,timeToReset:!1,debugString:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"log",value:function(e){this.setState({debugString:e})}},{key:"componentDidMount",value:function(){var e=this;this.updateDimensions(),window.addEventListener("resize",function(t){e.updateDimensions(t)}),document.body.addEventListener("touchmove",function(e){e.preventDefault()})}},{key:"getRawCursorPosition",value:function(e){var t=0,n=0;return e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:n}}},{key:"pointIsWithinRectangle",value:function(e,t){return e.x>=t.left&&e.y>=t.top&&e.x<=t.left+t.width&&e.y<=t.top+t.height}},{key:"render",value:function(){var e=this,t=[{image:g.a,x:"7%",y:"5%"},{image:b.a,x:"37%",y:"5%"},{image:f.a,x:"67%",y:"5%"},{image:k.a,x:"7%",y:"25%"},{image:w.a,x:"37%",y:"25%"},{image:x.a,x:"67%",y:"25%"}].map(function(t,n){return i.a.createElement(D,{timeToReset:e.state.timeToReset,index:n,scale:e.state.scale,inCauldron:e.state.inCauldron[n],handleDragStop:e.handleDragStop,handleDragMove:e.handleDragMove,image:t.image,x:t.x,y:t.y,key:n})});return!0===this.state.timeToReset&&this.setState({timeToReset:!1}),i.a.createElement("div",{id:"mixing-station"},t,i.a.createElement("img",{id:"cauldron",src:C.a,alt:"",draggable:"false"}),i.a.createElement("p",{id:"instruction-text"},"Drag two ingredients into the ",i.a.createElement("br",null)," cauldron to mix them!"),this.state.resultTime?i.a.createElement(j,{ingredients:this.state.indexesInCauldron,onButtonClick:this.resetApp}):null,i.a.createElement("p",{id:"debug-log"},this.state.debugString))}}]),t}(i.a.Component),I=n(21),A=n.n(I),D=function(e){var t,n=e.image,a=e.x,r=e.y,o=e.index,s=e.inCauldron,l=e.scale,c=e.handleDragStop,u=e.handleDragMove,d="ingredient";return s&&(d+=" glowing"),t=e.timeToReset?{x:0,y:0}:null,i.a.createElement(A.a,{position:t,scale:l,onStop:function(e){return c(e,o)},onDrag:function(e){return u(e,o)}},i.a.createElement("div",{className:"ingredient-wrapper",style:{left:a,top:r}},i.a.createElement("img",{alt:"",src:n,id:"ingredient"+o,className:d,draggable:"false"}),i.a.createElement("p",{className:"ingredient--label"},_.ingredientNames[o])))},B=n(22),R=n.n(B),T=function(){return i.a.createElement("img",{id:"background-image",src:R.a,alt:"",draggable:!1})},W=n(48),N=n(16),F=n.n(N),j=function(e){var t=e.ingredients,n=e.onButtonClick,a=_.getResultFromIngredients(t[0],t[1]),r={maskImage:"url(".concat(F.a,")"),WebkitMaskImage:"url(".concat(F.a,")"),maskSize:"100%",WebkitMaskSize:"100%"};return i.a.createElement("div",{id:"result-screen--blocker"},i.a.createElement(W.a,{elevation:16,id:"result-screen--window"},i.a.createElement("p",{className:"result-screen--title"},a.title),i.a.createElement("p",{className:"result-screen--ingredients"},"(",a.ingredients,")"),i.a.createElement("div",{className:"result-screen--image"},i.a.createElement("img",{className:"result-screen--image--base",alt:"",src:_.ingredientImages[t[0]],draggable:!1}),i.a.createElement("img",{className:"result-screen--image--masked",style:r,alt:"",src:_.ingredientImages[t[1]],draggable:!1})),i.a.createElement("p",{className:"result-screen--description"},i.a.createElement("i",null,a.description)),i.a.createElement("button",{className:"result-screen--button",onClick:n},"Reset")))},G={ingredientNames:{0:"Air",1:"Water",2:"Fire",3:"Plant",4:"Animal",5:"Ground"},ingredientImages:{0:g.a,1:b.a,2:f.a,3:k.a,4:w.a,5:x.a},getResultFromIngredients:function(e,t){var n=function(e,t){var n,a,i=G.ingredientNames[e]+" + "+G.ingredientNames[t];switch(i){case"Air + Water":n="Bubble Bringer",a="Makes you burp bubbles!";break;case"Fire + Water":n="Sweat Sauce",a="Makes you sweat! A lot!";break;case"Fire + Air":n="Dragon Drink",a="Let's you breathe fire!";break;case"Plant + Water":n="Sip of Growth",a="Makes you taller!";break;case"Plant + Air":n="Mint Filter",a="Gives you fresh breath!";break;case"Plant + Fire":n="Chloroplast Blast",a="Turns your skin green!";break;case"Animal + Water":n="Swift Snorkel",a="Gives you gills and fins!";break;case"Animal + Air":n="Feather Flurry",a="Gives you wings!";break;case"Animal + Fire":n="Bio Glow",a="Makes your body glow!";break;case"Animal + Plant":n="Background Blur",a="Gives you camouflauge!";break;case"Ground + Water":n="Slime Time",a="Makes you slimy!";break;case"Ground + Air":n="Smoke Bomb",a="Surrounds you in a cloud of dust!";break;case"Ground + Fire":n="Magma Meltdown",a="Makes food melt in your mouth, literally!";break;case"Ground + Plant":n="Moss Maker",a="Covers you with moss!";break;case"Ground + Animal":n="Beast Burrow",a="Makes you really want to dig a hole!";break;default:return null}return{title:n,description:a,ingredients:i}},a=n(e,t);return null===a&&(a=n(t,e)),null===a?(console.error("Recipe not found!"),{title:"???",description:"Something weird happened!",ingredients:"??? + ???"}):a}},_=G,O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"app-container"},i.a.createElement(T,null),i.a.createElement(M,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[26,1,2]]]);
//# sourceMappingURL=main.84acc0b6.chunk.js.map