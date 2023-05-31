import { Link ,Outlet} from "react-router-dom"

function Navbar() {
    let btnStyle = {
        background: '',
        display:'flex',
        // padding:'10px',
    }
  return (
    <>
    <nav className="container mx-auto flex justify-between items-center">
        <div style={{width:'160px'}}>
        <Link to='/'>
            <img style={{height:'80px'}} src="./assets/logo.png" alt="logo" />
        </Link>
        </div>
        <div>
            <ul className="flex justify-center align-center py-5">
                <li><Link className="text-lg font-bold" to='/'>Home</Link></li>
                <li className="ml-10"><Link className="text-lg font-bold" to='/products'>Product</Link></li>
                <li className="ml-10">
                    <Link to='/cart'>
                    <div style={btnStyle}>
                    <span className="text-lg font-bold">10</span>
                    <img style={{height:'30px'}} src="./assets/cart.png" alt="" />
                    </div>
                    </Link>
                </li>
            </ul>
        </div>
      
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar