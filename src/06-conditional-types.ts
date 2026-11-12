// Problem

type TextResult = {message:string}
type UserResult = {data: {id:number; name:string}}


type IsString<T> = T extends string ? true : false
type Result1 = IsString<string>;
type Result2 = IsString<number>;

const stringCheck:Result1 = true;
const numberCheck:Result2 = false;
// const wrongCheck:Result1 = false


type ApiResult<T> = T extends string ? {message:T} : {data:T}

const runtimeLabel = stringCheck ? "String branch" : "Other Branch"



interface User {id:number; name:string}
const textResult:ApiResult<string> = {message:'Profile berhasil dibuat'}
const userResult:ApiResult<User> = {data:{id:1, name:"Henry"}}
const oldText:TextResult = textResult
const oldUser:UserResult = userResult


console.log("Checks", stringCheck, numberCheck)
console.log("Runtime Ternary", runtimeLabel)
console.log("Message", oldText.message)
console.log("Message", oldText.message)
console.log("User", oldUser)





export {}
