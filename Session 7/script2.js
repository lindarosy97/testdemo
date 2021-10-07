var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v2/all",true);
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log("Countries with a population of less than 2 lakhs:")
    var population=result.filter((ele)=>ele.population<200000).map((ele)=>console.log(ele.name));
}
