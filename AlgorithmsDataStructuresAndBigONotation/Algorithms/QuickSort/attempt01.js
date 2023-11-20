// attempt01.js

const arr = Array.from({length: 12}, () => Math.floor(Math.random() * 12));
console.log(arr);

// const arr = [9, -3, 5, 2, 6, 8, -6, 1, 3];
// const arr = [ -3, 2, -6 ];
// const arr = [6,0];
// const arr = [5];
// const arr = [0,5];
// const arr = [ 9, 5, 6, 8 ];

QuickSort = (param) => {
    console.log("param:",param);
    const finalArr = [];
    let temp3 = []

    CheckOrder = (par)=>{
        console.log("Checks the order of the array:", par);
        if(par[0]<par[1]) {
            return par;
            // finalArr.push(par[0]);
            // finalArr.push(par[1]);
            // // finalArr.push(par2);
        }
        else {
            return par.reverse();
            // finalArr.push(par[1]);
            // finalArr.push(par[0]);
            // finalArr.push(par2);
        }
    }

    CheckLength = (parámetro,parámetro2) =>{
        console.log("Checks the length of the array:", parámetro);
        if (parámetro.length>2) Partition(parámetro);
        else if(parámetro.length === 1) finalArr.push(parámetro[0]);
        else if(parámetro.length === 0) finalArr.push(parámetro2);
        else {
            finalArr.push(...CheckOrder(parámetro));
            finalArr.push(parámetro2);
        }
    }

    Partition = (variable) =>{
        console.log("Divides the array into two arrays.");
        const temp1 = [];
        const temp2 = [];
        const pivot = variable[variable.length-1];
        
        for (let index = 0; index < variable.length-1; index++) {
            if(variable[index]<pivot) temp1.push(variable[index]);
            else temp2.push(variable[index]);
        }
        console.log("temp1:", temp1);
        console.log("temp2:", temp2);
        console.log("pivot:", pivot);
        
        // Focus on temp1.
        // console.log("temp1.length:", temp1.length);
        // // while (temp1.length>1) CheckLength(temp1,pivot);
        CheckLength(temp1,pivot);
        CheckLength(temp2);

        // console.log("finalArr:", finalArr);
        return finalArr;
    }

    if (param.length>2) return Partition(param);
    else if(param.length === 1) return param;
    else return CheckOrder(param);
}

console.log(QuickSort(arr));

// console.log(Array.from({length: 40}, () => Math.floor(Math.random() * 40)));