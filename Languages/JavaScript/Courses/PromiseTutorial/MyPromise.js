// We have a boolean isMomHappy, to define if mom is happy.
var isMomHappy = true;
// var isMomHappy = false;

// Promise
// We have a promise willIGetNewPhone. The promise can be either resolved (if mom get you a new phone) or rejected(mom is not happy, she doesn't buy you one).
// There is a standard syntax to define a new Promise, refer to MDN documentation, a promise syntax look like this.
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }
    }
);
// What you need to remember is, when the result is successful, call resolve(your_success_value), if the result fails, call reject(your_fail_value) in your promise. In our example, if mom is happy, we will get a phone. Therefore, we call resolve function with phone variable. If mom is not happy, we will call reject function with a reason reject(reason);

// Second Promise. Let's say, you, the kid, promise your friend that you will show them the new phone when your mom buy you one.
var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey, friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone.';
            resolve(message);
        }
    );
    // In this example, you might realize we didn't call the reject. It's optional.
};

// Call our promise.
// We have a function call askMom. In this function, we will consume our promise willIGetNewPhone.
var askMom = function() {
    console.log('before asking Mom'); // log before
    willIGetNewPhone

    .then(showOff) // chain the second promise here.

    // We want to take some action once the promise is resolved or rejected, we use .then and .catch to handle our action.
    .then(function (fulfilled) {
        // yay, you got a new phone
        console.log(fulfilled);
        // output: {braind: 'Samsung', color: 'black' }
        
    })
    .catch(function (error) {
        // oops, mom don't buy it
        console.log(error.message);
        // output: 'mom is not happy'
    });
    console.log('after asking Mom'); // log after
};

askMom();

// The output will be:
// 1. before asking Mom
// 2. after asking mom
// 3. Hey friend, I have a new black Samsung phone.

// not the expected:
// 1. before asking Mom
// 2. Hey friend, I have a new black Samsung phone.
// 3. after asking mom

// You, the kid, wouldn't stop playing while waiting for your mom promise (the new phone). Don't you? That's something we call asynchronous, the code will run without blocking or waiting for the result. Anything that need to wait for promise to proceed, you put that in .then.