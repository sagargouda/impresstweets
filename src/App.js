import './App.css'

import {createContext, useEffect, useRef, useState} from "react";
import Tweetsettings from "./components/Tweetsettings";
import Tweeteditor from "./components/Tweeteditor";


import {TweetContext} from "./Tweetcontext";
import {useScreenshot} from "use-react-screenshot";

function App() {


    const [avatar , setAvatar] =  useState('\thttps://pbs.twimg.com/profile_images/1731437883557343232/o0sPOK5F_bigger.jpg')
    const [name , setName] = useState("Sagar")
    const [username , setUsername] = useState('sagyzzz')
    const [ content , setContent] = useState(' I can do anything Like Kanye west ')
    const [ time , setTime] =  useState('1:04 PM')
    const [ date , setDate] =  useState('Mar 4,2024')
    const [views ,setViews] = useState('2,400')
    const [comment , setComment] = useState('33')
    const [repost , setRepost] = useState('43')
    const [like , setLike] = useState('53')
    const [save , setSave] = useState('63')
    const [verified , setVerified] = useState(false)

    //  for screenshot
    const ref = useRef(null)
    const downloadRef = useRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)



    //  useeffect
    useEffect(()=>{
        if(image){
            downloadRef.current.click()
        }
    } , [image])




    return (

      <TweetContext.Provider value={{getImage , downloadRef , image ,avatar ,setAvatar ,name ,setName , username ,setUsername,content,setContent,time,setTime,date,setDate,views,setViews,comment,setComment,repost,setRepost,like,setLike,save,setSave,verified,setVerified}}>
          <div className="app-logo">
             <h1>IMPRESS TWEET</h1>
          </div>


     <div className="editor">

          {/* tweet settings */}
         <div className=" tweet-setting">
            <Tweetsettings/>
         </div>

         {/* divider line*/}

         <div className="divider">

         </div>


         {/* tweet editor*/}

<div className="tweet-editor" ref={ref}>
    <Tweeteditor  />
</div>






     </div>

          <div className="footer">
              <p>Created By <a href="https://github.com/sagargouda" target="_blank">@sagyrrr</a> </p>
          </div>
      </TweetContext.Provider>
  );
}

export default App;
