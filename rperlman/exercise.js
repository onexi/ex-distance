var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    var x1 = p1.x;
    var y1 = p1.y;
    var x2 = p2.x;
    var y2 = p2.y;
    var distance = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
    return distance;
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    data.forEach(function(existingPoint){
        var dx = existingPoint.x - newPoint.x;
        var dy = existingPoint.y - newPoint.y;
        existingPoint.distance = Math.sqrt(dx*dx + dy*dy);
    });
   
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    return data.slice(0, k+1);
};

module.exports = exercise;
