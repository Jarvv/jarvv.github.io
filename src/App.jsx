import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero, About, Experience, StarsCanvas, BallCanvas, Projects } from './components'
import Contact from './components/Contact'

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
                <Projects />
                <Contact />
            </div>
        </BrowserRouter>
    )
}

export default App
