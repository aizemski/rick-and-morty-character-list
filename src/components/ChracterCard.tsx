import { Card, Typography } from '@mui/material';
import { ICharacter } from '../utils/types';

const CharacterCard = (props: ICharacter) => {
    const {
        id,
        name,
        image,

    } = props;
    return <Card key={id} sx={{m:1}} >
        <div><img src={image} alt={`image-${name}`}/></div>
        <Typography textAlign={'center'} >{name}</Typography>
    </Card>
};
export default CharacterCard