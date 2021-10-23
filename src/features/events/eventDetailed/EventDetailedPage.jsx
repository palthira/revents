import React from 'react';
import { Grid, GridColumn } from "semantic-ui-react";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSideBar from "./EventDetailedSideBar";
import EventDetailedInfo from "./EventDetialedInfo";
import EventDetailedHeader from "./EventDetailedHeader";

export default function EventDetailedPage() {

    return (
        <Grid>
        <GridColumn width={10}>
            <EventDetailedHeader />
            <EventDetailedInfo />
            <EventDetailedChat />
        </GridColumn>
        <GridColumn width={6}>
            <EventDetailedSideBar />
        </GridColumn>
    </Grid>
    )
}