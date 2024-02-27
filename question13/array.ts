/*Your own Array : Think of your favourite mode of transportation ,such as motorcycle or a car , and make a list that stores several examples .use
your list to print a series odf statements about these ityems ,such as "i would like to own a honda motorcycle "*/


let favouriteTransport:Array<[transport:string,brand:string]>=[]

favouriteTransport.push([" car" ,"honda"])
favouriteTransport.push([" motorcycle" ,"honda"])
favouriteTransport.push(["bus" ,"honda"])

favouriteTransport.forEach(([transport,brand])=>
console.log (`i would like to own ${brand} ${transport}`)

)