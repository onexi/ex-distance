var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){

    var dX = Math.abs(Math.abs(p1.x) - Math.abs(p2.x));
    var dY = Math.abs(Math.abs(p1.y) - Math.abs(p2.y));

    var distance = Math.sqrt(dX*dX+dY*dY);

    return distance;

    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 1st function not implemented';
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 2nd function not implemented';

    data.distance = exercise.distance(newPoint, data);
    //return data.distance;

    data.forEach(function(existingPoint){
        var dx = existingPoint.x - newPoint.x;
        var dy = existingPoint.y - newPoint.y;
        existingPoint.distance = Math.sqrt(dx*dx+dy*dy);
    });
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 3rd function not implemented';

    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    
    return data.slice(0,k);

};

module.exports = exercise;
