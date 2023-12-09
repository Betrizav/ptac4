'use server'

const url = "https://projetoptac.vercel.app";


const getUserAuthenticated = async (user) => { 
   
  const responseOfApi = await fetch(url + "/user/authenticated",
   
  {
     method:'POST',
     headers:{"content-type": "Application/json"},
     body: JSON.stringify(user)
   }

  );

  const userAuth = await responseOfApi.json();
  console.log(userAuth)
  return userAuth;
   
}

const getUsers = async() =>{
   const responseOfApi = await fetch(url + '/users', {
       method: "GET",
       next: {revalidate: 1},
       headers: {"Content-Type": "application/json"}
   })
   const users = await responseOfApi.json();
   return users;
}

const postUser = async (user) => {
  try {
      console.log("Sending user data:", user);

      const responseOfApi = await fetch(url + "/user", {
          method: "POST",
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify(user)
      });

      const userSave = await responseOfApi.json();
      console.log("Response from server:", userSave);

      return userSave;
  } catch (error) {
      console.error("Error during user registration:", error);
      return null;
  }
};

const UpdateUser = async(user, id)=>{
  try{
     const responseOfApi = await fetch(url + "/user/" + id, {
        method: "PUT",
        headers: {'Content-Type': 'Application/json'},
        body: JSON.stringify(user)
     });
     const userUpdate = await responseOfApi.json();
     return userUpdate
  }
  catch{
     return null
  }
}

export {getUsers, postUser, getUserAuthenticated, UpdateUser}
