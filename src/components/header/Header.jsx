import {React} from 'react'
import './Header.css'
import Timer from './components/Timer'
function Header(props){
    return(
        <>
            <header>
                <div className="Header">
                    <h1>EMOJI GAME</h1>
                    </div>
                    <div className='Timer'>
                        <Timer props={props}/>
                    </div>
                
            </header>
        </>
    )
}

export default Header;