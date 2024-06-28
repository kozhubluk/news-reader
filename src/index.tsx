import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'app/providers/theme/ui/ThemeProvider'
import { createRoot } from 'react-dom/client'

import 'shared/config/i18n/i18n'
import { StoreProvider } from "app/providers/redux/ui/StoreProvider";

const root = createRoot(document.getElementById('root')!)
root.render(<BrowserRouter>
    <ThemeProvider>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </ThemeProvider>
</BrowserRouter>)
