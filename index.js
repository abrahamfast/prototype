      /**
       * Its Scope
       *
       * The next most common misconception about the meaning of this is
       * that it somehow refers to the function’s scope.
       * It’s a tricky question because in one sense there is some truth,
       * but in the other sense, it’s quite misguided
       * To be clear, this does not, in any way, refer to a function’s lexical scope.
       * It is true that internally, scope is kind of like an object with properties for
       * each of the available identifiers. But the scope “object” is not accessible
       * to JavaScript code. It’s an inner part of the engine’s implementation.
       */

       /**
        * Consider code that attempts (and fails!) to cross over the boundary and
        * use this to implicitly refer to a function’s lexical scope:
        */

        function fooScope(){
          var a = 2;
          this.barScope()
        }

        function barScope(){
          console.log(this.a)
        }

        //fooScope() // TypeError: this.barScope is not a function
