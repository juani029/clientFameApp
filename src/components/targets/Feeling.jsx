import React, { useMemo, useRef, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle, AiOutlineReload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Deslice from 'react-tinder-card';
// import useAuth from '../../hooks/useAuth';

const Feeling = ({ setFirstLogin }) => {
  // const {putFirstLoginUser,user} = useAuth()
  const emociones = [
    { id: 1, feel: 'ira' },
    { id: 2, feel: 'enojo' },
    { id: 3, feel: 'ansiedad' },
  ]

  
  const [currentIndex, setCurrentIndex] = useState(emociones.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(emociones.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < emociones.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction,nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < emociones.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      setFirstLogin(1);
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }



  return (
    <div className=" flex justify-center items-center w-full h-full bg-[b] relative rounded z-[0]">
      <div className=" absolute z-[2] ">
        {emociones.map((feel, index) => (
          <Deslice
            className="z-10"
            ref={childRefs[index]}
            key={feel.id}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir,feel.feel, index)}
            onCardLeftScreen={() => outOfFrame(feel.feel, index)}
          >
            <div
              className={`bg-[#F4717F]  border-[1px] shadow-228b absolute rounded bottom-[0]  translate-y-[50%] left-0 translate-x-[-50%] w-[clamp(100px,70vw,300px)]  h-[clamp(200px,100vw,300px)] flex flex-col uppercase justify-center items-center text-lg rotate-[${5 * feel.id}deg]  hover:drop-shadow-lg shadow-black  z-[2] sm:h-[clamp(200px,100vw,300px)] sm:w-[clamp(100px,50vw,300px)]`}
            >
              <h2 className="hover:cursor-pointer  text-[clamp(1rem,7vw,3rem)]">
                {feel.feel}
              </h2>
            </div>
          </Deslice>
        ))}

      
      </div>
      <div className='buttons absolute bottom-0 flex gap-16 text-2xl'>
        <button className='hover:text-thirdHover hover:scale-125 hover:cursor-pointer' onClick={() => swipe('left')}><AiFillCloseCircle/> </button>
        <button className='hover:text-seventh hover:scale-125 hover:cursor-pointer' onClick={() => goBack()}><AiOutlineReload/></button>
        <button className='hover:text-[lightgreen] hover:scale-125 hover:cursor-pointer' onClick={() => swipe('right')}><AiFillCheckCircle/> </button>
      </div>
      <button className="hover:cursor-pointer rounded-[10px] p-4  absolute z-[1] hover:text-third">
        {' '}
        <Link to="/beforeStart">Continuar ▶ </Link>{' '}
      </button>
    </div>
  );
};

export default Feeling;
