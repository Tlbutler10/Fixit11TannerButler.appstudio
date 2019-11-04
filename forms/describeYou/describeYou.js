rdoPersonType.onchange=function(){
  switch (rdoPersonType.value){
  case 0:
    lblDescribe.value = `I would agree that you are a Optimistic person too!`;
   break;     
   case 1:
    lblDescribe.value = `I would agree that you are a Pessimistic person too!`;
   break;        
  case 2:
    lblDescribe.value = `I would agree that you are a Trusitng person too!`;
   break;   
   case 3:
    lblDescribe.value = `I would agree that you are a Envious person too!`;
   break;     
      /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
    }

}
btnDescribe.onclick=function(){
  ChangeForm(favExercises)
}
