<template>
  <nav data-aos="fade-down" data-aos-duration="1500">
    <div class="container">
      <div class="py-4 lg:py-0 flex items-center border-b border-grayish-light">

        <!-- Hamburger Menu -->
        <div class="w-2/12 lg:hidden">
          <img @click="showSidebar" src="../assets/icon-menu.svg" alt="menu-icon">
        </div>
        <!-- End Hamburger Menu -->

        <div class="w-8/12 lg:w-2/12">
          <img src="../assets/logo.svg" alt="logo">
        </div>

        <!-- Large Device -->
        <div class="sidebar p-8 lg:p-0 w-8/12 lg:block lg:static fixed -left-full top-0 bottom-0 bg-white drop-shadow-2xl lg:drop-shadow-none transition-all duration-500">

          <!-- Close Button -->
          <img @click="hideSidebar" src="../assets/icon-close.svg" class="mb-14 lg:hidden" alt="close-icon">
          <!-- End Close Button -->

          <ul class="flex flex-col lg:flex-row lg:space-x-8 text-black lg:text-grayish-blue-dark">
            <a href="#" class="py-2 lg:py-8 font-bold lg:font-normal hover:text-black border-b-4 border-opacity-0 hover:border-orange">Collections</a>
            <a href="#" class="py-2 lg:py-8 font-bold lg:font-normal hover:text-black border-b-4 border-opacity-0 hover:border-orange">Men</a>
            <a href="#" class="py-2 lg:py-8 font-bold lg:font-normal hover:text-black border-b-4 border-opacity-0 hover:border-orange">Women</a>
            <a href="#" class="py-2 lg:py-8 font-bold lg:font-normal hover:text-black border-b-4 border-opacity-0 hover:border-orange">About</a>
            <a href="#" class="py-2 lg:py-8 font-bold lg:font-normal hover:text-black border-b-4 border-opacity-0 hover:border-orange">Contact</a>
          </ul>
        </div>
        <!-- End Large Device -->

        <div class="w-2/12">
          <div class="flex items-center justify-end space-x-8">

            <!-- Cart Icon -->
            <img @click="cartDropdown = !cartDropdown" src="../assets/icon-cart.svg" class="relative cursor-pointer" alt="cart-icon">

            <!-- Cart Dropdown -->
            <div v-if="cartDropdown" class="w-full sm:w-80 right-0 sm:right-auto absolute top-20 bg-white rounded-xl shadow-2xl">
              <div class="p-6 border-b border-grayish-light">
                <p class="font-bold">Cart</p>
              </div>
              <div class="p-6">
                <div class="mb-6 flex items-center">
                  <img src="../assets/image-product-1-thumbnail.jpg" class="mr-4 w-12 h-12 rounded-lg"
                    alt="cart-image-thumb">
                  <p class="mr-2 text-sm text-grayish-blue-dark">{{ name }} ${{ price }}.00 x {{ orderAmount }} <span
                      class="text-black font-bold">${{ priceTotal }}.00</span></p>
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
  import { ref, reactive, toRefs, computed, onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  export default {
    name : 'TheNavbar',
    setup() {
      const cartDropdown = ref(false);
      const product = reactive({
        name : 'Fall Limited Edition Sneakers',
        price : 125,
        orderAmount : 3
      })

      const priceTotal = computed(function() {
        return product.price * product.orderAmount;
      })

      function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.replace('-left-full', 'left-0');
      }

      function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.replace('left-0', '-left-full');
      }

      // Animations
      onMounted(() => {
        AOS.init({
          delay : 1000
        })
      })
      
      return {
        cartDropdown, ...toRefs(product), priceTotal, showSidebar, hideSidebar
      }
    }
  }
</script>