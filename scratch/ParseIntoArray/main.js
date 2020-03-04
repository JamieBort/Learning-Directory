var spreadsheetUrl = 'https://spreadsheets.google.com/feeds/cells/1TTeG6mp2rb61Yxi5KO3GFmZ3qQ3RAMlB9bisLciuj-M/1/public/values?alt=json-in-script&callback=doData';

// Link to my spreadsheet: https://docs.google.com/spreadsheets/d/1NcNskMHklKD6t2HZ7_BfeZG1npWvCEKVXpRtmNaPEzU/edit?usp=drive_web&ouid=116456824083566236348


// The callback function the JSONP request will execute to load data from API
function doData(data) {
    // Final results will be stored here	
    var results = [];

    // Get all entries from spreadsheet
    var entries = data.feed.entry;

    // Set initial previous row, so we can check if the data in the current cell is from a new row
    var previousRow = 0;

    // Iterate all entries in the spreadsheet
    for (var i = 0; i < entries.length; i++) {
        // check what was the latest row we added to our result array, then load it to local variable
        var latestRow = results[results.length - 1];

        // get current cell
        var cell = entries[i];

        // get text from current cell
        var text = cell.content.$t;

        // get the current row
        var row = cell.gs$cell.row;

        // Determine if the current cell is in the latestRow or is a new row
        if (row > previousRow) {
            // this is a new row, create new array for this row
            var newRow = [];

            // add the cell text to this new row array  
            newRow.push(text);

            // store the new row array in the final results array
            results.push(newRow);

            // Increment the previous row, since we added a new row to the final results array
            previousRow++;
        } else {
            // This cell is in an existing row we already added to the results array, add text to this existing row
            latestRow.push(text);
        }

    }

    handleResults(results);
}

// Do what ever you please with the final array
function handleResults(spreadsheetArray) {
    console.log(spreadsheetArray);
    // console.log(spreadsheetArray[0][5]);

    // var body = document.getElementsByTagName(body);

    // var paragraphs = document.getElementsByTagName("P");
    // // paragraphs[0] is the first <p> element
    // // paragraphs[1] is the second <p> element, etc.
    // alert(paragraphs[0].nodeName);

    // var heading = document.createElement("h1");
    // var heading_text = document.createTextNode("Big Head!");
    // heading.appendChild(heading_text);
    // document.body.appendChild(heading);

    document.body.innerHTML = spreadsheetArray[0][1];
}

// window.onload = function() {
//     var heading = document.createElement("h1");
//     var heading_text = document.createTextNode("Big Head!");
//     heading.appendChild(heading_text);
//     document.body.appendChild(heading);
// }



// Create JSONP Request to Google Docs API, then execute the callback function doData
$.ajax({
    url: spreadsheetUrl,
    jsonp: 'doData',
    dataType: 'jsonp'
});