import {ReactComponent as Logo} from './spooky.svg';
import { teal, pink, white, black } from '@material-ui/core/colors';


export default function GhostLogo(height, width) {

    return(
        <Logo height={height} width={width} fill={fillColor}/>
    )
}

