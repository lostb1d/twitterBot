var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));


// ----- my scripts ---- 
var d= new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var time = h + ':' + 'm' +':' +s;
checkTime(time);

function checkTime(time){
    if(time == '7:0:0'){ 
        var status = "Ajit Mijar | Unjusticed for " +  dateCalculator("07/14/2016") + " Days #JusticeForAjit #StopCasteDiscrimination";
        tweetUpdates(status);
    }
    else if(time == '20:0:0'){ 
        var status = "Nirmala Panta | Unjusticed for " +  dateCalculator("07/27/2018") + " Days #JusticeForNirmala #StopRape ";
        tweetUpdates(status);}
    else { console.log("No Tweets Now !!");}
    
}
function tweetUpdates(status){
    var T = new Twit(config);
    T.post('statuses/update', { status: status}, function(err, data, response) {
        console.log(data)
    });
}

function dateCalculator(d){
    var date1 = new Date(d); 
    var today = new Date();
    var date2 = today;
    
    console.log(date2);
    
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    
    
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    return parseInt(Difference_In_Days+1);
    
    }
    


// --- myscripts end ----



