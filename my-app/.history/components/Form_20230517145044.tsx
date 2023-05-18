import React from 'react';
import FormStyle from '../style/Form.module.css';

const Form = () => {
    return (
        <div className={FormStyle['center-div']}>
            <form>
                <form>
                    <label>
                        Username:
                        <input type="text" name="Username" />
                    </label>
                    <br />
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
