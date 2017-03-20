var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    return Math.pow((p1.x - p2.x) * (p1.x - p2.x) + (p1.y -p2.y) * (p1.y -p2.y), 0.5);
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    data.forEach(function(item){
        item.distance = Math.pow((newPoint.x - item.x) * (newPoint.x - item.x) + (newPoint.y -item.y) * (newPoint.y -item.y), 0.5);
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
    var k_closest = data.slice(0,k);
    return k_closest;
};

module.exports = exercise;
