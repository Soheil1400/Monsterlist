import {Link,Outlet} from "react-router-dom";
const Menu = ()=>{
    return(
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Monsters'}>Monsters</Link></li>
            </ul>
            <Outlet/>
            <div>
                This is Footer
            </div>
        </div>
    )
}

export default Menu
