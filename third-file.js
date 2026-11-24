"use strict";
function sayHello(target) {
    return `Hello ${target.firstName}, you have ${target.money} on your bank account.`;
}
const message = sayHello({ firstName: 'World', money: 123 });
