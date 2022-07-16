import { Card, Typography } from '@mui/material';
import { ICharacter } from '../utils/types';

const CharacterCard = (props: ICharacter) => {
    const {
        id,
        name,
        image,

    } = props;
    return <Card key={id} sx={{ m: 1 }}  >
        <img style={{ width: 300, height: 300 }} src={image} alt={`image-${ name }`} />
        <Typography textAlign={'center'} >{name}</Typography>
    </Card>
};
export default CharacterCard