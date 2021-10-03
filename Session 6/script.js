//Step 1 : Create XHR Object 
var request=new XMLHttpRequest();
//Step 2: Open a connection.  We used get method coz we are retrieving information from server.Using Rest countries API. true wont affect other part of execution even if it fails  (not mandatory)
//Syntax(HttpMethod,URL of API,boolean value)
request.open('GET',"https://restcountries.com/v2/all",true);
//Step 3:initate a connection with the server => A request. A path between client and server 
request.send();
//Step 04: IF data is there in server : http code : 200 will be returned. Data is loaded from server. Globaleenthandlers. onload() will work once it is loaded 
request.onload=function(){
    //Data format will be String. It should be converted to Array of JSON Object
    var result=JSON.parse(request.response);
    for(var i=0;i<result.length;i++){
        try{
        var name=result[i].name;
       // var latitude=result[i].latlng[0];
        var latlon=result[i].latlng;
       // var longitude=result[i].latlng[1];
        if(latlon.length===0){
            throw new Error("Invalid coordinated for the country ")
        }
        weatherdata(name,...latlon);
    }
    catch(e){
        console.log("Invalid country"+name+e.message);
    }
       // console.log(`${name}:${latlon}`);
    }
}

function weatherdata(name,lat,long){
//console.log(`${name}:${lat}:${long}`);
var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2c9fe02a45bd298736dc092067be7a22&units=metric`
var req=new XMLHttpRequest();
req.open('GET',url,true);
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    console.log(`${name}:${data.main.temp}`);
}
}

//can req and request be req. yes due to functional scope 