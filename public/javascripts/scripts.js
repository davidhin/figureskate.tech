var skaterList;

$(document).ready(function() {
    'use strict';

    // ----------------------------------------- //
    //              Load Database                //
    // ----------------------------------------- //
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'SkaterNames.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();   
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            skaterList = JSON.parse(xhttp.responseText);
            searchSkater();
            console.log("Ready");
        }
    };

});

function searchSkater() {
    // var skaterNames = skaterList.map(function(item) {
    //     return item.SkaterName;
    // })

    // $( "#tags" ).autocomplete({
    //     source: skaterNames, 
    //     autoFocus: true
    // });


    // $('div#example').tagautocomplete({
    //     source: ['@ann', '@bill', '@casey']
    // });

    var options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "SkaterName"
        ]
    };
    var skaterSearch = new Fuse(skaterList, options);
    var result = skaterSearch.search("Yuzuru Hanyu");
    console.log(result);
}



