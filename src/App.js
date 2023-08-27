import './App.css';
import {WelcomeText} from "./modules/core/components/welcome_text.mjs";
import {ProfilePicture} from "./modules/core/components/profile_picture.mjs";

function App() {
    return (
        <>
            <ProfilePicture/>
            <WelcomeText/>
        </>
    );
}

export default App;
