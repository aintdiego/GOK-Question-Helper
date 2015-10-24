// ==UserScript==
// @name         Grumpy Old King's Avatar Helper
// @namespace    https://github.com/aintdiego/GOK-Question-Helper
// @version      0.1
// @description  Fills the question fields with the values needed for the "Blumaroo Court Jester" avatar
// @author       aintdiego
// @match        http://www.neopets.com/medieval/grumpyking.phtml
// @require    	 http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$('<td><button id="fillQuestion">Fill Question</button></td>').insertAfter($('#qp10Div').parent('td'));

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

// That's it!