var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    var dist = Math.sqrt(Math.pow(p2.x-p1.x, 2) + Math.pow(p2.y-p1.y, 2));
    return dist;
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    data.map(function(item){
        item.distance = Math.sqrt(Math.pow(item.x-newPoint.x, 2) + Math.pow(item.y-newPoint.y, 2));
    });
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    data.sort(function(a, b){
        return a.distance - b.distance;
    });
    var points = data.slice(0, k);
    return points;
};

module.exports = exercise;
