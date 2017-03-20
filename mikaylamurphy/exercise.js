var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    dX = p1.x - p2.x;
    dY = p1.y - p2.y;
    return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2))
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    for (i = 0; i < data.length; i ++){
        data[i].distance = exercise.distance(data[i], newPoint)
};
    return data;
}

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    var dists = data.map(function(obj){ 
        return obj.distance
});
    var ans = [];
    while (ans.length < k){
        var index = dists.indexOf(Math.min.apply(Math, dists));
        ans.push(data[index])
        dists[index] = Infinity
    }
    return ans;

};

module.exports = exercise;
