<script setup>
import staticWebsite from '@/assets/images/staticWebsite.png'
import webApplication from '@/assets/images/webApplication.png'
import wordPress from '@/assets/images/wordpress.png'
import patImage2 from "@/assets/images/pat-2.png";

</script>
<template>
    <center>
        <h1 class="text-2xl md:text-5xl font-semibold tracking-widest uppercase">What I Do</h1>
        <p class="font-semibold mt-5 tracking-widest"><span class="text-teal-700">My</span> <span class="pacifico">Services</span></p>
    </center>
    <div class="mt-5 mx-1 md:mx-5 bg-gray-200 p-5 rounded-full">
        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-600 sm:text-base">
            <li
                class="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-800 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                Requirement
            </li>
            <li
                class="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-800 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                <span
                    class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-800"></span>
                Development
            </li>
            <li
                class="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-800 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                <span
                    class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-800"></span>
                Testing
            </li>
            <li class="flex items-center">
                <span
                    class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-800"></span>
                Deploy
            </li>
        </ol>

    </div>
    <div class="grid grid-cols-3 mt-5 md:ms-5 gap-4 w-full ms-0 mx-2">
        <div class="col-span-3 md:col-span-1">
            <div
                class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="staticWebsite" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Website
                            Development</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">Here are the biggest
                        enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                <!-- <div class="w-20 absolute bottom-1 right-1">
                    <img :src="patImage2" alt="">
                </div> -->
            </div>

        </div>
        <div class="col-span-3 md:col-span-1">
            <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="webApplication" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full-Stack Web
                            Application</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">Here are the biggest
                        enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </div>
            </div>
        </div>

        <div class="col-span-3 md:col-span-1">
            <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="wordPress" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WordPress Site
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">Here are the biggest
                        enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>
        <div class="col-span-3 md:col-span-1">
            <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="wordPress" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Draw.io
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">Here are the biggest
                        enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>

        <div class="col-span-3 md:col-span-1">
            <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="wordPress" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Figma Design
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">Here are the biggest
                        enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>

        <div class="col-span-3 md:col-span-1">
            <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="wordPress" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Canva Tool
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">Here are the biggest
                        enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>
    </div>
</template>