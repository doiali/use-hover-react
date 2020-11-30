import { useEffect, useRef, useState } from 'react' ;

export default function useMouseHover() {
    const ref = useRef<HTMLElement>(null) ;
    const [isHovering,setIsHovering] = useState(false);
    
    useEffect(()=>{
        const node: HTMLElement | null = ref.current ;
        if( null !== node) {
            const handleMouseEnter = () => setIsHovering(true);
            const handleMouseLeave = () => setIsHovering(false);
            node.addEventListener('mouseenter',handleMouseEnter);
            node.addEventListener('mouseleave',handleMouseLeave);
            return () => {
                node.removeEventListener('mouseenter',handleMouseEnter) ;
                node.removeEventListener('mouseleave',handleMouseLeave) ;
            }
        } else {
            return ;
        }
    },[ref]);

    return [isHovering , ref];
}