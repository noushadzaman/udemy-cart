import PropTypes from 'prop-types';
import Course from '../Course/Course';
import './Courses.css';

const Courses = ({ courses, addPrice }) => {

    return (
        <div className='course-card-container'>
            {
                courses.map(course => <Course
                    addPrice={addPrice}
                    course={course}
                    key={course.id}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    addPrice: PropTypes.func.isRequired,
};

export default Courses;