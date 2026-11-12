interface User {
  id: number;
  name:string;
  email: string;
  passwordHash:string;
}


interface ManualUserPreview {
  id:number;
  name:string
}


// union
type UserPreview = Pick<User, "id" | "name">;
type PublicUser = Omit<User, "passwordHash">;


const user:User = {
  id: 1,
  name: "Henry",
  email: "Henry@example.com",
  passwordHash: 'mock-hash-only',
}

const typedPublic :PublicUser = user
// typedPublic.passwordHash;

function toPublicUser(value: User):PublicUser {
  return {id: value.id, name:value.name, email:value.email}
}

const publicUser = toPublicUser(user)
// const bad: UserPreview = {id:1}


console.log('Public JSON:', JSON.stringify(publicUser) )
console.log('typed object has hash:', "passwordHash" in typedPublic )

export {};
