import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Layout from './Layout';
import BasicList from './features/basic/pages/List';
import ReactQueryList from './features/react-query/pages/List';
import Redux from './pages/Redux';
import { BasicUserProvider } from './features/basic/context';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './features/react-query/services/queryClient';
import { routes } from './routes';
function App() {
    return (
        <ThemeProvider theme={theme}>
            <BasicUserProvider>
                <QueryClientProvider client={queryClient}>
                    <CssBaseline />
                    <Router>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                {routes.map(route => (
                                    <Route key={route.name} index={route.path === '/'} path={route.path} element={route.component} />
                                ))}
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
