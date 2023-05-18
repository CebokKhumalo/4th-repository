import React from 'react';
import FormStyle from '../style/Form.module.css';

const Form = () => {
    return (
        <div className={FormStyle['center-div']}>
            <form className="position-absolute top-0 start-0 translate-middle">
                <form>
                    <label>
                        Username:
                        <input type="text" name="Username" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="Password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </form>
        </div>
    );
};

export default Form;
