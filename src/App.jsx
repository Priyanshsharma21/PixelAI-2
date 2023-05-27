import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Home } from './pages'
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'


var overscrollOptions = {
  enable : true,
  effect : 'glow',
  damping : 0.10,
  maxOverscroll : 150,
  glowColor : '#ff01d3'
}

const options = {
  damping : 0.03,
  plugins : {
    overscroll : {...overscrollOptions}
  }
}

function App() {

  useEffect(()=>{
    Scrollbar.use(OverscrollPlugin)
    Scrollbar.init(document.body, options);

    return ()=>{
      if(Scrollbar) Scrollbar.destroy(document.body)
    }
  },[])


  return (
    <div className="app">
        <header className="w-full h-[60px] flex justify-center items-center sm:px-8 px-4 border-b bg-[#35353541] border-b-[#ffffff]">
          <div className="text-[20px] text-[#f23bff] ml-2 font-extrabold bg-transparent mt-2">
            PEXEL AI 2
          </div>
        </header>
        <section className="mt-4 mx-5 flex flex-col justify-around bg-transparent">
          <h1 className=" text-[3rem] font-semibold text-green-500 bg-transparent">
            PEXEL AI 2
          </h1>
          <p className="text-slate-300 font-inter text-[1rem] bg-transparent max-w-[600px]">
          Get instant visual inspiration with our AI image generating app. Simply enter your search prompt and watch as the app generates stunning images with incredible precision. Click on surprise me button and get inspiration how to write perfect prompt. Download now and create with ease!
          </p>
        </section>
      <main className="mt-4 bg-transparent">
        <Home />
      </main>
    </div>
  )
}

export default App
