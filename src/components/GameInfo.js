import PropTypes from 'prop-types';

const GameInfo = ({history, jumpTo, status}) => {
    return (
        <div>
            <div>{status}</div>

            <ol>
                {history.map((step, index) => {
                    const isStartStep = index === 0;

                    return (
                        <li  key={index}>
                            <button onClick={jumpTo(index)}>
                                {isStartStep ? `Start new game` : `Go to move #${index}`}
                            </button>
                        </li>
                    );
                })} 
            </ol>
        </div>
    )
};

GameInfo.propTypes ={

}
