import { Card, Typography } from '@mui/material';

const NoResult = () => {

    return <Card key={-1} sx={{ m: 1, p:4}}  >
        <Typography textAlign={'center'} >There is no results</Typography>
    </Card>
};
export default NoResult