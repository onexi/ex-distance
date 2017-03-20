var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    xcalc = p2.x-p1.x
    ycalc = p2.y-p1.y
    return Math.sqrt(xcalc*xcalc + ycalc*ycalc);
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    data.forEach(function(existingPoint){
        var dx = existingPoint.x - newPoint.x;
        var dy = existingPoint.y - newPoint.y;
        existingPoint.distance = Math.sqrt(dx*dx + dy*dy);
    })
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    //sort and then take slice to get top 3
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    return data.slice(0,k);
};

module.exports = exercise;
