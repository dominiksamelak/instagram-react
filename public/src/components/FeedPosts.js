// FeedStory.js
import React, { useState } from 'react';
import './styles/feed-posts.css'
import feedMore from './img/icons/feed-more.png'
import likeFeed from './img/icons/like-feed.png'
import addComment from './img/icons/add-comment.png'
import messagesFeed from './img/icons/messages-feed.png'
import bookmarkFeed from './img/icons/bookmark-feed.png'
import emojiFeed from './img/icons/emoji-feed.png'
import likeFeedActive from './img/icons/like2.png'


function FeedPosts({ post }) {
  const [likeCount, setLikeCount] = useState(0)
  const [likeSrc, setLikeSrc] = useState(likeFeed)
  const [showFullText, setShowFullText] = useState(false);
  const [commentCounter, setCommentCounter] = useState(0)
  const [enteredTexts, setEnteredTexts] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showAllComments, setShowAllComments] = useState(false);

  const handleShowAllComments = () => {
    setShowAllComments(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setEnteredTexts([...enteredTexts, inputText]);
      setInputText('');
      setCommentCounter(commentCounter + 1)
      console.log(enteredTexts)
    }
  };


  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const incrementLikeCount = () => {
    if(likeCount === 0){
      setLikeCount(likeCount + 1);
      setLikeSrc(likeFeedActive)
    }
      else {
        setLikeCount(likeCount - 1)
        setLikeSrc(likeFeed)
      }
  };

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

    return (
      <div className="main-feed">
        <div className="main-feed-user">
          <div className="feed-user-avatar">
            <img className="avatar" src={post.avatarSrc} alt={post.username}/>
          </div>
          <div className="feed-user">
            <div className="feed-user-name">
              <div className="feed-user-name-style">{post.username}</div>
              <div className="feed-user-name-time">&#183; 52min</div>
            </div>
            <div className="feed-user-post-info">Lokalizacja: Kolombiano</div>
          </div>
          <img className="feed-more" src={feedMore} alt="More" />
        </div>
        <div className="main-feed-pic">
          <img className="feed-pic" src={post.postImageSrc} alt="Post" />
        </div>
        <div className="main-feed-icons">
          <img className="like" src={likeSrc} alt="Like" onClick={incrementLikeCount}/>
          <img className="comment" src={addComment} alt="Comment" />
          <img className="messages" src={messagesFeed} alt="Messages" />
          <img className="bookmark" src={bookmarkFeed} alt="Bookmark" />
        </div>
        <div className="main-feed-likecounter">Liczba polubień: {likeCount}</div>
        <div className="main-feed-username">
          <div className="name">{post.username}</div>
          <div className="info">
          {showFullText ? post.postText : `${post.postText.slice(0, 60)}...`}
          {!showFullText && <span className="more" onClick={toggleText}>więcej</span>}
            </div>
          
        </div>
        <div className="main-feed-translation">Zobacz tłumaczenie</div>
        <div className="main-feed-comments">
          {commentCounter > 1 ? (
            <>
              {!showAllComments && (
                <span className='comment-show' onClick={handleShowAllComments}>Zobacz wszystkie komentarze: {commentCounter}</span>
              )}
              {!showAllComments && (
                <p key={enteredTexts.length - 1}>
                  <span className='comment-username'>don_harryds </span>
                  <span className='comment-text'>{enteredTexts[enteredTexts.length - 1]}</span>
                </p>
              )}
              {showAllComments &&
                enteredTexts.map((text, index) => (
                  <p key={index}>
                    <span className='comment-username'>don_harryds </span>
                    <span className='comment-text'>{text}</span>
                  </p>
                ))}
            </>
          ) : (
            enteredTexts.map((text, index) => (
              <p key={index}>
                <span className='comment-username'>don_harryds </span>
                <span className='comment-text'>{text}</span>
              </p>
            ))
          )}
        </div> 
        <div className="main-feed-usercomment">
          <div className="addcomment"><input 
          className="comment" 
          type="text" 
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Dodaj komentarz..." />

          </div>
          <div className="emoji">
            <img className="emoji" src={emojiFeed} alt="Emoji" />
          </div>
        </div>
        <div className="main-feed-post-border"></div>
      </div>
    );
  }

export default FeedPosts;

