
async function getUser() {
  return {id:1, name: "Henry"}
}

type UserPromise = ReturnType<typeof getUser>
// const wrong:UserPromise ={id:1, name: "Henry"}


type ResolveNumber = Awaited<Promise<number>>;
const resolvedNumber:ResolveNumber = 13;
type AlreadyResolved =Awaited<string>
const label:AlreadyResolved ="User"


type UserData = Awaited<UserPromise>


async function main():Promise<void> {
  const pending:UserPromise = getUser();
  const user:UserData = await pending;
  console.log("Basic:", resolvedNumber)
  console.log(label + ":", JSON.stringify(user))
  console.log("Name:", user.name)
}

main().catch((error:unknown) => {
  console.error("Gagal menjalankan awaited", error)
  process.exitCode = 1
})


export {}
