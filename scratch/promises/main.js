function executor ( resolve, reject ){
  let respond = function(){
    resolve("it worked!");
  };
  setTimeout(respond, 200);
}

function success (successMessage){
  console.log(successMessage);
}

let myPromise = new Promise( executor );

myPromise.then( success );
