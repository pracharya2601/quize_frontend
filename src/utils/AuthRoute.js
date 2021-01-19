import Authcontext from 'context/auth/auth';
import {useContext} from 'react';
import {Route, Redirect } from 'react-router-dom';

export const CheckOpenRoute = ({component: Component, ...rest}) => {
    const {isSignedIn} = useContext(Authcontext);
    return(
        <Route
            {...rest}
            render={(props) => isSignedIn === true ? 
            <Redirect to="/dashboard" /> : <Component {...props} />
            }
            
        />
    )
}

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const {isSignedIn} = useContext(Authcontext);
    return(
        <Route
            {...rest}
            render={(props) => isSignedIn === false ? 
            <Redirect to="/auth/signin" /> : <Component {...props} />
            }
            
        />
    )
}