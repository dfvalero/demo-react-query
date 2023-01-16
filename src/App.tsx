import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Layout from './Layout';
import BasicList from './features/basic/pages/List';
import ReactQueryList from './features/react-query/pages/List';
import Redux from './pages/Redux';
import ReduxAdvanced from './pages/ReduxAdvanced';
import { BasicUserProvider } from './features/basic/context';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './features/react-query/services/queryClient';
function App() {
    return (
        <ThemeProvider theme={theme}>
            <BasicUserProvider>
                <QueryClientProvider client={queryClient}>
                    <CssBaseline />
                    <Router>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<BasicList />} />
                                <Route path="redux" element={<Redux />} />
                                <Route path="redux-advanced" element={<ReduxAdvanced />} />
                                <Route path="react-query" element={<ReactQueryList />} />
                                <Route path="*" element={<div>Not Found</div>} />
                            </Route>
                        </Routes>
                    </Router>
                </QueryClientProvider>
            </BasicUserProvider>
        </ThemeProvider>
    );
}

export default App;
