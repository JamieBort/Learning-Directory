// Test.assertEquals( alphabetWar("z") , "Right side wins!" );
// Test.assertEquals( alphabetWar("tz") , "Left side wins!" );
// Test.assertEquals( alphabetWar("jz") , "Right side wins!" );
// Test.assertEquals( alphabetWar("zt") , "Left side wins!" );
// Test.assertEquals( alphabetWar("sj") , "Right side wins!" ); 
// Test.assertEquals( alphabetWar("azt") , "Left side wins!" );
// Test.assertEquals( alphabetWar("tzj") , "Right side wins!" );
// Test.assertEquals( alphabetWar("jbdt") , "Let's fight again!" );
// Test.assertEquals( alphabetWar("wololooooo") , "Left side wins!" );
// Test.assertEquals( alphabetWar("zdqmwpbs") , "Let's fight again!" );

// string = "z"; // "Right side wins!"
// string = "tz"; // "Left side wins!" 
string = "wololzooooo" // "Left side wins!"
alphabetWar(string);
function alphabetWar(fight) {
    leftTotal = 0; rightTotal = 0;

    leftPower = {
        w: 4,
        p: 3,
        b: 2,
        s: 1,
        t: 0,
    };
    rightPower = {
        m: 4,
        q: 3,
        d: 2,
        z: 1,
        j: 0,
    };

    leftArray = []; rightArray = [];

    for (let index = 0; index < fight.length/2; index++) {
        leftArray.push(fight[index]);
    }
    console.log(leftArray);

    for (let index2 = fight.length/2+0.5; index2 < fight.length; index2++) {
        rightArray.push(fight[index2]);
    }
    console.log(rightArray);

    // const keys = Object.keys(leftPower);
    // console.log(keys);
    // // const values = Object.values(power);
    // // console.log(values);
    // if(Object.keys(leftPower)[4]=="t"){
    //     console.log("yes");
    // }
    // console.log(leftPower.t);

    // console.log(fight.length);
    outcome = "Right side wins!";
    console.log(outcome);
    return outcome;
}

// power = {
//     "4": ["w", "m"],
//     "3": ["p", "q"],
//     "2": ["b", "d"],
//     "1": ["s", "z"],
//     "0": ["t", "j"],
// };

// power = {
//     left: {
//         w: 4,
//         p: 3,
//         b: 2,
//         s: 1,
//         t: 0,
//     },
//     right: {
//         m: 4,
//         q: 3,
//         d: 2,
//         z: 1,
//         j: 0,
//     },
// };