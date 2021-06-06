// this is from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	console.log("it ran");
	return result; 
}

listAllProperties(console);