import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { DATA } from '../../data/employeData';

const EducationHistory = () => (
  <Table size="small">
    <TableHead>
      <TableRow>
        {['School', 'Degree', 'Subject', 'From', 'To'].map((o) => (
          <TableCell key={o} sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>{o}</strong>
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {DATA.histories.education.map((o, i) => (
        <TableRow key={i}>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.school}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.degree}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.subject}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.from}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.to}</Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default EducationHistory;
