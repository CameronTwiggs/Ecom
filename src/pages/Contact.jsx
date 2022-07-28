export default function Contact() {
    return (
        <>
  <section className="main__section  form__main">
    <h1 className="form__title terminal terminal--blue">~$ Contact || Feedback...</h1>
    <p className="form__subtitle"> Please feel free to reach out for any questions and/or to leave feedback on the site or products.</p>
    <p className="form__subtitle"> We will respond to your message as soon as possible.</p>
    <form action="https://r2h-ecom-backend.herokuapp.com/contacts" method="post">
      <div className="form__image"></div>
      <label htmlFor="name">Name:</label>
      <input placeholder="Name..." type="text" name="name" id="name" />
      <label htmlFor="email">Email:</label>
      <input placeholder="Email..." type="email" name="email" id="email" />
      <label htmlFor="message">Message:</label>
      <textarea
        placeholder="Say something nice..."
        name="message"
        id="message"
        cols={30}
        rows={100}
        defaultValue={""}
      />
      <input type="submit" id="submit" />
    </form>
  </section>
</>
    )
}