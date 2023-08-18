import { styled } from '@mui/system';

export const TaskListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '20px',
  width: '100%',
  fontFamily: '"Open Sans Condensed", sans-serif',
});

export const TaskContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: 'white',
  marginBottom: '10px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.5)',
});

export const TaskButtons = styled('div')({
  display: 'flex',
  gap: '10px',
});

export const TaskFormStyles = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  marginBottom: '20px',
});

export const StyledButton = styled('button')({
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#357a38',
  },
});
