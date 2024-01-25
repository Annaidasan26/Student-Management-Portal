import React, { Component } from 'react';
import StudentService from '../Services/StudentService';
import withRouter from './WithRouter';

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            id : "",
            name : "",
            age : ""
        }
        this.onChangeHandler=this.onChangeHandler.bind(this)
        this.saveStudent=this.saveStudent.bind(this)
        this.cancel=this.cancel.bind(this)
    }

    onChangeHandler(event){
        this.setState({ [event.target.name] : event.target.value })
    }

    saveStudent(event){
        event.preventDefault();
     StudentService.saveStudent(this.state).then(res => {
        this.props.navigate('/')
     })

    }
    cancel(){
        this.props.navigate('/')
    }
    

    render() {
        const {id,name,age}=this.state
        return (
            <div>
               <div className='container mt-3'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add Student</h2>
               <form>
               <div className='form-group'>
                <label>Enter your Id</label>
                <input placeholder='Student Id' className='form-control' name='id' value={id} onChange={this.onChangeHandler}/>
                </div>

                <div className='form-group'>
                <label>Enter your Name</label>
                <input placeholder='Student Name' className='form-control' name='name' value={name} onChange={this.onChangeHandler}/>
                </div>

                <div className='form-group'>
                <label>Enter your Age</label>
                <input placeholder='Student Age' className='form-control' name='age' value={age} onChange={this.onChangeHandler}/>
                </div>

                <button className='btn btn-success my-3' onClick={this.saveStudent}>Save</button>

                <button className='btn btn-danger my-3' style={{marginLeft:'20px'}} onClick={this.cancel}>Cancel</button>
               </form>

               </div>
               </div>
               </div>
            </div>
        );
    }
}

export default withRouter(AddComponent);