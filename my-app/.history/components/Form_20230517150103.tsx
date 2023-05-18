import React from 'react';
import FormStyle from '../style/Form.module.css';

const Form = () => {
    return (
        <form>
            <div className={FormStyle.form - inner}>
                <h2>
                    Welcome. <br />
                    Please Enter Your Credentials
                </h2>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        // binding name to details in order to change details
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                    ></input>
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    );
};

export default Form;
