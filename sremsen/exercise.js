var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){

    return Math.sqrt((p2.x-p1.x)*(p2.x-p1.x) + (p2.y-p1.y)*(p2.y-p1.y));

    //return 'Error: 1st function not implemented';
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    
    data.forEach(function(existingPoint){
        var dx = existingPoint.x - newPoint.x;
        var dy = existingPoint.y - newPoint.y;
        existingPoint.distance = Math.sqrt(dx*dx + dy*dy);
    });

    return data;

    //return 'Error: 2nd function not implemented';
};

// find k closest points
exercise.findClosest = function(k,data){
    
    // sort and then return the top three
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    
    return data.slice(0,k);

    //return 'Error: 3rd function not implemented';
};

module.exports = exercise;
