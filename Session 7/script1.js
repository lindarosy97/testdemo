var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v2/all",true);
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log("Countries in Asia are :");
    var continent=result.filter((ele)=>ele.region=="Asia").map((ele)=>console.log(ele.name));
}
