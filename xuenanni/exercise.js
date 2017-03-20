var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    var distance = Math.sqrt(Math.pow(p2.x-p1.x,2)+Math.pow(p2.y-p1.y,2));
    return distance;
    
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    data.forEach(function(existingPoint){
        var dx=existingPoint.x-newPoint.x;
        var dy=existingPoint.y-newPoint.y;
        existingPoint.distance = Math.sqrt(dx*dx+dy*dy);
    });
    return data;

    // for (var i=0; i<length.data;i++){
    //     var dis = Math.sqrt(Math.pow(data[i].x-newPoint.x,2)+Math.pow(data[i].y-newPoint.y,2));
    //     return dis; 
    // }
   

    //return 'Error: 2nd function not implemented';
};

// find k closest points--sort and find the top 3
exercise.findClosest = function(k,data){
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    var top = data.slice(0,k); 
    return top;
    //return 'Error: 3rd function not implemented';
};

module.exports = exercise;
