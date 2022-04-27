(function(a){a.fn.lazyload=function(b){
var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};
if(b){
a.extend(c,b)}
var d=this;
if("scroll"==c.event){
a(c.container).bind("scroll",function(b){
var e=0;d.each(function(){
if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}
else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){
a(this).trigger("appear")}
else{
if(e++>c.failurelimit){return false}}});
var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){
var b=this;
if(undefined==a(b).attr("original")){
a(b).attr("original",a(b).attr("src"))
}
if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){
if(c.placeholder){
a(b).attr("src",c.placeholder)}
else{
a(b).removeAttr("src")
}b.loaded=false}
else{
b.loaded=true}a(b).one("appear",function(){
if(!this.loaded){
a("<img />").bind("load",function(){
a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true}).attr("src",a(b).attr("original"))}});
if("scroll"!=c.event){a(b).bind(c.event,function(c){
if(!b.loaded){a(b).trigger("appear")}})}});
a(c.container).trigger(c.event);return this};
a.belowthefold=function(b,c){
if(c.container===undefined||c.container===window){
var d=a(window).height()+a(window).scrollTop()}
else{
var d=a(c.container).offset().top+a(c.container).height()}
return d<=a(b).offset().top-c.threshold};
a.rightoffold=function(b,c){
if(c.container===undefined||c.container===window){
var d=a(window).width()+a(window).scrollLeft()}
else{var d=a(c.container).offset().left+a(c.container).width()}
return d<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){
if(c.container===undefined||c.container===window){
var d=a(window).scrollTop()}
else{
var d=a(c.container).offset().top}
return d>=a(b).offset().top+c.threshold+a(b).height()};
a.leftofbegin=function(b,c){
if(c.container===undefined||c.container===window){
var d=a(window).scrollLeft()}
else{
var d=a(c.container).offset().left}return d>=a(b).offset().left+c.threshold+a(b).width()};
a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);
$(function(){$("img").lazyload({
placeholder:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 50 50'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z' fill='rgba(0,0,0,.1)'><animateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/></path></svg>
" //change placeholder image here 
,effect:"fadeIn",threshold:"-50"})});
