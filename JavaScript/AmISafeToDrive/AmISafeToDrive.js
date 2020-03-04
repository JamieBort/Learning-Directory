function drive(drinks, finished, drive_time) {
    // Need to calculate total untits of alcohol. 
    let total_units = 0;
    let can_drive = false;
    for (i = 0; i < drinks.length; i++) {
        let drink = Math.round(drinks[i][0] * drinks[i][1] / 10);
        // drink /= 100;
        total_units += drink;
    }
    total_units /= 100;

    // Need to calculate difference in time.
    let time = [];
    time.push(finished.split(":"));
    time.push(drive_time.split(":"));
    for (i = 0; i < time.length; i++) {
        for (j = 0; j < time[i].length; j++) {
            time[i][j] = parseInt(time[i][j]);

        }
    }
    
    if (time[1][0] < time[0][0]) {
        time[1][0] += 24;
    }
    // Need to compare total units of alcohol to difference in time.
    let total_time = time[1][0] - time[0][0] + (time[1][1] - time[0][1]) / 60;
    if (total_time > total_units) {
        can_drive = true;
    }


    let output = [total_units, can_drive];
    return output;
}

let alcohol = [[5.2, 568], [12.0, 175]];
let alcohol2 = [[5.2, 568], [5.2, 568], [5.2, 568], [12.0, 175], [12.0, 175], [12.0, 175]];
let finish = "16:00";
let leave = "23:00";
let finish2 = "23:00";
let leave2 = "08:15";
console.log(drive(alcohol2, finish2, leave2));