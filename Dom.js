let Posts=[{
    "id":1,
    "author":"Muskan Omer",
    "content":"My First Posts !",
    "likes":11,
    "Comments":['Nice Photo','GreatPhoto'],
    "image":"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
},
{
    "id":2,
    "author":"Muskan Omer",
    "content":"Feeling Nice",
    "likes":10,
    "Comments":['Nice Photo','GreatPhoto'],
    "image":"https://t4.ftcdn.net/jpg/05/01/99/53/360_F_501995392_MJ5iD55aRT6XZ734L32q34n1oYzwerPB.jpg"
},
{
    "id":3,
    "author":"Muskan Omer",
    "content":"Feeling Low",
    "likes":9,
    "Comments":['Nice Photo','GreatPhoto'],
    "image":"https://images.squarespace-cdn.com/content/v1/5983971ddb29d66f893f5d38/1526722452727-3BYO3E56XHPRL4RGBI8X/pexels-photo-670720.jpeg?format=1500w"
},
{
    "id":4,
    "author":"Muskan Omer",
    "content":"Stress",
    "likes":7,
    "Comments":['Nice Photo','GreatPhoto'],
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiP4KaxeqX4lzwSdNTY_CVslvEk4jBuSR4fpftg27Euw&s=10"
},
{
    "id":5,
    "author":"Muskan Omer",
    "content":"This is our Right",
    "likes":10,
    "Comments":['Nice Photo','GreatPhoto'],
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJXFIIO5rvqA8t_3WiyHDRKiXNPEqU_74uknZcwYeUMQ&s=10"
},
]
Posts.forEach((post)=>
{
    renderPosts(post);
})

function renderPosts(posts)
{
  let divpostEl=document.createElement("div");
  divpostEl.className="post";

  let headingEl=document.createElement("h3");
  headingEl.textContent=posts.author;

  let imgEl=document.createElement("img");
  imgEl.setAttribute("alt","Post Image");
  imgEl.src=posts.image;

  let paraEl=document.createElement("p");
  paraEl.textContent=posts.content;

  let buttonLikeEl=document.createElement("button");
  buttonLikeEl.textContent="Like";
  buttonLikeEl.classname="like-Button";

  let inputEl=document.createElement("input");
  inputEl.setAttribute("placeHolder","Write a Comment...");
  
  let commentEl=document.createElement("button");
  commentEl.textContent="Comment";

  let divFooterEl=document.createElement("div");
  divFooterEl.className="post-footer";
  divFooterEl.textContent=`Likes:${posts.likes}  Comments:${posts.Comments.length}`

  let divCommentEl=document.createElement("div");
  divCommentEl.className="comments-container";
  divCommentEl.style.display="none";

  posts.Comments.forEach((comment)=>
  {
    let paraCommentEl=document.createElement("p");
    paraCommentEl.textContent=comment;

    divCommentEl.appendChild(paraCommentEl);
  })

  
 divFooterEl.addEventListener('click', () => {
    if (divCommentEl.style.display === 'none') {
        divCommentEl.style.display = 'block';
    } else {
        divCommentEl.style.display = 'none';
    }
});
buttonLikeEl.addEventListener("click", () => {

    if (buttonLikeEl.style.backgroundColor === "red") {
        buttonLikeEl.style.backgroundColor = "white";
        posts.likes--;
    } 
    else {
        buttonLikeEl.style.backgroundColor = "red";
        posts.likes++;
    }

    divFooterEl.textContent =
        `Likes: ${posts.likes} Comments: ${posts.Comments.length}`;
});

 commentEl.addEventListener('click',()=>
{
  const commentInfo=inputEl.value.trim();
  if(commentInfo){
  posts.Comments.push(commentInfo);
  }

  const commentpara=document.createElement("p");
  commentpara.textContent=commentInfo;
  divCommentEl.appendChild(commentpara);
  inputEl.value="";
  divFooterEl.textContent =
        `Likes: ${posts.likes} Comments: ${posts.Comments.length}`;

})


   divpostEl.appendChild(headingEl);
   divpostEl.appendChild(imgEl);
   divpostEl.appendChild(paraEl);
   divpostEl.appendChild(buttonLikeEl);
   divpostEl.appendChild(inputEl);
   divpostEl.appendChild(commentEl);
   divpostEl.appendChild(divFooterEl);
   divpostEl.appendChild(divCommentEl);

  let divPostsEl=document.querySelector(".posts");
  divPostsEl.appendChild(divpostEl);

}