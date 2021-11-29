<template>
    <main class="pt-6 pb-20 lg:py-20">
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center lg:px-10">

                <div class="w-full lg:w-6/12 p-0 lg:pr-20" data-aos="fade-down-right" data-aos-duration="3000">
                    <img :src="activeImage" class="w-full rounded-2xl mb-8" alt="product-image">
                    <div class="hidden lg:flex justify-between w-full">
                        <template v-for="(thumbImage, index ) in thumbImages" :key="index">
                            <img :src="thumbImage" class="image-thumbnail" alt="image-thumbnail"
                                @click="changeActiveImage(index)">
                        </template>
                    </div>
                </div>

                <div class="w-full lg:w-6/12 px-6 lg:px-0 lg:pl-10" data-aos="fade-left" data-aos-duration="1500">
                    <p class="mb-4 text-orange font-bold uppercase tracking-wider">Sneaker <span class="text"></span><span class="cursor">_</span></p>
                    <h1 class="name mb-6 text-3xl lg:text-5xl font-bold"></h1>
                    <p class="mb-6 text-grayish-blue-dark leading-loose">{{ description }}</p>
                    <div class="mb-10 flex items-center justify-between lg:block">
                        <div class="lg:mb-1 flex items-center space-x-4">
                            <h3 class="text-2xl font-bold">${{ discPrice }}.00</h3>
                            <span class="px-3 lg:py-1 bg-orange-pale rounded-lg">
                                <p class="text-orange font-bold">50%</p>
                            </span>
                        </div>
                        <p class="text-grayish-blue font-bold line-through">${{ normalPrice }}.00</p>
                    </div>

                    <div class="flex flex-col lg:flex-row items-center lg:space-x-4">
                        <div class="flex w-full lg:w-4/12 mb-4 lg:mb-0">
                            <button @click="decreaseAmount"
                                class="w-2/12 lg:w-14 h-12 bg-grayish-blue-light flex justify-center items-center rounded-tl-xl rounded-bl-xl">
                                <img src="../assets/icon-minus.svg" alt="plus-icon">
                            </button>

                            <input v-model="orderAmount" type="text"
                                class="w-8/12 lg:w-14 h-12 bg-grayish-blue-light text-center font-bold focus:outline-none"
                                placeholder="0">

                            <button @click="increaseAmount"
                                class="w-2/12 lg:w-14 h-12 bg-grayish-blue-light flex justify-center items-center rounded-tr-xl rounded-br-xl">
                                <img src="../assets/icon-plus.svg" alt="plus-icon">
                            </button>
                        </div>

                        <button
                            class="w-full lg:w-6/12 py-3 bg-orange flex justify-center items-center rounded-xl text-white shadow-xl hover:shadow-2xl">
                            <img src="../assets/icon-cart.svg" class="mr-4" alt=""> <span class="font-bold">Add to
                                cart</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
    import {
        ref,
        reactive,
        toRefs,
        onMounted,
    } from 'vue';
    
    import {gsap} from 'gsap';
    import { TextPlugin } from "gsap/TextPlugin";
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default {
        name: 'TheMain',
        setup() {
            const product = reactive({
                    name: 'Fall Limited Edition Sneakers',
                    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. They ll withstand everything the weather can offer.',
                    discPrice: 125,
                    normalPrice: 250,
                    orderAmount: 1
                }
            )

            // Increase and Decrease order amount
            function increaseAmount() {
                product.orderAmount++
            }

            function decreaseAmount() {
                if (product.orderAmount > 0) {
                    product.orderAmount--
                } else {
                    return false
                }
            }
            
            // Change Image
            const activeImage = ref('./src/assets/image-product-1.jpg');
            const thumbImages = reactive([
                './src/assets/image-product-1-thumbnail.jpg',
                './src/assets/image-product-2-thumbnail.jpg',
                './src/assets/image-product-3-thumbnail.jpg',
                './src/assets/image-product-4-thumbnail.jpg',
            ])

            function changeActiveImage(index) {
                activeImage.value = `./src/assets/image-product-${index + 1}.jpg`
            }

            // Animations
            const words = ['Company', 'Shoes', 'Collections'];

            onMounted(() => {
                AOS.init({
                    delay: 1000
                });
                gsap.registerPlugin(TextPlugin);
                gsap.to('.name', {
                    duration : 2,
                    delay : 2,
                    text: {
                        value : product.name,
                        ease : 'none'
                    }
                })
                
                // Cursor infinity run
                gsap.to('.cursor', {
                    duration : 1,
                    opacity : 0,
                    ease : 'power2.inOut', 
                    repeat : -1
                })
                
                // Change words
                let masterTimeline = gsap.timeline({repeat : -1});

                words.forEach(word => {
                    let tl = gsap.timeline({
                        repeat : 1,
                        yoyo : true,
                        repeatDelay : 1
                    });

                    tl.to('.text', {
                        duration : 1.5,
                        text : word
                    });

                    masterTimeline.add(tl);
                })

            });

            return {
                ...toRefs(product),
                increaseAmount,
                decreaseAmount,
                activeImage,
                thumbImages,
                changeActiveImage
            }
        }
    }
</script>

<style scoped>
    .image-thumbnail {
        @apply w-24 h-24 rounded-xl hover:border-4 border-orange hover:opacity-60 transition duration-1000;
    }
</style>