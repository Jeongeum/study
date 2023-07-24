import { styled } from 'styled-components';

export const TextCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 322px;
  margin-bottom: 16px;
`;
export const TextLabel = styled.label`
  font-size: 12px;
`;

export const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0 8px 0;

  &:focus {
    outline: none;
    border-bottom: 1px solid #f26e22;
  }
`;
