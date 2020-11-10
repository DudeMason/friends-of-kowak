import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext(undefined);
export const Consumer = Context.Consumer;

export default class Provider extends Component {
    state = {
        user: null,
        edit: false,
        page: {},
        aspiringUser: {email: '', password: '', passwordConfirmation: ''},
        alertShow: false,
        alertMessage: '',
        alertType: '',
    };

	text1; text3; text2; text4; text5; text6; text7; text8; text9;

    pageConstants = {
        "homeId": 1,
        "educationId": 2,
        "healthId": 3,
        "communityId": 4,
        "aboutId": 5,
        "contactId": 6,
        "donateId": 7,
    };

    alerts = {
        messages: {
            "emailSuccess": "Your email has been sent!",
            "emailError": "There was a problem, your email was not sent!",
            "existingUser": "User already exists.",
            "incorrectPassword": "Incorrect password.",
            "noUsername": "Username does not exist.",
            "userAuth": "Must be an authorized user.",
            "userNotAuth": "You are not authorized to edit pages.",
            "emailRequired": "Must be an email address.",
            "passwordNoMatch": "Passwords do not match.",
            "passwordShort": "Password is too short.",
        },
        types: [
            'error',
            'success',
        ],
    }

    handleRegister = (history) => {
        const {email, password, passwordConfirmation} = this.state.aspiringUser;
        const {messages, types} = this.alerts;
        if (!/.@\w+\.[^0-9]{2}/i.test(email)) {
            this.showAlert(messages.emailRequired, types[0]);
            return;
        }
        if (password !== passwordConfirmation) {
            this.showAlert(messages.passwordNoMatch, types[0]);
            return;
        }
        if (password.length < 6) {
            this.showAlert(messages.passwordShort, types[0]);
            return;
        }
        axios.post('/api/auth', {email: email, password: password})
            .then(result => {
                const userData = result.data.data;
                const user = {id: userData.id, uid: userData.uid, email: userData.email, provider: userData.provider}
                this.setState({
                    user: user,
                    aspiringUser: {email: '', password: '', passwordConfirmation: ''}
                }, () => {
                    this.closeAlert();
                    history.push('/');
                });
            })
            .catch(() => this.showAlert(messages.existingUser, types[0]));
    }

    handleLogin = (history) => {
        const {email, password} = this.state.aspiringUser;

        axios.post('/api/auth/sign_in', {email: email, password: password})
            .then(result => {
                const userData = result.data.data;
                const user = {id: userData.id, uid: userData.uid, email: userData.email, provider: userData.provider}
                axios.get(`/api/users/${userData.id}/permissions`)
                    .then(res => {
                        this.setState({user: Object.assign(user,{editor: res.data})});
                    })
                    .catch(() => this.setState({user: user}));
                this.closeAlert();
                history.push('/');
            })
            .catch(() => {
                axios.get('/api/users')
                    .then(res => {
                        const {messages, types} = this.alerts;
                        if (res.data.find(u => email === u.email)) {
                            this.showAlert(messages.incorrectPassword, types[0]);
                        } else {
                            this.showAlert(messages.noUsername, types[0]);
                        }
                    });
            });
    }

    handleLogout = (history) => {
        axios.delete('/api/auth/sign_out')
            .then(() => {
                this.setState({user: null, edit: false});
                history.push('/login');
            })
            .catch(err => console.log(err));
    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit});
    }

    showPage = (id) => {
        axios.get(`/api/pages/${id}`)
            .then(res => {
                this.setState({page: {...res.data}});
            })
            .catch(err => console.log(err));
    }

    clearPage = () => {
        this.setState({page: {}});
    }

    updatePage = () => {
        const page = this.state.page
        axios.put(`/api/pages/${page.id}`, page)
            .then(() => {
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    editPage = () => {
        axios.get('/api/auth/validate_token')
            .then(() => {
                const {id} = this.state.user
                axios.get(`/api/users/${id}/permissions`)
                    .then(res => {
                        if (res.data) {
                            this.updatePage();
                        }
                    })
                    .catch(() => {
                        const {messages, types} = this.alerts;
                        this.showAlert(messages.userNotAuth, types[0]);
                    });
            })
            .catch(() => {
                const {messages, types} = this.alerts;
                this.showAlert(messages.userAuth, types[0]);
            });
    }

    sendReceipt = (receiptParams) => {
        axios.post('/api/receipt_sender', receiptParams)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log(err);
            });
    }

    sendPasswordReset = () => {
        const {email} = this.state.aspiringUser;
        const {messages, types} = this.alerts;
        axios.get('/api/users')
            .then(res => {
                if (res.data.find(u => u.email === email)) {
                    axios.post('/api/password_reset_sender', {email: email})
                        .then(r => {
                            this.showAlert(messages.emailSuccess, types[1]);
                            return r.data;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    this.showAlert(messages.noUsername, types[0]);
                }
            })
            .catch(err => console.log(err.data));
    }

    closeAlert = () => {
        this.setState({alertMessage: '', alertType: '', alertShow: false})
    }

    showAlert = (message, alertType) => {
        this.setState({alertMessage: message, alertType: alertType, alertShow: true})
    }

    pageHandleChange = (e) => {
        const {name, value} = e.target;
        this.setState({page: {...this.state.page, [name]: value}});
    }

    userHandleChange = (e) => {
        const {name, value} = e.target;
        this.setState({aspiringUser: {...this.state.aspiringUser, [name]: value}});
    }

    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                toggleEdit: this.toggleEdit,
                handleRegister: this.handleRegister,
                handleLogin: this.handleLogin,
                handleLogout: this.handleLogout,
                setUser: (user) => this.setState({user: user}),
                editPage: this.editPage,
                showPage: this.showPage,
                clearPage: this.clearPage,
                pageHandleChange: this.pageHandleChange,
                userHandleChange: this.userHandleChange,
                pageConstants: this.pageConstants,
                sendPasswordReset: this.sendPasswordReset,
                closeAlert: this.closeAlert,
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
