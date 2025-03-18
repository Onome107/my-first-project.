//getFullResponseFromAP(success)
 function getFullResponseFromAP ()
 { 
    
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
           
            const getFullResponseFromAP= true;
            
            if(getFullResponseFromAP){
                resolve('Success');
            }
            else{ 
                reject('The API is not working');
            }
        }, 200);
    });
}
getFullResponseFromAP().then(value => (console.log(value)))

