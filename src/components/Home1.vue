<template>
    <div>
        <h1 id="app-headers">
            Welcome to Students Profiling System
            <StudentList
                v-bind:studentId="student1.studentId"
                v-bind:name="student1.name"
                v-bind:institute="student1.institute"
                v-bind:role="student1.role"
            />
        </h1>
    </div>
</template>

<script>
import StudentList from './StudentList.vue'
export default {
    name: 'Home',
    components: {
        StudentList,
    },
    data(){
        return{
            student1:{
                studentId: "STD-001",
                name: "Mike Mwanje",
                institute: "Refactory",
                role: "Student",
            }
        }
    }
}
</script>

<style scoped>
    /* #app-headers{
        color: red;
    } */
</style>