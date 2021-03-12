
import {Button, Container, Logo} from './styles';

export default function MenuComponent({fnOnClick}){
    return (
        <Container>
            <Logo/>
            <Button onClick={fnOnClick}>CADASTRAR</Button>
        </Container>
    );
}