<template>
    <div>
        <h3>Students</h3>
        <div id="student-card" v-for="student in students" v-bind:key="student.studentId">
        <hr/>
            <span><b>Student ID: </b>{{student.studentId}}</span><br>
            <span><b>Name: </b>{{student.name}}</span><br/>
            <span><b>Institute: </b>{{student.institute}}</span><br/>
            <span><b>Role: </b>{{student.role}}</span><br/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StudentList',
    data(){
        return {
            students: [
                {studentId: 'STD-001', name: 'Mike Mwanje', institute: 'Refactory', role: 'Student'},
                {studentId: 'STD-002', name: 'Davies Wabuluka', institute: 'Refactory', role: 'Developer'},
                {studentId: 'STD-003', name: 'Tsumaiya Nabawanuka', institute: 'Refactory', role: 'Applications Designer'},
                {studentId: 'STD-004', name: 'Queen Emily', institute: 'Refactory', role: 'Class Representative'},
                {studentId: 'STD-005', name: 'Isaac Semugenyi', institute: 'Refactory', role: 'Co-facilitator'},
                {studentId: 'STD-006', name: 'Julius Wasajja', institute: 'Refactory', role: 'Gamer'},
            ]
        }
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