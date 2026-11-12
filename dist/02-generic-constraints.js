"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getId(value) {
    return value.id;
}
const user = { id: 1, name: "Henry" };
const product = { id: 10, name: "Keyboard", price: 500000 };
const userId = getId(user);
const productId = getId(product);
const selectedKey = "name";
// const wrongKey:UserKey = "email"
// user["name"]
// user.id
function getProperty(obj, key) {
    return obj[key];
}
const userName = getProperty(user, selectedKey);
const price = getProperty(product, "price");
console.log("IDs: ", userId, productId);
console.log("Name: ", userName);
console.log("Price: ", price);
//# sourceMappingURL=02-generic-constraints.js.map