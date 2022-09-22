import React, {useState, useEffect} from "react";


export default function Home (props) {

    // the states here 
    const [memesArray, setMemesArray] = useState([])
    const [memeImg, setMemeImg] = useState('https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg')
    const [count, setCount] = useState(0)
    const [memeForm, setMemeForm] = useState({
        top: '',
        bottom: ''
    })


// button actions 
    function next() {
        setCount( (prevCount) => {
            return prevCount = prevCount + 1
        })

        setMemeImg(memesArray[count].url)
    }

    function prev () {

        setCount( (prevCount) => {
            return prevCount = prevCount - 1
        })

        setMemeImg(memesArray[count].url)
        
    }


    // form inputs 
    
    const updateMeme = (event) => {
        const { name, value} = event.target;
        setMemeForm( (prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


// call to apis 

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(res => setMemesArray(res.data.memes))
    }, [])

    // components rendered


    return (
        <div className=" flex flex-col w-[500px]  py-2 space-y-4 px-4">
            <div className="">
                <div className=" flex justify-between border-b pb-4">
                    <button onClick={prev} className=" px-4 py-2 bg-emerald-800 text-white">Prev Image</button>
                    <button onClick={next} className=" px-4 py-2 bg-emerald-800 text-white">Next Image</button>
                </div>

               <div className="flex flex-col w-full space-y-4">\
               {/* top and bottom text form */}
                    <input onChange={updateMeme} value={memeForm.top} name="top" type="text" className=" px-4 py-2 outline-none" />
                    <input onChange={updateMeme} value={memeForm.bottom} name="bottom" type="text" className=" px-4 py-2 outline-none" />
               {/* end top and bottom text form */}

               </div>
            </div>
            <div className=" bg-purple-400 relative">
                <div className="absolute flex w-full justify-center top-6">
                    <p className=" text-4xl font-bold text-white ">{memeForm.top}</p>
                </div>
                <img src={memeImg} alt="" srcSet="" />
                <div className="absolute flex w-full justify-center bottom-8">
                    <p className=" text-4xl font-bold text-white ">{memeForm.bottom}</p>
                </div>
            </div>
            <div className="flex justify-end">
                <button onClick={props.theme} className="px-4 py-2 bg-black text-white">Dark BG</button>
            </div>
        </div>
    )
}