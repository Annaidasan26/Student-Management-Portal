import React, { Component } from "react";
import StudentService from "../Services/StudentService";
import withRouter from "./WithRouter";


class ListofStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
    this.addStudent=this.addStudent.bind(this)
    this.updateStudent=this.updateStudent.bind(this)
    this.deleteStudent=this.deleteStudent.bind(this)
  }

  componentDidMount() {
    StudentService.getAllStudents().then((res) => {
      console.log(res);
      this.setState({
        students: res.data,
      });
    });
   
  }

  addStudent(){
     this.props.navigate('/add-student')
  }

  updateStudent(){
    this.props.navigate('/update-student')
  }

  deleteStudent(id){

    StudentService.deleteStudent(id).then(res=> {
      this.setState({students : this.state.students.filter(students => students.id !=id )})
    })

  }
  render() {
    return (
      <div className="container">
        
        
        <h2 className="text-center">Student List</h2>
        <div className="row" style={{width:"150px"}}>
          <button className="btn btn-primary" onClick={this.addStudent} >Add Student</button>
          </div>
        <div className="row">
     
          <table className="table table-bordered">
          
            <thead className="bg-light">
              <tr>
                <th>Student Id</th>

                <th>Student Name</th>

                <th>Student Age</th>

                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>
                    <button className="btn btn-info " onClick={this.updateStudent}>Update</button>
                    <button className="btn btn-danger mx-3" onClick={() => this.deleteStudent(student.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
      </div>
    );
  }
}

export default withRouter(ListofStudent);
