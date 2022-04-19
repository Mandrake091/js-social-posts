const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

const container = document.getElementById("container");

function printAllPost() {
  posts.forEach((singlePost) => {
    const post = document.createElement("div");
    post.setAttribute("class", "post");
    post.setAttribute("id", `${singlePost.id}`);
    post.innerHTML = `
        <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${
                  singlePost.author.image
                }" alt="${singlePost.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${singlePost.author.name}</div>
                <div class="post-meta__time">${new Date(
                  singlePost.created
                ).toLocaleDateString()}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src="${singlePost.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#" data-postid="${
                  singlePost.id
                }">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${
                  singlePost.id
                }" class="js-likes-counter">${singlePost.likes}</b> persone
            </div>
        </div> 
    </div> 
        `;
    container.append(post);
  });
}
printAllPost();

let likedPost = [];
const likeButtons = document.querySelectorAll("[data-postid]");

likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.add("like-button--liked");
    let postId = button.getAttribute("data-postid");
    const idCounter = document.getElementById(`like-counter-${postId}`);
    likedPost.push(postId);
    idCounter.innerHTML = `${posts[postId - 1].likes + 1}`;
    console.log(likedPost);
  });
});

function press() {
  let counter = document.getElementById("like-counter");
  counter.innerHTML = `${posts[0].likes++}`;
}

counter = document.getElementById("like-counter-1");

//funcion profileImage

posts.forEach((postNoIMage) => {
  if (postNoIMage.author.image === null) {
    let replaceImage = document.getElementsByClassName("post-meta__icon");
    const fullName = postNoIMage.author.name.split(" ");
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    replaceImage[postNoIMage.id - 1].innerText = `${initials}`;
    return initials.toUpperCase();
  }
});
