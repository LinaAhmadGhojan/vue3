<template>
  <div class="class-about">
    <h1>{{pagename}}</h1>
    <p>{{pagedescription}}</p>
  </div>
</template>

<script>

export default {
  data: function()
 { 
  return {
    pagename:"about",
    pagedescription:"This is an about page"
  } ;
},
name:"about"
    
  }


</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .class-about{
    text-align: center;
  }
}
</style>
