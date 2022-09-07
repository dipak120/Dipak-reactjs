import { Link } from "react-router-dom"

const Header = () => {
  return (
   <>
       <div className="box-border rounded-md h-12 p-3 w-100 shadow-lg bg-white mr-10 ml-10 grid grid-cols-3 gap-4">
            <div className="font-bold ml-5 col-span-2"><Link to={'/'}>UPayments Store</Link></div>
            <div className="font-bold mr-0" style={{paddingLeft: "300px"}}>Register</div>
        </div>
    </>
  )
}

export default Header
