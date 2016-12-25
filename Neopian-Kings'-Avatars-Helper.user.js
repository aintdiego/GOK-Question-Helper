// ==UserScript==
// @name         Neopian Kings' Avatars Helper
// @namespace    https://github.com/aintdiego/GOK-Question-Helper
// @version      1.0.2
// @description  Fills the question fields with the values needed for the "Blumaroo Court Jester" avatar
// @author       aintdiego
// @match        http://www.neopets.com/medieval/grumpyking.phtml
// @match        http://www.neopets.com/medieval/wiseking.phtml
// @require    	 http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

if(document.URL.indexOf("grumpyking.phtml") != -1)
{
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
            random = ~~(Math.random() * $options.length);

            if(random === 0){
                random++;
            }

            $options.eq(random).prop('selected', true);
        }
    });
}

if(document.URL.indexOf("wiseking.phtml") != -1)
{
    $('<button id="generateStatement">Generate Random Statement</button><br />').insertBefore($('input[value=\'Impress King Hagan with your wisdom!\']'));

    $('#generateStatement').click(function(event){
        event.preventDefault();

        for (i = 1; i <= 7; i++) {
            var $options = $('#qp' + i).find('option');
            random = ~~(Math.random() * $options.length);
            if(random === 0){
                random++;
            }
            console.log(random);

            $options.eq(random).prop('selected', true);
        }
    });
}

// That's it!
