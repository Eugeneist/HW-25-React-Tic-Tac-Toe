import PropTypes from 'prop-types';

const Square = ({ value, onClick, winner}) => (
    <button className={ `${winner ? "square_winner" : "square"}` } onClick={onClick}>{value}</button>
);

Square.propTypes = {
    value: PropTypes.oneOf(['X', 'O', 'null']).isRequired,
    onClick: PropTypes.func.isRequired,
    winner: PropTypes.bool,
}

export default Square;