import React from 'react';
import {Link} from "react-router-dom";
import Input from 'components/input';
const ResetPassword = (props) => {
    return (
        <div>
            <h1>ResetPassword</h1>
            <form>
                <Input 
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    //value
                />

                <button>Reset Password</button>
            </form>
            <Link to={`/auth/signin`}>Go back to Signin</Link>
        </div>
    )
}

export default ResetPassword;