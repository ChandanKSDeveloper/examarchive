/*
    'useIsVisible' Custom Hook

    Purpose -> The useIsVisible custom hook is designed to determine if a specified DOM element is currently visible within the viewport of a React application. It utilizes the IntersectionObserver API, a modern web API that efficiently detects when an element enters or exits the viewport.

*/


// Importing Dependencies
import { useEffect,useState } from "react";

// Defining 'useIsVisible' hook

export const UseIsVisible = (ref) => {

    // useState initializes isIntersecting to false and provides a function setIntersecting to update this state.
    //This state (isIntersecting) will track whether the observed element (referenced by ref) is intersecting with the viewport.
    const [isIntersecting, setIntersecting] = useState(false);


    /*
        'useEffect' is called with a function that creates an 'IntersectionObserver' instance. 

        'IntersectionObserver' is an API that detects when one element (the target) intersects with another element or viewport. When an intersection occurs, it updates the state 'isIntersecting' using 'setIntersecting'.

        This setup allows us to listen for changes in visibility of the referenced element (ref.current) efficiently. Without this line, the observer wouldn't be instantiated, and we wouldn't be able to detect intersection changes.
    */
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        });

        //  Here, we check if ref.current exists (meaning the component has rendered and ref is valid). If it does, we instruct the observer to start observing ref.current. This means the observer will watch for changes in the visibility of this element.
    
        // This step ensures that the observer is correctly set up to monitor the element's visibility changes. If you skip this check, the observer might attempt to observe a non-existent element, leading to errors.
    
        if(ref.current){
            observer.observe(ref.current);
        }
    

        // The 'useEffect' hook returns a cleanup function. This function is automatically called when the component unmounts or when 'ref' changes (due to the dependency '[ref]' ). It disconnects the 'observer', stopping it from watching for intersection changes.

        // This cleanup is essential to prevent memory leaks and ensure that resources used by the IntersectionObserver are released when they are no longer needed.
        return () => {
            observer.disconnect();
        };
    },[ref]);

    return isIntersecting;

}

// Conclusion => The useIsVisible custom hook provides a straightforward way to implement visibility-based behavior in React components, leveraging modern web APIs for efficient performance and clean code organization.
