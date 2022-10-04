import styled from '@emotion/styled';

export const Card = styled.section`
  border: 2px yellow solid;
  width: 500px;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: sienna;
  background-color: bisque;
  margin: 0;
  padding: 10px;
`;

export const List = styled.ul`
  display: flex;
  gap: 60px;
  background-color: antiquewhite;
  margin: 0;
  border: 3px dashed yellow;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;
