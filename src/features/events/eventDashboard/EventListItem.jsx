import React from 'react';
import { Item, Segment, SegmentGroup, Button, List, Icon, ItemHeader } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({event}) {

    return (
      <SegmentGroup>
          <Segment>
              <Item.Group>
                  <Item>
                      <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                      <Item.Content>
                          <ItemHeader content={event.title} />
                          <Item.Description>
                              {event.hostedBy}
                          </Item.Description>
                          
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
                  {event.attendees.map(attendee => (
                      <EventListAttendee attendee={attendee} key={attendee.id}/>
                  ))}
              </List>
          </Segment>
          <Segment clearing>
              <div>{event.description}</div>
              <Button color='teal' floated='right' content='View'/>
          </Segment>
      </SegmentGroup>
    )
}