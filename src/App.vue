<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app">
    <h1>{{title}}</h1>
    <input type="text" v-model="newItem" @keyup.enter="addItem">
    <ul>
      <li v-for="item in items" v-on:click="toggleFinish(item)" v-bind:class="{finished:item.isFinished}">
        {{item.label}}
      </li>
    </ul>
    <component-a msgfromfather="msg from father" v-on:msgfromchild="listenChild"></component-a>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/ComponentA.vue'
export default {
  data: function () {
    return {
      title: 'this is a to do list',
      items: Store.fetch(),
      newItem:''
    }
  },
  components:{ComponentA},
  methods: {
    toggleFinish:function (item) {
      item.isFinished = !item.isFinished;
    },
    addItem:function () {
      this.items.push({
        label:this.newItem,
        isFinished:false
      });
      this.newItem='';
      this.$broadcast('onAddNew',this.items);//广播事件
    },
    listenChild:function (msg) {
      alert(msg);
    }
  },
  events:{
    'msgfromchild':function (msg) {
      alert(msg);
    }
  },
  watch:{
    items: {
      handler:function (val, oldVal) {
        Store.save(val);
      },
      //深度观察，false只观察对象引用是否改变
      deep:true
    }
  }
}
</script>

<style>
.finished{
  text-decoration: underline;
}
html{
  height:100%;
}
body{
  display: flex;
  align-items:center;
  justify-content:center;
}
</style>
