<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const skillSection = document.querySelector(".skillSection");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const eachSkill = document.querySelectorAll(".eachSkill");
                eachSkill.forEach(e => {
                    e.classList.add("animate-slide-open");
                });
            }
        });
    }, { threshold: 0.8 });

    observer.observe(skillSection);
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.pacifico {
    font-family: "Pacifico", "system-ui";
}
</style>

<template>
    <center>
        <h1 class="mt-25 text-2xl md:text-5xl font-semibold tracking-widest uppercase">Stack Skill</h1>
        <p class="font-semibold mt-5 tracking-widest"><span class="text-teal-700">My</span> <span class="pacifico">Talent</span></p>
    </center>


    <div class="grid grid-cols-1 md:grid-cols-4 skillSection">
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">PHP</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">90<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 90%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">JavaScript</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">85<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 85%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">HTML</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">85<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 85%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">Raw CSS</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">90<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 90%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">Laravel</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">85<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 85%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">Codeigniter</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">85<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 85%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">Vue</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">30<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 30%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">MySQL</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">90<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 90%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">WordPress</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">80<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 80%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">Bootstrap & Tailwind</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">85<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 85%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">Figma</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">60<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 60%"></div>
            </div>
        </div>
        <div class="col-span-4 md:col-span-1 p-5">
            <div class="flex justify-between mb-1">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">Canva Tool</span>
                <span class="text-lg font-bold text-gray-900 dark:text-white">80<span
                        class="text-teal-700">%</span></span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 shadow-2xl">
                <div class="bg-teal-600 h-2.5 rounded-full eachSkill" style="width: 80%"></div>
            </div>
        </div>
    </div>

    <h1 class="text-9xl text-center opacity-10 -mt-20 pacifico tracking-widest">Skills</h1>
</template>