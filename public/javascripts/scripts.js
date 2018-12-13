var skaterList;

$(document).ready(function() {
    'use strict';

    searchSkater();
});

function searchSkater() {
    let countries = countryMap();

    var options = {
        url: "SkaterNames.json",  
        getValue: "SkaterName",
        list: {
            match: {
                enabled: true
            }
        }, 
        template: {
            type: "custom",
            method: function(value, item) {
                console.log(countries[item.Nation]);
                return "<span class='flag flag-" + (countries[item.Nation]).toLowerCase() + "' ></span>" + value;
            }
        },
        theme: "square"
    };

    $("#chooseSkater").easyAutocomplete(options);
}

function countryMap() {
    var map = new Object(); // or var map = {};
    map["HKG"] = "hk";
    map["SUI"] = "ch";
    map["CAN"] = "ca";
    map["KAZ"] = "kz";
    map["MEX"] = "mx";

    map["AUS"] = "au";
    map["USA"] = "us";
    map["NZL"] = "nz";
    map["SGP"] = "sg";
    map["IRL"] = "ie";

    map["CZE"] = "cz";
    map["KOR"] = "kr";
    map["ISL"] = "is";
    map["RUS"] = "ru";
    map["GBR"] = "gb";

    map["CHN"] = "cn";
    map["SWE"] = "se";
    map["MAS"] = "my";
    map["FRA"] = "fr";
    map["ISR"] = "il";

    map["NED"] = "nl";
    map["ESP"] = "es";
    map["BUL"] = "bg";
    map["JPN"] = "jp";
    map["PHI"] = "ph";

    map["TPE"] = "tw";
    map["HUN"] = "hu";
    map["BRA"] = "br";
    map["ARM"] = "am";
    map["UKR"] = "ua";

    map["SRB"] = "rs";
    map["NOR"] = "no";
    map["EST"] = "ee";
    map["FIN"] = "fi";
    map["BLR"] = "by";

    map["GER"] = "de";
    map["ITA"] = "it";
    map["AUT"] = "at";
    map["GEO"] = "ge";
    map["LTU"] = "lt";

    map["POL"] = "pl";
    map["ROU"] = "ro";
    map["SVK"] = "sk";
    map["THA"] = "th";
    map["LIE"] = "li";

    map["UAE"] = "ae";
    map["LAT"] = "lv";
    map["CRO"] = "hr";
    map["BEL"] = "be";
    map["SLO"] = "si";

    map["MON"] = "mc";
    map["AZE"] = "az";
    map["RSA"] = "za";
    map["MDA"] = "md";
    map["ARG"] = "ar";

    map["MAR"] = "ma";
    map["INA"] = "id";
    map["PRK"] = "kp";
    map["AND"] = "ad";
    map["CYP"] = "cy";

    map["GRE"] = "gr";
    map["TUR"] = "tr";
    map["KGZ"] = "kg";
    map["IND"] = "in";
    map["UZB"] = "uz";

    map["DEN"] = "dk";
    map["MKD"] = "mk";
    map["BIH"] = "ba";
    map["LUX"] = "lu";
    return map;
}

// // ----------------------------------------- //
// //              Old Code                     //
// // ----------------------------------------- //
// let xhttp = new XMLHttpRequest();
// xhttp.open('GET', 'SkaterNames.json', true);
// xhttp.setRequestHeader('Content-type', 'application/json');
// xhttp.send();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         skaterList = JSON.parse(xhttp.responseText);
//         searchSkater();
//         console.log("Ready");
//     }
// };
