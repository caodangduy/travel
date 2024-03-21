import ContactStyle from './ContactStyle.css';

function ContactForm() {
    return(
        <div className='from-container'>
            <h1>Send a massage to us!</h1>
            <form>
                <input placeholder='Name'></input>
                <input placeholder='Email'></input>
                <input placeholder='Subject'></input>
                <input placeholder='Name'></input>
                <textarea placeholder='Message' rows='4'></textarea>
                <button>Send Messsage</button>
            </form>
        </div>
    )
}
export default ContactForm;