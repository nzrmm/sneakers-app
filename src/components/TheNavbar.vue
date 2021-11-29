<template>
  <nav>
    <div class="container">
      <div class="flex items-center py-6 border-b border-grayish-light">
        <div class="w-2/12">
          <img src="../assets/logo.svg" alt="logo">
        </div>
        <div class="w-8/12">
          <ul class="flex space-x-8 text-grayish-blue-dark">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </ul>
        </div>
        <div class="w-2/12">
          <div class="flex items-center justify-end space-x-8">

            <!-- Cart Icon -->
            <img @click="cartDropdown = !cartDropdown" src="../assets/icon-cart.svg" class="relative cursor-pointer" alt="cart-icon">

            <!-- Cart Dropdown -->
            <div v-if="cartDropdown" class="w-80 absolute top-20 bg-white rounded-xl shadow-2xl">
              <div class="p-6 border-b border-grayish-light">
                <p class="font-bold">Cart</p>
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center">
                  <img src="../assets/image-product-1-thumbnail.jpg" class="mr-4 w-12 h-12 rounded-lg"
                    alt="cart-image-thumb">
                  <p class="mr-2 text-sm text-grayish-blue-dark">Fall Limited Edition Sneakers $125.00 x 3 <span
                      class="text-black font-bold">$375.00</span></p>
                  <button><img src="../assets/icon-delete.svg" class="w-5" alt="trash-icon"></button>
                </div>

                <button
                  class="mb-2 w-full py-3 font-bold bg-orange flex justify-center items-center rounded-xl text-white shadow-xl hover:shadow-2xl">
                  Checkout
                </button>
              </div>
            </div>
            <!-- End Cart Dropdown -->

            <img src="../assets/image-avatar.png" class="w-10 h-10 rounded-full" alt="avatar-image">
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name : 'TheNavbar',
    setup() {
      const cartDropdown = ref(false);

      return {
        cartDropdown
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>