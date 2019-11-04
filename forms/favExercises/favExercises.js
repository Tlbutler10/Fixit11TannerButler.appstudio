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


