
import { useState } from 'react';
import {Input} from './styles';

export default function SearchbarComponent({onSearch}){
    const [fnTimeOut, setFnTimeOut] = useState(null);

    function handlerSearch(InputValue){
        clearTimeout(fnTimeOut);
        const fn = setTimeout(
            () => onSearch(InputValue), 
        600);

        setFnTimeOut(fn);
    }

    return (
        <Input placeholder="Pesquisar..." onChange={(event) => handlerSearch(event.target.value)}></Input>
    )

}