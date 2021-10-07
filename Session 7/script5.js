var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v2/all",true);
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log("Countries which uses US Dollars as currency:");
    for(var i=0;i<result.length;i++){
        try{
        var currency=result[i].currencies;
        if(currency.length===0){
            throw new Error("Invalid coordinated for the country ")
        }
        for(var j=0;j<currency.length;j++){
            if(currency[j].code=="USD"){
                console.log(result[i].name);
            }
        }
    }
    catch(e){
    }
    }
}
