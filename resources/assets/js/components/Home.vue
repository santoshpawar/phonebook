<template>
  <nav class="panel column is-offset-2 is-8">
    <p class="panel-heading">
      Vue js Smeniwas
      <button class="button is-primary is-outlined ">
        Add New
      </button>
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="search">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>
    <a class="panel-block">
      <span class="is-9 column">
        Markesheet
      </span>
      <span class="panel-icon is-1 column">
       <i class="fa fa-trash has-text-danger" aria-hidden="true"></i>
     </span>
     <span class="panel-icon is-1 column">
       <i class="fa fa-edit has-text-info" aria-hidden="true"></i>
     </span>
     <span class="panel-icon is-1 column">
       <i class="fa fa-eye has-text-primary" aria-hidden="true"></i>
     </span>
   </a>
 </nav>
</template>