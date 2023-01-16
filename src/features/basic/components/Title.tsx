import ListTitle from '../../../components/ListTitle';
import { useBasicUsers } from '../context';

function Title() {
    const { data, status } = useBasicUsers();

    if (status !== 'success') {
        return null;
    }

    return <ListTitle>Total Users: {data.total}</ListTitle>;
}

export default Title;
