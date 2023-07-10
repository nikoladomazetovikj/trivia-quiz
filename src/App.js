import Title from "./components/Title";
import TitleBar from "./partials/TitleBar";
import Selection from "./components/Selection";
import {Fragment} from "react";

const App = () => {
    return <Fragment>
        <TitleBar>
            <Title/>
        </TitleBar>
        <Selection/>
    </Fragment>
}

export default App
