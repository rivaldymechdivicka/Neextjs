import { Box, Chip, Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { DATA } from '../../data/employeData';

const ProjectHistory = () => (
  <Table size="small">
    <TableBody>
      {DATA.histories.project.map((o, i) => (
        <TableRow key={i}>
          <TableCell sx={{ p: 0 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Chip label={`${o.from} - ${o.to}`} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body2">
                  <strong>{o.projectName}</strong> - <strong>{o.customer}</strong> - {o.role}
                </Typography>
                <Typography variant="caption">{o.projectDescription}</Typography>
                <Typography variant="caption">{o.technicalInformation}</Typography>
                <Typography variant="caption">{o.jobDescription}</Typography>
              </Box>
            </Stack>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ProjectHistory;
