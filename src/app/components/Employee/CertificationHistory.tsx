import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { DATA } from '../../data/employeData'

const CertificationHistory = () => (
  <Table size="small">
    <TableHead>
      <TableRow>
        {['Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((o) => (
          <TableCell key={o} sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>{o}</strong>
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {DATA.histories.certification.map((o, i) => (
        <TableRow key={i}>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.title}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.provider}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.date}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.duration}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.certificate}</Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CertificationHistory;
