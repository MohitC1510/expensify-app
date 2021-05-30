//Higher order component(HOC)- A component (HOC) that renders another component
//reuse code
//Render hijacking
//prop manipulation
//Abstract state
import React from'react';
import ReactDOM from 'react-dom';

const Info= (props)=>(
    <div>
        <h1>This is my heading</h1>
        <p>The item is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
     return(props)=>(
         <div>
             {props.isAdmin && <p>This is private info: don't share</p>}
             <WrappedComponent {...props}/>
         </div>
    );
}

const requireAuthentication = (WrappedComponent) =>{
    return(props)=>(
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>): (<p>Authentication Required</p>)}
        </div>
    )
}
const AdminInfo= withAdminWarning(Info);
const AuthInfo= requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is my prop"/>, document.getElementById('app'));