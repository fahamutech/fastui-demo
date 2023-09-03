import './App.css';
import {LoginContainer} from "./modules/core/components/login_form/login_container.mjs";
import {ServerResults} from "./modules/core/components/login_form/server_results.mjs";

function App() {
    return (
        <>
            {/*<ProfileCard/>*/}
            <ServerResults/>
            {/*<WelcomeText/>*/}
        </>
    );
}

export default App;
