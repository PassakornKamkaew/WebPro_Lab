function sayHello () {
    return "Hello world!"
}

function isString (input) {
    if (typeof input == "string") {
        return true
    }
    else {
        return false
    }
}

function isNumber (input) {
    if (typeof input == "number") {
        return true
    }
    else {
        return false
    }
}

function isArray (input) {
    return  Array.isArray(input);
}

function isObject (input) {
    if(input && typeof input === 'object' && !isArray(input)){
        return true
    }
    else{
        return false
    }
}

function isFunction (input) {
    if (typeof input == "function") {
        return true
    }
    else {
        return false
    }
}