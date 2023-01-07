import Cookie from "js-cookie";

export default {

  nuxtServerInit(vuexContex,contex){
    console.log('calışt',)

  },
  authkey(vuexContex,req){
    let cookie;
    if(req){
      if(!req.headers.cookie){
         return
      }

      cookie= req.headers.cookie
      if(cookie){
        cookie.split(";").find(cookie=>cookie.trim().startsWith("key="))
        cookie=cookie.split("=")[1]
        console.log(cookie)
      }


    }else{
      cookie=localStorage.getItem("key")
      if (!cookie){
        return;
      }

    }

    vuexContex.commit('authkey',cookie)
  },

  login(vuexContex,key){
    Cookie.set('key',key)
    localStorage.setItem('key',key)
    vuexContex.commit('authkey',key)
  },

  logout(vuexContex){
     vuexContex.commit("clearAuthkey")
  }

}
