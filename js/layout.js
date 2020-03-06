

var sliderdiv = document.getElementById('slider');

var slid = document.createElement("div");
slid.textContent = "create from a js"
sliderdiv.appendChild(slid);

document.addEventListener("click", function(e) {
  if (e.target.id === "slider"){
    console.log("document.visibilityState" );
  }

});
// var n = 20;
//
// var nodes = d3.range(n * n).map(function(i) {
//   return {
//     index: i,
//     color: i < 350 ? "grey" : "steelblue"
//   };
// });
//
// var canvas = document.querySelector("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width,
//     height = canvas.height;
//
// var simulation = d3.forceSimulation(nodes)
//     .force("y", d3.forceY())
//     .force("grey", isolate(d3.forceX(-width / 6), function(d) { return d.color === "grey"; }))
//     .force("steelblue", isolate(d3.forceX(width / 6), function(d) { return d.color === "steelblue"; }))
//     .force("charge", d3.forceManyBody().strength(-10))
//     .on("tick", ticked);
//
// function ticked() {
//   context.clearRect(0, 0, width, height);
//   context.save();
//   context.translate(width / 2, height / 2);
//   nodes.forEach(drawNode);
//   context.restore();
// }
//
// function drawNode(d) {
//   context.beginPath();
//   context.moveTo(d.x + 3, d.y);
//   context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
//   context.fillStyle = d.color;
//   context.fill();
// }
//
// function isolate(force, filter) {
//   var initialize = force.initialize;
//   force.initialize = function() { initialize.call(force, nodes.filter(filter)); };
//   return force;
// }
