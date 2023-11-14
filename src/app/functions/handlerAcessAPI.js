'use server'

const url = "https://projetoptac-1rgp.vercel.app";


const getUserAuthenticated = async (user) => {
const responseOfApi = await fetch(url + "/user/authenticated",
 {
  method: "POST",
  cache: "no-cache",
  headers: {"Content-Type":"application/json"},
  body: JSON.stringify(user)
 }
  );
  const userAuth = await responseOfApi.json();
  return userAuth;
}


const getUsers = async () =>{
    const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
    const userAuth = await responseOfApi.json();
    return userAuth;
        
}
const postUser = async (user) => {
  try {
    const responseOfApi = await fetch (url + "/user", {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json'},
      body: JSON.stringify(user)
    });
    const userSave = await responseOfApi.json();
    return userSave;
  }catch {
    return null;
  }
}

export { getUsers, getUserAuthenticated, postUser };