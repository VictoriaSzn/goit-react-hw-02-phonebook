import React, {Component} from "react";
import PropTypes from "prop-types";

class ContactForm extends Component{
    state = {
        name: '',
        number: '' 
    }
    inputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({[name]: value});
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
      this.props.onSubmitForm(this.state);
      this.reset();
    }
    reset = () => {
        this.setState({ name: '', number: '' });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
          <label>Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.inputChange} />
          </label>
          <label>Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.inputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
         );
    }
}
// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
export default ContactForm;