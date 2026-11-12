"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    name: "Henry",
    email: "Henry@example.com",
    passwordHash: 'mock-hash-only',
};
const typedPublic = user;
// typedPublic.passwordHash;
function toPublicUser(value) {
    return { id: value.id, name: value.name, email: value.email };
}
const publicUser = toPublicUser(user);
// const bad: UserPreview = {id:1}
console.log('Public JSON:', JSON.stringify(publicUser));
console.log('typed object has hash:', "passwordHash" in typedPublic);
//# sourceMappingURL=03-pick-omit.js.map