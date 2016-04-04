// ==UserScript==
// @name         Wise Old King's Avatar Helper
// @namespace    https://github.com/aintdiego/GOK-Question-Helper
// @version      1.0.0
// @description  Fills the question fields with random values
// @author       aintdiego
// @match        http://www.neopets.com/medieval/wiseking.phtml
// @require    	 http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$('<button id="generateStatement">Generate Random Statement</button><br />').insertBefore($('input[value=\'Impress King Hagan with your wisdom!\']'));

$('#generateStatement').click(function(event){
	event.preventDefault();

    for (i = 1; i <= 7; i++) {
        var $options = $('#qp' + i).find('option');
        random = ~~(Math.random() * $options.length);
        if(random === 1){
            random++;
        }

        $options.eq(random).prop('selected', true);
    }
});

// That's it!
