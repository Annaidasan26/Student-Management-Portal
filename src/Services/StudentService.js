import axios from "axios"

const StudentBaseURL ="http://localhost:8080/students"

class StudentService{

    getAllStudents(){
        return axios.get(StudentBaseURL)
    }

    saveStudent(student){
        return axios.post(StudentBaseURL,student)
    }
    updateStudent(student){


        return axios.put(StudentBaseURL,student)
    }

    deleteStudent(id){

        return axios.delete(StudentBaseURL+"/"+id);
    }


}

export default new StudentService();