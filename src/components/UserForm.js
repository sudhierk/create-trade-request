import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class UserForm extends Component {
    state={
        step:1,
        firstName:"",
        lastName:"",
        email:"",
        company:"",
        occupation:"",
        city:"",
        bio:""
    }

    nextStep=()=>{
        const{step}=this.step;
        this.setState({step:step+1});
    }

    prevStep=()=>{
        const{step}=this.step;
        this.setState=step-1;
    }

    handleChange = input =>e => {
        this.setState({[input]:e.target.value})

    }
    render() {
        const {step}=this.state;
        const {firstName,lastName,email,company,occupation,city,bio}=this.state;
        const values={firstName,lastName,email,company,occupation,city,bio};
        switch(step){
            case 1:
            return(
                <FormUserDetails>
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                </FormUserDetails>
            )
            case 2:
            return <h1>FormPersonalDetails</h1>
            case 3:
            return <h1>FormConfirmDetails</h1>
            case 4:
            return <h1>FormSuccessDetails</h1>

        }
    }
}

export default UserForm
