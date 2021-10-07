var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v2/all",true);
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log("Total population of countries using reduce function");
    var population=result.map((ele)=>ele.population).reduce((acc,cv)=>acc+cv);
    console.log(population);
}
