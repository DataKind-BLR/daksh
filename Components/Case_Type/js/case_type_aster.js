  var temp = "";
  var i = 0;
  var aster_data;

var renderAster = function(case_type){
  
  $( "#hearing" ).empty();

  if(temp !== case_type){
    temp = case_type; 
    if (i === 0) {
      aster_data = aster_data1;
      i = 1;  
    } else {
      aster_data = aster_data2;
      i = 0;
    }
  }
   
  var width = 500,
      height = 450,
      radius = Math.min(width, height) / 2,
      innerRadius = 0.3 * radius;

  var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) { return d.width; });

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([0, 0])
    .html(function(d) {
      return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
    });

  var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(function (d) { 
      return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius; 
    });

  var outlineArc = d3.svg.arc()
          .innerRadius(innerRadius)
          .outerRadius(radius);

  var svg = d3.select("#hearing").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  svg.call(tip);



    aster_data.forEach(function(d) {
      d.id     =  d.id;
      d.color  =  d.color;
      d.weight = +d.weight;
      d.score  = +d.score;
      d.width  = +d.weight;
      d.label  =  d.label;
    });
    // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }
    
    var path = svg.selectAll(".solidArc")
        .data(pie(aster_data))
      .enter().append("path")
        .attr("fill", function(d) { return d.data.color; })
        .attr("class", "solidArc")
        .attr("d", arc)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

    var outerPath = svg.selectAll(".outlineArc")
        .data(pie(aster_data))
      .enter().append("path")
        .attr("fill", "none")
        .attr("class", "outlineArc")
        .attr("d", outlineArc);  


    // calculate the weighted mean score
    var score = 
      aster_data.reduce(function(a, b) {
        //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
        return a + (b.score * b.weight); 
      }, 0) / 
      aster_data.reduce(function(a, b) { 
        return a + b.weight; 
      }, 0);

    svg.append("svg:text")
    .attr("class", "aster-score")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle") // text-align: right
    .text(case_type);
};

