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
placeholder:"data:image/webp;base64,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
" //change placeholder image here
,effect:"fadeIn",threshold:"-50"})});
