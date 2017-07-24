import { connect } from 'react-redux';
import Combined from './combined';
import { changeQuery,
    fetchQuery
} from '../actions/actions';

const mapStateToProps = ({ query }) => ({
    queryString: query.queryString,
    data: query.data,
})

const mapDispatchToProps = (dispatch) => ({
    changeQuery: (queryString) => dispatch(changeQuery(queryString)),
    fetchQuery: (queryString) => dispatch(fetchQuery(queryString))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Combined);
