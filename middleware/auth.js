export default function(contex){
  console.log('middleware - auth')
  if(!contex.store.getters.isAuthencatied)
  {
    contex.redirect("/admin")
  }
}
