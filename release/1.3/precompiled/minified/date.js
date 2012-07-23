var V,Sa,Ta=["ampm","hour","minute","second","ampm","utc","offset_sign","offset_hours","offset_minutes","ampm"],Ua="({t})?\\s*(\\d{1,2}(?:[,.]\\d+)?)(?:{h}(\\d{1,2}(?:[,.]\\d+)?)?{m}(?::?(\\d{1,2}(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",Va={},Wa,Xa,Ya,Za=[],$a=[{ba:"f{1,4}|ms|milliseconds",format:function(a){return a.getMilliseconds()}},{ba:"ss?|seconds",format:function(a){return a.getSeconds()}},{ba:"mm?|minutes",format:function(a){return a.getMinutes()}},
{ba:"hh?|hours|12hr",format:function(a){a=W(a,"get",void 0,"Hours");return a===0?12:a-P(a/13)*12}},{ba:"HH?|24hr",format:function(a){return a.getHours()}},{ba:"dd?|date|day",format:function(a){return a.getDate()}},{ba:"dow|weekday",ma:j,format:function(a,b,c){return b.weekdays[a.getDay()+(c-1)*7]}},{ba:"MM?",format:function(a){return a.getMonth()+1}},{ba:"mon|month",ma:j,format:function(a,b,c){return b.months[a.getMonth()+(c-1)*12]}},{ba:"y{2,4}|year",format:function(a){return a.getFullYear()}},{ba:"[Tt]{1,2}",
format:function(a,b,c,d){a=b.ampm[P(a.getHours()/12)];if(d.length===1)a=a.slice(0,1);if(d.slice(0,1)==="T")a=a.toUpperCase();return a}},{ba:"z{1,4}|tz|timezone",text:j,format:function(a,b,c,d){a=a.getUTCOffset();if(d=="z"||d=="zz")a=a.replace(/(\d{2})(\d{2})/,function(e,g){return Q(g,d.length)});return a}},{ba:"iso(tz|timezone)",format:function(a){return a.getUTCOffset(j)}},{ba:"ord",format:function(a){a=a.getDate();return a+pa(a)}}],X=[{$:"year",method:"FullYear",da:function(a){return(365+(a?a.isLeapYear()?
1:0:0.25))*24*60*60*1E3}},{$:"month",method:"Month",na:j,da:function(a,b){var c=30.4375,d;if(a){d=a.daysInMonth();if(b<=d.days())c=d}return c*24*60*60*1E3}},{$:"week",method:"Week",da:aa(6048E5)},{$:"day",method:"Date",na:j,da:aa(864E5)},{$:"hour",method:"Hours",da:aa(36E5)},{$:"minute",method:"Minutes",da:aa(6E4)},{$:"second",method:"Seconds",da:aa(1E3)},{$:"millisecond",method:"Milliseconds",da:aa(1)}],ab={};function bb(a){na(this,a);this.ha=Za.concat()}
bb.prototype={getMonth:function(a){return D(a)?a-1:this.months.indexOf(a)%12},ra:function(a){return this.weekdays.indexOf(a)%7},qa:function(a){var b;return D(a)?a:a&&(b=this.numbers.indexOf(a))!==-1?(b+1)%10:1},xa:function(a){var b=this;return a.replace(s(this.num,"g"),function(c){return b.qa(c)||""})},va:function(a){return V.units[this.units.indexOf(a)%8]},Da:function(a){return this.pa(a,a[2]>0?"future":"past")},ua:function(a){return this.pa(cb(a),"duration")},ya:function(a){a=a||this.code;return a===
"en"||a==="en-US"?j:this.variant},Ba:function(a){return a===this.ampm[1]},pa:function(a,b){var c=a[0],d=a[1],e=a[2],g,f,i;if(this.code=="ru"){i=c.toString().slice(-1);switch(j){case i==1:i=1;break;case i>=2&&i<=4:i=2;break;default:i=3}}else i=this.plural&&c>1?1:0;f=this.units[i*8+d]||this.units[d];if(this.capitalizeUnit)f=db(f);g=this.modifiers.filter(function(h){return h.name=="sign"&&h.value==(e>0?1:-1)})[0];return this[b].replace(/\{(.*?)\}/g,function(h,l){switch(l){case "num":return c;case "unit":return f;
case "sign":return g.src}})},wa:function(){return this.oa?[this.oa].concat(this.ha):this.ha},addFormat:function(a,b,c,d,e){var g=c||[],f=this,i;a=a.replace(/\s+/g,"[-,. ]*");a=a.replace(/\{([^,]+?)\}/g,function(h,l){var n=l.match(/\?$/),o=l.match(/(\d)(?:-(\d))?/),q=l.match(/^\d+$/),B=l.replace(/[^a-z]+$/,""),C,A;if(q)C=f.optionals[q[0]];else if(f[B])C=f[B];else if(f[B+"s"]){C=f[B+"s"];if(o){A=[];C.forEach(function(Ea,qa){var Fa=qa%(f.units?8:C.length);if(Fa>=o[1]&&Fa<=(o[2]||o[1]))A.push(Ea)});C=
A}C=eb(C)}if(q)return"(?:"+C+")?";else{c||g.push(B);return"("+C+")"+(n?"?":"")}});if(b){b=fb(Ua,f,e);e=["t","[\\s\\u3000]"].concat(f.timeMarker);i=a.match(/\\d\{\d,\d\}\)+\??$/);gb(f,"(?:"+b+")[,\\s\\u3000]+?"+a,Ta.concat(g),d);gb(f,a+"(?:[,\\s]*(?:"+e.join("|")+(i?"+":"*")+")"+b+")?",g.concat(Ta),d)}else gb(f,a,g,d)}};function hb(a,b){var c;E(a)||(a="");c=ab[a]||ab[a.slice(0,2)];if(b===m&&!c)throw Error("Invalid locale.");return c||Sa}
function ib(a,b){function c(i){var h=f[i];if(E(h))f[i]=h.split(",");else h||(f[i]=[])}function d(i,h){i=i.split("+").map(function(l){return l.replace(/(.+):(.+)$/,function(n,o,q){return q.split("|").map(function(B){return o+B}).join("|")})}).join("|");return i.split("|").forEach(h)}function e(i,h,l){var n=[];if(f[i]){f[i].forEach(function(o,q){d(o,function(B,C){n[C*l+q]=B.toLowerCase()})});if(h)n=n.concat(f[i].map(function(o){return o.slice(0,3).toLowerCase()}));return f[i]=n}}function g(i,h,l){i=
"\\d{"+i+","+h+"}";if(l)i+="|(?:"+eb(f.numbers)+")+";return i}var f;f=new bb(b);c("modifiers");"months,weekdays,units,numbers,articles,optionals,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(c);e("months",j,12);e("weekdays",j,7);e("units",m,8);e("numbers",m,10);f.code=a;f.date=g(1,2,f.digitDate);f.year=g(4,4);f.num=function(){var i=["\\d+"].concat(f.articles);if(f.numbers)i=i.concat(f.numbers);return eb(i)}();(function(){var i=[];f.ia={};f.modifiers.forEach(function(h){var l=
h.name;d(h.src,function(n){var o=f[l];f.ia[n]=h;i.push({name:l,src:n,value:h.value});f[l]=o?o+"|"+n:n})});f.day+="|"+eb(f.weekdays);f.modifiers=i})();if(f.monthSuffix){f.month=g(1,2);f.months=N(1,12).map(function(i){return i+f.monthSuffix})}f.full_month=g(1,2)+"|"+eb(f.months);f.timeSuffixes.length>0&&f.addFormat(fb(Ua,f),m,Ta);f.addFormat("{day}",j);f.addFormat("{month}"+(f.monthSuffix||""));f.addFormat("{year}"+(f.yearSuffix||""));f.timeParse.forEach(function(i){f.addFormat(i,j)});f.dateParse.forEach(function(i){f.addFormat(i)});
return ab[a]=f}function gb(a,b,c,d){a.ha.unshift({Ea:d,Aa:a,Ca:s("^"+b+"$","i"),to:c})}function db(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function eb(a){return a.filter(function(b){return!!b}).join("|")}function jb(a,b){var c;if(la(a[0]))return a;else if(D(a[0])&&!D(a[1]))return[a[0]];else if(E(a[0])&&b)return[kb(a[0]),a[1]];c={};Xa.forEach(function(d,e){c[d.$]=a[e]});return[c]}
function kb(a,b){var c={};match=a.match(/^(\d+)?\s?(\w+?)s?$/i);if(L(b))b=parseInt(match[1])||1;c[match[2].toLowerCase()]=b;return c}function lb(a,b){var c={},d,e;b.forEach(function(g,f){d=a[f+1];if(!(L(d)||d==="")){if(g==="year")c.Fa=d;e=parseFloat(d.replace(/,/,"."));c[g]=!isNaN(e)?e:d.toLowerCase()}});return c}function mb(a){a=a.trim().replace(/^(just )?now|\.+$/i,"");return nb(a)}
function nb(a){return a.replace(Wa,function(b,c,d){var e=0,g=1,f,i;if(c)return b;d.split("").reverse().forEach(function(h){h=Va[h];var l=h>9;if(l){if(f)e+=g;g*=h/(i||1);i=h}else{if(f===m)g*=10;e+=g*h}f=l});if(f)e+=g;return e})}
function ob(a,b,c){var d=new t,e=m,g,f,i,h,l,n,o,q,B;if(fa(a))d=a.clone();else if(D(a))d=new t(a);else if(la(a)){d=(new t).set(a,j);h=a}else if(E(a)){g=hb(b);a=mb(a);g&&I(g.wa(),function(C,A){var Ea=a.match(A.Ca);if(Ea){i=A;f=i.Aa;h=lb(Ea,i.to,f);f.oa=i;if(h.timestamp){h=h.timestamp;return m}if(i.Ea&&!E(h.month)&&(E(h.date)||g.ya(b))){q=h.month;h.month=h.date;h.date=q}if(h.year&&h.Fa.length===2)h.year=O((new t).getFullYear()/100)*100-O(h.year/100)*100+h.year;if(h.month){h.month=f.getMonth(h.month);
if(h.shift&&!h.unit)h.unit=f.units[7]}if(h.weekday&&h.date)delete h.weekday;else if(h.weekday){h.weekday=f.ra(h.weekday);if(h.shift&&!h.unit)h.unit=f.units[5]}if(h.day&&(q=f.ia[h.day])){h.day=q.value;d.reset();e=j}else if(h.day&&(n=f.ra(h.day))>-1){delete h.day;if(h.num&&h.month){B=function(){pb(d,{weekday:n+7*(h.num-1)},m,m,m,1)};h.day=1}else h.weekday=n}if(h.date&&!D(h.date))h.date=f.xa(h.date);if(f.Ba(h.ampm)&&h.hour<12)h.hour+=12;if("offset_hours"in h||"offset_minutes"in h){h.utc=j;h.offset_minutes=
h.offset_minutes||0;h.offset_minutes+=h.offset_hours*60;if(h.offset_sign==="-")h.offset_minutes*=-1;h.minute-=h.offset_minutes}if(h.unit){e=j;o=f.qa(h.num);l=f.va(h.unit);if(h.shift||h.edge){o*=(q=f.ia[h.shift])?q.value:0;if(l==="month"&&K(h.date)){d.set({day:h.date},j);delete h.date}if(l==="year"&&K(h.month)){d.set({month:h.month,day:h.date},j);delete h.month;delete h.date}}if(h.sign&&(q=f.ia[h.sign]))o*=q.value;if(K(h.weekday)){d.set({weekday:h.weekday},j);delete h.weekday}h[l]=(h[l]||0)+o}if(h.year_sign===
"-")h.year*=-1;Ya.slice(1,4).forEach(function(qa,Fa){var xb=h[qa.$],yb=xb%1;if(yb){h[Ya[Fa].$]=O(yb*(qa.$==="second"?1E3:60));h[qa.$]=P(xb)}});return m}});if(i)if(e)d.advance(h);else{h.utc&&d.reset();pb(d,h,j,h.utc,m,c)}else d=a?new t(a):new t;if(h&&h.edge){q=f.ia[h.edge];I(Ya.slice(4),function(C,A){if(K(h[A.$])){l=A.$;return m}});if(l==="year")h.fa="month";else if(l==="month"||l==="week")h.fa="day";d[(q.value<0?"endOf":"beginningOf")+db(l)]();q.value===-2&&d.reset()}B&&B()}return{ea:d,set:h}}
function qb(a){a.addDays(4-(a.getDay()||7)).reset();return 1+P(a.daysSince(a.clone().beginningOfYear())/7)}function cb(a){var b,c=w.abs(a),d=c,e=0;Ya.slice(1).forEach(function(g,f){b=P(O(c/g.da()*10)/10);if(b>=1){d=b;e=f+1}});return[d,e,a]}
function rb(a,b,c,d){var e,g=hb(d),f=s(/^[A-Z]/);if(a.isValid())if(Date[b])b=Date[b];else{if(z(b)){e=cb(a.millisecondsFromNow());b=b.apply(a,e.concat(g))}}else return"Invalid Date";if(!b&&c){e=e||cb(a.millisecondsFromNow());if(e[1]===0){e[1]=1;e[0]=1}return g.Da(e)}b=b||"long";b=g[b]||b;$a.forEach(function(i){b=b.replace(s("\\{("+i.ba+")(\\d)?\\}",i.ma?"i":""),function(h,l,n){h=i.format(a,g,n||1,l);n=l.length;var o=l.match(/^(.)\1+$/);if(i.ma){if(n===3)h=h.slice(0,3);if(o||l.match(f))h=db(h)}else if(o&&
!i.text)h=(D(h)?Q(h,n):h.toString()).slice(-n);return h})});return b}function sb(a,b,c){var d=ob(b),e=0,g=b=0,f;if(c>0){b=g=c;f=j}if(!d.ea.isValid())return m;if(d.set&&d.set.fa){X.forEach(function(h){if(h.$===d.set.fa)e=h.da(d.ea,a-d.ea)-1});c=db(d.set.fa);if(d.set.edge||d.set.shift)d.ea["beginningOf"+c]();if(d.set.fa==="month")i=d.ea.clone()["endOf"+c]().getTime();if(!f&&d.set.sign&&d.set.fa!="millisecond"){b=50;g=-50}}f=a.getTime();c=d.ea.getTime();var i=i||c+e;return f>=c-b&&f<=i+g}
function pb(a,b,c,d,e,g){function f(n){return K(b[n])?b[n]:b[n+"s"]}var i;if(D(b)&&e)b={milliseconds:b};else if(D(b)){a.setTime(b);return a}if(b.date)b.day=b.date;I(Ya,function(n,o){var q=o.$==="day";if(K(f(o.$))||q&&K(f("weekday"))){b.fa=o.$;return m}else if(c&&o.$!=="week"&&(!q||!K(f("week"))))W(a,"set",d,o.method,q?1:0)});X.forEach(function(n,o){var q=n.$,B=n.method,C=X[o-1],A;A=f(q);if(!L(A)){g&&n.na&&!K(f(C.$))&&W(new t,"get",d,n.method)>=A===(g===1)&&a[C.ja](g);if(e){if(q==="week"){A=(b.day||
0)+A*7;B="Date"}A=A*e+W(a,"get",m,B)}else q==="month"&&K(f("day"))&&a.setDate(15);W(a,"set",d,B,A);if(e&&q==="month"){q=A;if(q<0)q+=12;q%12!=a.getMonth()&&a.setDate(0)}}});if(!e&&!K(f("day"))&&K(f("weekday"))){i=f("weekday");var h,l;if(K(g)){h=W(a,"get",d,"Day")-i%7>=0;l=g===1;if(h===l)i+=g*7}W(a,"set",d,"Weekday",i)}return a}function W(a,b,c,d,e){return a[b+(c?"UTC":"")+d](e)}
function fb(a,b,c){var d={h:0,m:1,s:2},e;b=b||V;return a.replace(/{([a-z])}/g,function(g,f){var i=[],h=f==="h",l=h&&!c;if(f==="t")return b.ampm.join("|");else{h&&i.push(":");if(e=b.timeSuffixes[d[f]])i.push(e+"\\s*");return i.length===0?"":"(?:"+i.join("|")+")"+(l?"":"?")}})}function tb(a,b){var c;c=D(a[1])?jb(a)[0]:a[0];return ob(c,a[1],b).ea}
t.extend({create:function(){return tb(arguments)},past:function(){return tb(arguments,-1)},future:function(){return tb(arguments,1)},addLocale:function(a,b){return ib(a,b)},setLocale:function(a){var b=hb(a,m);Sa=b;if(a&&a!=b.code)b.code=a;return b},getLocale:function(a){return!a?Sa:hb(a,m)},addFormat:function(a,b,c){gb(hb(c),a,b)}},m,m);
t.extend({set:function(){var a=jb(arguments);return pb(this,a[0],a[1])},setUTC:function(){var a=jb(arguments);return pb(this,a[0],a[1],j)},setWeekday:function(a){L(a)||this.setDate(this.getDate()+a-this.getDay())},setUTCWeekday:function(a){L(a)||this.setDate(this.getUTCDate()+a-this.getDay())},setWeek:function(a){if(!L(a)){this.setMonth(0);this.setDate(a*7+1)}},setUTCWeek:function(a){if(!L(a)){this.setMonth(0);this.setUTCDate(a*7+1)}},getWeek:function(){return qb(this)},getUTCWeek:function(){return qb(this.toUTC())},
getUTCOffset:function(a){var b=this.la?0:this.getTimezoneOffset(),c=a===j?":":"";if(!b&&a)return"Z";return Q(O(-b/60),2,j)+c+Q(b%60,2)},toUTC:function(){if(this.la)return this;var a=this.clone().addMinutes(this.getTimezoneOffset());a.la=j;return a},isUTC:function(){return this.la||this.getTimezoneOffset()===0},advance:function(){var a=jb(arguments,j);return pb(this,a[0],a[1],m,1)},rewind:function(){var a=jb(arguments,j);return pb(this,a[0],a[1],m,-1)},isValid:function(){return!isNaN(this.getTime())},
isAfter:function(a,b){return this.getTime()>t.create(a).getTime()-(b||0)},isBefore:function(a,b){return this.getTime()<t.create(a).getTime()+(b||0)},isBetween:function(a,b,c){var d=this.getTime();a=t.create(a).getTime();var e=t.create(b).getTime();b=w.min(a,e);a=w.max(a,e);c=c||0;return b-c<d&&a+c>d},isLeapYear:function(){var a=this.getFullYear();return a%4===0&&a%100!==0||a%400===0},daysInMonth:function(){return 32-(new t(this.getFullYear(),this.getMonth(),32)).getDate()},format:function(a,b){return rb(this,
a,m,b)},relative:function(a,b){if(E(a)){b=a;a=k}return rb(this,a,j,b)},is:function(a,b){var c;if(this.isValid()){if(E(a)){a=a.trim().toLowerCase();switch(j){case a==="future":return this.getTime()>(new t).getTime();case a==="past":return this.getTime()<(new t).getTime();case a==="weekday":return this.getDay()>0&&this.getDay()<6;case a==="weekend":return this.getDay()===0||this.getDay()===6;case (c=V.weekdays.indexOf(a)%7)>-1:return this.getDay()===c;case (c=V.months.indexOf(a)%12)>-1:return this.getMonth()===
c}}return sb(this,a,b)}},reset:function(a){var b={},c;a=a||"hours";if(a==="date")a="days";c=X.some(function(d){return a===d.$||a===d.$+"s"});b[a]=a.match(/^days?/)?1:0;return c?this.set(b,j):this},clone:function(){return new t(this.getTime())}});t.extend({iso:function(){return this.toISOString()},getWeekday:t.prototype.getDay,getUTCWeekday:t.prototype.getUTCDay});
function ub(a,b){function c(){return O(this*b)}function d(){return tb(arguments)[a.ja](this)}function e(){return tb(arguments)[a.ja](-this)}var g=a.$,f={};f[g]=c;f[g+"s"]=c;f[g+"Before"]=e;f[g+"sBefore"]=e;f[g+"Ago"]=e;f[g+"sAgo"]=e;f[g+"After"]=d;f[g+"sAfter"]=d;f[g+"FromNow"]=d;f[g+"sFromNow"]=d;v.extend(f)}v.extend({duration:function(a){return hb(a).ua(this)}});
V=t.addLocale("en",{plural:j,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",optionals:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"day",src:"yesterday",value:-1},{name:"day",src:"today",value:0},{name:"day",src:"tomorrow",value:1},{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",src:"next",
value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{num} {unit=4-5} {sign} {day}","{month} {year}","{shift} {unit=5-7}","{0} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],timeParse:["{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1} {year?}","{date} {month} {year}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2} {shift} week","{0} {date}{1} of {month}","{0}{month?} {date?}{1} of {shift} {unit=6-7}"]});Ya=X.concat().reverse();Xa=X.concat();
Xa.splice(2,1);
J(t,j,m,X,function(a,b,c){var d=b.$,e=db(d),g=b.da(),f,i;b.ja="add"+e+"s";f=function(h,l){return O((this.getTime()-t.create(h,l).getTime())/g)};i=function(h,l){return O((t.create(h,l).getTime()-this.getTime())/g)};a[d+"sAgo"]=i;a[d+"sUntil"]=i;a[d+"sSince"]=f;a[d+"sFromNow"]=f;a[b.ja]=function(h,l){var n={};n[d]=h;return this.advance(n,l)};ub(b,g);c<3&&["Last","This","Next"].forEach(function(h){a["is"+h+e]=function(){return this.is(h+" "+d)}});if(c<4){a["beginningOf"+e]=function(){var h={};switch(d){case "year":h.year=
this.getFullYear();break;case "month":h.month=this.getMonth();break;case "day":h.day=this.getDate();break;case "week":h.weekday=0}return this.set(h,j)};a["endOf"+e]=function(){var h={hours:23,minutes:59,seconds:59,milliseconds:999};switch(d){case "year":h.month=11;h.day=31;break;case "month":h.day=this.daysInMonth();break;case "week":h.weekday=6}return this.set(h,j)}}});V.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",j,["year_sign","year","month","date"],m,j);
V.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",j,["date","month","year"],j);V.addFormat("{full_month}[-.](\\d{4,4})",m,["month","year"]);V.addFormat("\\/Date\\((\\d+(?:\\+\\d{4,4})?)\\)\\/",m,["timestamp"]);V.addFormat(fb(Ua,V),m,Ta);Za=V.ha.slice(0,7).reverse();V.ha=V.ha.slice(7).concat(Za);J(t,j,m,"short,long,full",function(a,b){a[b]=function(c){return rb(this,b,m,c)}});
"\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07".split("").forEach(function(a,b){if(b>9)b=w.pow(10,b-9);Va[a]=b});"\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19".split("").forEach(function(a,b){Va[a]=b});Wa=s("([\u671f\u9031\u5468])?([\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19]+)(?!\u6628)","g");
(function(){var a="today,yesterday,tomorrow,weekday,weekend,future,past".split(","),b=V.weekdays.slice(0,7),c=V.months.slice(0,12);J(t,j,m,a.concat(b).concat(c),function(d,e){d["is"+db(e)]=function(){return this.is(e)}})})();t.extend({RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"},m,m);
