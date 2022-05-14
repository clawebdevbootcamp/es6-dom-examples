    // Arrow functions
        // ES5
        var f1 = function(a1, b1) {
            return a1 * b1;
        }

        // ES6
        const f2 = (a2, b2) => a2 * b2;

        // console.log(f1(10,2))
        // console.log(f2(10,2))

    // this Keyword

        //console.log(this)

        const obj= {
            name: "John",
            arrowFunction: ()=>console.log(this),
            normalFunction: function(){console.log(this)}
        }

        // obj.arrowFunction()
        // obj.normalFunction()
    
    // default parameters
        function myFunction(x, y = 10) {
            // y is 10 if not passed or undefined
            return x + y;
        }

        function myFunction2({x, y = 10}) {
            // y is 10 if not passed or undefined
            return x + y;
        }


        //console.log(myFunction2({x:5}))

        //console.log(myFunction(5)); 