export function addTextToBody(text) {
    console.log("hello")
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
  












    var dataset = [];
var dataset2 = [];
d3.csv("./cities.csv", function (data) {
    data.forEach(function (d) {
        // console.log(d); // Not needed.
        // console.log(d['land area']); // Not needed.
        dataset.push(parseInt(d['land area']));
        dataset2.push(d);
    });

    // *** Define Our Variables ***
    var svgWidth = 800, svgHeight = 300, barPadding = 10, shiftRight = 0, shiftUp = 0; // 'shiftRight' shifts the axis, bars, and text right. 'shiftUp' shift the axis, bars, and text up. 'barWidth' makes the bars more narrow.

    var barWidth = ((svgWidth / dataset.length) + (barPadding / 2));

    var svg = d3.select('svg')
        .style('margin-top', '20')
        .style('padding', '40')
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr("display", "block");

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, svgHeight]);

    // *** The bar chart ***
    var barChart = svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("y", function (d) {
            return svgHeight - yScale(d);
        })
        .attr("height", function (d) {
            return yScale(d);
        })
        .attr("width", barWidth - (barPadding / 2)) // I replaced 'barWidth' with 'barWidth - (barPadding/2)'.
        .attr("transform", function (d, i) {
            var translate = [(barWidth * i) + shiftRight, - shiftUp]; // 'shiftRight' moves the bars right. 
            // var translate = [((barWidth * i) + (barPadding) / 2) + shiftRight - 0, - shiftUp]; // 'shiftRight' moves the bars right. 'shiftUp' brings the bars up.
            return "translate(" + translate + ")";
        });

    // *** Bar height text *** see https://scrimba.com/p/pb4WsX/c4WLes8
    var text = svg.selectAll('text')
        .data(dataset)
        .enter()
        .append('text')
        .text(function (d) {
            return d;
        })
        .attr('y', function (d, i) {
            return svgHeight - yScale(d) - shiftUp - 5; // -shiftUp shifts the text up.
        })
        .attr('x', function (d, i) {
            return ((barWidth * i) + (barWidth - barPadding) / 2) + shiftRight; // 'shiftRight' shifts the text right. Replaced '(barWidth * i)' with '((barWidth * i) ) + shiftRight'.
        })
        .attr("fill", "#A64C38");

    // *** The Axes *** see https://scrimba.com/p/pb4WsX/c6rwbhr
    var xScaleAxis = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, svgWidth]);

    var yScaleAxis = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([svgHeight, 0]);

    // The following is not used for this example.
    // var x_axis = d3.axisBottom() // .axisBottom returns a function which we chain with another function, .scale
    // .scale(xScaleAxis); // We then pass xScale through our function, .scale.

    var y_axis = d3.axisLeft()
        .scale(yScaleAxis);

    svg.append("g") // "g" for group element.
        .attr("transform", "translate(" + shiftRight + ", -" + shiftUp + ")") // 'shiftRight' moves the y-axis right. 'shiftUp' shifts the y-axis up.
        .call(y_axis);

    var xAxisTranslate = svgHeight - shiftUp; // 'shiftUp' moves the x-axis down. 'xAxisTranslate' brings the x-axis down from the top of the svg.

    // The following is not used for this example.
    // svg.append("g")
    // .attr("transform", "translate(" + shiftRight + "," + xAxisTranslate + ")") // 'shiftRight' moves the x-axis right. 'xAxisTranslate' shifts the x-axis in.
    // .call(x_axis);

    // *** The Pie Chart *** see https://scrimba.com/p/pb4WsX/cPyPVAr

    var data2 = [
        { "platform": "Android", "percentage": 40.11 },
        { "platform": "Windows", "percentage": 36.69 },
        { "platform": "iOS", "percentage": 13.06 }
    ];

    var svgWidth2 = 500, svgHeight2 = 300, radius = Math.min(svgWidth2, svgHeight2) / 2;
    var svg2 = d3.select('.pie-chart')
        .attr("width", svgWidth2)
        .attr("height", svgHeight2);

    //Create group element to hold pie chart    
    var g = svg2.append("g")
        .attr("transform", "translate(" + radius + "," + radius + ")");

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var pie = d3.pie().value(function (d) {
        return d.percentage;
    });

    var path = d3.arc()
        .outerRadius(radius)
        .innerRadius(0);

    var arc = g.selectAll("arc")
        .data(pie(data2))
        .enter()
        .append("g");

    arc.append("path")
        .attr("d", path)
        .attr("fill", function (d) { return color(d.data.percentage); });

    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(0);

    arc.append("text")
        .attr("transform", function (d) {
            return "translate(" + label.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function (d) { return d.data.platform + ":" + d.data.percentage + "%"; });


        // displaying the data.
        console.log("The dataset:");
        console.log(dataset);
        console.log("The second dataset:");
        dataset2.forEach(element => {
            let cityArray = [];
            console.log(element.city);
            
        });
        // console.log(dataset2);

    // console.log('../../Data/NationalBabyNames/citiesObject.js/myObect[0]');
    // console.log(test);


});




}