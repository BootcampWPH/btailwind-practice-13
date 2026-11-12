"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getUser() {
    return { id: 1, name: "Henry" };
}
const resolvedNumber = 13;
const label = "User";
async function main() {
    const pending = getUser();
    const user = await pending;
    console.log("Basic:", resolvedNumber);
    console.log(label + ":", JSON.stringify(user));
    console.log("Name:", user.name);
}
main().catch((error) => {
    console.error("Gagal menjalankan awaited", error);
    process.exitCode = 1;
});
//# sourceMappingURL=08-awaited.js.map