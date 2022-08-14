const checkName =(request, response, next) =>{
  console.log('name is being checked')
  if(request.body.name){
    console.log(`we've got a name here!`)
    next()
  }else{
    response.status(400).json({error: 'We need a name...'})
  }
}

const checkBoolean = (request, response, next)=>{
  const {is_favorite}= request.body

  if(is_favorite ===  true || is_favorite === false || is_favorite === undefined){
    console.log(is_favorite)
    next()
  }else{
    console.log(`booleen value not passed. Got ${request.body.is_favorite}`)
    response.status(400).json({error: 'is_favorite should be a booleen'})
  }
}

const validateUrl = (request, response, next)=>{
  if(request.body.url.substring(0,7)==='http://'|| request.body.url.substring(0,8)==='https://'){
    console.log('Url checks out! (Line25)')
    next()
  }else{
    response.status(400).json({error: "URL doesnt match http:// or https:// "})
  }
}
module.exports ={ checkName, checkBoolean, validateUrl};