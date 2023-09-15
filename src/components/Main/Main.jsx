// import PropTypes from 'prop-types'
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import { useState } from "react";
import InteractivePart from "../InteractivePart/InteractivePart";
import './Main.css'

const Main = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('../../../public/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="main">
            <Courses
                courses={courses}
            ></Courses>
            <InteractivePart></InteractivePart>
        </div>
    );
};

// Main.propTypes = {}
export default Main;




