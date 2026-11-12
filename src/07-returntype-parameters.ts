function createUser(name:string, age:number){
  return {id:1, name, age}
}

type ManualCreatedUser = {id:number; name:string; age:number}
type ManualCreatedArgs = [name:string, age:number]


type CreateUser = ReturnType<typeof createUser>
type CreateUserArgs = Parameters<typeof createUser>




function createUserFromArgs(args: CreateUserArgs): CreateUser {
  return createUser(...args)
}

const args:CreateUserArgs = ["Henry", 7];
// const reversed:CreateUserArgs = [7, "Henry"]


const createdUser:CreateUser = createUserFromArgs(args)


console.log('Created:', JSON.stringify(createdUser));
console.log("Runtime typeof:", typeof createUser)
export{}
