var expect = require('chai').expect;
var ex = require('../exercise.js');

var data = [
	{x :  5, y :  0, distance : null},
	{x :  9, y :  0, distance : null},
	{x :  1, y :  1, distance : null},
	{x :  4, y :  0, distance : null},
	{x :  6, y :  2, distance : null},
	{x : 10, y :  2, distance : null},
	{x :  3, y :  3, distance : null},
	{x :  7, y :  3, distance : null},
	{x :  5, y :  5, distance : null},
	{x :  2, y :  8, distance : null},
	{x :  6, y :  7, distance : null},
	{x : 10, y :  9, distance : null},
	{x :  4, y :  9, distance : null},
	{x :  3, y : 10, distance : null},
	{x : 10, y : 10, distance : null}
];

describe('Distance Between Two Points', function() {
	it('Match distance', function() {
		var p1 = {x:0,y:0};
		var p2 = {x:4,y:0};
	    expect(ex.distance(p1,p2)).to.equal(4);
	});
});

describe('Distance Between All Points', function() {
	it('Match Distance', function() {
		var newPoint = {};
		newPoint.x = 0;
		newPoint.y = 0;
		var result = ex.distances(newPoint,data);
	    expect(result[0].distance).to.equal(5);
	    expect(result[1].distance).to.equal(9);
	    expect(result[3].distance).to.equal(4);
	});
});

describe('Closest k Points', function() {
	it('Match Points', function() {

		var newPoint = {};
		newPoint.x = 0;
		newPoint.y = 0;
		var result = ex.distances(newPoint,data);

		var k = 3;
		var closest = ex.findClosest(k,result);

	    expect(closest[0].x).to.equal(1);
	    expect(closest[0].y).to.equal(1);
	    expect(closest[1].x).to.equal(4);
	    expect(closest[1].y).to.equal(0);
	    expect(closest[2].x).to.equal(3);
	    expect(closest[2].y).to.equal(3);

	});
});

