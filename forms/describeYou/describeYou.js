





rdoPersonType.onchange=function(){

    lblDescribe.value = `I would agree that you are a ${rdoPersonType.value} person too!`
        /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
    }


btnDescribe.onclick=function(){
  ChangeForm(favExercises)
}
