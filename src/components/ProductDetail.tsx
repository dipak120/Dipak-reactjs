import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Header from "./Header"

const ProductDetail = () => {

    const[prodDetail, setProdDetail]=useState(Object);
    const { id } = useParams();
    console.log('params',id);
    const fetchProdData = () => {
      const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpcGFrbWFrYXdhbmExMjBAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2RpcGFrMTIwIiwiaWF0IjoxNjYyNDQ1ODUzLCJleHAiOjE2NjI4Nzc4NTN9.D2KGJ5fvcN1riIeuD6tV3Tx6-jlUItXApDAEIyuaukc";
        fetch(`https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
          { 
          method: 'get', 
          headers: new Headers({
            'Authorization': `Bearer ${bearerToken}`,
            })})
          .then(response => {
            return response.json()
          })
          .then(data => {
            setProdDetail(data?.product)
          })
      }
    
    useEffect(() => {
     fetchProdData()
    }, [])

  return (
   <>
    <div>
        <Header/>
        <div style={{paddingLeft: "15%",paddingRight: "15%"}}>
          <div className="flex mt-10">
            <div className="mr-5" style={{background: "white",borderRadius: '5px',width: "105px",height: "130px"}}>
              <img style={{width: "90px",height: "110px",paddingTop: "18px",paddingLeft: "13px"}} src={prodDetail['avatar']} alt=""/>
            </div>
            <div>
              <h2 style={{fontSize: "24px",fontWeight: "bold"}}>{prodDetail['name']}</h2>
              <h2 style={{paddingTop: "70px"}}>${prodDetail['price']}</h2>
            </div>
          </div>
            <hr className = "mt-5 mb-5" style={{border: "1px solid black"}}/>
          <div>
            <h3 style={{fontSize: "14px",fontWeight: "bold"}}>Description</h3>
            <p>{prodDetail['description']}</p>
          </div>
        </div>
    </div>
  </>
  )
}

export default ProductDetail
