import {render} from "react-dom";
import {App} from "./components/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

const domNode = document.getElementById('root');
render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
    , domNode);