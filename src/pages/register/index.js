import React, { Component } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import authenticate from '../../utils/authentication';
import UserContext from '../../Context';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            rePassword: ''
        }

    }

    static contextType = UserContext;

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {
            username,
            password
        } = this.state;

       await authenticate('http://localhost:9999/api/user/register', {
           username, 
           password
       },
       (user) => {
           console.log('Successfull registration');
           this.context.logIn(user);
           this.props.history.push('/')
       },
       (e) => console.log('Error: ', e));
    }


    render() {

        const {
            username,
            password,
            rePassword
        } = this.state;

        return (
            <PageLayout>
                <div className={styles.container}>
                    <Title title='Register Page' />
                    <form className={styles.form} onSubmit={this.handleSubmit}>

                        <Input
                            value={username}
                            onChange={(e) => this.handleChange(e, 'username')}
                            label='Username'
                            id='username'
                        />
                        <Input
                            type='password'
                            value={password}
                            onChange={(e) => this.handleChange(e, 'password')}
                            label='Password'
                            id='password'
                        />
                        <Input
                            type='password'
                            value={rePassword}
                            onChange={(e) => this.handleChange(e, 'rePassword')}
                            label='Re-passowrd'
                            id='re-password'
                        />
                        <SubmitButton title='Register' />
                    </form>
                </div>
            </PageLayout>
        )
    }
}

export default RegisterPage;