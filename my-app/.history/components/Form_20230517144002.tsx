import React from 'react';

const Form = () => {
    return (
        <div>
            <div className="position-relative d-flex justify-content-center align-items-center align-middle">
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
        </div>
    );
};

export default Form;
