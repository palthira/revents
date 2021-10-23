
import React, { useState } from "react";
import { FormField, Header, Segment, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function EventForm( { updatedEvent }) {
  const initialValues = {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

/*   function handleFormSubmit() {
    selectedEvent ? updatedEvent({...selectedEvent, ...values}) :
    createEvent({...values, id: cuid(), hostedBy: 'Raj', attendees: [], hostPhotoURL: 'assets/user.png'});
    setFormOpen(false);
  } */
  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content = 'Create New Event' />
      <Form>
        <FormField>
          <input
            type='text'
            placeholder='Event Title'
            name='title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <Button type='submit' floated='right' positive content='Create'  />
        <Button
          as = {Link} to={'/events'}
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
