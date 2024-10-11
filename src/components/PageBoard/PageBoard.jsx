import { PageBoardWrapper, EventGrid, Title } from "./PageBoard.js";
import { Events } from "../Events/Events.jsx";

export const PageBoard = ({ events }) => {
    return (
    <div>
      <PageBoardWrapper>
        <Title>24th Core Worlds Coalition Conference</Title>
        <EventGrid>
        <Events events={events} />
        </EventGrid>
      </PageBoardWrapper>
      </div>
    );
  };
