<template>
  <div class="class-help">
    <h1>{{pagename}}</h1>
    <p>{{pagedescription}}</p>
  </div>
</template>

<script>

export default {
  data: function()
 { 
  return {
    pagename:"Help",
    pagedescription:"This is an help page"
  } ;
},
name:"help"
    
  }


</script>
  <style>
  @media (min-width: 1024px) {
    .help {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .class-help{
      text-align: center;
    }
  }
  </style>
  