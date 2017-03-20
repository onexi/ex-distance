var exercise = {};

// calculate distance between points
exercise.distance = function (p1, p2) {
    //-------------------
    //---- Your Code ----
    //-------------------
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
    //return 'Error: 1st function not implemented';
};

// calculate distance between new point and existing
exercise.distances = function (newPoint, data) {
    //-------------------
    //---- Your Code ----
    //-------------------
    data.forEach(function (element) {
        element.distance = Math.sqrt(Math.pow(element.x - newPoint.x, 2) + Math.pow(element.y - newPoint.y, 2));
    })
    return data;
    //return 'Error: 2nd function not implemented';
};

// find k closest points
exercise.findClosest = function (k, data) {
    //-------------------
    //---- Your Code ----
    //-------------------

    data.sort(function(a,b){
        return a.distance -b.distance;
    });
    
    return data.slice(0,k);

    //return 'Error: 3rd function not implemented';
};

module.exports = exercise;
