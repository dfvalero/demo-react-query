import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { theme } from './theme';
import Layout from './Layout';
import { BasicUserProvider } from './features/basic/context';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './features/react-query/services/queryClient';
import { routes } from './routes';
import ComplexityPage from './features/complexity/pages/Page';
function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* Basic Approach */}
            <BasicUserProvider>
                {/* Redux Approach */}
                <Provider store={store}>
                    {/* React Query Approach */}
                    <QueryClientProvider client={queryClient}>
                        <CssBaseline />
                        <Router>
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    {routes.map((route) => (
                                        <Route
                                            key={route.name}
                                            index={route.path === '/'}
                                            path={route.path}
                                            element={route.component}
                                        />
                                    ))}
                                    <Route
                                        path="/complexity/:campaignId"
                                        element={<ComplexityPage />}
                                    />
                                    <Route path="*" element={<div>Not Found</div>} />
                                </Route>
                            </Routes>
                        </Router>
                    </QueryClientProvider>
                </Provider>
            </BasicUserProvider>
        </ThemeProvider>
    );
}

export default App;
