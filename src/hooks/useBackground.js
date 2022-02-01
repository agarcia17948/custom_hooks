import { useMemo} from 'react';
import { useMousePosition } from './useMousePosition';

export const useBackground =()=>{

    const position = useMousePosition();
    
    const fondo = useMemo(()=>
    position.x < window.innerWidth/2 ? 'pink': 'orange',
    [position]);

    //return fondo;
    return {fondo, position};

}