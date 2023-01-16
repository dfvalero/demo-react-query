import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Layout from './Layout';
import BasicList from './features/basic/pages/List';
import Redux from './pages/Redux';
import ReduxAdvanced from './pages/ReduxAdvanced';
import ReactQuery from './pages/ReactQuery';
import { BasicAuthProvider } from './features/basic/context';
function App() {
    return (
        <ThemeProvider theme={theme}>
            <BasicAuthProvider>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<BasicList />} />
                            <Route path="redux" element={<Redux />} />
                            <Route path="redux-advanced" element={<ReduxAdvanced />} />
                            <Route path="react-query" element={<ReactQuery />} />
                            <Route path="*" element={<div>Not Found</div>} />
                        </Route>
                    </Routes>
                </Router>
            </BasicAuthProvider>
        </ThemeProvider>
    );
}

export default App;
