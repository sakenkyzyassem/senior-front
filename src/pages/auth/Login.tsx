import React from "react";
import { FC, ReactElement } from "react";


const Login: FC<{}> = (): ReactElement => {    
    return(
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Login;