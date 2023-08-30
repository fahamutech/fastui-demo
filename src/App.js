import './App.css';
import {WelcomeText} from "./modules/core/components/welcome_text.mjs";
import {ProfilePicture} from "./modules/core/components/profile_picture.mjs";
import {OkButton} from "./modules/core/components/ok_button.mjs";
import {SubtitleText} from "./modules/core/components/subtitle_text.mjs";
import {TitleText} from "./modules/core/components/title_text.mjs";

function App() {
    return (
        <div id={'57654'}>
            <ProfilePicture/>
            <WelcomeText/>
            <TitleText/>
            <SubtitleText/>
            <OkButton/>
        </div>
    );
}

export default App;
