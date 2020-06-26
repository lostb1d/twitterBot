var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));


// ----- my scripts ---- 
var d= new Date();
var h = d.getHours();
var m = d.getMinutes();

var time = h*60 + m;

checkTime(time);

function checkTime(time){
    console.log(time);
    if(time >= 420 && time <= 450){
        var status = "Ajit Mijar | Unjusticed for " +  dateCalculator("07/14/2016") + " Days #JusticeForAjit #IntercasteMarriage #StopCasteDiscrimination #TwitterBot";
        tweetUpdates(status);
    }
    else if(time >= 600 && time <= 630){ 
        var status = "Navaraj BK, Ganesh Budha , Sandip BK , Lokendra Sunar , Govinda Shahi , Tikaram Sunar | Unjusticed for ,  " +  dateCalculator("05/24/2020") + " Days #StopCasteDiscrimination #TwitterBot";
        tweetUpdates(status);}
    else if(time >= 1200 && time <= 1230 ){ 
        var status = "Nirmala Panta | Unjusticed for " +  dateCalculator("07/27/2018") + " Days #JusticeForNirmala #RapeAndMurder #KillRapist #TwitterBot";
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



