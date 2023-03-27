<template>
  <div class="class-home">
    <h1>{{pagename}}</h1>
    <p>{{pagedescription}}</p>
    
  </div>
</template>

<script>

export default {
  data: function()
 { 
  return {
    pagename:"home",
    pagedescription:"This is an home page"
  } ;
},
name:"home"
    
  }


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

 
  .class-home{
    text-align: center;
  }
}
</style>