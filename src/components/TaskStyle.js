import { styled } from '@mui/system';

export const TaskContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between', 
  alignItems: 'center', 
  padding: '10px',
  backgroundColor: 'white',
  marginBottom: '10px',
  fontFamily: '"Open Sans Condensed", sans-serif',
});

export const TaskInfo = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column', 
  gap: '4px', 
  maxWidth: '80%', 
  wordWrap: 'break-word',
  whiteSpace: 'normal',
});

export const TaskButtons = styled('div')({
  display: 'flex',
  gap: '10px',
});

export const TaskInput = styled('input')({
  flex: 1,
  padding: '8px',
  fontSize: '16px',
  border: 'none',
});

export const StyledButton = styled('button')({
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '8px 16px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.5)',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#357a38',
  },
});

export const EditButton = styled(StyledButton)({
  backgroundColor: '#1976D2',
  '&:hover': {
    backgroundColor: '#1257A6',
  },
});

export const DeleteButton = styled(StyledButton)({
  backgroundColor: '#D32F2F',
  '&:hover': {
    backgroundColor: '#9A0007',
  },
});
