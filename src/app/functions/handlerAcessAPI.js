'use server'

const url = "https://projetoptac-1rgp.vercel.app";

const getUserAuthenticated = (userAcess) => {
    let userAuth = {};

Users.map((user) => {
    if (user.email === userAcess.email & user.senha === userAcess.password){
        userAuth = user
    }
})
return userAuth;
}

const getUsers = () =>{
        return Users;
}
export { getUsers, getUserAuthenticated };