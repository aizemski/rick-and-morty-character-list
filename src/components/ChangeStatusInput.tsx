import { Box,  FormControlLabel, Radio, RadioGroup, Typography,  } from "@mui/material";
import { Props } from '../utils/types';

const ChangeStatusInput: React.FC<Props> = (props) => {
    const {onChange}= props;
    return <Box sx={{display: 'flex'}}>
      <Typography sx={{mt:1}} >Character status:&nbsp;</Typography>
      <RadioGroup
        defaultValue=""
        name="radio-buttons-group"
        onChange={onChange}
        row
      >
        <FormControlLabel value="" control={<Radio />} label="Any" />
        <FormControlLabel value="Alive" control={<Radio />} label="Alive" />
        <FormControlLabel value="Dead" control={<Radio />} label="Dead" />
        <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
      </RadioGroup>
    </Box>
};
export default ChangeStatusInput