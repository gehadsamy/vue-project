<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";

// const VueFormulate = require('@braid/vue-formulate')
// Vue.use(VueFormulate.default);
</script>

<template>
  <div>
    <WelcomeItem>
      <template ou did it>
        <DocumentationIcon />
      </template>
    </WelcomeItem>
    <!-- <template>
      <FormulateInput
        type="email"
        label="What is your school email address?"
        validation="bail|required|email|ends_with:.edu"
        validation-name="School email"
        placeholder="user@university.edu"
      />+
    </template> -->

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
    </WelcomeItem>
  </div>
</template>
