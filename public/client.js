// Step 1: Draw one circle for each personality trait, adjust radius to value
// Step 2: Color the circle with the color from the data
// Step 3: Label the circle with the label from the data

// TODO: Avoid overlapping circles

// TODO: Make a form that a visitor can use to submit some text for analysis
// TODO: Submit form data to Watson and then generate chart from the response  

var thePersonality = ([
  {
    label: "Openness",
    color: "#FF9901", // warm orange 
    value: 0.9970814244982862
  },
  {
    label: "Conscientiousness",
    color: "#52154E", // purple
    value: 0.986401677449357
  },
  {
    label: "Extraversion",
    color: "#00A896", // open sea green
    value: 0.08530058556548387
  },
  {
    label: "Agreeableness",
    color: "#8E1C3E", // easy mauve
    value: 0.18753528603194114
  },
  {
    label: "Emotional range",
    color: "#FF3333", // fiery orange
    value: 0.9438564164580441
  }
]); 

var svg = d3.selectAll("body").append("svg")
  .attr("width", 500)
  .attr("height", 500)

svg.selectAll("circle")
  .data(thePersonality)
  .enter().append("circle")      
    .style("stroke", "#A997DF")
    .style("stroke-width", "2")
    .attr("r", function(d) { return d.value * 100 })
    .style('fill', function(d) { return d.color })
    .attr("cx", function() { return Math.random() * 500; })
    .attr("cy", function() { return Math.random() * 500; })
    

