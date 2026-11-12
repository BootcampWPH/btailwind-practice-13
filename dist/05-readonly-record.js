"use strict";
// READONLY
Object.defineProperty(exports, "__esModule", { value: true });
const mutableUser = { id: 1, name: "Henry" };
const readonlyUser = mutableUser;
// readonlyUser.name ="changed"
mutableUser.name = 'Henry Updated';
const incompletePermissions = { admin: ['manage-users'], editor: ['edit-post'] };
// const invalid:RolePermissions =  incompletePermissions
const permissions = {
    admin: ['manage-user', 'edit-post', 'read-post'],
    editor: ['edit-post', 'read-post'],
    viewer: ['read-post'],
};
const statusLabel = {
    loading: "memuat", success: "berhasil", error: "gagal"
};
console.log("Status:", statusLabel.success);
//# sourceMappingURL=05-readonly-record.js.map