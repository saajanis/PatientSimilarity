'use strict';

$(function () {



  /* ChartJS

   * -------

   * Here we will create a few charts using ChartJS

   */



  //-----------------------

  //- MONTHLY SALES CHART -

  //-----------------------



  // Get context with jQuery - using jQuery's .get() method.

  


 var salesChartCanvas = $("#salesChart0").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);
var salesChartData = { 
labels: ['25, Jun 2007', '08, Sep 2008', '13, Sep 2010', '21, Dec 2011', '16, Apr 2012'],
datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data: [4.0, 4.0, 4.0, 4.0, 4.0] },
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: [4.0, 4.0, 4.0, 4.0, 4.0]
                          }
                        ]
                      };

var salesChartOptions = {

    //Boolean - If we should show the scale at all

    showScale: true,

    //Boolean - Whether grid lines are shown across the chart

    scaleShowGridLines: false,

    //String - Colour of the grid lines

    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines

    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)

    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)

    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points

    bezierCurve: true,

    //Number - Tension of the bezier curve between points

    bezierCurveTension: 0.3,

    //Boolean - Whether to show a dot for each point

    pointDot: false,

    //Number - Radius of each point dot in pixels

    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke

    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point

    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets

    datasetStroke: true,

    //Number - Pixel width of dataset stroke

    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a color

    datasetFill: true,

    //String - A legend template

    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",

    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

    maintainAspectRatio: false,

    //Boolean - whether to make the chart responsive to window resizing

    responsive: true

  };



  //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions);



  //------------------------------------------------------

  //- END MONTHLY SALES CHART #2 (duplicate)-

  //------------------------------------------------------



 var salesChartCanvas = $("#salesChart1").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);
var salesChartData = { 
labels: ['22, Apr 2005', '06, Jun 2006', '05, Mar 2007', '11, Aug 2008', '20, Jun 2014'],
datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data: [10.0, 150.0, 150.0, 150.0, 200.0] },
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: [10.0, 150.0, 150.0, 150.0, 200.0]
                          }
                        ]
                      };

var salesChartOptions = {

    //Boolean - If we should show the scale at all

    showScale: true,

    //Boolean - Whether grid lines are shown across the chart

    scaleShowGridLines: false,

    //String - Colour of the grid lines

    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines

    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)

    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)

    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points

    bezierCurve: true,

    //Number - Tension of the bezier curve between points

    bezierCurveTension: 0.3,

    //Boolean - Whether to show a dot for each point

    pointDot: false,

    //Number - Radius of each point dot in pixels

    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke

    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point

    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets

    datasetStroke: true,

    //Number - Pixel width of dataset stroke

    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a color

    datasetFill: true,

    //String - A legend template

    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",

    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

    maintainAspectRatio: false,

    //Boolean - whether to make the chart responsive to window resizing

    responsive: true

  };



  //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions);



  //------------------------------------------------------

  //- END MONTHLY SALES CHART #2 (duplicate)-

  //------------------------------------------------------



 var salesChartCanvas = $("#salesChart2").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);
var salesChartData = { 
labels: ['18 Apr 2005', '22 Apr 2005', '05 Jan 2009', '03 Jun 2009', '08 Jun 2009', '08 Sep 2009', '18 Aug 2010'],
datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data:[145.0, 109.0, 157.0, 160.0, 165.0, 162.0, 161.0]},
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: [145.0, 109.0, 157.0, 160.0, 165.0, 162.0, 161.0]
                          }
                        ]
                      };

var salesChartOptions = {

    //Boolean - If we should show the scale at all

    showScale: true,

    //Boolean - Whether grid lines are shown across the chart

    scaleShowGridLines: false,

    //String - Colour of the grid lines

    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines

    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)

    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)

    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points

    bezierCurve: true,

    //Number - Tension of the bezier curve between points

    bezierCurveTension: 0.3,

    //Boolean - Whether to show a dot for each point

    pointDot: false,

    //Number - Radius of each point dot in pixels

    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke

    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point

    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets

    datasetStroke: true,

    //Number - Pixel width of dataset stroke

    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a color

    datasetFill: true,

    //String - A legend template

    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",

    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

    maintainAspectRatio: false,

    //Boolean - whether to make the chart responsive to window resizing

    responsive: true

  };



  //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions);



  //------------------------------------------------------

  //- END MONTHLY SALES CHART #2 (duplicate)-

  //------------------------------------------------------



 var salesChartCanvas = $("#salesChart3").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);
var salesChartData = { 
labels: ['18 Apr 2005', '22 Apr 2005', '05 Jan 2009', '03 Jun 2009', '08 Jun 2009', '08 Sep 2009', '18 Aug 2010'],
datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data:[16.0, 16.0, 17.0, 17.0, 19.0, 18.0, 18.0]},
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: [16.0, 16.0, 17.0, 17.0, 19.0, 18.0, 18.0]
                          }
                        ]
                      };

var salesChartOptions = {

    //Boolean - If we should show the scale at all

    showScale: true,

    //Boolean - Whether grid lines are shown across the chart

    scaleShowGridLines: false,

    //String - Colour of the grid lines

    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines

    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)

    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)

    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points

    bezierCurve: true,

    //Number - Tension of the bezier curve between points

    bezierCurveTension: 0.3,

    //Boolean - Whether to show a dot for each point

    pointDot: false,

    //Number - Radius of each point dot in pixels

    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke

    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point

    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets

    datasetStroke: true,

    //Number - Pixel width of dataset stroke

    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a color

    datasetFill: true,

    //String - A legend template

    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",

    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

    maintainAspectRatio: false,

    //Boolean - whether to make the chart responsive to window resizing

    responsive: true

  };



  //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions);



  //------------------------------------------------------

  //- END MONTHLY SALES CHART #2 (duplicate)-

  //------------------------------------------------------



 var salesChartCanvas = $("#salesChart4").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);
var salesChartData = { 
labels: ['18 Apr 2005', '22 Apr 2005', '05 Jan 2009', '03 Jun 2009', '08 Jun 2009', '08 Sep 2009', '18 Aug 2010'],
datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data:[93.0, 69.0, 99.0, 101.0, 103.0, 102.0, 101.0]},
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: [93.0, 69.0, 99.0, 101.0, 103.0, 102.0, 101.0]
                          }
                        ]
                      };

var salesChartOptions = {

    //Boolean - If we should show the scale at all

    showScale: true,

    //Boolean - Whether grid lines are shown across the chart

    scaleShowGridLines: false,

    //String - Colour of the grid lines

    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines

    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)

    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)

    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points

    bezierCurve: true,

    //Number - Tension of the bezier curve between points

    bezierCurveTension: 0.3,

    //Boolean - Whether to show a dot for each point

    pointDot: false,

    //Number - Radius of each point dot in pixels

    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke

    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point

    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets

    datasetStroke: true,

    //Number - Pixel width of dataset stroke

    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a color

    datasetFill: true,

    //String - A legend template

    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",

    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

    maintainAspectRatio: false,

    //Boolean - whether to make the chart responsive to window resizing

    responsive: true

  };



  //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions);



  //------------------------------------------------------

  //- END MONTHLY SALES CHART #2 (duplicate)-

  //------------------------------------------------------



 var salesChartCanvas = $("#salesChart5").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);
var salesChartData = { 
labels: ['18 Apr 2005', '22 Apr 2005', '05 Jan 2009', '03 Jun 2009', '08 Jun 2009', '08 Sep 2009', '18 Aug 2010'],
datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data:[83.0, 83.0, 76.0, 76.0, 77.0, 77.0, 73.0]},
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: [83.0, 83.0, 76.0, 76.0, 77.0, 77.0, 73.0]
                          }
                        ]
                      };

var salesChartOptions = {

    //Boolean - If we should show the scale at all

    showScale: true,

    //Boolean - Whether grid lines are shown across the chart

    scaleShowGridLines: false,

    //String - Colour of the grid lines

    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines

    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)

    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)

    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points

    bezierCurve: true,

    //Number - Tension of the bezier curve between points

    bezierCurveTension: 0.3,

    //Boolean - Whether to show a dot for each point

    pointDot: false,

    //Number - Radius of each point dot in pixels

    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke

    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point

    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets

    datasetStroke: true,

    //Number - Pixel width of dataset stroke

    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a color

    datasetFill: true,

    //String - A legend template

    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",

    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

    maintainAspectRatio: false,

    //Boolean - whether to make the chart responsive to window resizing

    responsive: true

  };



  //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions);



  //------------------------------------------------------

  //- END MONTHLY SALES CHART #2 (duplicate)-

  //------------------------------------------------------



 var salesChartCanvas = $("#salesChart6").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);
var salesChartData = { 
labels: ['18 Apr 2005', '22 Apr 2005', '05 Jan 2009', '03 Jun 2009', '08 Jun 2009', '08 Sep 2009', '18 Aug 2010'],
datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data:[180.0, 180.0, 180.0, 181.0, 181.0, 181.0, 181.0]},
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: [180.0, 180.0, 180.0, 181.0, 181.0, 181.0, 181.0]
                          }
                        ]
                      };

var salesChartOptions = {

    //Boolean - If we should show the scale at all

    showScale: true,

    //Boolean - Whether grid lines are shown across the chart

    scaleShowGridLines: false,

    //String - Colour of the grid lines

    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines

    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)

    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)

    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points

    bezierCurve: true,

    //Number - Tension of the bezier curve between points

    bezierCurveTension: 0.3,

    //Boolean - Whether to show a dot for each point

    pointDot: false,

    //Number - Radius of each point dot in pixels

    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke

    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point

    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets

    datasetStroke: true,

    //Number - Pixel width of dataset stroke

    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a color

    datasetFill: true,

    //String - A legend template

    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",

    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

    maintainAspectRatio: false,

    //Boolean - whether to make the chart responsive to window resizing

    responsive: true

  };



  //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions);



  //------------------------------------------------------

  //- END MONTHLY SALES CHART #2 (duplicate)-

  //------------------------------------------------------



 var salesChartCanvas = $("#salesChart7").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);
var salesChartData = { 
labels: ['18 Apr 2005', '22 Apr 2005', '05 Jan 2009', '03 Jun 2009', '08 Jun 2009', '08 Sep 2009'],
datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data:[84.0, 84.0, 83.6, 84.6, 86.3, 85.4]},
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: [84.0, 84.0, 83.6, 84.6, 86.3, 85.4]
                          }
                        ]
                      };

var salesChartOptions = {

    //Boolean - If we should show the scale at all

    showScale: true,

    //Boolean - Whether grid lines are shown across the chart

    scaleShowGridLines: false,

    //String - Colour of the grid lines

    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines

    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)

    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)

    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points

    bezierCurve: true,

    //Number - Tension of the bezier curve between points

    bezierCurveTension: 0.3,

    //Boolean - Whether to show a dot for each point

    pointDot: false,

    //Number - Radius of each point dot in pixels

    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke

    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point

    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets

    datasetStroke: true,

    //Number - Pixel width of dataset stroke

    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a color

    datasetFill: true,

    //String - A legend template

    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",

    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

    maintainAspectRatio: false,

    //Boolean - whether to make the chart responsive to window resizing

    responsive: true

  };



  //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions);



  //------------------------------------------------------

  //- END MONTHLY SALES CHART #2 (duplicate)-

  //------------------------------------------------------



 var salesChartCanvas = $("#salesChart8").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);
var salesChartData = { 
labels: ['18 Apr 2005', '22 Apr 2005', '05 Jan 2009', '03 Jun 2009', '08 Jun 2009', '08 Sep 2009'],
datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data:[36.9, 36.9, 36.8, 36.9, 36.9, 36.9]},
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: [36.9, 36.9, 36.8, 36.9, 36.9, 36.9]
                          }
                        ]
                      };

var salesChartOptions = {

    //Boolean - If we should show the scale at all

    showScale: true,

    //Boolean - Whether grid lines are shown across the chart

    scaleShowGridLines: false,

    //String - Colour of the grid lines

    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines

    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)

    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)

    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points

    bezierCurve: true,

    //Number - Tension of the bezier curve between points

    bezierCurveTension: 0.3,

    //Boolean - Whether to show a dot for each point

    pointDot: false,

    //Number - Radius of each point dot in pixels

    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke

    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point

    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets

    datasetStroke: true,

    //Number - Pixel width of dataset stroke

    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a color

    datasetFill: true,

    //String - A legend template

    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",

    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

    maintainAspectRatio: false,

    //Boolean - whether to make the chart responsive to window resizing

    responsive: true

  };



  //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions);



  //------------------------------------------------------

  //- END MONTHLY SALES CHART #2 (duplicate)-

  //------------------------------------------------------


});