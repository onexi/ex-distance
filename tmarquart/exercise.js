var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 1st function not implemented';

    return Math.sqrt(Math.pow((p1.x-p2.x),2)+Math.pow(p1.y-p2.y,2));

};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 2nd function not implemented';

    data.forEach(function(item){
        item.distance=exercise.distance(newPoint,item);
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
        return a.distance-b.distance
    });
    return data.slice(0,3);


};

module.exports = exercise;
