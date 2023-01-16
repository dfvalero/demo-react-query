import { useBasic } from '../hooks/useBasic';
import Feedback from '../../../components/Feedback';
import ListTitle from '../../../components/ListTitle';

function Title() {
    const { data, status, error } = useBasic();

    if (status !== 'success') {
        return <Feedback status={status} error={error} />;
    }

    return <ListTitle>Total Users: {data.total}</ListTitle>;
}

export default Title;
