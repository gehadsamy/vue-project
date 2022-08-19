<template>
<div>
    <div class="container">
   <table class="table table-dark">
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
      <td>

        <ShowPopup/>
         <EditPopup/>
      </td>
    </tr>

  </tbody>
</table>
</div>

</div>

</template>

<script>
import ShowPopup from '../ShowPopup/ShowPopup.vue';
import EditPopup from '../EditPopup/EditPopup.vue'

export default {

  components: {
   EditPopup,
      ShowPopup,
}
}
</script>