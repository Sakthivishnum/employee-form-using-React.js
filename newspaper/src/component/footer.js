import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer(){
    return(<div className="footer">
        <hr></hr>
        <div class="container">
            <a className="footertitle1">B</a>
            <a className="footertitle2">C</a>
            <a className="footertitle3">B</a>
        </div>
    </div>)
}
function Footer1(){
    return(<div className="footerlist">
        <div class="container">
         <ul className="footeritem">
            <li>Home</li>
            <li>News</li>
            <li>Sports</li>
            <li>Business</li>
            <li>Innvation</li>
            <li>Culture</li>
            <li>Travel</li>
            <li>Live</li>
        </ul>
        </div>
    </div>)
}
function Footer2() {
    return(<div className="selection">
        <div class="container">
        <select>
            <option className="head">BCB in other language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Tamil</option>
            <option>Hindi</option>
            <option>Malayalam</option>
            <option>Telugu</option>
            <option>Kannada</option>
            <option>Arabic</option>
        </select>
        <hr></hr>
        </div>
    </div>)
}
function Footer3(){
    return(<div className="follows">
        <div class="container">
            <a className="followhead">Follows on BCB :</a>
            <a className="icon"><FaXTwitter /></a>
            <a className="icon"><FaFacebookF /></a>
            <a className="icon"><FaInstagram /></a>
            <a className="icon"><FaTiktok /></a>
            <a className="icon"><FaLinkedin /></a>
            <a className="icon"><FaYoutube /></a>
        </div>
    </div>)
}
function Footer4() {
    return (<div className="condition">
        <div class="container">
            <a className="term">Terms of Use</a>
            <a className="term">About the BCB</a>
            <a className="term">Privacy Policy</a>
            <a className="term">cookies</a>
            <a className="term">Accessibility Help</a>
            <a className="term">Contact the BCB</a>
            <a className="term">Advertise with us</a>
            <a className="term">Do not share or sell my info</a>
            <a className="term">Contact technical support</a>
        </div>
    </div>)
}
function Footer5(){
    return (<div className="copy">
        <div class="container">
        <p>copyright 2024 BCB.All rights reserved. The BCB is not responsible for the content of external sites.<a>Read about our approach to external linking.</a></p>
        </div>
    </div>)
}
export default function Footerfinal(){
    return (<div className="footerfinal">
        <Footer/>
        <Footer1/>
        <Footer2/>
        <Footer3/>
        <Footer4/>
        <Footer5/>
    </div>)
}