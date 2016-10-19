/**
 * If the this mechanism is so confusing, even to seasoned JavaScript developers,
 * one may wonder why it’s even useful. Is it more trouble than it’s worth?
 * Before we jump into the how, we should examine the why
 *
 */


function idendify(){
  return this.name.toUpperCase();
}

function say(){
  let greeting = "Hello, I'm " + idendify.call(this)
  console.log('use this')
  console.log(greeting)
}

var me = {
  name: "ibrahem ghaemi"
}

var you = {
  name: "fatemeh"
}

idendify.call(me)
idendify.call(you)

say.call(me)
say.call(you)

console.log('------------')
