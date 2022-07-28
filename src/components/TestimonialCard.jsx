export default function TestimonialCard(props) {
    return (
        <li className="testimonial__card">
            <img className="testimonial__avatar" src={urlify(props.testimonial.contact_name)} alt="avatar" />
            <div className="testimonial__content">
                <p className="testimonial__name">{props.testimonial.contact_name}</p>
                <p className="testimonial__summary">{props.testimonial.contact_message}</p>
            </div>
        </li>
    )
}


function urlify(name) {
    let plused = name.replace(/ /g, '+');
    return `https://ui-avatars.com/api/?name=${plused}&background=random`;
}