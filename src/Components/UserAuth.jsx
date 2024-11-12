export default function UserAuth() {

        let isAuthenticated = false;
        let content;

        if(isAuthenticated){
            content = <h1>User is Authenticated</h1>
        }else{
            content = <h1>User Not Authenticated</h1>
        }

        return( <div>
        {content}
        <h4>{isAuthenticated ? "Yes" : "No"}</h4>
        </div>
        )
    }
 
