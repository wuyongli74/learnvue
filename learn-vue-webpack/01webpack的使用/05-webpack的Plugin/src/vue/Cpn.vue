<template>
    <div>
        <h2>cpn标题</h2>
        <p>cpn内容</p>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data() {
            return {
                name: 'Cpn的name'
            }
        }

    }
</script>

<style scoped>

</style>