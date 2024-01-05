import { SVGProps } from "react"

export const SVGBurger = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2rem" height="2rem">
        <rect y="11" width="24" height="3" />
        <rect y="4" width="24" height="3" />
        <rect y="18" width="24" height="3" />
    </svg>

);

export const SVGCross = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2rem" height="2rem">
        <polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061" />
    </svg>
);
