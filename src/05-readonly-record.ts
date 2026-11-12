// READONLY


interface User {
  id:number;
  name:string;
}

const mutableUser:User = {id:1, name:"Henry"}

type ReadonlyUser = Readonly<User>
const readonlyUser: ReadonlyUser = mutableUser
// readonlyUser.name ="changed"
mutableUser.name = 'Henry Updated'


type UserRole = "admin" | 'editor' | "viewer"
type RolePermissions = Record<UserRole, string[]>;

const incompletePermissions = {admin: ['manage-users'], editor: ['edit-post']}
// const invalid:RolePermissions =  incompletePermissions


const permissions:RolePermissions = {
  admin:['manage-user', 'edit-post', 'read-post'],
  editor: ['edit-post', 'read-post'],
  viewer: ['read-post'],
}

type ApplicationStatus = "loading" | "success" | "error";
const statusLabel : Record<ApplicationStatus, string> ={
  loading: "memuat", success: "berhasil", error: "gagal"
}


console.log("Status:", statusLabel.success)


export {}
