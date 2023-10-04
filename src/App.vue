<script>

//import { useStore } from 'vuex'

export default{
  data(){
    return{
      number: 0
    }
  }, 

  methods:{
    increment(){
      //const store = useStore()
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      this.number =this.$store.state.count
    },
    double(){
      this.$store.commit('double')
      console.log(this.$store.state.count)
      this.number =this.$store.state.count
    },
    decrement(){
      this.$store.commit('decrement')
      console.log(this.$store.state.count)
      this.number =this.$store.state.count
    }
  }
  
}

</script>

<template>

  <div class="container">
    
    <div>
      <h1> count: {{ number }}</h1>
    </div>
  
    <div class="buttons">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="double">double</button>
  
    </div>
  </div>

</template>

<style>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.buttons button{
  margin-right: 15px;
}

</style>
