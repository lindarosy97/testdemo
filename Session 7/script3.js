var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v2/all",true);
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log("Name, capital, flag using forEach function");
    result.forEach(displayfn);
    function displayfn(arr){
            console.log("Country name:"+arr.name);
            console.log("Capital:"+arr.capital);
            console.log(arr.flag);
    }
}
