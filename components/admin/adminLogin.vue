<template>
 <div>
   <v-card width="100%" height="400" class="card-content">
     <p>Admin Giriş Ekranı</p>
     <input class="input" type="email" placeholder="Email addres" v-model="email" >
     <input class="input" type="password" placeholder="Password" v-model="password" >
     <v-btn class="mt-2" @click="sing">Giriş</v-btn>
     <p class="red white--text pa-2 rounded-xl mt-4">Siber Saldırı durumunda Yasal Süreç Başlatılacaktır !</p>
   </v-card>
 </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "adminLogin",
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    sing() {
      let email=this.email
     let  password=this.password
      if(password !=null && password !=null){

        const firebaseConfig = {
          apiKey: "AIzaSyCeEoWERmpw6V3xDXbd_HjxT9rLAt0TVG8",
          authDomain: "englishworld-db088.firebaseapp.com",
          databaseURL: "https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "englishworld-db088",
          storageBucket: "englishworld-db088.appspot.com",
          messagingSenderId: "392147866266",
          appId: "1:392147866266:web:644be3d859d7fd6aa44523",
          measurementId: "G-L73D1NBXB2"
        };
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        email.trim()
        password.trim()
        signInWithEmailAndPassword(auth,email,password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            this.$router.push('/admin/adminPanel')
            this.$store.dispatch('login',user.accessToken)
            this.$store.commit('uid',user.uid)

          })
          .catch((error) => {
          alert('kullanıcı kaıtlı değil')
         });

      }
    }
  }
}
</script>

<style scoped>
.input{
  padding: 5px 10px;
  border: 2px solid #777777;
  border-radius: 5px;
  margin-top: 10px;
  outline: none;

}
.input:focus{
  border: 2px solid #f37979;
}
.card-content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
