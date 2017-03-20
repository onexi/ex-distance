var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 1st function not implemented';
    var sum = (p1.x - p2.x)*(p1.x - p2.x) + (p1.y - p2.y)*(p1.y - p2.y);

    var distance = Math.sqrt(sum);

    return distance;
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 2nd function not implemented';

    var size = data.length;

    //Calculate distances between newPoint and all other points in data
    //Save the result in the 'distance' place holder in the data array
    for (var i=0; i<size; i++){

         var x = data[i].x;
         var y = data[i].y;

         var sum = (x - newPoint.x)*(x - newPoint.x)  + (y - newPoint.y)*(y - newPoint.y);

         var distance = Math.sqrt(sum);

         data[i].distance = distance;
    }

    return data;

};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 3rd function not implemented';

    //Sort array by distance
    data.sort(mySort);

    //Ascending sort from small to large so we can later easily pick the k smallest distances
    function mySort(a,b){
        return a.distance - b.distance;
    }

    //Pick the k closest points
    var closest = data.slice(0,k);

    return closest;

};

module.exports = exercise;
