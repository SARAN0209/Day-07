//Step 01:create a XHR object
//this is the starting point for the connection
var request=new XMLHttpRequest();
//Step 02:opening a connection
//Two parameters:
//first parameters:"HTTP METHOD"
//second parameters:"api-url"
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//Step 03:sending the connection
//its creates a path between client and server
request.send();
//step 04:once the data successfully loaded from her server
request.onload=function(){
    //the data coming from ther server is of type string.
    //so to convert string to the array of object
    var result=JSON.parse(request.response);
    //  console.log(result);
    //you have to extract the counties details whose population is less than 1lAKH
  //SO USE FILTER HERE
  // A. Get all the countries from the Asia continent /region using the Filter function
  var res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
  console.log(res);
  // B.  Get all the countries with a population of less than 2 lakhs using Filter function
  var res=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
  console.log(res);
  // C.  Print the following details name, capital, flag using forEach function
  result.forEach(element=>{console.log(element.name);
  console.log(element.capital);console.log(element.flag);

  });
   // D.  Print the total population of countries using reduce function
var total=result.reduce((initial,ele)=>initial+ele.population,0);
console.log(total);
   // E.Print the country which uses US Dollars as currency.

   var cur=result.filter((ele)=>{for(var i=0;i<ele.currencies.length;i++)
    {
        if(ele.currencies[i].code==="USD")
        {
            return true;}
        }
   
  });
console.log(cur);

  
  


}