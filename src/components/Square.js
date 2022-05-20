import PropTypes from 'prop-types';

const Square = ({ value, onClick}) => (
    <button className='square' onClick={onClick}>{value}</button>
);

Square.propTypes = {
    value: PropTypes.oneOf('X', 'O', 'null').isRequired,
    onClick: PropTypes.func.isRequired
}

export default Square;