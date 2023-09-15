import PropTypes from 'prop-types';
import Course from '../Course/Course';
import './Courses.css';
import { useState } from 'react';

const Courses = ({ courses, addPrice }) => {
    const [allJobs, setAllJobs] = useState(false);
    const seeAll = () => {
        console.log('sorting');
        setAllJobs(!allJobs);
    }

    return (
        <div className='courses-container'>
            <div className='course-card-container'>
                {
                    allJobs ?
                        courses.map(course => <Course
                            addPrice={addPrice}
                            course={course}
                            key={course.id}
                        ></Course>) :
                        courses.slice(0, 6).map(course => <Course
                            addPrice={addPrice}
                            course={course}
                            key={course.id}
                        ></Course>)
                }
            </div>
            <button onClick={() => seeAll()} className='all-btn'>See all</button>
        </div>
    );
};
// 
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    addPrice: PropTypes.func.isRequired,
};

export default Courses;