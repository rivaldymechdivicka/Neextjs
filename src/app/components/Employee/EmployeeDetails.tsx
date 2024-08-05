import { Avatar, Box, Stack, Typography } from '@mui/material';
import { DATA } from '../../data/employeData';

const EmployeeDetails = () => (
  <Stack direction="row" alignItems="center">
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" sx={{ py: 1 }}>
        <strong>{DATA.employee.name}</strong>
      </Typography>
      <Typography variant="subtitle1">{DATA.employee.position}</Typography>
      <Typography variant="subtitle2">{DATA.employee.email}</Typography>
    </Box>
    <Box>
      <Avatar src={DATA.employee.image} sx={{ height: 150, width: 150 }}>
        Talent Image
      </Avatar>
    </Box>
  </Stack>
);

export default EmployeeDetails;
