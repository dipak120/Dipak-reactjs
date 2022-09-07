import { useEffect, useState } from "react";
import Header from "./Header"

const AddProduct = () => {

  const[categories, setCategories]=useState([]);
  const[name, setName]=useState("");
  const[price, setPrice]=useState("");
  const[category, setCategory]=useState("");
  const[description, setDescription]=useState("");
  const[avatar, setAvatar]=useState("");
  const[developerEmail]=useState("dipakmakawana120@gmail.com");

  let bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpcGFrbWFrYXdhbmExMjBAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2RpcGFrMTIwIiwiaWF0IjoxNjYyNDQ1ODUzLCJleHAiOjE2NjI4Nzc4NTN9.D2KGJ5fvcN1riIeuD6tV3Tx6-jlUItXApDAEIyuaukc";
  const fetchCategories = () => {
      fetch("https://upayments-studycase-api.herokuapp.com/api/categories",
        { 
        method: 'get', 
        headers: new Headers({
          'Authorization': `Bearer ${bearerToken}`,
          })})
        .then(response => {
          return response.json()
        })
        .then(data => {
          setCategories(data?.categories)
        })
    }

    const hanldeSubmit = (e:any) => {
      e.preventDefault()
      let fd = new FormData();
      fd.append("description", description ?? "");
      fd.append("category", category ?? "");
      fd.append("name", name);
      fd.append("price", Number(price).toFixed(2));
      fd.append("avatar", avatar ?? "");
      fd.append("developerEmail", developerEmail ?? "");
    fetch("https://upayments-studycase-api.herokuapp.com/api/products",
        { 
        method: 'post', 
        headers: new Headers({
          'Authorization': `Bearer ${bearerToken}`,
        }),
        body: fd
        })
        .then(response => {
          return response.json()
        })
        .then(data => {
          // setCategories(data?.categories)
        })
      }
    useEffect(() => {
      fetchCategories()
    }, [])

  return (
   <>
    <div>
        <Header/>
        <div style={{paddingLeft: "30%",paddingRight: "30%"}}>
          <div  className="mt-20 text-center">
            <h1>Create Product</h1>
            <form action="" onSubmit={hanldeSubmit}>
              <input className="mt-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Product name" onChange={(e)=>setName(e.target.value)} type="text" name="name"/>
              <textarea className="mt-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} name="description"/>
              <input className="mt-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Image URL" onChange={(e)=>setAvatar(e.target.value)} type="text" name="search"/>
              <select className="mt-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Price" onChange={(e)=>setCategory(e.target.value)} name="category">
                <option value={0}>Categories</option>
                  {categories.map(( cate ) => <option key={cate['_id']} value={cate['_id']}>{cate && cate['name']}</option>)}              </select>
              <input className="mt-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} type="number" name="price"/>
              <button type="submit" className="mt-5 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"><b>SUBMIT</b></button>
            </form>
          </div>
        </div>
    </div>
  </>
  )
}

export default AddProduct
