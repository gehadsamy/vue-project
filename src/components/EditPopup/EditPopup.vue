<template>
<div class="p-1">

 <v-btn
      class="mx-2 edit_btn" type="button" data-bs-toggle="modal" data-bs-target="#editUserdetails"
      fab
      small
  
    >
      <v-icon class="edit_icon">
        mdi-pencil
      </v-icon>
    </v-btn>

<div class="modal fade" id="editUserdetails" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  edit details      </div>
      <div class="modal-footer">
        <button type="button" class="btn all_buttons" data-bs-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import Vue from 'vue';
import vuetify , {VIcon, VBtn} from 'vuetify/lib';

Vue.use(vuetify, {
  components: {
    VIcon,
  VBtn,
  },


  
})
</script>