var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
selExercises.clear() 
    for(i=0;i<exercises.length; i++){
    selExercises.addItem(exercises[i])
    }
    for(i=0;i<coreExercises.length; i++){
    selExercises.addItem(coreExercises[i])
    }
}

selExercises.onfocusout=function(){

}



btnExcercises1.onclick=function(){
  NSB.MsgBox(`You chose ${selExercises.text[0]} and ${selExercises.text[1]}.` )
}

btnExercises.onclick=function(){
  ChangeForm(mobileNav)
}
