<script setup lang="tsx">
const props = defineProps<{
    obj?: string
}>()
const count = ref(1)
const countTag = () => <span class='tag' >× {count.value}</span>
</script>

<template>
    <span @click="count += 1" class="but" >
        Hi {{ obj ?? "World" }} <count-tag/>
    </span>
</template>

<style scoped>
.tag {
    display: inline-flex;
    border-color: aqua;
    border-radius: 0.5rem;
    background-color: aquamarine;
    padding: 0.2rem 0.5rem;
    margin: 0 0.2rem;
}
.but {
    height: min-content; 
    background-color: rgba(255, 255, 255, 0.2); box-shadow: -4px 1px 2px gray;
    border-style: solid; border-color: grey; border-width: 1px; border-radius: 4px; 
    padding: 0.3rem ; backdrop-filter: blur(4px); 
    user-select: none;
}
.but:hover {
    transition: box-shadow 0.2s ;
    transform: scale(0.97); 
    box-shadow: -2px 1px 2px aqua;
}
.but:active {
    transform: scale(0.98); 
    box-shadow: 0px 0px 0px white;
}
</style>