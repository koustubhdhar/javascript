import React from "react";
import ReactDom from "react-dom";

function  Nav(){
	return(<>
	
	
	<header style={{"display":"flex","gap":"100px","flexWrap":"wrap","margin":"20px"}}>
<div style={{"float":"left"}}>Landing</div>
<div className="hr" style={{"display":"flex","gap":"38px"}}>
	<div className="logo">
		</div>

        <nav>
			<ul className="mi">
				<li><a href="">Home</a></li>
				<li><a href="">Feacture</a></li>
				<li><a href="">Reviws</a></li>
				<li><a href="">Prising</a></li>
				<li><a href="">FA2</a></li>
			</ul>
		</nav>
		</div>
	</header>
</>);

}
export default Nav;