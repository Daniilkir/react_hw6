import React from "react"
import { EventsCard, EventsContainer } from "./Events"
import { MdOutlinePlace } from "react-icons/md";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";


export const Events = ({ events }) => {
  return (
    <div>
    <EventsContainer>
      {events.map((event, index) => (
        <EventsCard key={index}>
          <h2>{event.name}</h2>
          <p><MdOutlinePlace/>Location: {event.location}</p>
          <p><CiMicrophoneOn/>Speaker: {event.speaker}</p>
          <p><CiMoneyBill/>Type: {event.type}</p>
          <p><IoTimeOutline />Start Time: {event.time.start}</p>
          <p><IoTimeOutline />End Time: {event.time.end}</p>
        </EventsCard>
      ))}
    </EventsContainer>
    </div>
  );
};