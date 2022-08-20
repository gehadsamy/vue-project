<template>
<div class="p-1">

 <v-btn 
      class="mx-2 user_btn"
      fab
      small data-bs-toggle="modal" data-bs-target="#showUserdetails">
      <v-icon class="user_icon">
         mdi-account
      </v-icon>
    </v-btn>


<div class="modal fade" id="showUserdetails" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal_width">
    <div class="modal-content">
      <div class="modal-header w-100">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body w-100">
        <UserDetails/>
      </div>

    </div>
  </div>
</div>
</div>
</template>

<script>
import UserDetails from '../userDetails/userDetails.vue';
export default {

  components: {
  UserDetails
}
}
</script>