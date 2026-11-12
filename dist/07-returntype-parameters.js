"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(name, age) {
    return { id: 1, name, age };
}
function createUserFromArgs(args) {
    return createUser(...args);
}
const args = ["Henry", 7];
// const reversed:CreateUserArgs = [7, "Henry"]
const createdUser = createUserFromArgs(args);
console.log('Created:', JSON.stringify(createdUser));
console.log("Runtime typeof:", typeof createUser);
//# sourceMappingURL=07-returntype-parameters.js.map