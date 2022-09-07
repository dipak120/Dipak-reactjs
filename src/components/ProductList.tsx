import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Header from "./Header"

const ProductList = () => {

    const[prodList, setProdList]=useState([]);
    const[filterData, setfilterData]=useState([]);
    const[categories, setCategories]=useState([]);
    const fetchProdData = () => {
      const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpcGFrbWFrYXdhbmExMjBAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2RpcGFrMTIwIiwiaWF0IjoxNjYyNDQ1ODUzLCJleHAiOjE2NjI4Nzc4NTN9.D2KGJ5fvcN1riIeuD6tV3Tx6-jlUItXApDAEIyuaukc";
        fetch("https://upayments-studycase-api.herokuapp.com/api/products",
          { 
          method: 'get', 
          headers: new Headers({
            'Authorization': `Bearer ${bearerToken}`,
            })})
          .then(response => {
            return response.json()
          })
          .then(data => {
            setProdList(data?.products)
          })
      }

      const fetchCategories = () => {
        const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpcGFrbWFrYXdhbmExMjBAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2RpcGFrMTIwIiwiaWF0IjoxNjYyNDQ1ODUzLCJleHAiOjE2NjI4Nzc4NTN9.D2KGJ5fvcN1riIeuD6tV3Tx6-jlUItXApDAEIyuaukc";
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
        const categoriesChange = async(cate:string) => {
          if(cate === 'all'){
            setfilterData(prodList);
          } else {
            const filterProd = await prodList.filter((cat) => cat && cat['category'] === cate );
            console.log('filterProd',filterProd);
            setfilterData(filterProd);
          }
        }
    
    useEffect(() => {
     fetchProdData()
     fetchCategories()
    }, [])

  return (
   <>
   <div>
        <Header/>
        <div className="grid grid-cols-3 gap-4" style={{paddingTop: "30px"}}>
            <div className="font-bold ml-5 col-span-2" style={{marginLeft: "38px",
            paddingLeft: "25px",paddingTop: "9px",background: "white",borderRadius: "5px",
            fontWeight: "lighter",width: "350px",}}>
            Electronics, cloths, accessoriec, Furniture...</div>
            <div style={{paddingLeft: "188px"}}>
                <select style={{padding: "10px",borderRadius: "5px",fontWeight: "lighter",width: "182px"}}  
                onChange={(e)=> categoriesChange(e.target.value)}>
                  <option value='all'>All Categories</option>
                  {categories.map(( cate ) => <option key={cate['_id']} value={cate['name']}>{cate && cate['name']}</option>)}
                </select>
            </div>
        </div>
      <div className="grid grid-cols-4 gap-4 mx-100" style={{paddingLeft: "15%",paddingRight: "15%", marginTop: "30px"}}>
        {filterData.length ? 
          filterData?.map((item) => (
              <div className="rounded-md p-10" key={item['_id']} style={{background: "white"}}>
                <Link to={`/produ-detail/${item['_id']}`}>
                  <img src={item && item['avatar']}/>   
                  <span>{item && item['name']}<br/>{item && item['price']}</span>     
                </Link>   
              </div> 
          ))
          : prodList?.map((item) => (
            <div className="rounded-md p-10" key={item['_id']} style={{background: "white"}}>
                <Link to={`/produ-detail/${item['_id']}`}>
                  <img src={item && item['avatar']}/>   
                  <span>{item && item['name']}<br/>{item && item['price']}</span>     
                </Link>
              </div>  
          ))
        }
        <button style={{background: "black", color: "white",fontSize: "32px",fontWeight: 900,borderRadius: "50%",
          width: "53px",paddingBottom: "5px",position: "fixed",right:"0px",bottom:"0px"
         }}><Link to={`/produ-add`}>+</Link></button>
      </div>
    </div>
    </>
  )
}

export default ProductList
