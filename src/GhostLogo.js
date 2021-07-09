import {ReactComponent as Logo} from './static/logo/spooky.svg';

const GhostLogo = ({height, width, fillColor}) => {
    return(
        <Logo height={height} width={width} fill={fillColor}/>
    )
}
export default GhostLogo;

