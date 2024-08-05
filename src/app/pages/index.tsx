import Layout from '../components/Layout/Layout';
import EmployeeDetails from '../components/Employee/EmployeeDetails';
import EmploymentHistory from '../components/Employee/EmploymentHistory';
import EducationHistory from '../components/Employee/EducationHistory';
import CertificationHistory from '../components/Employee/CertificationHistory';
import ProjectHistory from '../components/Employee/ProjectHistory';
import { Box, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material';

const Page: React.FC = () => (
  <Layout>
    <Box className="page-content">
      <Stack alignItems="center">
        <Box className="grid-container" sx={{ py: 2 }}>
          <EmployeeDetails />
          <Grid container spacing={2} sx={{ pt: 3 }}>
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">
                    <strong>Employee History</strong>
                  </Typography>
                  <Divider />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2">
                        <strong>Employment History</strong>
                      </Typography>
                      <EmploymentHistory />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2">
                        <strong>Education History</strong>
                      </Typography>
                      <EducationHistory />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2">
                        <strong>Certification History</strong>
                      </Typography>
                      <CertificationHistory />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2">
                        <strong>Project History</strong>
                      </Typography>
                      <ProjectHistory />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  </Layout>
);

export default Page;
