type StringResponse = {data:string}
type NumberResponse = {data:number}

const oldText: StringResponse = {data:"Henry"}
const oldNumber: NumberResponse = {data:7}


type Responses <T> = { data: T};

const textResponse: Responses<string> ={ data:oldText.data }
const numberResponse: Responses<number> = { data:oldNumber.data };


function wrap<T>(data:T):Responses<T> {
  return {data}
}

const inferred = wrap('Henry');
const inferredNumber = wrap(23)

inferred.data.toUpperCase()
// inferredNumber.data.toUpperCase()
