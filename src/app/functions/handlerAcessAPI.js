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
  try{
    const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
    const users = await responseOfApi.json();
     console.log(users)
    return users;
  
  } catch{
    return null;
  }
        
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

const updateUser = async (user, id) => {
  try {
    const responseOfApi = await fetch (url + "/user" + id, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(user)
    });
    const userUpdate = await responseOfApi.json();
    return userUpdate;
  }catch {
    return null;
  }
}

const getUser = async (id) => {
  try{
    const responseOfApi = await fetch(`${url}/user/${id}`, {
      method: 'GET',
      headers: {'Content-type': 'Application/json'},
      
    })
    const user = await responseOfApi.json();
    return user;
  } catch{
    return null;
  }
}

export { getUsers, getUserAuthenticated, postUser, updateUser, getUser};