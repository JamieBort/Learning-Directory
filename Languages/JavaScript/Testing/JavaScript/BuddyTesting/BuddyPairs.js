// proper divisors of 10 are 1, 2, and 5.
// s(n) be the sum of the divisors of n.
// s(m) is the sum of the divisors of m.
// A pair are buddies if s(m) = n + 1 and s(n) = m + 1.

let buddypairs = {
    myFunction: function buddy(start, limit) {
        // Iterate n from the start to the limit.
        // For each number find the sum of the proper divisors. (nProper)
        // Find the number of proper divisors of nProper-1. (mProper).
        // If mProper = n + 1, and nProper = m + 1, return n and m.
        for (let n = start; n <= limit; n++) {
            let nProper = 0;
            for (i = 1; i < n; i++) {
                if (n % i === 0) {
                    nProper += i;
                }
            }
            let m = nProper - 1;
            let mProper = 0;
            for (i = 1; i < m; i++) {
                if (m % i === 0) {
                    mProper += i;
                }
            }
            if (mProper === n + 1 && nProper === m + 1) {
                let array = new Array();
                array.push(n);
                array.push(m);
                return [n, m];
                // return array;
                // return n+m;
            }
        }

        return "Nothing";
    }
};

module.exports = buddypairs;