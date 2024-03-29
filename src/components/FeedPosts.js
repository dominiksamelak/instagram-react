// FeedStory.js
import React from 'react';
import './styles/feed-posts.css'
import feedMore from './img/icons/feed-more.png'
import likeFeed from './img/icons/like-feed.png'
import addComment from './img/icons/add-comment.png'
import messagesFeed from './img/icons/messages-feed.png'
import bookmarkFeed from './img/icons/bookmark-feed.png'
import emojiFeed from './img/icons/emoji-feed.png'

function FeedPosts({ post }) {
    return (
      <div className="main-feed">
        <div className="main-feed-user">
          <div className="feed-user-avatar">
            <img className="avatar" src={post.avatarSrc} alt={post.username} />
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
          <img className="like" src={likeFeed} alt="Like" />
          <img className="comment" src={addComment} alt="Comment" />
          <img className="messages" src={messagesFeed} alt="Messages" />
          <img className="bookmark" src={bookmarkFeed} alt="Bookmark" />
        </div>
        <div className="main-feed-likecounter">Liczba polubień: 69</div>
        <div className="main-feed-username">
          <div className="name">{post.username}</div>
          <div className="info">{post.postText}</div>
          <div className="more">więcej</div>
        </div>
        <div className="main-feed-translation">Zobacz tłumaczenie</div>
        <div className="main-feed-comments">Zobacz wszystkie komentarze: 20</div>
        <div className="main-feed-usercomment">
          <div className="addcomment"><input className="comment" type="text" placeholder="Dodaj komentarz..." /></div>
          <div className="emoji">
            <img className="emoji" src={emojiFeed} alt="Emoji" />
          </div>
        </div>
        <div className="main-feed-post-border"></div>
      </div>
    );
  }

export default FeedPosts;