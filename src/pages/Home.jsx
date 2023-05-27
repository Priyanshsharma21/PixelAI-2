import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Masonry from 'react-masonry-css';
import { Card, Loader } from '../components';
import { prompts } from '../constant';


const RenderCard = ({data})=>{
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        883: 2,
        580: 1
      };

      return (
             <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid bg-transparent"
                columnClassName="my-masonry-grid_column"
            >
                {data.map((post,i)=>(
                    <Card index={i} key={post.id} data={post} className="w-max bg-transparent"/>
                ))}
            </Masonry>
      )
}

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('Cyberpunk cityscape, dystopian, futuristic, night, cybernetics, 3D, art')
    const [loading, setLoading] = useState(false)
    const [aiImageResult, setAIImageResult] = useState([])

    const searchAiImages = async()=>{
        setLoading(true)
        try {
            const res = await axios.get(`https://lexica.art/api/v1/search?q=${searchTerm}`)
            setAIImageResult(res.data.images)
        } catch (error) {   
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    const getRandomPrompt = ()=> {
        const randomIndex = Math.floor(Math.random() * prompts.length);
        return prompts[randomIndex];
      }

    const handleSubmit = (e)=>{
        e.preventDefault();
        searchAiImages()
    }

    const handleRandom = ()=>{
        let randomPrompt = getRandomPrompt();
        setSearchTerm(randomPrompt);
    }


    useEffect(() => {
        // Load default images when the component mounts
        searchAiImages();
      }, []);



  return (
    <div className="w-full h-full bg-transparent">
    <div className="w-full h-auto bg-transparent">
        <form onSubmit={handleSubmit} className="bg-transparent m-2 flex">
            <input 
                type="text"
                value={searchTerm}
                className="text-white border border-gray-300 text-sm input_ai bg-transparent focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
                placeholder="Enter a prompt..."
                onChange={(e)=>setSearchTerm(e.target.value)}
                onKeyDown={(e)=>{
                    e.key==='Enter' && handleSubmit(e);
                }}
            />

            <div className="surpriseMe" onClick={handleRandom}>
                Surprise Me
            </div>
        </form>
    </div>

    <div className="mt-5 bg-transparent">
        {!loading > 0 ? (
            <RenderCard data={aiImageResult}/>
        ):(
            <Loader />
        )}
    </div>
</div>

  )
}

export default Home