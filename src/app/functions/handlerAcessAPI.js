'use server'

const url = "https://projetoptac-1rgp.vercel.app";


const getUserAuthenticated = async (user) => {
const responseOfApi = await fetch(url + "/user/authenticated",
  );
  const userAuth = await responseOfApi.json();
  return userAuth;
}


const getUsers = () =>{
        return Users;
        
}
export { getUsers, getUserAuthenticated };