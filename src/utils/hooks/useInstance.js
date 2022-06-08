import { useRef } from "react";



// when the component is re-rendered it automatically creates a  new instance,
// by using this hook it saves the instance, so only one is intanstiated.


export function useInstance(instance) {
    const ref = useRef(null);

    if (ref.current === null) {
        ref.current = instance;
    }
    return ref.current;
}