<template>
<div class="row">
  <div class="col-6">
       <FormulateForm v-model="formValues" @submit="handleSubmit">
    <FormulateInput name="name" label="Name" validation="required" />
    <FormulateInput name="email" type="email" label="email" validation="required|email" />
 <FormulateInput
      label="New password"
      type="password"
      name="password"
      validation="required"
    />
    <FormulateInput
  type="date" name="date" label="Enter your birthday" />

  <FormulateInput
  type="file"
  name="image"
  label="Please select an image"
  validation="mime:image/jpeg,image/png"
/>
     <FormulateInput type="submit" label="Sign Up" />
    </FormulateForm>
  </div>

  <div class="col-6"></div>
</div>

</template>

<script>
export default {
  data: () => ({
    formValues: {}
  }),
  methods: {
    handleSubmit() {
        console.log(this.formValues)
    }
  }
};
</script>

<style>

</style>

