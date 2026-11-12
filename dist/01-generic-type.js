"use strict";
const oldText = { data: "Henry" };
const oldNumber = { data: 7 };
const textResponse = { data: oldText.data };
const numberResponse = { data: oldNumber.data };
function wrap(data) {
    return { data };
}
const inferred = wrap('Henry');
const inferredNumber = wrap(23);
inferred.data.toUpperCase();
// inferredNumber.data.toUpperCase()
//# sourceMappingURL=01-generic-type.js.map