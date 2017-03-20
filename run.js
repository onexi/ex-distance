var data     = require('./data.js');
var exercise = require('./exercise.js');

// calculate distance between points
var distance = exercise.distance(data[2],data[14]);
console.log(distance);

// calculate distance between new point and existing
var newPoint = {};
newPoint.x = 0;
newPoint.y = 0;
var data = exercise.distances(newPoint,data);
console.log(newPoint);
console.log(data);

// find k closest points
var k = 3;
var closest = exercise.findClosest(k,data);
console.log(closest);