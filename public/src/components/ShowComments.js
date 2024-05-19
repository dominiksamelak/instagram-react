// import React, { useState } from 'react';

// function CommentShow({ enteredTexts, commentCounter }) {
//   const [showAllComments, setShowAllComments] = useState(false);

//   const handleShowAllComments = () => {
//     setShowAllComments(true);
//   };

//   return (
//     <div>
//       {commentCounter > 1 ? (
//         <>
//           <span className='comment-show' onClick={handleShowAllComments}>
//             Zobacz wszystkie komentarze: {commentCounter}
//           </span>
//           {showAllComments &&
//             enteredTexts.map((text, index) => (
//               <p key={index}>
//                 <span className='comment-username'>don_harryds </span>
//                 <span className='comment-text'>{text}</span>
//               </p>
//             ))}
//         </>
//       ) : (
//         enteredTexts.map((text, index) => (
//           <p key={index}>
//             <span className='comment-username'>don_harryds </span>
//             <span className='comment-text'>{text}</span>
//           </p>
//         ))
//       )}
//     </div>
//   );
// }

// export default CommentShow;
