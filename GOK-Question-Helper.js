// ==UserScript==
// @name         Grumpy Old King's Avatar Helper
// @namespace    https://github.com/aintdiego/GOK-Question-Helper
// @version      0.2
// @description  Fills the question fields with the values needed for the "Blumaroo Court Jester" avatar
// @author       aintdiego
// @match        http://www.neopets.com/medieval/grumpyking.phtml
// @require    	 http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$('<button id="fillQuestion">Fill Question</button><button id="generatePunchline">Generate random punchline</button><br />').insertBefore($('input[value=\'Tell the King your joke!\']'));

$('#fillQuestion').click(function(event){
    // This prevents the page from submitting your empty joke when you click the new button
    event.preventDefault();
    
    // Let's fill the fields
    $('#qp1').val('What');
    $('#qp2').val('do');
    $('#qp3').val('you do if');
    $('#qp4 option').filter(function() {
        return $(this).text() == "*Leave blank*"; 
    }).prop('selected', true);
    $('#qp5').val('fierce');
    $('#qp6').val('Peophins');
    $('#qp7 option').filter(function() {
        return $(this).text() == "*Leave blank*"; 
    }).prop('selected', true);
    $('#qp8').val('has eaten too much');
    $('#qp9 option').filter(function() {
        return $(this).text() == "*Leave blank*"; 
    }).prop('selected', true);
    $('#qp10').val('tin of olives');
});

$('#generatePunchline').click(function(event){
	event.preventDefault();
	
    for (i = 1; i <= 8; i++) { 
        var $options = $('#ap' + i).find('option');
        random = ~~(Math.random() * $options.length) + 1; // "+1" -> quick fix so it doesn't select the first option (Select Part *)

        $options.eq(random).prop('selected', true);
    }
});

// That's it!
