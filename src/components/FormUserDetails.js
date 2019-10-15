import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {

    nextButton = e => {
        e.preventDefault()
        this.props.nextStep();
    }
    render() {
        const {values,handleChange}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter your User Details"></AppBar>
                    <TextField 
                    hintText="Enter your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <br />
                    <TextField 
                    hintText="Enter your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.firstName}
                    />
                    <br />
                    <TextField 
                    hintText="Enter your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br />
                    <RaisedButton label="next"
                        primary={true}
                        onClick={this.nextButton} >
                        
                    </RaisedButton>
                </React.Fragment>

            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
