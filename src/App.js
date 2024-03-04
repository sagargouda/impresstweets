import './App.css'
import {ViewBox} from "./Icons";
import {CommentBox} from "./Icons";
import {RepostBox} from "./Icons";
import {LikeBox} from "./Icons";
import {SaveBox} from "./Icons";
import {DownloadBox} from "./Icons";
import {useRef, useState} from "react";
import {AvatarLoader} from "./Loader";
import {Verified} from "./Icons";
import {useScreenshot} from "use-react-screenshot";
import {useEffect} from "react";

function App() {

    let iconColor = "rgb(113, 118, 123)";

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







    function handleProfile(e){
        // console.log(        e.target.files[0])
        const file = e.target.files[0]

        // file reader intialization
        const reader = new FileReader()

        //  adding an event listener on reader
        reader.addEventListener('load' , function (){
            //  image converted to base64 sting
            setAvatar(this.result)
        })

        //     reading "file" as data url after this process is completed upper function is triggered
        reader.readAsDataURL(file)

    }


    function numberManipulate(numbers) {
        if (numbers >= 1000) {
            return (numbers / 1000).toFixed(1) + 'k';
        }
        return numbers.toString();
    }








  return (
      <>
          <div className="app-logo">
             <h1>IMPRESS TWEET</h1>
          </div>


     <div className="editor">

          {/* tweet settings */}
         <div className=" tweet-setting">
             {/* name*/}
             <div className="settings-name">
                 <label>Name =></label>
                 <input type="text" placeholder={"name"} value={name} onChange={(e) => {
                     setName(e.target.value)
                 }}/>

             </div>
             {/* username */}
             <div className="settings-username">
                 <label>Username =></label>
                 <input type="text" placeholder={"username"} value={username} onChange={(e) => {
                     setUsername(e.target.value)
                 }}/>
             </div>
             {/* Avatar */}
             <div className="settings-profile">
                 <label>Profile</label>
                 <input type="file" onChange={handleProfile}/>
             </div>

             {/*    tweet content */}
             <div className="settings-content">
                 <textarea value={content} onChange={(e) => {
                     setContent(e.target.value)
                 }} placeholder="Enter tweet content here" className="text-area" maxLength={280}></textarea>
             </div>


             {/*    retweet */}
             <div className="settings-retweet">
                 <label>Comment =></label>
                 <input type="number" placeholder={"Comment"} value={comment} onChange={(e) => {
                     setComment(e.target.value)
                 }}/>

             </div>

             {/*     likes*/}
             <div className="settings-like">
                 <label>Likes =></label>
                 <input type="number" placeholder={"Likes"} value={like} onChange={(e) => {
                     setLike(e.target.value)
                 }}/>

             </div>

             {/*    repost*/}

             <div className="settings-repost">
                 <label>Repost =></label>
                 <input type="number" placeholder={"Repost"} value={repost} onChange={(e) => {
                     setRepost(e.target.value)
                 }}/>

             </div>
             {/*     saves*/}

             <div className="settings-save">
                 <label>Save =></label>
                 <input type="number" placeholder={"Saves"} value={save} onChange={(e) => {
                     setSave(e.target.value)
                 }}/>

             </div>


             {/*     adding time , date , views*/}
             {/*     date */}
             <div className="settings-date">
                 <label>Date Change=> </label>
                 <input className="date" type="date" value={date} onChange={(e) => {
                     setDate(e.target.value)
                 }}/>
             </div>


             {/*    time*/}

             <div className="settings-time">
                 <label>Time=></label>
                 <input className="time" type="time" value={time} onChange={(e) => {


                     const newTime = e.target.value.split(':')
                     if (newTime[0] >= 12) {
                         setTime(e.target.value + ' PM')
                     } else {
                         setTime(e.target.value + ' AM')
                     }

                 }}/>
             </div>


             {/*    Views */}

             <div className="settings-views">
                 <label>Views=></label>
                 <input type="number" placeholder="enter views" value={views} onChange={(e) => {
                     setViews(e.target.value)
                 }}/>
             </div>


             {/*     verified*/}

             <div className="settings-verified">
                 <label>Verification => </label>
                 <select className="select" onChange={(e) => setVerified(e.target.value === '1' ? true : false)}>
                     <option value="1">Verified</option>
                     <option value="0">Not Verified</option>
                 </select>
             </div>

         {/*  download option   */}


             <div className="settings-download">
                 <button onClick={getImage}> Download Image</button>
             </div>
          <div className="download-url">
               <a  ref={downloadRef}  href={image} download="tweet.png">Tweet download Link</a>
          </div>


         </div>

         {/* divider line*/}

         <div className="divider">

         </div>


         {/* tweet editor*/}

         <div className="tweet-editor" ref={ref}>

             {/*  header */}

             <div className="tweet-editor-header">
                 {/* profile photo*/}

                 {
                     avatar === '' ? <AvatarLoader/> : <img className="photo"
                                    src={avatar}
                                    alt="profile"/>
                 }


                 {/*  name and username   */}
                 <div className="namespaces">
                     <div className="name"><span>{name.length < 30 ? name : name.slice(0,30)}</span>  <span className="verified"> {verified ? <Verified/> : ''} </span> </div>
                     <div className="username"><span>@{username.length < 15 ? username : username.slice(0,15)}</span></div>

                 </div>
                 {/* 3 dots */}
                 <div className="viewbox">
                     <ViewBox color={iconColor} width="24" height="24"/>
                 </div>

             </div>


             {/* tweet content*/}

             <div className="tweet-content">
                  <span>
                      {content.lenth < 280 ? content : content.slice(0,280)}
                  </span>
             </div>


             {/* tweet date , year and views*/}

             <div className="tweet-date-container">
                 <time className="tweet-time">{time}</time>
                 <span>·</span>
                 <time className="tweet-date">{date}</time>
                 <span>·</span>
                 <span className="tweet-views">{views.length < 10 ? numberManipulate(views) : 'error'}</span><p>Views</p>
             </div>

















             {/*     border now for seperation*/}

             <div className="line-break">

             </div>


             {/*     Icons options here*/}


             <div className="tweet-icons">
                 <div>
                     <CommentBox color={iconColor} width="24" height="24"/>
                     <span>{comment.length < 10 ? numberManipulate(comment) : 'error'}</span>
                 </div>
                 <div>
                     <RepostBox color={iconColor} width="24" height="24"/>
                     <span>{repost.length<10 ? numberManipulate(repost) : "error"}</span>
                 </div>
                 <div>
                     <LikeBox color={iconColor} width="24" height="24"/>
                     <span>{ like.length < 10 ? numberManipulate(like) : 'error'}</span>
                 </div>
                 <div>

                     <SaveBox color={iconColor} width="24" height="24"/>
                     <span>{save.length < 10 ? numberManipulate(save) : 'error'}</span>
                 </div>
                 <div>
                     <DownloadBox color={iconColor} width="24" height="24"/>
                 </div>

             </div>





         </div>


     </div>

          <div className="footer">
              <p>Created By <a href="https://github.com/sagargouda" target="_blank">@sagyrrr</a> </p>
          </div>
      </>
  );
}

export default App;
