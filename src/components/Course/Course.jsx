import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import './Course.css'

const Course = ({ course, addPrice }) => {
    const { image_url, title, description, price, credit_hour } = course;
    return (
        <div className='course-card'>
            <img className='card-image' src={image_url} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='key-info-container'>
                <div className='key-info'>
                    <span><FaDollarSign></FaDollarSign></span><p> Price: {price}</p>
                </div>
                <div className='key-info'>
                    <span><FiBookOpen></FiBookOpen></span><p> Credit: {credit_hour}hr</p>
                </div>
            </div>
            <button onClick={() => addPrice(price, credit_hour, title)} className='card-btn' >Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    addPrice: PropTypes.func.isRequired,
};

export default Course;