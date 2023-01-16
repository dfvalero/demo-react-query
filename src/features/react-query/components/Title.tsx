import ListTitle from '../../../components/ListTitle';
import { useGetUsers } from '../hooks/useGetUsers';

function Title() {
    const { data, status } = useGetUsers();

    if (status !== 'success') {
        return null;
    }

    return <ListTitle>Total Users: {data.total}</ListTitle>;
}

export default Title;
