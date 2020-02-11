/* pytesNET/tail.DateTime v.0.4.14 | Full Version | @author SamBrishes, pytesNET <sam@pytes.net> | @license MIT */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t,t.document)}):"object"==typeof module&&module.exports?module.exports=e(t,t.document):(void 0===t.tail&&(t.tail={}),t.tail.DateTime=t.tail.datetime=e(t,t.document),"undefined"!=typeof jQuery&&(jQuery.fn.DateTime=jQuery.fn.datetime=function(t){var e,i=[];return this.each(function(){!1!==(e=tail.DateTime(this,t))&&i.push(e)}),1===i.length?i[0]:0!==i.length&&i}),"undefined"!=typeof MooTools&&(Element.implement({DateTime:function(t){return new tail.DateTime(this,t)}}),Element.implement({datetime:function(t){return new tail.DateTime(this,t)}})))}(window,function(d,h){"use strict";function u(t,e){return!!(t&&"classList"in t)&&t.classList.contains(e)}function a(t,e){return t&&"classList"in t?t.classList.add(e):void 0}function n(t,e){return t&&"classList"in t?t.classList.remove(e):void 0}function s(t,e,i){if(CustomEvent&&CustomEvent.name)var a=new CustomEvent(e,i);else(a=h.createEvent("CustomEvent")).initCustomEvent(e,!!i.bubbles,!!i.cancelable,i.detail);return t.dispatchEvent(a)}function o(t,e){if("function"==typeof Object.assign)return Object.assign({},t,e||{});var i=Object.constructor();for(var a in t)i[a]=a in e?e[a]:t[a];return i}function p(t,e){var i=h.createElement(t);return i.className=e&&e.join?e.join(" "):e||"",i}function r(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t,e,i){var a=t instanceof Date?t:!!t&&new Date(t);return a instanceof Date&&!isNaN(a.getDate())&&(i&&a.setHours(0,0,0,0),!0===e?a.getTime():a)}h.forms.inputmode=!0;var c=function(t,e){if((t="string"==typeof t?h.querySelectorAll(t):t)instanceof NodeList||t instanceof HTMLCollection||t instanceof Array){for(var i=[],a=t.length,n=0;n<a;n++)i.push(new c(t[n],e));return 1===i.length?i[0]:0!==i.length&&i}if(!(t instanceof Element))return!1;if(!(this instanceof c))return new c(t,e);if(c.inst[t.getAttribute("data-tail-datetime")])return c.inst[t.getAttribute("data-tail-datetime")];if(t.getAttribute("data-datetime")){var s=JSON.parse(t.getAttribute("data-datetime").replace(/\'/g,'"'));s instanceof Object&&(e=o(e,s))}return this.e=t,this.id=++c.count,this.con=o(c.defaults,e),(c.inst["tail-"+this.id]=this).e.setAttribute("data-tail-datetime","tail-"+this.id),this.init()};return c.version="0.4.14",c.status="beta",c.count=0,c.inst={},c.defaults={animate:!0,classNames:!1,closeButton:!0,dateFormat:"YYYY-mm-dd",dateStart:!1,dateRanges:[],dateBlacklist:!0,dateEnd:!1,locale:"en",position:"bottom",rtl:"auto",startOpen:!1,stayOpen:!1,time12h:!1,timeFormat:"HH:ii:ss",timeHours:!0,timeMinutes:!0,timeSeconds:0,timeIncrement:!0,timeStepHours:1,timeStepMinutes:5,timeStepSeconds:5,today:!0,tooltips:[],viewDefault:"days",viewDecades:!0,viewYears:!0,viewMonths:!0,viewDays:!0,weekStart:0},c.strings={ar:{months:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],days:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],shorts:["أحد","إثن","ثلا","أرب","خمي","جمع","سبت"],time:["ساعة","دقيقة","ثانية"],header:["إختر الشهر","إخنر السنة","إختر العقد","إختر الوقت"]},cs:{months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],days:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"],shorts:["NE","PO","ÚT","ST","ČT","PÁ","SO"],time:["Hodiny","Minuty","Sekundy"],header:["Vyberte měsíc","Vyberte rok","Vyberte desetiletí","Vyberte čas"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shorts:["SO","MO","DI","MI","DO","FR","SA"],time:["Stunden","Minuten","Sekunden"],header:["Wähle einen Monat","Wähle ein Jahr","Wähle ein Jahrzehnt","Wähle eine Uhrzeit"]},de_AT:{months:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shorts:["SO","MO","DI","MI","DO","FR","SA"],time:["Stunden","Minuten","Sekunden"],header:["Wähle einen Monat","Wähle ein Jahr","Wähle ein Jahrzehnt","Wähle eine Uhrzeit"]},el:{months:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],days:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],shorts:["ΚΥΡ","ΔΕΥ","ΤΡΙ","ΤΕΤ","ΠΕΜ","ΠΑΡ","ΣΑΒ"],time:["Ώρες","Λεπτά","Δευτερόλεπτα"],header:["Επιλογή Μηνός","Επιλογή Έτους","Επιλογή Δεκαετίας","Επιλογή Ώρας"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shorts:["SUN","MON","TUE","WED","THU","FRI","SAT"],time:["Hours","Minutes","Seconds"],header:["Select a Month","Select a Year","Select a Decade","Select a Time"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],shorts:["DOM","LUN","MAR","MIÉ","JUE","VIE","SÁB"],time:["Horas","Minutos","Segundos"],header:["Selecciona un mes","Seleccione un año","Seleccione un década","Seleccione una hora"]},es_MX:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],shorts:["DO","LU","MA","MI","JU","VI","SÁ"],time:["Horas","Minutos","Segundos"],header:["Selecciona un Mes","Selecciona un Año","Selecciona una Decada","Selecciona la Hora"]},fi:{months:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],days:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],shorts:["Su","Ma","Ti","Ke","To","Pe","La"],time:["Tunnit","Minuutit","Sekuntit"],header:["Valitse kuukausi","Valitse vuosi","Valitse vuosikymmen","Valitse aika"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],days:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],shorts:["DIM","LUN","MAR","MER","JEU","VEN","SAM"],time:["Heure","Minute","Seconde"],header:["Choisissez un mois","Choisissez une année","Choisissez une décénie","Kies een Tijdstip"]},id:{months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],days:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],shorts:["MIN","SEN","SEL","RAB","KAM","JUM","SAB"],time:["Jam","Menit","Detik"],header:["Pilih Bulan","Pilih Tahun","Pilih Dekade","Pilih Jam"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],days:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],shorts:["DOM","LUN","MAR","MER","GIO","VEN","SAB"],time:["Ore","Minuti","Secondi"],header:["Seleziona un mese","Seleziona un anno","Seleziona un decennio","Seleziona un orario"]},ko:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],days:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],shorts:["일","월","화","수","목","금","토"],time:["시","분","초"],header:["월 선택","연도 선택","연대 선택","시간 선택"]},nl:{months:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],days:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],shorts:["ZO","MA","DI","WO","DO","VR","ZA"],time:["Uur","Minuten","Seconden"],header:["Kies een Maand","Kies een Jaar","Kies een Decennium","Kies een Tijdstip"]},no:{months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],days:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],shorts:["SØN","MAN","TIR","ONS","TOR","FRE","LØR"],time:["Timer","Minutter","Sekunder"],header:["Velg måned","Velg år","Velg tiår","Velg klokkeslett"]},pl:{months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],shorts:["ND","PN","WT","ŚR","CZW","PT","SOB"],time:["Godzina","Minuta","Sekunda"],header:["Wybierz miesiąc","Wybierz rok","Wybierz dekadę","Wybierz czas"]},pt_BR:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],days:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],shorts:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],time:["Horas","Minutos","Segundos"],header:["Escolha um mês","Escolha um ano","Escolha uma década","Escolha um horário"]},ru:{months:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],days:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],shorts:["вс","пн","вт","ср","чт","пт","сб"],time:["часов","минут","секунд"],header:["Выберите месяц","Выберите год","Выберите Десятилетие","Выберите время"]},tr:{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],days:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],shorts:["PA","PT","SA","ÇA","PE","CU","CT"],time:["Saat","Dakika","Saniye"],header:["Ay Seçin","Yıl Seçin","On Yıl Seçin","Zaman Seçin"]},modify:function(t,e,i){if(!(t in this))return!1;if(e instanceof Object)for(var a in e)this.modify(t,a,e[a]);else this[t][e]="string"==typeof i?i:this[t][e];return!0},register:function(t,e){return"string"==typeof t&&e instanceof Object&&(this[t]=e,!0)}},c.prototype={init:function(){this.prepare();var t=this.__.shorts.slice(this.con.weekStart).concat(this.__.shorts.slice(0,this.con.weekStart));this.weekdays="<thead>\n<tr>\n";for(var e=0;e<7;e++)this.weekdays+='<th class="calendar-week">'+t[e]+"</th>";this.weekdays+="\n</tr>\n</thead>",this.select=l(this.e.getAttribute("data-value")||this.e.value),(!this.select||this.select<this.con.dateStart||this.select>this.con.dateEnd)&&(this.select=null),null==this.view&&(this.view={type:this.con.viewDefault,date:this.select||new Date});var i=["Hours","Minutes","Seconds"];for(e=0;e<3;e++)if("number"==typeof this.con["time"+i[e]])this.view.date["set"+i[e]](this.con["time"+i[e]]);else for(;this.view.date["get"+i[e]]()%this.con["timeStep"+i[e]]!=0;)this.view.date["set"+i[e]](this.view.date["get"+i[e]]()+1);return this.ampm=!!this.con.time12h&&12<this.view.date.getHours(),this.events={},this.dt=this.renderCalendar(),this.con.startOpen&&this.open(),this.select&&this.selectDate(this.select),this.bind()},prepare:function(){if(this.__=o(c.strings.en,c.strings[this.con.locale]||{}),this.con.dateStart=l(this.con.dateStart,!0,!0)||-9999999999999,this.con.dateEnd=l(this.con.dateEnd,!0,!0)||9999999999999,this.con.viewDefault=this.con.dateFormat?this.con.viewDefault:"time","string"==typeof this.con.weekStart&&(this.con.weekStart=c.strings.en.shorts.indexOf(this.con.weekStart)),this.con.weekStart<0&&6<this.con.weekStart&&(this.con.weekStart=0),0<this.con.dateRanges.length){for(var t=[],e=(n=this.con.dateRanges).length,i=0;i<e;i++)n[i]instanceof Object&&(n[i].start||n[i].days)&&(!1===(n[i].start=l(n[i].start||!1,!0,!0))?n[i].start=n[i].end=1/0:(!1===(n[i].end=l(n[i].end||!1,!0,!0))&&(n[i].end=n[i].start),n[i].start=n[i].start>n[i].end?[n[i].end,n[i].end=n[i].start][0]:n[i].start),n[i].days=!("days"in n[i])||n[i].days,n[i].days="boolean"!=typeof n[i].days?function(t){for(var e=[],i=t.length,a=0;a<i;a++)"string"==typeof t[a]&&(t[a]=c.strings.en.shorts.indexOf(t[a])),0<=t[a]&&t[a]<=6&&e.push(t[a]);return e}(n[i].days instanceof Array?n[i].days:[n[i].days]):[0,1,2,3,4,5,6],t.push({start:n[i].start,end:n[i].end,days:n[i].days}));this.con.dateRanges=t}if(0<this.con.tooltips.length){t=[];var a,n,s=this.con.tooltips;for(e=s.length,i=0;i<e;i++)s[i]instanceof Object&&s[i].date&&(s[i].date instanceof Array?(a=l(s[i].date[0]||!1,!0,!0),n=l(s[i].date[1]||!1,!0,!0)||a):a=n=l(s[i].date||!1,!0,!0),a&&t.push({date:a!==n?[a,n]:a,text:s[i].text||"Tooltip",color:s[i].color||"inherit",element:s[i].element||(r=h.createElement("DIV"),r.className="calendar-tooltip",r.innerHTML='<div class="tooltip-inner">'+s[i].text||"Tooltip</div>",r)}));this.con.tooltips=t}var r;return this},bind:function(){var e=this;return void 0===this._bind&&(this.e.addEventListener("focusin",function(t){e.open.call(e)}),this.e.addEventListener("keyup",function(t){e.callback.call(e,t)}),h.addEventListener("keyup",function(t){e.dt.contains(t.target)&&e.callback.call(e,t)}),h.addEventListener("click",function(t){e.dt.contains(t.target)?e.callback.call(e,t):!e.e.contains(t.target)&&u(e.dt,"calendar-open")&&(t.target==e.dt||t.target==e.e||e.con.stayOpen||e.close.call(e))}),h.addEventListener("mouseover",function(t){e.dt.contains(t.target)&&e.callback.call(e,t)}),this._bind=!0),this},callback:function(t){var e,i=t.target,a="getAttribute",n="data-action",s=i[a](n)?i:i.parentElement[a](n)?i.parentElement:i,r="data-tooltip";if("mouseover"==t.type&&(!1!==(e=i[a](r)?i:!!s[a](r)&&s)?this.dt.querySelector("#tooltip-"+e[a](r)+"-"+e[a](r+"-time"))||this.showTooltip(e[a](r),e,e[a](r+"-time")):this.dt.querySelector(".calendar-tooltip:not(.remove)")&&this.hideTooltip(this.dt.querySelector(".calendar-tooltip").id.slice(8))),"click"==t.type){if(!s||1!=t.buttons&&1!=(t.which||t.button))return;if(s.hasAttribute("data-disabled"))return;switch(s[a](n)){case"prev":case"next":return this.browseView(s[a](n));case"cancel":this.con.stayOpen||this.close();break;case"submit":return this.con.stayOpen||this.close(),this.selectDate(this.fetchDate(parseInt(s[a]("data-date"))));case"view":return this.switchDate(s[a]("data-year")||null,s[a]("data-month")||null,s[a]("data-day")||null),this.switchView(s[a]("data-view"))}}if("keyup"==t.type){if("INPUT"!=t.target.tagName&&t.target!==this.e&&/calendar-(static|close)/i.test(this.dt.className))return!1;13==(t.keyCode||t.which)&&(this.selectDate(this.fetchDate(this.select)),t.stopPropagation(),this.con.stayOpen||this.close()),27==(t.keyCode||t.which)&&(this.con.stayOpen||this.close())}},trigger:function(t){var e={bubbles:!1,cancelable:!0,detail:{args:arguments,self:this}};"change"==t&&(s(this.e,"input",e),s(this.e,"change",e)),s(this.dt,"tail::"+t,e);for(var i=(this.events[t]||[]).length,a=0;a<i;a++)this.events[t][a].cb.apply(this,function(t,e,i){for(var a=e.length,n=0;n<a;++n)t[n-1]=e[n];return t[n]=i,t}(new Array(arguments.length),arguments,this.events[t][a].args));return!0},calcPosition:function(){var t=this.dt.style,e=d.getComputedStyle(this.dt),i=parseInt(e.marginLeft)+parseInt(e.marginRight),a=parseInt(e.marginTop)+parseInt(e.marginBottom),n=this.e.getBoundingClientRect().top+d.scrollY,s=this.e.getBoundingClientRect().left-d.scrollX,r=this.e.offsetWidth||0,o=this.e.offsetHeight||0;switch(t.visibility="hidden",this.con.position){case"top":var l=n-(this.dt.offsetHeight+a),c=s+r/2-(this.dt.offsetWidth/2+i/2);break;case"left":l=n+o/2-(this.dt.offsetHeight/2+a),c=s-(this.dt.offsetWidth+i);break;case"right":l=n+o/2-(this.dt.offsetHeight/2+a),c=s+r;break;default:l=n+o,c=s+r/2-(this.dt.offsetWidth/2+i/2)}return t.top=(0<=l?l:this.e.offsetTop)+"px",t.left=(0<=c?c:0)+"px",t.visibility="visible",this},convertDate:function(t,e){var i,a={H:String("00"+t.getHours()).toString().slice(-2),G:(i=t.getHours(),i%12?i%12:12),A:12<=t.getHours()?"PM":"AM",a:12<=t.getHours()?"pm":"am",i:String("00"+t.getMinutes()).toString().slice(-2),s:String("00"+t.getSeconds()).toString().slice(-2),Y:t.getFullYear(),y:parseInt(t.getFullYear().toString().slice(2)),m:String("00"+(t.getMonth()+1)).toString().slice(-2),M:this.__.months[t.getMonth()].slice(0,3),F:this.__.months[t.getMonth()],d:String("00"+t.getDate()).toString().slice(-2),D:this.__.days[t.getDay()],l:this.__.shorts[t.getDay()].toLowerCase()};return e.replace(/([HGismd]{1,2}|[Y]{2,4}|y{2})/g,function(t){return 4==t.length||2==t.length?a[t.slice(-1)].toString().slice(-Math.abs(t.length)):1==t.length&&"0"==t[0]?a[t.slice(-1)].toString().slice(-1):a[t.slice(-1)].toString()}).replace(/(A|a|M|F|D|l)/g,function(t){return a[t]})},renderCalendar:function(){var t=["tail-datetime-calendar","calendar-close"],e=!0===this.con.classNames?this.e.className.split(" "):this.con.classNames;if(["top","left","right","bottom"].indexOf(this.con.position)<0){var i=h.querySelector(this.con.position);t.push("calendar-static")}(!0===this.con.rtl||0<=["ar","he","mdr","sam","syr"].indexOf(this.con.rtl))&&t.push("rtl"),this.con.stayOpen&&t.push("calendar-stay"),(e="function"==typeof e.split?e.split(" "):e)instanceof Array&&(t=t.concat(e));var a=p("DIV",t),n=!1;if(a.id="tail-datetime-"+this.id,this.con.dateFormat?n='<span class="action action-prev" data-action="prev"></span><span class="label" data-action="view" data-view="up"></span><span class="action action-next" data-action="next"></span>':this.con.timeFormat&&(n='<span class="action action-submit" data-action="submit"></span><span class="label"></span><span class="action action-cancel" data-action="cancel"></span>'),a.innerHTML=n?'<div class="calendar-actions">'+n+"</div>":"",this.con.dateFormat&&this.renderDatePicker(a,this.con.viewDefault),this.con.timeFormat&&this.renderTimePicker(a),this.con.closeButton&&!i){var s=p("BUTTON","calendar-close"),r=this;s.addEventListener("click",function(t){t.preventDefault(),r.close()}),a.appendChild(s)}return(i||h.body).appendChild(a),a},renderDatePicker:function(t,e){if((!e||["decades","years","months","days"].indexOf(e)<0)&&(e=this.con.viewDays?"days":this.con.viewMonths?"months":this.con.viewYears?"years":!!this.con.viewDecades&&"decades"),!e||!this.con["view"+r(e)]||!this.con.dateFormat)return!1;var i=h.createElement("DIV");return i.className="calendar-datepicker calendar-view-"+e,i.innerHTML=this["view"+r(e)](),t.querySelector(".calendar-datepicker")?t.replaceChild(i,t.querySelector(".calendar-datepicker")):t.appendChild(i),this.view.type=e,this.handleLabel(t)},renderTimePicker:function(t){if(!this.con.timeFormat)return!1;var e,i,a=[],n=0;if(this.con.time12h){var s=12<this.view.date.getHours()?'checked="checked" ':"";a.push('<label class="timepicker-switch" data-am="AM" data-pm="PM"><input type="checkbox" value="1" data-input="PM" '+s+"/><span></span></label>")}for(var r in{Hours:0,Minutes:0,Seconds:0})!1!==this.con["time"+r]?((e=h.createElement("INPUT")).type="text",e.disabled=null===this.con["time"+r],e.setAttribute("min","Hours"===r&&this.con.time12h?"01":"00"),e.setAttribute("max","Hours"!==r?"60":this.con.time12h?"13":"24"),e.setAttribute("step",this.con["timeStep"+r]),e.setAttribute("value",(i=this.view.date["get"+r]())<10?"0"+i:i),e.setAttribute("pattern","d*"),e.setAttribute("inputmode","numeric"),e.setAttribute("data-input",r.toLowerCase()),a.push('<div class="timepicker-field timepicker-'+r.toLowerCase()+'">'+e.outerHTML+'<button class="picker-step step-up"></button><button class="picker-step step-down"></button><label>'+this.__.time[n++]+"</label></div>")):a.push((n++,null));var o=p("DIV","calendar-timepicker"),l=this;o.innerHTML=a.join("\n");var c=o.querySelectorAll("input");for(n=0;n<c.length;n++)"checkbox"!==c[n].type?(c[n].addEventListener("input",function(t){l.handleTime.call(l,this)}),c[n].addEventListener("keydown",function(t){var e=event.keyCode||event.which||0;if(38===e||40===e)return t.preventDefault(),l.handleStep.call(l,this,38===e?"up":"down"),!1})):c[n].addEventListener("change",function(t){l.handleTime.call(l,this)});for(c=o.querySelectorAll("button"),n=0;n<c.length;n++)c[n].addEventListener("mousedown",function(t){t.preventDefault();var e=this.parentElement.querySelector("input");return l.handleStep.call(l,e,u(this,"step-up")?"up":"down"),!1});var d=t.querySelector(".calendar-timepicker");return t[d?"replaceChild":"appendChild"](o,d),this.handleLabel(t)},handleTime:function(t){this.con.time12h&&"checkbox"===t.type&&(this.ampm=t.checked);var e=t.parentElement.parentElement;e=[e.querySelector("input[data-input=hours]")||{value:0},e.querySelector("input[data-input=minutes]")||{value:0},e.querySelector("input[data-input=seconds]")||{value:0}],this.selectTime(parseInt(e[0].value)+(this.ampm?12:0),parseInt(e[1].value),parseInt(e[2].value)),e[2].value=this.view.date.getSeconds(),e[1].value=this.view.date.getMinutes(),this.con.time12h?e[0].value=12<this.view.date.getHours()?this.view.date.getHours()-12:this.view.date.getHours():e[0].value=this.view.date.getHours()},handleStep:function(t,e,i){var a=null,n=parseInt(t.value),s=parseInt(t.getAttribute("min")),r=parseInt(t.getAttribute("max")),o=t.getAttribute("data-input"),l=parseInt(t.getAttribute("step"));if("up"===e?(a=r<=n+l||null,t.value=r<=n+l?13===r?1:0:n+l,this.ampm=!!this.con.time12h&&12<=this.view.date.getHours()+1):"down"===e&&(a=!(n-l<s)&&null,t.value=n-l<s?r-l:n-l,this.ampm=!!this.con.time12h&&this.view.date.getHours()-1<=0),t.value<10&&(t.value="0"+t.value),this.con.timeIncrement&&null!==a){var c=t.parentElement.previousElementSibling;c&&!1===c.disabled?this.handleStep(c.querySelector("input"),a?"up":"down",!0):"hours"==o&&this.view.date.setDate(this.view.date.getDate()+(a?1:-1))}if(void 0!==i&&!0===i)return!1;var d=t.parentElement.parentElement;if(this.selectTime(parseInt((d.querySelector("input[data-input=hours]")||{value:0}).value)+(this.ampm?12:0),parseInt((d.querySelector("input[data-input=minutes]")||{value:0}).value),parseInt((d.querySelector("input[data-input=seconds]")||{value:0}).value)),this.con.time12h){var h=t.parentElement.parentElement.querySelector("input[type=checkbox]");h&&h.checked!==12<this.view.date.getHours()&&(h.checked=12<this.view.date.getHours())}return!0},handleLabel:function(t){var e,i,a=t.querySelector(".label");switch(this.view.type){case"days":e=this.__.months[this.view.date.getMonth()]+", "+this.view.date.getFullYear();break;case"months":e=this.view.date.getFullYear();break;case"years":e=(i=parseInt(this.view.date.getFullYear().toString().slice(0,3)+"0"))+" - "+(i+10);break;case"decades":e=(i=parseInt(this.view.date.getFullYear().toString().slice(0,2)+"00"))+" - "+(i+100);break;case"time":e=this.__.header[3]}return a.innerText=e,t},viewDecades:function(){var t=this.view.date.getFullYear(),e=new Date(this.view.date.getTime()),i=this.con.today?(new Date).getYear():0;e.setFullYear(t-parseInt(t.toString()[3])-30);for(var a,n,s=[],r=[],o=1;o<=16;o++)a="calendar-decade"+(i>=e.getYear()&&i<=e.getYear()+10?" date-today":""),n='data-action="view" data-view="down" data-year="'+e.getFullYear()+'"',s.push('<td class="'+a+'" '+n+'><span class="inner">'+e.getFullYear()+" - "+(e.getFullYear()+10)+"</span></td>"),4<=o&&o%4==0&&(r.push("<tr>\n"+s.join("\n")+"\n</tr>"),s=[]),e.setFullYear(e.getFullYear()+10);return'<table class="calendar-decades"><thead><tr><th colspan="4">'+this.__.header[2]+"</th></tr></thead><tbody>"+r.join("\n")+"</tbody></table>"},viewYears:function(){var t=this.view.date.getFullYear(),e=new Date(this.view.date.getTime()),i=this.con.today?(new Date).getYear():0;e.setFullYear(t-parseInt(t.toString()[3])-2);for(var a,n,s=[],r=[],o=1;o<=16;o++)a="calendar-year"+(e.getYear()==i?" date-today":""),n='data-action="view" data-view="down" data-year="'+e.getFullYear()+'"',s.push('<td class="'+a+'" '+n+'><span class="inner">'+e.getFullYear()+"</span></td>"),4<=o&&o%4==0&&(r.push("<tr>\n"+s.join("\n")+"\n</tr>"),s=[]),e.setFullYear(e.getFullYear()+1);return'<table class="calendar-years"><thead><tr><th colspan="4">'+this.__.header[1]+"</th></tr></thead><tbody>"+r.join("\n")+"</tbody></table>"},viewMonths:function(){var t=this.__.months,e=this.con.today?(new Date).getMonth():-1;e=this.view.date.getYear()==(new Date).getYear()?e:-1;for(var i,a,n=[],s=[],r=0;r<12;r++)i="calendar-month"+(e==r?" date-today":""),a='data-action="view" data-view="down" data-month="'+r+'"',n.push('<td class="'+i+'" '+a+'><span class="inner">'+t[r]+"</span></td>"),3==n.length&&(s.push("<tr>\n"+n.join("\n")+"\n</tr>"),n=[]);return'<table class="calendar-months"><thead><tr><th colspan="3">'+this.__.header[0]+"</th></tr></thead><tbody>"+s.join("\n")+"</tbody></table>"},viewDays:function(){var i,t,e,a,n,s,r=new Date(this.view.date.getTime()),o=(new Date).toDateString(),l=r.getMonth(),c=[],d=[],h=[0,[]],u=([].concat(this.con.tooltips),[0,0]);for(r.setHours(0,0,0,0),r.setDate(1),r.setDate(1-(r.getDay()-this.con.weekStart));d.length<6;)i=r.getTime(),s=[].concat(this.con.dateRanges),e='data-action="submit" data-date="'+r.getTime()+'"',t="calendar-day date-"+(r.getMonth()>l?"next":r.getMonth()<l?"previous":"current"),this.con.today&&o==r.toDateString()&&(t+=" date-today"),this.con.dateBlacklist&&(i<this.con.dateStart||i>this.con.dateEnd)?h=[i<this.con.dateStart?this.con.dateStart:1/0,[0,1,2,3,4,5,6],!0]:0<this.con.dateRanges.length?s.filter(function(t){return t.start==1/0||i>=t.start&&i<=t.end?!(h=[t.end,t.days]):t.start>i},this):3==h.length&&(h=[0,[0,1,2,3,4,5,6]]),0<this.con.tooltips.length&&this.con.tooltips.filter(function(t,e){t.date instanceof Array?t.date[0]<=i&&t.date[1]>=i&&(u=[t.date[1],e,t.color]):t.date==i&&(u=[t.date,e,t.color])},this),u[0]<i&&(u=[0,0]),(n=h[0]>=i&&0<=h[1].indexOf(r.getDay()))&&this.con.dateBlacklist||!n&&!this.con.dateBlacklist?(t+=" date-disabled",e+=' data-disabled="true"'):0!==h[0]&&h[0]<=i&&(h=[0,[]]),this.select&&this.select.toDateString()==r.toDateString()&&(t+=" date-select"),a='<span class="inner">'+r.getDate()+"</span>",0<u[0]&&(t+=" date-tooltip",e+=' data-tooltip="'+u[1]+'" data-tooltip-time="'+i+'"',"inherit"!==u[2]?a+='<span class="tooltip-tick" style="background:'+u[2]+';"></span>':a+='<span class="tooltip-tick"></span>'),c.push('<td class="'+t+'" '+e+">"+a+"</td>"),7==c.length&&(d.push("<tr>\n"+c.join("\n")+"\n</tr>"),c=[]),r.setDate(r.getDate()+1);return d="<tbody>"+d.join("\n")+"</tbody>",'<table class="calendar-days">'+this.weekdays+d+"</table>"},showTooltip:function(t,e,i){var a,n=this.con.tooltips[t].element,s=n.style,r=this.dt.querySelector(".calendar-datepicker");s.cssText="opacity:0;visibility:hidden;",n.id="tooltip-"+t+"-"+i,r.appendChild(n),a=n.offsetWidth,n.offsetHeight,s.top=e.offsetTop+e.offsetHeight+"px",s.left=e.offsetLeft+e.offsetWidth/2-a/2+"px",s.visibility="visible",this.con.animate?(n.setAttribute("data-top",parseInt(s.top)),s.top=parseInt(s.top)+5+"px",function t(){parseFloat(s.top)>n.getAttribute("data-top")&&(s.top=parseFloat(s.top)-.5+"px"),(s.opacity=parseFloat(s.opacity)+.125)<1&&setTimeout(t,20)}()):s.opacity=1},hideTooltip:function(t){var e=this.dt.querySelector("#tooltip-"+t),i=e.style;this.con.animate?(e.className+=" remove",function t(){if(parseFloat(i.top)<parseInt(e.getAttribute("data-top"))+5&&(i.top=parseFloat(i.top)+.5+"px"),(i.opacity-=.125)<0)return(e.className="calendar-tooltip")?e.parentElement.removeChild(e):"";setTimeout(t,20)}()):e.parentElement.removeChild(e)},switchView:function(t){var e=[null,"days","months","years","decades",null];return-1==e.indexOf(t)&&("up"==t?t=e[(e.indexOf(this.view.type)||5)+1]||null:"down"==t&&(t=e[(e.indexOf(this.view.type)||1)-1]||null),t&&this.con["view"+r(t)]||(t=!1)),!!t&&(this.renderDatePicker(this.dt,t),this.trigger("view",t))},switchDate:function(t,e,i,a){return"auto"===i&&(i=this.view.date.getDate(),(1===this.view.date.getMonth()&&28<=i||30<=i)&&(i=(i=new Date(t,e+1,0)).getDate())),this.view.date.setFullYear(null==t?this.view.date.getFullYear():t,null==e?this.view.date.getMonth():e,i||this.view.date.getDate()),!0===a||this.switchView(this.view.type)},switchMonth:function(t,e){return"string"==typeof t&&(t=0<=["previous","prev"].indexOf(t)?-1:1,t=this.view.date.getMonth()+type),this.switchDate(e||this.getFullYear(),t)},switchYear:function(t){return"string"==typeof t&&(t=0<=["previous","prev"].indexOf(t)?-1:1,t=this.view.date.getFullYear()+type),this.switchDate(t)},browseView:function(t){switch(t=0<=["previous","prev"].indexOf(t)?-1:1,this.view.type){case"days":return this.switchDate(null,this.view.date.getMonth()+t,"auto");case"months":return this.switchDate(this.view.date.getFullYear()+t,null,"auto");case"years":return this.switchDate(this.view.date.getFullYear()+10*t,null,"auto");case"decades":return this.switchDate(this.view.date.getFullYear()+100*t,null,"auto")}return!1},fetchDate:function(t){t=l(t||!1)||this.view.date;var e=this.dt.querySelectorAll("input[type=number]");return e&&3==e.length&&t.setHours(e[0].value||0,e[1].value||0,e[2].value||0,0),t},selectDate:function(t,e,i,a,n,s){var r=new Date,o=[];return this.con.dateFormat&&o.push(this.con.dateFormat),this.con.timeFormat&&o.push(this.con.timeFormat),this.select=t instanceof Date?t:new Date(t||(null==t?this.view.date.getFullYear():r.getFullYear()),e||(null==e?this.view.date.getMonth():r.getMonth()),i||(null==i?this.view.date.getDate():r.getDate()),a||(null==a?this.view.date.getHours():0),n||(null==n?this.view.date.getMinutes():0),s||(null==s?this.view.date.getSeconds():0)),this.view.date=new Date(this.select.getTime()),this.e.value=this.convertDate(this.select,o.join(" ")),this.e.setAttribute("data-value",this.select.getTime()),this.switchView("days"),this.trigger("change")},selectTime:function(t,e,i){return this.selectDate(void 0,void 0,void 0,t,e,i)},open:function(){if(!u(this.dt,"calendar-close"))return this;var e=this,i=this.dt.style;return i.display="block",i.opacity=this.con.animate?0:1,n(this.dt,"calendar-close"),a(this.dt,"calendar-idle"),u(this.dt,"calendar-static")||e.calcPosition(),function t(){if(1<=(i.opacity=parseFloat(i.opacity)+.125))return n(e.dt,"calendar-idle"),a(e.dt,"calendar-open"),e.trigger("open");setTimeout(t,20)}(),this},close:function(){if(!u(this.dt,"calendar-open"))return this;var e=this,i=this.dt.style;return i.display="block",i.opacity=this.con.animate?1:0,n(this.dt,"calendar-open"),a(this.dt,"calendar-idle"),function t(){if((i.opacity-=.125)<=0)return n(e.dt,"calendar-idle"),a(e.dt,"calendar-close"),i.display="none",e.trigger("close");setTimeout(t,20)}(),this},toggle:function(){return u(this.dt,"calendar-open")?this.close():u(this.dt,"calendar-close")?this.open():this},on:function(t,e,i){return!(["open","close","change","view"].indexOf(t)<0||"function"!=typeof e)&&(t in this.events||(this.events[t]=[]),this.events[t].push({cb:e,args:i instanceof Array?i:[]}),this)},remove:function(){return this.e.removeAttribute("data-tail-datetime"),this.e.removeAttribute("data-value"),this.dt.parentElement.removeChild(this.dt),this},reload:function(){return this.remove(),this.init()},config:function(t,e,i){if(t instanceof Object){for(var a in t)this.config(a,t[a],!1);return this.reload(),this.con}return void 0===t?this.con:t in this.con&&(void 0===e?this.con[t]:(this.con[t]=e,!1!==this.rebuild&&this.reload(),this))}},c});
