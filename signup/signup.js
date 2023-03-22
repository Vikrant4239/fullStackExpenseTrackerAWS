async function signup(e){
   try{
     e.preventDefault();
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     console.log(`${name}`);

     let signupDetails={
        name,email,password
     }
     console.log('hii',signupDetails);
     const response = await axios.post('http://localhost:4000/user/signup',signupDetails)
     if(response.status===201){
      alert('sign up successfully')
        window.location.href="../Login/login.html"
     }
     else{
        throw new error('Failed to login');
     }

   }
   catch(err){
        document.body.innerHTML+= `${err}`;
   }
}