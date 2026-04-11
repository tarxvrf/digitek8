export default async function Getdata(){
    const res = await fetch("http://localhost:3000/data")
    const resjson = await res.json()
    console.log(resjson)
    return {resjson}
}