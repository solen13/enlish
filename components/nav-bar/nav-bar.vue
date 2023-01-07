<template>
<div>
  <div @click="zipla" id="oyun">
    <div id="trex">Hanife</div>
    <div id="kaktus"></div>
  </div>
</div>

</template>

<script>


export default {
  name: "nav-bar",
  methods:{

    zipla(){
      const trex=document.querySelector("#trex");
      const kaktus=document.querySelector("#kaktus");
      if(kaktus.classList!="kaktus-animate")
      {
        kaktus.classList.add("kaktus-animate");
      }

      if(trex.classList!="trex-animate")
      {
        trex.classList.add("trex-animate");
        setTimeout(function(){
          trex.classList.remove("trex-animate");
        },500);
      }
    }
  },

  mounted() {
    const trex=document.querySelector("#trex");
    const kaktus=document.querySelector("#kaktus");
    setInterval(function(){

      var trexBottom =parseInt(window
        .getComputedStyle(trex)
        .getPropertyValue("bottom"));

      var kaktusLeft =parseInt(window
        .getComputedStyle(kaktus)
        .getPropertyValue("left"));

      if(kaktusLeft > 0 && kaktusLeft < 40 && trexBottom < 40){

        kaktus.classList.remove("kaktus-animate");
        kaktus.style.display="none";
        alert("oyun bitti");
      }
    },500);
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
}
body{
  background: #000;
}

#oyun{
  width: 800px;
  height: 200px;
  border:1px solid #000;
  background: #fff;
  margin:100px auto;
  position: relative;
  overflow:hidden;
}

#trex{
  position: absolute;
  width: 39px;
  height: 42px;
   background-color: blue;
  bottom:0;

}
.trex-animate{
  animation: trex .5s linear;
}

#kaktus{
  position: absolute;
  width: 23px;
  height: 46px;
  background: url("/kaktus.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  bottom: 0;
  left:775px;
}
.kaktus-animate{
  animation:kaktus 2s linear infinite;
}

@keyframes kaktus{
  0%{left:775px;}
  100%{left:-40px}
}
@keyframes trex{
  0%{bottom:0px;}
  25%{bottom:70px;}
  75%{bottom:70px;}
  100%{bottom:0px;}

}

</style>
