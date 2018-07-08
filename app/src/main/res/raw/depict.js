class component {

    constructor(){

       // print("depict begun!")

        this.value = this.values()



        Object.keys(this.value).forEach(function(key,index) {

            var value=this.value[key];
            Object.defineProperty(this.value, key, {
                get: function() {
                    return value;
                },
                set: function(v) {
                    value = v;
                }
            });
        },this);

        __depict__(this.depict())
        this.onStart()
    }

    values(){
        return {}
    }

    depict(){
        return {}
    }

}

enums = {

    "HORIZONTAL" : 0,
    "VERTICAL" : 1

}


propertyMap = {

    "value" : {
        "android" : ["setText","getText"],
        "ios" : "",
    },

    "hint" : {
        "android" : ["setHint","getHint"],
        "ios" : "",
    },

    "orientation" : {
        "android" : ["setOrientation","getOrientation"],
        "ios" : "",
    },
}