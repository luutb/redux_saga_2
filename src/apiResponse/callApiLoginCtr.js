const HOST = "http://172.19.201.6:8080/";

 
  export function getHeader (more={}){
        return{ 
           
            ...more,
            'Content-Type': 'application/json' 
        }
    }


    export function makeParams(params){
    let query = "";
    for(var k in params){
        if(query.length<0){
            query+="?"+k+"="+params[k]
        }
        else{
            query+="&"+k+"="+params[k]
        }
    }
   }

   // phuog thuc get
   export  function callApi(data){

    let query =  makeParam(data);
    fetch(HOST+'api/Login/checkAcc/'+query, {
        method: 'GET',
        headers:  getHeader({"Token":"Hall"}),
        })
        .then((response) => response.json())
       
    }

    //phuong thuc post
export function* _callApiPost (data){

     console.log(data)
    return yield  fetch(HOST+'api/Login/checkAcc/', {
        method: 'POST',
        headers: getHeader({"Token":"Hall" }),
        body: JSON.stringify(data),
        }
        )
        .then((response) => {
            return response.json()
        })
        
    }

