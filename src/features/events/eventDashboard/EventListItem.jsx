import React from "react";
import {
  Item,
  Segment,
  SegmentGroup,
  Button,
  List,
  Icon,
  ItemHeader
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({ event, selectEvent, deleteEvent }) {

  return (
    <SegmentGroup>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <ItemHeader content={event.title} />
              <Item.Description>{event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.city}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          as={Link} to={`/events/${event.id}`} 
          color='teal'
          floated='right'
          content='View'
        />
        <Button
          onClick={() => {
            deleteEvent(event.id)
          }}
          color='red'
          floated='right'
          content='Delete'
        />
      </Segment>
    </SegmentGroup>
  )
}
