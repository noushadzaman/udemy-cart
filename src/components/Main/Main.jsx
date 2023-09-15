// import PropTypes from 'prop-types'
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import { useState } from "react";
import InteractivePart from "../InteractivePart/InteractivePart";
import './Main.css';
import toast from 'react-hot-toast';

const Main = () => {
    const [courses, setCourses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalHour, setTotalHour] = useState(0);
    const [remainingHour, setRemainingHour] = useState(20);
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    const addPrice = (price, hour, title) => {
        const alreadyAdded = selectedCourses.find(course => course === title);
        if (alreadyAdded) {
            toast.error("Already added", {
                position: "top-right"
            })
        }
        else {
            let newRemainingHour = remainingHour - hour;
            if (newRemainingHour >= 0) {
                setRemainingHour(newRemainingHour);
                setTotalPrice(totalPrice + price);
                setTotalHour(totalHour + hour);
                setSelectedCourses([...selectedCourses, title]);
            }
            else {
                toast.error("You can't cross 20 hour credit", {
                    position: "top-right"
                })
            }
        }

    }
    console.log(selectedCourses)
    return (
        <div className="main">
            <Courses
                courses={courses}
                addPrice={addPrice}
            ></Courses>
            <InteractivePart
                totalPrice={totalPrice}
                totalHour={totalHour}
                remainingHour={remainingHour}
                selectedCourses={selectedCourses}
            ></InteractivePart>
        </div>
    );
};

// Main.propTypes = {}
export default Main;




