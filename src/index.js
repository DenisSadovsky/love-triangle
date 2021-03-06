/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  //   var count = 0;
  //   var arr = [];

    var lovers = [];
    preferences.unshift(0);
    for(var i = 1; i <= preferences.length; i++) {
        if(
            preferences[i] != preferences[preferences[i]] &&
            preferences[preferences[i]] != preferences[preferences[preferences[i]]] &&
            preferences[preferences[preferences[i]]] != preferences[i] &&
            preferences[preferences[preferences[i]]] == i
        ) {
            lovers.push([preferences[i], preferences[preferences[i]], preferences[preferences[preferences[i]]]]);
            preferences[i] = 0;
            preferences[preferences[i]] = 0;
            preferences[preferences[preferences[i]]] = 0;
        }
    }
    return lovers.length;
};

