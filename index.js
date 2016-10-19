   /**
    * Confusions
    *
    * We’ll soon begin to explain how this actually works, but first we must
    * dispel some misconceptions about how it doesn’t actually work
    *
    * The name “this” creates confusion when developers try to think about
    * it too literally. There are two meanings often assumed, but both are incorrect.
    *
    */

  /**
   * itself
   *
   * Developers new to JavaScript’s mechanisms often think that referenc‐
   * ing the function as an object (all functions in JavaScript are objects!)
   * lets you store state (values in properties) between function calls.
   *
   * Consider the following code, where we attempt to track how many times a function (foo) was called:
   */

   function foo(num) {
     console.log("foo: " + num)

     this.count++
   }

   foo.count = 0

   for(var i = 0; i < 5; i++) {
     foo(i)
   }

   console.log(foo.count)

   /**
    *
    * Instead of stopping at this point and digging into why the this
    * reference doesn’t seem to be behaving as expected, and answering those
    * tough but important questions, many developers simply avoid the issue altogether,
    * and hack toward some other solution, such as creating another object to hold the count property:
    *
    */

    function bar(num){
      console.log('Bar: ' + num)

      ++data.count
    }

    let data = {
      count: 0
    }

    for(var i = 0; i < 5; i++) {
      bar(i)
    }

    console.log(data.count)


    /**
     *
     * While it is true that this approach “solves” the problem, unfortunately
     * it simply ignores the real problem—lack of understanding what this
     * means and how it works—and instead falls back to the comfort zone
     * of a more familiar mechanism: lexical scope.
     * Consider these two functions:
     */

     function fooBar(num){
       fooBar.count = num
     }

     setTimeout(function(){

     }, 10)

     /**
      * So another solution to our running example would have been to use
      * the foo identifier as a function object reference in each place, and not
      * use this at all, which works.
      */

      function barFoo(num){
        console.log("barFoo: " + num)
        barFoo.count++;
      }

      barFoo.count = 0

      for(var i = 0; i < 5; i++) {
        // barFoo(i)
        barFoo.call(barFoo, i)
      }

      console.log(barFoo.count)
