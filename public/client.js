// const width = 700, height = 500;

// // stage the canvas for SVG
// let canvas = d3.select("body").append("svg")
//   .attr("width", width).attr("height", height)
//   .append("g")
//     .attr("transform", "translate(50,50)");

// // create pack object and access nodes()
// let pack = d3.layout.pack()
//   .size([width, height - 50])
//   .padding(10);

// // parse json
// d3.json("bigFive.json", function(d) {

//   // create the nodes
//   let nodes = pack.nodes(d);

//   // define transform attribute for all HTML elements with class node
//   let node = canvas.selectAll(".node")
//     .data(nodes)
//     .enter()
//     .append("g")
//       .attr("class", "node")
//       .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")"; });

//     // define circle attributes
//     node.append("circle")
//       .attr("r", function(d) { return d.r })
//       // .attr("fill", function(d){ return d.children ? "#fff" : "steelblue"; }) // BUBBLE
//       .attr("fill", "steelblue")
//       .attr("opacity", 0.25)
//       // .attr("stroke", function(d) { return d.children ? "#fff":"#ADADAD"; } ) // BUBBLE
//       .attr("stroke", "#ADADAD")
//       .attr("stroke-width", 2);

//     // bind text to node
//     node.append("text")
//       .text(function(d) { return d.children ? "" : d.name; });
//   })

const theData = ([
  {
    label: "Openness",
    value: 0.770814244982862
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

const width=500, height=500;

const svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

let node = svg.selectAll(".node")
  .data(theData)
  .enter()
  .append("g")
    .attr("class", "node")
    .attr("transform", "translate(50,50)");

let circle = node.append("circle")
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

// FIXME: won't bind to circle object
node.append("text")
  .attr("x", function(d) { return d.cx; })
  .attr("y", function(d) { return d.cy; })
  .text( function (d) { return "( " + d.cx + ", " + d.cy +" )"; })
  .text(function(d) { return d.label })