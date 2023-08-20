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

