import './Nav.css';
import logo from './logo.svg';
function Nav(){

     return (
         <div className='NavDiv'>
        <div><img className='NavLogo' src={logo}/> </div>

          <div>
              <ul className='ulStyle'>
                 <li>INÍCIO</li>
                 <li>PROJETOS</li>
                 <li>CONTATOS</li>
              </ul>
           </div>



        </div>

    )

}

export default Nav 