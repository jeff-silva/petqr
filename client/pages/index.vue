<template>
  <!-- <Tutorial/> -->
  <div class="container py-5">
    
    <div class="row">
      <div class="col-4">
        <ui-auth-login redirect="/admin"></ui-auth-login>
      </div>
      <div class="col-4">
        <ui-auth-register></ui-auth-register>
      </div>
      <div class="col-4">
        <ui-auth-password></ui-auth-password>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>
