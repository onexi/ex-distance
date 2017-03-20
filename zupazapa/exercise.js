var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    return Math.sqrt((p2.x-p1.x)*(p2.x-p1.x) + (p2.y-p1.y)*(p2.y-p1.y));
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    data.forEach(function(existingPoint){
        var dx = existingPoint.x-newPoint.x;
        var dy = existingPoint.y-newPoint.y;
        existingPoint.distance = Math.sqrt(dx*dx + dy*dy);
    });
    return data; 
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    return data.slice(0, 3);
};

module.exports = exercise;
