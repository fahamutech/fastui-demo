import './App.css';
import {LoginContainer} from "./modules/core/components/login_form/login_container.mjs";
import {ServerResults} from "./modules/core/components/login_form/server_results.mjs";
import {BottomBox} from "./modules/core/components/register_form/bottom_box.mjs";
import {BottomBoxB} from "./modules/core/components/register_form/bottom_box_b.mjs";
import {SidebarBox} from "./modules/core/components/register_form/sidebar_box.mjs";

function App() {
    return (
        <>
            {/*<ProfileCard/>*/}
            {/*<ServerResults/>*/}
            <SidebarBox/>
            {/*<WelcomeText/>*/}
        </>
    );
}

export default App;
