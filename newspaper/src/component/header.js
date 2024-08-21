import { FaAlignJustify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
 function Head(){
    return (<div className="header">
       
         <div className="logo">
             <FaAlignJustify className="symbol"/>
         <FaSearch className="symbol" />
         <a className="title1">B</a>
         <a className="title2">C</a>
         <a className="title3">B</a>
         
        <a className="sign">Sign in</a>
        <a className="register">Register</a>
        </div>
        <hr></hr>
    </div>

    )
}
function Menu(){
    return(<div className="menu">
        <ul className="menuitem">
            <li className="home">Home</li>
            <li>News</li>
            <li>Sports</li>
            <li>Business</li>
            <li>Innvation</li>
            <li>Culture</li>
            <li>Travel</li>
            <li>Live</li>
        </ul>
        <hr></hr>
    </div>);
}
function List(){
    return(<div className="list">
        <ul className="listitem">
            <li className="home1">Chennai</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Cochin</li>
            <li>Banglore</li>
            <li>Madurai</li>
            <li>Pune</li>
            <li>Kolkata</li>
            <li>Kashmiri</li>
        </ul>
        <hr></hr>
    </div>);
}
export default function Headmenu(){
    return(<div className="header">
    <Head/>
        <Menu/>
        <List/>
        </div>
    )
}