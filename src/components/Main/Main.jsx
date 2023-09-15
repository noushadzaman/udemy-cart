// import PropTypes from 'prop-types'
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import { useState } from "react";

const Main = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('../../../public/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Courses 
            courses={courses}
            ></Courses>
        </div>
    );
};

// Main.propTypes = {}
export default Main;




