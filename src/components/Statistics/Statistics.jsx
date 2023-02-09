import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ state, total, positivePercentage }) => {
    return (
        <>
            {Object.entries(state).map(([key, value]) => (
                <p className={styles.text} key={key}>
                    {key}:{value}
                </p>
            ))}
            <p className={styles.text}>total: {total}</p>
            <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
        </>
    );
};

Statistics.propTypes = {
    state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;