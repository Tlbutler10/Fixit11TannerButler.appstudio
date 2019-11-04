
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
  else{
     switch (s){
  case 'Login':
    ChangeForm(loginCU);
   break;     
  case 'Favorite Foods':
    ChangeForm(favFoods)
   break;        
  case 'Dessert Voting':
    ChangeForm(dessertVoting)
   break;  
  case 'Describing Me':
    ChangeForm(describeYou)
   break;  
  case 'Exercise Knowledge':
    ChangeForm(favExercises)
   break;  
      /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
    }
    }
  /* add a switch here to take the user to the form
     they chose. 
  */
}
