export default function(contex){
  if(process.client){
   contex.store.dispatch("authkey")
  }
  else{
    contex.store.dispatch('authkey',contex.req)
  }


}
