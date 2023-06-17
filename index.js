// const user ={id:10,name:'Sifat',job:'developer'};
// // console.log(user);
// const stringified = JSON.stringify(user);
// // console.log(stringified);   //JSONS.stringify use kore total value string kore dei



// const company = {
//     name: 'Web Developer',
//     CEO: {
//         name:"Sifat",
//         id:1,

//     },
//     web:{
//         work:"website maker",
//         employe: 20,
//         framework: 'react js',
//         tech: {
//             first: 'html',
//             second: 'Css',
//             third: 'js',
//             Fourth: 'tailwind Css'
//         }
//     }
// }

// const largeObject = JSON.stringify(company);
// const convert = JSON.parse(largeObject);   // stringify korar por abar object e convert korte JSON.parse use hoi
// console.log(convert);  


function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')  //API link fetch kore conect korte hoi
    .then(response => response.json())   
    .then(json => console.log(json))
}

function loadUser(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => displayUser(data))
}

function displayUser(users){
    const ul = document.getElementById('user');  //ul id dhora 
    for(const user of users){
        const li = document.createElement('li'); //li create korte
        li.innerText =user.name;   //li e lekha add korte 
        ul.appendChild(li)    //li ta ul er vitore add korte

    }

}



// post.js

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())   //response er short res
    .then(data => displayPost(data))
}

function displayPost(data){
    const postBox =document.getElementById('post');
    for(const post of data){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `      
        <h2>id: ${post.id}</h2>
        <h3>Title: ${post.title}</h3>
        <p>Details: ${post.body}</p>
        `
        postBox.appendChild(div)
    }

}

loadPost()


// comments.js

function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
function displayComment(comments){
const CommentBox = document.getElementById('comment');
for(const comment of comments){
    const div = document.createElement('div');
    div.classList.add('comment')
    div.innerHTML = `
    <h2>Id:${comment.id}</h2>
    <h3>Mail: ${comment.email}</h3>
    <p> ${comment.body}</p>
    `
    CommentBox.appendChild(div)

}
}

loadComment()


// Albums.js


function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
function displayAlbums(albums){
const albumBox = document.getElementById('album');
for(const album of albums){
    const div = document.createElement('div');
    div.classList.add('album')
    div.innerHTML = `
    <h2>User Id:${album.userId}</h2>
    <h3>Id: ${album.id}</h3>
    <p>Title:${album.title}</p>
    `
    albumBox.appendChild(div)

}
}

loadAlbum()


// photos.js


function loadPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
function displayPhotos(photos){
const photoBox = document.getElementById('photo');
for(const photo of photos){
    const div = document.createElement('div');
    div.classList.add('photo')
    div.innerHTML = `
    <h2>Album Id:${photo.id}</h2>
    <h3>Title: ${photo.title}</h3>
    <p>Url:${photo.url}</p>
    `
    photoBox.appendChild(div)

}
}

loadPhoto()
