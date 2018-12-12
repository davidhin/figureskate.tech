$(document).ready(function() {
    'use strict';
    
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open('GET', 'skaterSummary.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();

});



