"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const update = { name: 'Henry Updated' };
const emptyUpdate = {};
const complete = {
    id: 1, name: "Henry", email: "henry@example.com"
};
function updateProfile(current, changes) {
    return { ...current, ...changes };
}
const curent = { id: 1, name: "Henry" };
const updated = updateProfile(curent, update);
const profile = { bio: null };
console.log("Updated:", JSON.stringify(updated));
console.log("Bio", profile.bio);
console.log("Empty update:", JSON.stringify(emptyUpdate));
console.log("Complete email:", complete.email);
console.log("Original has email", "email" in curent);
//# sourceMappingURL=04-partial-required.js.map