"use strict";
// Problem
Object.defineProperty(exports, "__esModule", { value: true });
const stringCheck = true;
const numberCheck = false;
const runtimeLabel = stringCheck ? "String branch" : "Other Branch";
const textResult = { message: 'Profile berhasil dibuat' };
const userResult = { data: { id: 1, name: "Henry" } };
const oldText = textResult;
const oldUser = userResult;
console.log("Checks", stringCheck, numberCheck);
console.log("Runtime Ternary", runtimeLabel);
console.log("Message", oldText.message);
console.log("Message", oldText.message);
console.log("User", oldUser);
//# sourceMappingURL=06-conditional-types.js.map