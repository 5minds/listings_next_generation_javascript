// bad sample
var badObj = {
    name: "Holger",

    handleMessage: function(msg, callback) {
        callback(msg);
    },

    doIt: function() {
        var that = this;

        this.handleMessage("Hi ", function(msg) {
            console.log(msg + that.name);
        });
    }
};

badObj.doIt();


// good sample
var goodObj = {
    name: "Martin",

    handleMessage: function(msg, callback) {
        callback(msg);
    },

    doIt: function() {
        // lange Schreibweise
        this.handleMessage("Guten Tag ", (msg) => {
            console.log(msg + this.name);
        });

        // kurze Schreibweise
        this.handleMessage("Hi ", msg => console.log(msg + this.name));
    }

};

goodObj.doIt();
;
