import PropTypes from 'prop-types';
import Course from '../Course/Course';
import './Courses.css';

const Courses = ({ courses }) => {

    return (
        <div className='course-card-container'>
            {
                courses.map(course => <Course
                    course={course}
                    key={course.id}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired
};

export default Courses;