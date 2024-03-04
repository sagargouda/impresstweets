import './App.css'
import {ViewBox} from "./Icons";
import {CommentBox} from "./Icons";
import {RepostBox} from "./Icons";
import {LikeBox} from "./Icons";
import {SaveBox} from "./Icons";
import {DownloadBox} from "./Icons";
import {useState} from "react";

function App() {

    let iconColor = "rgb(113, 118, 123)";

    const [avatar , setAvatar] =  useState('\thttps://pbs.twimg.com/profile_images/1731437883557343232/o0sPOK5F_bigger.jpg')
    const [name , setName] = useState("Sagar")



  return (
     <div className="editor">

          {/* tweet settings */}
          <div className=" tweet-setting">

          </div>

         {/* divider line*/}

         <div className="divider">

         </div>


         {/* tweet editor*/}

         <div className="tweet-editor">

             {/*  header */}

             <div className="tweet-editor-header">
                 {/* profile photo*/}

                 <img className="photo"
                      src={avatar || "\thttps://pbs.twimg.com/profile_images/1731437883557343232/o0sPOK5F_bigger.jpg"}
                      alt="profile"/>

                 {/*  name and username   */}
                 <div className="namespaces">
                     <div className="name"><span>{name}</span></div>
                     <div className="username"><span>@sagyzzz</span></div>

                 </div>
                 {/* 3 dots */}
                 <div className="viewbox">
                     <ViewBox color={iconColor} width="24" height="24"/>
                 </div>

             </div>


             {/* tweet content*/}

             <div className="tweet-content">
                  <span>
                      Okay enough, it’s on I’m going to have to do this! I’m going to end this JAKE PAUL BOXING THING.
                      BRING IT ON JAKE IM DEAD FUCKING SERIOUS FUCK YOU! HIT MY TEAM UP
                      Okay enough, it’s on I’m going to have to do this! I’m going to end this JAKE PAUL BOXING THING.
                      BRING IT ON
                  </span>
             </div>


             {/* tweet date , year and views*/}

             <div className="tweet-date-container">
                 <time className="tweet-time">1:04 PM</time>
                 <span>·</span>
                 <time className="tweet-date">Mar 4,2024</time>
                 <span>·</span>
                 <span className="tweet-views">2,800 views</span>
             </div>


             {/*     border now for seperation*/}

             <div className="line-break">

             </div>


             {/*     Icons options here*/}


             <div className="tweet-icons">
                 <div>
                     <CommentBox color={iconColor} width="24" height="24"/>
                     <span>33</span>
                 </div>
                 <div>
                     <RepostBox color={iconColor} width="24" height="24"/>
                     <span>33</span>
                 </div>
                 <div>
                     <LikeBox color={iconColor} width="24" height="24"/>
                     <span>33</span>
                 </div>
                 <div>

                     <SaveBox color={iconColor} width="24" height="24"/>
                     <span>33</span>
                 </div>
                 <div>
                     <DownloadBox color={iconColor} width="24" height="24"/>
                 </div>

             </div>





         </div>
     </div>
  );
}

export default App;
