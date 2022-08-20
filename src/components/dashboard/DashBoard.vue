<template>
<div>
    <NavBar/>
  <div class="h-100 d-flex justify-content-center">


  <v-card >
    <div class="container">
  <v-simple-table>
    <template v-slot:default>
   <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Mark@gmail.com</td>
      <td class="btn_row">
        <div class="d-flex">
  <DeletePopup/>
        <ShowPopup/>
         <EditPopup/>
        </div>

      </td>
    </tr>

  </tbody>
  </template>
  </v-simple-table>
</div>
  </v-card>


</div>
</div>


</template>

<script>
import ShowPopup from '../ShowPopup/ShowPopup.vue';
import EditPopup from '../EditPopup/EditPopup.vue'

import NavBar from '../NavBar/NavBar.vue';
import DeletePopup from '../../deletePopup/deletePopup.vue';
export default {

  components: {
    EditPopup,
    ShowPopup,
    NavBar,
    DeletePopup
}
}

</script>
<style>
.delete_btn{
    background-color: red !important;
}
.delete_icon{
    color: white !important;
}
</style>