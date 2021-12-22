const controlers = {};





controlers.isExistFile = (err) => {

    if (err) {
        reject(
            console.log('not Existe')
        )
    }
    else {
        console.log('Existed');
    }
};









module.exports = controlers;