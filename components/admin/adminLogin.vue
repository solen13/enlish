<template>
 <div>
   <v-card >
     <input class="input" type="email" placeholder="Email addres" v-model="email" >
     <input class="input" type="password" placeholder="Password" v-model="password" >
     <v-btn @click="sing">Giriş</v-btn>
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

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user.uid)

         this.$router.push('/admin/adminPanel')
          this.$store.dispatch('login',user.accessToken)
          this.$store.commit('uid',user.uid)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;


        });
    }
  }
}
</script>

<style scoped>
.input{
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;

}
</style>
