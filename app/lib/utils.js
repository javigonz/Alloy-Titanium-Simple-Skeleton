//Some utilities method 


var Alloy = require('alloy');


//Remove and clean memory all children in a view
exports.removeAllChildren = function(viewObject) {
    var children = viewObject.children.slice(0);
 
    for (var i = 0; i < children.length; ++i) {
        viewObject.remove(children[i]);
        children[i] = null;
    }
};
