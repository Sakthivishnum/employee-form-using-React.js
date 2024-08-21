import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './component/header.css'
import './component/content.css';
import './component/footer.css';
import Headmenu from './component/header';
import Contentjoins from './component/content';
import Footerfinal from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function Main() {
    return(<div className="main">
        <Headmenu/>
        <Contentjoins/>
        <Footerfinal/>
        </div>
    )
}
ReactDOM.render(<Main/>,document.getElementById('root'));