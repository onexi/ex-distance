var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    return Math.sqrt(Math.pow(p1.x-p2.x, 2)+Math.pow(p1.y-p2.y, 2));
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    for (var i=0; i<data.length; i++) {
        data[i].distance=exercise.distance(newPoint, data[i]);
    }
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
    return data.slice(0,k);
};

module.exports = exercise;
