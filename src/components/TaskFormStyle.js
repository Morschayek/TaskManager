import { styled } from '@mui/system';

export const TaskFormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center', 
  alignItems: 'center', 
  margin: '16px',
  fontFamily: '"Open Sans Condensed", sans-serif',
});

export const TaskInput = styled('input')({
  flex: 1,
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  margin: '8px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.5)', 
});

export const AddButton = styled('button')({
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '8px 16px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.5)',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#357a38',
  },
});
