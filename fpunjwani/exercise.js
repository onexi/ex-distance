var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    var x_distance= Math.pow(p1.x-p2.x, 2);
    var y_distance= Math.pow(p1.y-p2.y, 2);

    return Math.sqrt(x_distance+y_distance);
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    for (var i=0; i<data.length; i++) { 
        data[i].distance=exercise.distance(newPoint, data[i]);
    }

    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    var new_data=data.slice(0,k);

    return new_data;
};

module.exports = exercise;
