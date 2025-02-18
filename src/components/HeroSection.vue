<script setup>
    import patImage from "@/assets/images/pat-1.png";
    import socialMediaIcon from '@/components/socialMedia.vue';
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <div class="grid grid-cols-5 items-center">
            <div class="col-span-5 md:col-span-2 text-center md:text-left mt-10 md:mt-15 mx-10">
                <h1 class="uppercase font-sans font-bold mb-8">Hello, <span class="text-teal-700">My name is</span></h1>
                <h1 class="text-2xl md:text-4xl mb-8 tracking-widest">M <span class="text-teal-700">Irfanul Kalam</span>
                    Chowdhury</h1>
                <h1 class="font-medium mb-8">I AM A <span class="decoration-sky-500 decoration-wavy">Web
                        Developer</span></h1>
                <p class="text-gray-600 font-medium tracking-widest mb-8 text-justify">From Bangladesh. I have rich
                    experience
                    in web application developement, also I am good at
                    wordpress. I love to talk with you about our unique.</p>

                <div class="mt-100 md:mt-0">
                    <socialMediaIcon />
                </div>

                <button type="button" class="md:m-5 md:ms-15 text-gray-800 font-bold tracking-widest uppercase shadow-2xl shadow-teal-700/50 
                 hover:bg-teal-700 hover:text-white 
                 hover:cursor-pointer
                 transition-colors duration-800 
                 border-2 border-teal-700 
                 focus:ring-4 focus:outline-none rounded-full text-lg px-5 py-2.5 
                 text-center me-2 mb-2 
                 dark:border-blue-500 dark:text-blue-500 
                 dark:hover:text-white dark:hover:bg-blue-500 
                 dark:focus:ring-blue-800">
                    Download CV
                </button>
            </div>
            <div class="col-span-5 md:col-span-3">
                <div class="relative -mt-120 md:-mt-0">
                    <center>
                        <div
                            class="relative bg-teal-600 w-80 md:w-120 h-80 md:h-120 rounded-full justify-center flex z-1">
                            <img src="https://irfansifat.netlify.app/static/media/profile.26a60fb3.jpeg"
                                alt="Your Image" class="absolute w-full h-full -mt-2 rounded-full">
                        </div>
                    </center>
                    <div class="w-50 absolute -top-3 md:top-0 right-1 md:right-20 z-0">
                        <img :src="patImage" alt="">
                    </div>
                    <div
                        class="w-40 md:w-60 absolute top-50 md:top-90 left-2 md:left-10 z-2 bg-white border-2 rounded-full py-2 flex justify-center items-center shadow-2xl shadow-teal-700/50">
                        <h1 class="me-5"><span class="text-sm md:text-4xl text-black font-bold">5</span> <span
                                class="text-sm md:text-5xl text-teal-700 font-bold">+</span></h1>
                        <p class="uppercase text-xs md:text-sm font-bold tracking-widest">Years of <br><span
                                class="text-teal-700">experience</span></p>
                    </div>
                    <div
                        class="w-40 md:w-60 absolute top-60 md:top-100 left-50 md:left-120 z-2 bg-white border-2 rounded-full py-2 flex justify-center items-center shadow-2xl shadow-teal-700/50">
                        <h1 class="me-5"><span class="text-sm md:text-4xl text-black font-bold">8</span> <span
                                class="text-sm md:text-5xl text-teal-700 font-bold">+</span></h1>
                        <p class="uppercase text-xs md:text-sm font-bold tracking-widest">completed <br><span
                                class="text-teal-700">projets</span></p>
                    </div>
                    <div class="w-50 absolute top-30 md:top-80 right-50 md:right-120 z-0">
                        <img :src="patImage" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>