const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');
const { resolve } = require('path/posix');
const pathDataName = path.join(__dirname, "..", "data", "names.txt");
const pathDataNumber = path.join(__dirname, "..", "data", "number.txt");
const controlers = require(path.join(__dirname, "..", "controlers", "resultFunc"));







// function promissIsExistFile(resolve, reject) {

//     fs.access(pathDataName,controlers.isExistFile)

// }


let promissIsExistNumFile = new Promise((resolved, rejected) => {


    fs.access(pathDataName, (err) => {
        if (err) {
            rejected(err);

        }
        else {
            console.log('existed name.txt');
        }
    })

}).then(()=>{
    // fs.readFile(pathDataName, { encoding: "utf-8" }, (data, err) => {
    //     if (data) {
    //         console.log(data);
    //     }
    // })
    console.log('heelo');
}
    
).catch((err) => {
    console.log(err);
}

)







let promissIsExistNameFile = new Promise((resolved, rejected) => {


    fs.access(pathDataNumber, (err) => {
        if (err) {
            rejected(err);

        }
        else {
            console.log('existed number.txt');
        }
    })

})













// fs.access(pathDataNumber, controlers.isExistTxt);



// node resultRouter.js