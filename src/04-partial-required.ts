import { Console } from "console";

interface User {
  id:number;
  name:string;
  email?:string
}

// const tooStrict:User = {name:"Henry Updated"}

type UpdateUser = Partial<User>

const update: UpdateUser = { name: 'Henry Updated' };
const emptyUpdate:UpdateUser = {}
type CompleteUser = Required<User>
const complete: CompleteUser = {
  id:1, name:"Henry",email:"henry@example.com"
}

function updateProfile(current: User, changes: UpdateUser):User {
  return {...current, ...changes}
}



const curent: User = {id:1, name:"Henry"}
const updated = updateProfile(curent, update)


interface ProfileDraft {
  bio?: string | null
}

type CompleteProfile = Required<ProfileDraft>;
const profile:CompleteProfile = {bio:null}

console.log("Updated:", JSON.stringify(updated))
console.log("Bio", profile.bio)
console.log("Empty update:", JSON.stringify(emptyUpdate))
console.log("Complete email:", complete.email)
console.log("Original has email", "email" in curent)

export {}
