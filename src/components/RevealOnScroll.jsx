import { useEffect, useRef } from "react"

export const RevealOnScroll = ({children}) => {

    const Ref = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting){
                Ref.current.classList.add("visible")
            }

        }, {threshold:0.2 , rootMargin: "0px 0px -50px 0px"})
        if (Ref.current) observer.observe(Ref.current);
        
        return () => observer.disconnect();


    })

    return <div ref = {Ref} className="reveal"> {children} </div>

}