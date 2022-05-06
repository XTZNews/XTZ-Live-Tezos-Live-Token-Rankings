<template>
  <section class="relative bg-blue-dark bg-center py-20 overflow-hidden">
    <div class="background absolute left-0 w-full h-full z-0">
      <img
        class="min-w-full min-h-full object-cover"
        src="~/assets/images/news-bg-tezos.jpg"
      />
    </div>

    <div
      class="
        container
        relative
        mx-auto
        max-w-screen-xl
        text-white text-center
        z-10
      "
    >
      <h2 class="text-6xl mb-8 bar">
        Subscribe for Daily Tezos Token Price Updates
      </h2>
      <h3 class="max-w-3xl m-auto font-bold">
        Receive Tezos Token Price Updates Direct To Your Inbox Every Day.
      </h3>

      <form
        id="revue-form"
        ref="newsletterForm"
        action="https://www.getrevue.co/profile/XTZLive/add_subscriber"
        method="post"
        name="revue-form"
        target="_blank"
        class="my-8 flex justify-center flex-wrap"
      >
        <input
          id="member_first_name"
          type="text"
          name="member[first_name]"
          placeholder="First name"
          aria-label="First name"
        />
        <input
          id="member_last_name"
          type="text"
          name="member[last_name]"
          placeholder="Last name"
          aria-label="Last name"
        />
        <input
          id="member_email"
          type="email"
          name="member[email]"
          placeholder="Email address"
          aria-label="Email Address"
        />
        <button
          id="member_submit"
          name="member[subscribe]"
          type="submit"
          class="
            bg-blue
            hover:bg-blue-dark
            text-white
            uppercase
            w-full
            mt-6
            lg:w-auto lg:mt-0
          "
          @click="clearForm"
        >
          <span>Subscribe</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M96 480c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L242.8 256 73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
            />
          </svg>
        </button>
      </form>
      <div class="conditions normal-case font-light">
        <small
          >By subscribing, you agree with Revue’s
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.getrevue.co/terms"
            class="text-blue-light hover:text-blue"
            >Terms of Service</a
          >
          and
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.getrevue.co/privacy"
            class="text-blue-light hover:text-blue"
            >Privacy Policy</a
          >.</small
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    clearForm() {
      this.$refs.newsletterForm.reset()
    },
  },
}
</script>

<style scoped>
section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(~/assets/images/blue-overlay.png);
  background-position: top center;
  background-size: cover;
  z-index: 2;
}
section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #191414;
  opacity: 0.6;
  z-index: 1;
}
.background {
  top: 50%;
  transform: translateY(-50%);
}
</style>

<style lang="scss">
form {
  input {
    background: transparent;
    border: 1px solid #f7f8f8;
    color: #fff;
    width: 100%;
    padding: 0.5rem 3rem;
    font-size: 1.6rem;
    transition: 0.3s all;
    text-align: center;

    &:not(:last-of-type) {
      border-bottom: none;
    }

    @screen md {
      flex: 1;
      max-width: 28rem;

      &:not(:last-of-type) {
        border-right: none;
        border-bottom: 1px solid #f7f8f8;
      }
    }

    @screen lg {
      text-align: left;
    }

    &:focus {
      outline: none;
      @apply border-blue-light;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 4rem;
    span {
      display: flex;
    }
    svg {
      height: 0.85em;
      fill: #fff;
      margin-top: -0.15em;
      margin-left: 0.5rem;
    }
  }
}
</style>
