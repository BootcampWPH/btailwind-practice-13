



function getId<T extends {id:number}>(value:T):number {
  return value.id
}

const user = {id:1, name: "Henry"}
const product = {id:10, name:"Keyboard", price:500000}

const userId = getId(user)
const productId = getId(product)

// getId({name:"Henry"})
// getId({id:"1"})

type UserKey = keyof typeof user
const selectedKey:UserKey = "name"
// const wrongKey:UserKey = "email"


// user["name"]
// user.id

function getProperty<T extends object, K extends keyof T>(
  obj:T,
  key: K
): T[K] {
  return obj[key]
}


const userName = getProperty(user, selectedKey)
const price = getProperty(product, "price")

console.log("IDs: ", userId, productId)
console.log("Name: ", userName)
console.log("Price: ", price)

export {}
