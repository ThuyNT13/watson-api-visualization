// Step 1: Draw one circle for each personality trait, adjust radius to value
// Step 2: Color the circle with the color from the data
// Step 3: Label the circle with the label from the data

// TODO: Avoid overlapping circles

// TODO: Make a form that a visitor can use to submit some text for analysis
// TODO: Submit form data to Watson and then generate chart from the response  

var thePersonality = ([
  {
    label: "Openness",
    value: 0.9970814244982862
  },
  {
    label: "Conscientiousness",
    value: 0.986401677449357
  },
  {
    label: "Extraversion",
    value: 0.08530058556548387
  },
  {
    label: "Agreeableness",
    value: 0.18753528603194114
  },
  {
    label: "Emotional range",
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
    .style('fill', function(d) { 
      // OPTIMIZE move into pTraits.js and add other traits and colors
      if (d.label === "Openness") { return "#FF9901" } // warm orange 
      else if (d.label === "Conscientiousness") { return "#52154E" } // noble purple
      else if (d. label === "Extraversion") { return "#00A896" } // open sea green
      else if (d. label === "Agreeableness") { return "#8E1C3E" } // easy mauve
      else if (d. label === "Emotional range") { return "#FF3333" } // fiery orange
      else { return "#111344" } // deep blue
    })
    .attr("cx", function() { return Math.random() * 500; })
    .attr("cy", function() { return Math.random() * 500; })
    

