import { Typography } from '@mui/material';

import { createView } from '@/shared/lib/view';

const HomePage = createView().view(() => (
  <Typography>Hello world from HomePage</Typography>
));

export { HomePage };
