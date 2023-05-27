import React from 'react'
import {downloadImage} from '../utils/index'
import { FiDownload } from 'react-icons/all'


const Card = ({data}) => {
    const {prompt,src} = data;


  return (
     <div className={`rounded-xl bg-transparent m-2 group relative shadow-card hover:shadow-cardhover card flex justify-center w-full h-auto`}>
        <img src={src} alt={prompt} className="object-cover rounded-xl" />
        <div className=" group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] bg-opacity-75 bg-gradient-to-[#10131f] m-2 p-4 rounded-md">
        {prompt===null ? (
          <p className="text-white text-sm bg-transparent overflow-y-auto prompt">AI generated image, lexia AI, pexel AI, Dall-E, Open AI</p>

        ):(
            <p className="text-white bg-transparent text-sm overflow-y-auto prompt">{prompt}</p>
        )}

          <div className="mt-5 bg-transparent flex justify-between items-center gap-2">
            <button type="button" onClick={() => downloadImage(src)} className="outline-none bg-transparent border-none">
              {/* <img src={download} alt="download"  /> */}
              <FiDownload className="w-6 bg-transparent h-6 object-contain invert"/>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Card