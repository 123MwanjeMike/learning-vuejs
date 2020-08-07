<template>
    <div>
        <hr/>
        <div id="student-card">
            <span><b>Student ID: </b>{{studentId}}</span><br>
            <span><b>Name: </b>{{name}}</span><br/>
            <span><b>Institute: </b>{{institute}}</span><br/>
            <span><b>Role: </b>{{role}}</span><br/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StudentList',
    props: {
        studentId: String,
        name: String,
        institute: String,
        role: String,
    }
}
</script>

<style scoped>
#student-card {
    text-align: left;
    font-size: 1.5rem;
    font-weight: 100;
}
b{
    font-weight: 1000;
}
</style>