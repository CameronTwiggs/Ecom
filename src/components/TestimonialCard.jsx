export default function TestimonialCard(props) {
    console.log(props);
    return (
        <li className="testimonial__card">
            <p className="testimonial__name">{props.testimonial.contact_name}</p>
            <p className="testimonial__summary">{props.testimonial.contact_message}</p>
        </li>
    )
}