let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


favFoods.onshow=function(){
  for(i = 0; i<goodFoods.length; i++){
  lsgFoods.addItem(goodFoods[i])
}
}


lsgFoods.onclick=function(choice){
  if(typeof(choice) == "object"){
    return
  } else {
    lblFoods.value = `You picked ${goodFoods[choice]} - that is a great choice`
  }       
}

btnNext1.onclick=function(){
  ChangeForm(dessertVoting)
}
