import type { SVGProps } from "react";

const NeovimIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="120px"
    height="150px"
    viewBox="0 0 120 150"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
        <stop stopColor="#16B0ED" stopOpacity={0.800235524} offset="0%" />
        <stop stopColor="#0F59B2" stopOpacity={0.83700023} offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
        <stop stopColor="#7DB643" offset="0%" />
        <stop stopColor="#367533" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3">
        <stop stopColor="#88C649" stopOpacity={0.8} offset="0%" />
        <stop stopColor="#439240" stopOpacity={0.84} offset="100%" />
      </linearGradient>
    </defs>
    <g>
      <g>
        <g>
          <path
            d="M0.0188037914,32.1877871 L31.3322156,0.572985361 L31.332215,147.571242 L0.0188037914,116.321577 L0.0188037914,32.1877871 L0.0188037914,32.1877871 Z"
            fill="url(#linearGradient-1)"
          />
          <path
            d="M89.4837594,32.4862691 L121.226122,0.590059535 L120.582695,147.571242 L89.269284,116.321577 L89.4837594,32.4862691 L89.4837594,32.4862691 Z"
            fill="url(#linearGradient-2)"
            transform="translate(105.247703, 74.080651) scale(-1, 1) translate(-105.247703, -74.080651) "
          />
          <path
            d="M31.3113362,0.598133687 L112.722926,124.829189 L89.9415068,147.610037 L8.48731391,23.6539656 L31.3113362,0.598133687 L31.3113362,0.598133687 Z"
            fill="url(#linearGradient-3)"
          />
          <path
            d="M31.3393522,58.2198072 L31.2960504,63.112906 L6.15984438,26.0032984 L8.48731391,23.6323156 L31.3393522,58.2198072 L31.3393522,58.2198072 Z"
            fillOpacity={0.13}
            fill="#000000"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default NeovimIcon;
