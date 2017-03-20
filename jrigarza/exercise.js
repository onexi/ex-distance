var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------

    return Math.sqrt(Math.pow(p2.x-p1.x,2)+Math.pow(p2.y-p1.y,2));
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------

    return data.map(function(element,index){
        return exercise.distance(element,newPoint);
    });
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //-------------------

    var sortedDistances = data.sort(function(a, b) {
        return a - b;
    });

    var firstK = [];

    for(var i = 0; i < k; i++){
        firstK.push(sortedDistances[i]);
    }

    return firstK;
};

module.exports = exercise;
