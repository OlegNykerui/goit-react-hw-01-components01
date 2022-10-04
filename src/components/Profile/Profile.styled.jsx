import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;

  display: block;
  margin-left: auto;
  margin-right: auto;

  border: 3px solid yellow;

  margin-top: 20px;
  border-radius: 5%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: burlywood;
  padding-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 140px;
  height: 150px;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 3px solid #cabaa2;
  padding: 0;
  margin-top: 20px;
`;

export const Username = styled.p`
  margin: 0;
  color: black;
  font-size: large;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-top: 4px;
  margin-bottom: 0px;
  font-weight: 400px;
  color: gray;
`;

export const Location = styled.p`
  margin-top: 4px;
  margin-bottom: 0px;
  font-weight: 400px;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  padding: 16px;
  background-color: antiquewhite;
  margin: 0px;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  list-style: none;
  border: 2px solid silver;
  border-radius: 10px;
  padding: 10px;
`;
