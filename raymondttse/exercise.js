var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    var dist = Math.sqrt((p2.x-p1.x)*(p2.x-p1.x)+(p2.y-p1.y)*(p2.y-p1.y));
    return dist;
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    for (var i = 0; i < data.length; i++){
        data[i].distance = exercise.distance(newPoint,data[i]);
    }
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    return data.slice(0,k);
};

module.exports = exercise;
