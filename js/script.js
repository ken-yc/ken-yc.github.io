
var items = [   {src:'tom.png', name:'Langrisser: Trial of Morality', link:'https://nisamerica.com/langrisser-1-2/trial-of-morality/'},
                {src:'sef.png', name:'Trails of Cold Steel III: Student Enrollment', link:'https://thelegendofheroes.com/tocs3/student-enrollment/'},
                {src:'amm.png', name:'Disgaea 5: Alliance Match Maker', link:'http://disgaea.us/d5/alliance-match-maker/'},
                {src:'rep.png', name:'Republique', link:'https://nisamerica.com/games/republique/'},
                {src:'ros.png', name:'A Rose in the Twilight', link:'http://www.nisamerica.com/games/rose-in-the-twilight/'},
                {src:'spy.png', name:'Assault Spy', link:'http://assaultspy.com/'},
                {src:'dis.png', name:'Disaster Report 4', link:'https://nisamerica.com/disaster-report/'},
                {src:'kem.png', name:'Kemono Heroes', link:'https://nisamerica.com/kemono-heroes/'},
                {src:'lab.png', name:'Labyrinth of Refrain', link:'https://nisamerica.com/games/labyrinth-of-refrain/'},
                {src:'aa.png', name:'The Alliance Alive HD Remastered', link:'https://nisamerica.com/games/alliance-alive/'},
                {src:'tgr.png', name:'Touhou Genso Rondo', link:'https://nisamerica.com/games/touhou-genso-rondo/'},
                {src:'tkv.png', name:'Touhou Kobuto V', link:'https://nisamerica.com/games/touhou-kobuto-v/'},
                {src:'lth.png', name:'Little Town Hero', link:'https://nisamerica.com/little-town-hero/'},
                {src:'snk.png', name:'SNK Heroines', link:'https://nisamerica.com/games/snk-heroines/'},
                {src:'neo.png', name:'Neo Atlas 1469', link:'https://nisamerica.com/games/neo-atlas-1469/'}
];

var $itemList = $('.item-list');
for (let i = 0; i < items.length; i++) {
    if(i % 3 == 0) {
        $itemList.append('<div class="tile is-ancestor" id="ancestor-' + i/3 + '"></div>');
    }
    $('#ancestor-' + Math.floor(i/3)).append('<div class="tile is-parent"><article class="tile is-child"><figure class="image is-square"><a href="' + items[i].link + '" target=_blank><img src="img/' + items[i].src + '" alt="' + items[i].name + '"></a></figure></article></div>');
}

function onSubmit(token) {
    document.getElementById('contact-form').submit();
}