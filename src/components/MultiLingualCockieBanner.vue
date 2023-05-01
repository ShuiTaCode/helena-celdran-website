<template>
  <Sidebar
    :modal="false"
      :dismissable="false"
      block-scroll
    v-model:visible="isCookieDialogVisible"
    position="bottom"
    :show-close-icon="false"

  >
    <VueCookieAcceptDecline
      :position="position"
      :messageStyles="messageStyles"
      @status="handleStatusChange"
      @clicked-accept="onCookieAccepted"
      @clicked-decline="onCookieDeclined"
     element-id="test">
      {{ message }}
    </VueCookieAcceptDecline>
  </Sidebar>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
const isCookieDialogVisible = ref(false);
const position = "bottom";

const messages = {
  en: "We use cookies to ensure you get the best experience on our website. By using our website, you agree to the use of cookies as described in our Cookie Policy.",
  de: "Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer Cookie-Richtlinie zu.",
  es: "Utilizamos cookies para asegurarnos de que tenga la mejor experiencia en nuestro sitio web. Al utilizar nuestro sitio web, acepta el uso de cookies según nuestra Política de cookies.",
};

const buttonStyles = {
  background: "#007BFF",
  color: "#FFF",
  borderRadius: "4px",
  padding: "10px 20px",
  fontSize: "14px",
  margin: "10px",
};

const messageStyles = {
  fontSize: "16px",
  padding: "10px 20px",
};

const acceptButtonClass = "p-button p-component p-button-success margin-right";
const declineButtonClass = "p-button p-component p-button-help margin-right";
let isAlreadyRead = false;
const onCookieAccepted = () => {
  console.log("onCookieAccepted")
  isCookieDialogVisible.value=false
};

const onCookieDeclined = () => {
  isCookieDialogVisible.value=false
};

const handleStatusChange = (event) => {
  console.log("handleStatusChange",event)

    isCookieDialogVisible.value=!event

}

const userLanguage = ref(window.navigator.language.slice(0, 2));

const message = computed(() => {
  return messages[userLanguage.value] || messages["en"];
});

onMounted(() => {

  isCookieDialogVisible.value = true;
  setTimeout(() => {
        changeCookieButtonClassName();
    }, 2);

});

function changeCookieButtonClassName() {
  const declineButtonElement = document.getElementsByClassName(
    "cookie__floating__buttons__button--decline"
  )[0];
  if (declineButtonElement) {
    declineButtonElement.className = declineButtonClass;
  }
  const acceptButtonElement = document.getElementsByClassName(
    "cookie__floating__buttons__button--accept"
  )[0];
  if (acceptButtonElement) {
    acceptButtonElement.className = acceptButtonClass;
  }
  console.log("changeCookieButtonClassName", {
    declineButtonElement,
    acceptButtonElement,
  });
}
</script>

<style scoped>
/*cookie__floating__buttons__button cookie__floating__buttons__button--decline*/
::v-deep(.margin-right){
  margin-right:0.5rem;
  margin-top:0.5rem;
}
</style>
