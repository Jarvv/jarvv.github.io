import {BrowserRouter} from 'react-router-dom'
import { Navbar, Hero, About, Experience, StarsCanvas, BallCanvas } from './components';


const App = () => {
   return (
    <BrowserRouter>
        <div className='relative z-0 bg-primary'>
            <div className='bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <StarsCanvas /> 
            <BallCanvas />
            <Experience />
        </div>
    </BrowserRouter>
   )
}

export default App;
