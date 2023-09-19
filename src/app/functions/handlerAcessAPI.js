'use server'

const Users = [{
    nome: 'Beatriz',
    email:'Beatriz12@gmail.com',
    senha:'Biatryz127',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJlYXRyaXoiLCJpYXQiOjE1MTYyMzkwMjJ9.xfgvy99pbNG-N9ibmuGJDYWLyC8yWtS-dZBSi2KL-Og'
},{
    nome: 'Igor',
    email:'igorvinicius@gmail.com',
    senha:'IguinhoSS',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Imlnb3IiLCJpYXQiOjE1MTYyMzkwMjJ9.cJMmOqjLrOXlqGlnjP25lok38igQ4qbLXPZrpKHvE54'
},{
    nome: 'Renato',
    email:'renatofechamento@gmail.com',
    senha:'renato9009',
    token:'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InJlbmF0byIsImlhdCI6MTUxNjIzOTAyMn0.eawLBasyQ6iqxtdVxZLgPe3IyptfG0TFDY_uMPdAy5s'
},{
    nome: 'Beth',
    email:'bethzinha@gmail.com',
    senha:'felicidade123',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImJldGgiLCJpYXQiOjE1MTYyMzkwMjJ9.k2RnTEzJraufUWh8h9tT8LSnHbnBOnkjbH8gI-VxVWE'
}
];
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