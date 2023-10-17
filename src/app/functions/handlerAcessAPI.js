'use server'

const url = "https://projetoptac-1rgp.vercel.app";


const getUserAuthenticated = async (user) => {
const responseOfApi = await fetch(url + "/user/authenticate",
    {
        method: "POST",
        head: { "content-type": "application/json"},
        body: JSON.stringify(user)
    }
  );
  const userAuth = await responseOfApi.json();
  return userAuth;
}
Users.map((user) => {
    if (user.email === userAcess.email & user.senha === userAcess.password){
        userAuth = user
    }
})



const getUsers = () =>{
        return Users;
}
export { getUsers, getUserAuthenticated };