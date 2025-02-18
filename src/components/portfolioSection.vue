<script setup>
import { onMounted, ref } from 'vue';
import staticWebsite from '@/assets/images/staticWebsite.png';
import pnlImage from '@/assets/images/pnl.png';

var projectList = ref();

onMounted(() => {
    projectList.value = [
        {
            tech: 'Web Application',
            name: 'PNL Sales CRM',
            img: pnlImage,
            desc: 'Something here',
            client: 'PNL Holdings Limited'
        },
        {
            tech: 'Web Application',
            name: 'REL Sales CRM',
            img: pnlImage,
            desc: 'Something here',
            client: 'REL Motors Limited'
        },
        {
            tech: 'Web Application',
            name: 'Easy Appointment',
            img: pnlImage,
            desc: 'Something here',
            client: 'Epic Health Care, CTG'
        },
        {
            tech: 'Web Application',
            name: 'Learning Management System',
            img: pnlImage,
            desc: 'Something here',
            client: "Speaker's Council"
        },
        {
            tech: 'Web Application',
            name: 'Document Management & Approval System',
            img: pnlImage,
            desc: 'Something here',
            client: "Azneo Limited"
        },
    ];
});

</script>

<template>
    <center>
        <h1 class="text-2xl md:text-5xl font-semibold tracking-widest uppercase mt-15">Portfolio</h1>
        <p class="font-semibold mt-5 tracking-widest"><span class="text-teal-700">My</span> <span
                class="pacifico">Cases</span></p>
    </center>
    <div class="flex justify-between text-gray-800 font-bold text-sm md:text-lg mx-1 md:mx-80 mt-15 mb-15 w-fill">
        <p class="hover:cursor-pointer hover-animate-border">All</p>
        <p class="hover:cursor-pointer hover-animate-border">Web Application</p>
        <p class="hover:cursor-pointer hover-animate-border">WordPress</p>
        <p class="hover:cursor-pointer hover-animate-border">Canva</p>
        <p class="hover:cursor-pointer hover-animate-border">Figma</p>
    </div>

    <div class="m-5 md:m-20 grid grid-cols-3">
        <div class="grid place-items-center col-span-3">
            <h1
                class="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-700 leading-50">
                Developing
            </h1>
        </div>
        <div class="col-span-3 md:col-span-1 webapplication hidden" v-for="project in projectList">
            <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <!-- <a href="#"> -->
                <img class="rounded-3xl p-5 transition-transform duration-300 hover:scale-110" :src="project.img"
                    alt="" />
                <!-- </a> -->
                <p class="px-5 text-teal-700 font-black uppercase text-sm tracking-widest montserrat">{{ project.tech }}
                </p>
                <div class="px-5 py-3">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{{ project.name
                        }}</h5>
                    </a>
                    <p class="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{{ project.desc }}
                    </p>
                </div>
                <p class="px-5 text-indigo-700 font-black uppercase text-sm tracking-widest montserrat">Client: {{
                    project.client }}
                </p>
            </div>
        </div>
    </div>
</template>