import { Box, Input } from '@mui/material';
import { Props } from '../utils/types';

const ChangeNameInput: React.FC<Props> = (props) => {
    const {onChange}= props;
    return <Box >
      <Input type='outlined' aria-label='serach' placeholder='Search' onChange={onChange} />
    </Box>
};
export default ChangeNameInput