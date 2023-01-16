import ListTitle from '../../../components/ListTitle';
import { useGetUsersQuery } from '../store/api';

function Title() {
    const { data } = useGetUsersQuery();

    if (!data) {
        return null;
    }

    return <ListTitle>Total Users: {data.total}</ListTitle>;
}

export default Title;
