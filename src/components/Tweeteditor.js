import React, {useContext} from 'react';
import {AvatarLoader} from "../Loader";
import {CommentBox, DownloadBox, LikeBox, RepostBox, SaveBox, Verified, ViewBox} from "../Icons";
import {TweetContext} from "../Tweetcontext";

function Tweeteditor() {

    const resData = useContext(TweetContext)
    const {username , name , avatar ,content , time , date ,views , comment ,repost , like , save , verified} = resData

    function numberManipulate(numbers) {
        if (numbers >= 1000) {
            return (numbers / 1000).toFixed(1) + 'k';
        }
        return numbers.toString();
    }

    let iconColor = "rgb(113, 118, 123)";


    return (
        <>
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
                      {content.length < 280 ? content : content.slice(0,280)}
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




</>
    );
}

export default Tweeteditor;