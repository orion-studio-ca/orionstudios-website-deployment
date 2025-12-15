import '../App.css'
import {useParams} from 'react-router-dom'
import data from '../data'
import Button from './Button'
import Error from '../Error'
import Carousel from './Carousel'

const ListPlatforms = (props) => {
  const{curGame} = props

  return(
    <div className="justify-left ml-[1rem] mb-[1rem] flex" >
      {curGame.platforms
        .filter((platform) => curGame.platforms.find(p => p.num === platform.num) === platform)
        .map((platform, i) =>
        <a key={i} className="w-[2.5rem] max-w-[12%]" href={platform.url} target="_blank" ><img src={`/storeicons/${data.platformList[platform.num].img}`} className="active:opacity-80 hover:opacity-80 transition-opacity" /></a>
      )}
    </div>
  )
}

const GameInfo = () => {
    const {gameId} = useParams()

    const curGame = data.gamesList.find((game) => game.url === gameId)

    if(!curGame) {
      return(
        <Error manual={true} />
      )
    }
  
  return (
    <>
      <div className="w-full overflow-hidden pt-[2rem] pb-[6rem]">
        <div className="flex justify-center px-[1rem]" >
          <div className="mt-[5rem] w-[50rem] max-w-[calc(100%-2rem)] bg-gradient-to-t from-blue-900/[.2] to-blue-800/[.1] rounded-2xl border-white/[.1] border-[1px] shadow-xl">
            <Carousel autoSlide={true} >
              {[curGame.img, ...curGame.screenshots].map((image, i) => <img src={image} alt={`Screenshot ${i+1}`} key={i} className="w-full" />)}
            </Carousel>
            <ListPlatforms curGame={curGame} />

            <h3 className="text-white px-[1rem] text-3xl sm:text-4xl font-bold" >{curGame.name}</h3>
            
            <p className="px-[1rem] text-white font-light leading-4 pt-[1rem] mb-5" >{curGame.full || curGame.description}</p>
            <h3 className="text-white px-[1rem] mb-[1rem] text-2xl sm:text-3xl font-semibold" >Download links</h3>
            {curGame.platforms.filter(platform => (!platform.info)).map((platform, i) => (
              <div key={i}>
                <h4 className="text-white px-[1rem] text-md font-light sm:text-left text-center" >Get {curGame.name}{platform.info ? ` (${platform.info})` : ""} on {data.platformList[platform.num].dim||data.platformList[platform.num].name}</h4>
                <Button noCenter={true} link={platform.url} newTab={true} >Download</Button>
              </div>
            ))}
            
            {curGame.platforms.filter(platform => (!!platform.info)).length>0 ? <h3 className="text-white px-[1rem] mb-[1rem] text-2xl sm:text-3xl font-semibold" >Other</h3> : null}
            {curGame.platforms.filter(platform => (!!platform.info)).map((platform, i) => (
              <div key={i}>
                <h4 className="text-white px-[1rem] text-md font-light sm:text-left text-center" >Get {curGame.name}{platform.info ? ` (${platform.info})` : ""} on {data.platformList[platform.num].dim||data.platformList[platform.num].name}</h4>
                <Button noCenter={true} link={platform.url} newTab={true} >Download</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default GameInfo
