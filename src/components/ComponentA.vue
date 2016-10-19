<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{msgfromfather}}</p>
    <button @click="fatherMsg">father msg</button>
    <button @click="tellFather">tell father</button>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props:['msgfromfather'],
    methods:{
      fatherMsg:function () {
        alert(this.msgfromfather);
      },
      tellFather:function () {
        this.$emit('msgfromchild','msg from child');//手动触发事件
      }
    },
    events:{
      onAddNew:function (items) {
        console.log(items);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
