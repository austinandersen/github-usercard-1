import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
/*
  STEP 5: 
    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

//ok so I need a for each this and request data (axios.get)
//create new card (call gitCard) appended to DOM

// followersArray.forEach(userLogin => {
//  axios.get(`https://api.github.com/users/${userLogin}`)
//    .then(res => {
//       const newCard = gitCard(res.data)
//       cardClass.appendChild(newCard)
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("IT'S WORKING, IT'S WORKING!");
//   })
//  })
// })

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];


for (let i = 0; i < followersArray.length; i++) {
  friendCard(followersArray[i])
}

function friendCard(username) {
  axios.get(`https://api.github.com/users/${username}`)
  .then(res => {
    document.querySelector('.cards').appendChild(gitCard(res.data))
  }).catch(err => {
    console.error(err);
  })
}


function gitCard(gitInfo) {
  const hubCard = document.createElement("div")
  const img = document.createElement("img")
  const cardInfo = document.createElement("div")
  const userName = document.createElement("h3")
  const userLogin = document.createElement("p")
  const userLocation = document.createElement("p")
  const userProfile = document.createElement("p")
  const address = document.createElement("a")
  const userFollowers = document.createElement("p")
  const userFollowing = document.createElement("p")
  const userBio = document.createElement("p")

  img.src = gitInfo.avatar_url
  userName.textContent = gitInfo.name
  userLogin.textContent =  gitInfo.login
  userLocation.textContent =  gitInfo.location
  userProfile.textContent = "Profile:"
  address.textContent = "Link to profile"
  address.href = gitInfo.html_url
  userFollowers.textContent = `Followers: ${gitInfo.followers}`
  userFollowing.textContent = `Following: ${gitInfo.following}`
  userBio.textContent = `Bio: ${gitInfo.bio}`

  hubCard.classList.add("card")
  cardInfo.classList.add("card-info")
  userName.classList.add("name")
  userLogin.classList.add("username")
  

  hubCard.appendChild(img)
  hubCard.appendChild(cardInfo)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLogin)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  userProfile.appendChild(address)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)

  return hubCard;
}



