// ==UserScript==
// @name         Grumpy Old King's Avatar Helper
// @namespace    https://github.com/aintdiego/GOK-Question-Helper
// @version      1.0
// @description  Fills the question fields with the values needed for the "Blumaroo Court Jester" avatar
// @author       aintdiego
// @match        http://www.neopets.com/medieval/grumpyking.phtml
// @require    	 http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$('<button id="fillQuestion">Fill Question</button> <button id="generatePunchline">Generate Random Punchline</button><br />').insertBefore($('input[value=\'Tell the King your joke!\']'));

$('#fillQuestion').click(function(event){
    // This prevents the page from submitting your empty joke when you click the new button
    event.preventDefault();
    
    // Let's fill the fields
    selections = new Array('What', 'do', 'you do if', '', 'fierce', 'Peophins', '', 'has eaten too much', '', 'tin of olives');
    $("[name^='qp']").each(function(k,v) {
        $(v).val(selections[k]);
    });
});

$('#generatePunchline').click(function(event){
	event.preventDefault();
	
    for (i = 1; i <= 8; i++) { 
        var $options = $('#ap' + i).find('option');
        random = ~~(Math.random() * $options.length + 1); // "+1" -> quick fix so it doesn't select the first option (Select Part *)

        $options.eq(random).prop('selected', true);
    }
});

// That's it!
