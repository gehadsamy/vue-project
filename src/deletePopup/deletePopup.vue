<template>
<div class="p-1">


 <v-btn
      class="mx-2 delete_btn"
      fab
      small data-bs-toggle="modal" data-bs-target="#deleteUserdetails">
      <v-icon class="delete_icon">
        mdi-minus
      </v-icon>
    </v-btn>

<div class="modal fade" id="deleteUserdetails" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         are you sure?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn all_buttons" data-bs-dismiss="modal">yes</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>