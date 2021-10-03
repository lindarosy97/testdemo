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
        console.log("Name:"+result[i].name);
        console.log("Continent:"+result[i].continent);
        console.log("Region:"+result[i].region);
        console.log("Population:"+result[i].population);
        console.log("Flag:"+result[i].flags);
    }
}
