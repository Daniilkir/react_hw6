import styled from "styled-components";

export const EventsContainer = styled.div`
  background-color: gray;
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px; 
  margin: 0 auto;
  border-radius:20px;  
`;

export const EventsCard = styled.div`
  background-color: orange;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  width: 240px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 18px;
    color: #333;
  }

  p {
    display:flex;
    font-size: 14px;
    color: #555;
    margin: 5px 0;
  }
`;
