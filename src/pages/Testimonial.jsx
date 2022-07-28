import {useEffect, useState} from 'react';
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://r2h-ecom-backend.herokuapp.com/contacts')
            .then(response => response.json())
            .then(json => {
                setTestimonials(json);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }
    , []);
    return (
        <ul className="testimonial__list">
            {loading ? <h1>Loading...</h1> : null}
            {error ? <h1>Error</h1> : null}
            {testimonials.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial}/>)}
        </ul>
    )
}