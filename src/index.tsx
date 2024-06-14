import {render} from "react-dom";
import {App} from "./app/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/theme/ui/ThemeProvider";

const domNode = document.getElementById('root');
render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
    , domNode);