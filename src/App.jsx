import './App.css'
import Platforms from './components/Platforms'
import Box from './components/Box'
import Button from './components/Button'

const App = () => {
  
  return (
    <>
      <div className="w-full overflow-hidden">
        <img src="/games/bf.webp" alt="Game 1" className="-z-[1] h-[11rem] top-[8rem] left-[50%] absolute translate-x-[-55%] md:translate-x-[-75%] rounded-3xl border-[1px] border-white/[.1] shadow-lg" />
        <img src="/games/overthrown.webp" alt="Game 2" className="-z-[1] h-[11rem] top-[14rem] left-[50%] absolute translate-x-[-45%] md:translate-x-[-25%] rounded-3xl border-[1px] border-white/[.1] shadow-lg" />
        <h2 className="text-white text-center mt-[28rem] text-5xl">Games made from passion.</h2>
        
        <Platforms />
        <Box title="Game Development" logo="storeicons/controller.webp">
          <p className="text-center text-white mt-[3rem] text-lg font-semibold mx-2">Years of experience in development and publishing.</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-2">Check out our list of games published.</p>
          <Button link="/games">Games</Button>
        </Box>
        {/* <Box title="Publishing Services" logo="storeicons/paint.webp">
          <p className="text-center text-white mt-[3rem] text-lg font-semibold mx-2">Indie game publishing, by indie game developers.</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-2">Contact us about getting your project published, ported, or marketed.</p>
          <Button link="/publishing">Learn more</Button>
        </Box> */}
      </div>
    </>
  )
}

export default App
