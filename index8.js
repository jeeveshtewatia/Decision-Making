// You are given 
// 3
//  distinct integers 
// X
// ,
// Y
// ,
//  and 
// Z
// ,
//  and your task is to find and return the second smallest integer among the three provided integers.



const findSndSmallest = (x, y, z) => {
    if ((x > y && y > z) || (z > y && x < y)) {
        return y;
    } else if ((y > x && x > z) || (x > y && x < z)) {
        return x;
    } else if ((z > x && z < y) || (z < x && z > y)) {
        return z;
    }
};