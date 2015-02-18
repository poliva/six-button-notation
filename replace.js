// shamelessly stolen from http://stackoverflow.com/q/19625502
jQuery.fn.textWalk = function( fn ) {
    this.contents().each( jwalk );
    
    function jwalk() {
        var nn = this.nodeName.toLowerCase();
        if( nn === '#text') {
            fn.call( this );
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && nn !== 'script' && nn !== 'textarea' ) {
            $(this).contents().each( jwalk );
	}
    }
    return this;
};

$('body').textWalk(function() {
    this.data = this.data.replace(/x-up/gi,'crossup');

    this.data = this.data.replace(/jab/gi,'LP');
    this.data = this.data.replace(/LPber/g,'jabber');
    this.data = this.data.replace(/weak punch/gi,'LP');
    this.data = this.data.replace(/LP punch/gi,'LP');

    this.data = this.data.replace(/strong/gi,'MP');
    this.data = this.data.replace(/MPer/g,'stronger');
    this.data = this.data.replace(/MPest/g,'strongest');
    this.data = this.data.replace(/MPly/g,'strongly');
    this.data = this.data.replace(/ are MP/g,' are strong');
    this.data = this.data.replace(/too MP/gi,'too strong');
    this.data = this.data.replace(/very MP/gi,'very strong');
    this.data = this.data.replace(/MP character/gi,'strong character');
    this.data = this.data.replace(/MP opponent/gi,'strong opponent');
    this.data = this.data.replace(/medium punch/gi,'MP');
    this.data = this.data.replace(/MP punch/gi,'MP');

    this.data = this.data.replace(/fierce/gi,'HP');
    this.data = this.data.replace(/ FP /g,' HP ');
    this.data = this.data.replace(/jump fp/gi,'jump HP');
    this.data = this.data.replace(/jumping fp/gi,'jumping HP');
    this.data = this.data.replace(/stand fp/gi,'stand HP');
    this.data = this.data.replace(/standing fp/gi,'standing HP');
    this.data = this.data.replace(/crouch fp/gi,'crouch HP');
    this.data = this.data.replace(/crouching fp/gi,'crouching HP');
    this.data = this.data.replace(/fierce punch/gi,'HP');
    this.data = this.data.replace(/high punch/gi,'HP');
    this.data = this.data.replace(/HP punch/gi,'HP');

    this.data = this.data.replace(/short/gi,'LK');
    this.data = this.data.replace(/LKer/g,'shorter');
    this.data = this.data.replace(/LKest/g,'shortest');
    this.data = this.data.replace(/LKly/g,'shortly');
    this.data = this.data.replace(/LKen/g,'shorten');
    this.data = this.data.replace(/very LK/gi,'very short');
    this.data = this.data.replace(/a LK/gi,'a short');
    this.data = this.data.replace(/in LK/gi,'in short');
    this.data = this.data.replace(/quite LK/gi,'quite short');
    this.data = this.data.replace(/bit LK/gi,'bit short');
    this.data = this.data.replace(/LK pause/gi,'short pause');
    this.data = this.data.replace(/LK window/gi,'short window');
    this.data = this.data.replace(/LK recover/gi,'short recover');
    this.data = this.data.replace(/LK burst/gi,'short burst');
    this.data = this.data.replace(/LK range/gi,'short range');
    this.data = this.data.replace(/light kick/gi,'LK');
    this.data = this.data.replace(/low kick/gi,'LK');
    this.data = this.data.replace(/weak kick/gi,'LK');
    this.data = this.data.replace(/LK kick/gi,'LK');

    this.data = this.data.replace(/forward/gi,'MK');
    this.data = this.data.replace(/step MK/gi,'step forward');
    this.data = this.data.replace(/advance MK/gi,'advance forward');
    this.data = this.data.replace(/circle MK/gi,'circle forward');
    this.data = this.data.replace(/stick MK/gi,'stick forward');
    this.data = this.data.replace(/fast MK/gi,'fast forward');
    this.data = this.data.replace(/MK a /g,'forward a ');
    this.data = this.data.replace(/cr\.forward/gi,'cr.MK');
    this.data = this.data.replace(/st\.forward/gi,'st.MK');
    this.data = this.data.replace(/cl\.forward/gi,'cl.MK');
    this.data = this.data.replace(/j\.forward/gi,'j.MK');
    this.data = this.data.replace(/c\.forward/gi,'c.MK');
    this.data = this.data.replace(/s\.forward/gi,'s.MK');
    this.data = this.data.replace(/cr\. forward/gi,'cr.MK');
    this.data = this.data.replace(/st\. forward/gi,'st.MK');
    this.data = this.data.replace(/cl\. forward/gi,'cl.MK');
    this.data = this.data.replace(/j\. forward/gi,'j.MK');
    this.data = this.data.replace(/c\. forward/gi,'c.MK');
    this.data = this.data.replace(/s\. forward/gi,'s.MK');
    this.data = this.data.replace(/press MK/gi,'press forward');
    this.data = this.data.replace(/presses MK/gi,'presses forward');
    this.data = this.data.replace(/pressing MK/gi,'pressing forward');
    this.data = this.data.replace(/pressed MK/gi,'pressed forward');
    this.data = this.data.replace(/push MK/gi,'push forward');
    this.data = this.data.replace(/pushes MK/gi,'pushes forward');
    this.data = this.data.replace(/pushed MK/gi,'pushed forward');
    this.data = this.data.replace(/pushing MK/gi,'pushing forward');
    this.data = this.data.replace(/push you MK/gi,'push you forward');
    this.data = this.data.replace(/push him MK/gi,'push him forward');
    this.data = this.data.replace(/push your opponent MK/gi,'push your opponent forward');
    this.data = this.data.replace(/jump MK/gi,'jump forward');
    this.data = this.data.replace(/jumps MK/gi,'jumps forward');
    this.data = this.data.replace(/jumped MK/gi,'jumped forward');
    this.data = this.data.replace(/jumping MK/gi,'jumping forward');
    this.data = this.data.replace(/move MK/gi,'move forward');
    this.data = this.data.replace(/moves MK/gi,'moves forward');
    this.data = this.data.replace(/moved MK/gi,'moved forward');
    this.data = this.data.replace(/moving MK/gi,'moving forward');
    this.data = this.data.replace(/walk MK/gi,'walk forward');
    this.data = this.data.replace(/walks MK/gi,'walks forward');
    this.data = this.data.replace(/walked MK/gi,'walked forward');
    this.data = this.data.replace(/walking MK/gi,'walking forward');
    this.data = this.data.replace(/downwards and MK/gi,'downwards and forward');
    this.data = this.data.replace(/downward and MK/gi,'downward and forward');
    this.data = this.data.replace(/then MK/gi,'then forward');
    this.data = this.data.replace(/medium kick/gi,'MK');
    this.data = this.data.replace(/MK kick/gi,'MK');

    this.data = this.data.replace(/roundhouse/gi,'HK');
    this.data = this.data.replace(/ RH /g,' HK ');
    this.data = this.data.replace(/j\.RH/gi,'j.HK');
    this.data = this.data.replace(/j\. RH/gi,'j.HK');
    this.data = this.data.replace(/low rh/gi,'low HK');
    this.data = this.data.replace(/jump rh/gi,'jump HK');
    this.data = this.data.replace(/jumping rh/gi,'jumping HK');
    this.data = this.data.replace(/stand rh/gi,'stand HK');
    this.data = this.data.replace(/standing rh/gi,'standing HK');
    this.data = this.data.replace(/crouch rh/gi,'crouch HK');
    this.data = this.data.replace(/crouching rh/gi,'crouching HK');
    this.data = this.data.replace(/high kick/gi,'HK');
    this.data = this.data.replace(/fierce kick/gi,'HK');
    this.data = this.data.replace(/HP kick/gi,'HK');
    this.data = this.data.replace(/HK kick/gi,'HK');
});
