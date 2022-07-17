import { Box } from '@mui/material';
import { Props } from '../utils/types';

const SearchFromContainer: React.FC<Props> = (props) => {

    return <Box sx={{ width: '100%', display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
        {props.children}
    </Box>
};
export default SearchFromContainer