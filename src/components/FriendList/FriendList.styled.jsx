import styled from '@emotion/styled';

export const List = styled.ul`
  width: 250px;
  border: 3px solid yellow;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding: 0;

  text-align: center;
  margin-top: 70px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  border: 2px solid yellow;
  background-color: burlywood;
`;

export const Offline = styled.span`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const Online = styled.span`
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  margin-bottom: 10px;
  margin-top: 10px;
`;
