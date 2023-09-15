import PropTypes from 'prop-types';
import './InteractivePart.css'

const InteractivePart = ({ totalPrice, totalHour, remainingHour, selectedCourses }) => {
    return (
        <div className='interactive-part'>
            <h2 id='interactive-part-title'>Credit Hour Remaining {remainingHour} hr</h2>
            <hr />
            <h2>Course Name</h2>
            <ol>
                {
                    selectedCourses.map((course, index) => <li className='selected-course' key={index}>{course}</li>)
                }
            </ol>
            <hr />
            <p className='credit-hour'>Total Credit Hour : {totalHour}</p>
            <hr />
            <p className='total-price'>Total Price : {totalPrice} USD</p>
        </div>
    );
};

InteractivePart.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalHour: PropTypes.number.isRequired,
    remainingHour: PropTypes.number.isRequired,
    selectedCourses: PropTypes.array.isRequired,
};

export default InteractivePart;