 
import {Logo} from './Icons';
import './Navbar.css';

const rutaimg="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg";
 const Navbar= ()=>{


return(

	<nav>
		
		<Logo/>

		<div className="switch">
			
			<img src={rutaimg} width="50px" height="50px" alt=""/>	
		</div>

	</nav>

	)



}

export default Navbar;