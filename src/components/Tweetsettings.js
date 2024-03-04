import React, {useContext} from 'react';

import {TweetContext} from "../Tweetcontext";


function Tweetsettings() {

    const resData = useContext(TweetContext)
    const {getImage , downloadRef , image ,avatar ,setAvatar ,name ,setName , username ,setUsername,content,setContent,time,setTime,date,setDate,views,setViews,comment,setComment,repost,setRepost,like,setLike,save,setSave,verified,setVerified} = resData




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









    return (
        <>
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

        </>
    );
}

export default Tweetsettings;