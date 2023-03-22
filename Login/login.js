async function login(e){
    try{
      e.preventDefault();
     
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
 
      let loginDetails={
         email,password
      }
      console.log(loginDetails);
      const response = await axios.post('http://localhost:4000/user/login',loginDetails)
      if(response.status===200){
         alert(response.data.message);
         window.location.href="../expenses/expense.html";
      }
      
 
    }
    catch(err){
         document.body.innerHTML+= `${err.message}`;
    }
 }