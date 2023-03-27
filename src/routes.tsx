import BasicList from './features/basic/pages/List';
import ReduxList from './features/redux/pages/List';
import ReactQueryList from './features/react-query/pages/List';
import ComplexityList from './features/complexity/pages/List';

export const routes = [
    { name: 'Basic', path: '/', component: <BasicList /> },
    { name: 'Redux', path: 'redux', component: <ReduxList /> },
    { name: 'React Query', path: 'react-query', component: <ReactQueryList /> },
    { name: 'Complexity', path: 'complexity', component: <ComplexityList /> },
];
