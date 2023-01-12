export const Feedback = () => {
    return (<section className="feedback">
        <h2 className="hidden">Feedback</h2>
        <div className="container feedback_inside">
            <div className="feedback_reference"><img src="/img/feedback_avatar.png" alt="face" />
                <p className="reference_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <i>a pulvinar purus condimentum</i>“</p>
            </div>
            <div className="feedback_form_wrap">
                <h3 className="subscribe_title">Subscribe<br />
                    <span className="subscribe_title_small">for our newsletter and promotion</span>
                </h3>
                <form action="#" method="post" className="feedback_form">
                    <input className="feedback_input feedback_email" type="email" required
                        placeholder="Enter Your Email" /><button className="feedback_input feedback_subscribe"
                            type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    </section>)
}
