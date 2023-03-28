import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const HeartSvg = () => (
  <svg
    width="34"
    height="34"
    viewBox="-1 -5 35 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.46575 11.7514C4.46311 8.21684 7.71195 5.62695 11.5539 5.62695C13.6667 5.62695 15.5157 6.52011 16.9921 7.81016C18.4689 6.51974 20.3178 5.62695 22.4303 5.62695C26.4528 5.62695 29.8262 8.4677 30.645 12.2576C30.7975 12.8392 30.8591 13.4278 30.8487 14.0078C30.8277 15.2303 30.5155 16.4083 30.1151 17.4368C28.9583 20.4127 26.831 23.0945 24.4415 25.0741C22.052 27.0536 19.4142 28.3726 16.9901 28.3726C14.5768 28.3726 11.9583 27.064 9.5803 25.0978C7.21016 23.1381 5.0963 20.4817 3.91465 17.5337C3.08568 15.7234 2.9249 13.6667 3.46575 11.7514Z"
      fill="url(#paint0_linear_14_83)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_14_83"
        x1="26.6689"
        y1="-1.59633"
        x2="7.88751"
        y2="24.0892"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF957D" />
        <stop offset="1" stopColor="#F85C5C" />
      </linearGradient>
    </defs>
  </svg>
);

export const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);

const PremiumSvg = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.0534 16.5199L33.96 21.5732C33.9467 22.2666 34.3867 23.1866 34.9467 23.5999L38.2534 26.1066C40.3734 27.7066 40.0267 29.6666 37.4934 30.4666L33.1867 31.8132C32.4667 32.0399 31.7067 32.8266 31.52 33.5599L30.4934 37.4799C29.68 40.5732 27.6534 40.8799 25.9734 38.1599L23.6267 34.3599C23.2 33.6666 22.1867 33.1466 21.3867 33.1866L16.9334 33.4132C13.7467 33.5732 12.84 31.7332 14.92 29.3066L17.56 26.2399C18.0534 25.6666 18.28 24.5999 18.0534 23.8799L16.6934 19.5599C15.9067 17.0266 17.32 15.6266 19.84 16.4532L23.7734 17.7466C24.44 17.9599 25.44 17.8132 26 17.3999L30.1067 14.4399C32.3334 12.8532 34.1067 13.7866 34.0534 16.5199Z"
      fill="url(#paint0_linear_14_264)"
    />
    <path
      d="M39.5866 38.2934L35.5466 34.2534C35.1599 33.8667 34.5199 33.8667 34.1333 34.2534C33.7466 34.64 33.7466 35.28 34.1333 35.6667L38.1733 39.7067C38.3733 39.9067 38.6266 40 38.8799 40C39.1333 40 39.3866 39.9067 39.5866 39.7067C39.9733 39.32 39.9733 38.68 39.5866 38.2934Z"
      fill="url(#paint1_linear_14_264)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_14_264"
        x1="35.7424"
        y1="5.29889"
        x2="13.0168"
        y2="30.329"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#07C6FD" />
        <stop offset="1" stopColor="#199AFB" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_14_264"
        x1="38.9659"
        y1="32.0463"
        x2="33.7698"
        y2="37.8786"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#07C6FD" />
        <stop offset="1" stopColor="#199AFB" />
      </linearGradient>
    </defs>
  </svg>
);

export const PremiumIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PremiumSvg} {...props} />
);

const UnlikeSvg = () => (
  <svg
    width="50"
    height="54"
    viewBox="0 4 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.0614 19.9386C33.4763 19.3538 32.528 19.3538 31.9429 19.9386L27.0094 24.8722L22.0759 19.9386C21.488 19.3709 20.5536 19.379 19.9757 19.9569C19.3978 20.5348 19.3896 21.4692 19.9574 22.0571L24.8909 26.9906L19.9574 31.9241C19.568 32.3003 19.4118 32.8573 19.5489 33.3811C19.686 33.905 20.095 34.314 20.6189 34.4511C21.1427 34.5882 21.6997 34.432 22.0759 34.0426L27.0094 29.1091L31.9429 34.0426C32.5308 34.6104 33.4652 34.6022 34.0431 34.0243C34.621 33.4464 34.6291 32.512 34.0614 31.9241L29.1278 26.9906L34.0614 22.0571C34.6462 21.472 34.6462 20.5237 34.0614 19.9386Z"
      fill="#22313F"
    />
  </svg>
);

export const UnlikeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UnlikeSvg} {...props} />
);

const InfoSvg = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6667 17.3332C14.2994 17.3332 14.0001 17.0345 14.0001 16.6665V11.9998C14.0001 11.2632 13.4034 10.6665 12.6667 10.6665H9.33341C8.96541 10.6665 8.66675 10.9652 8.66675 11.3332C8.66675 11.7012 8.96141 11.9998 9.33341 11.9998C9.70541 11.9998 10.0001 12.2985 10.0001 12.6665V16.6665C10.0001 17.0345 9.71008 17.3332 9.33341 17.3332C8.95675 17.3332 8.66675 17.6318 8.66675 17.9998C8.66675 18.3678 8.96541 18.6665 9.33341 18.6665H14.6667C15.0347 18.6665 15.3334 18.3678 15.3334 17.9998C15.3334 17.6318 15.0341 17.3332 14.6667 17.3332Z"
      fill="#4E5A65"
    />
    <path
      opacity="0.35"
      d="M12 9.3335C13.1046 9.3335 14 8.43807 14 7.3335C14 6.22893 13.1046 5.3335 12 5.3335C10.8954 5.3335 10 6.22893 10 7.3335C10 8.43807 10.8954 9.3335 12 9.3335Z"
      fill="#4E5A65"
    />
  </svg>
);

export const InfoIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={InfoSvg} {...props} />
);

const downIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#paint0_linear_54_416)" />
    <path
      opacity="0.35"
      d="M19.9999 6.66683C12.6361 6.66683 6.66659 12.6364 6.66659 20.0002C6.66659 27.364 12.6361 33.3335 19.9999 33.3335C27.3637 33.3335 33.3333 27.364 33.3333 20.0002C33.3333 12.6364 27.3637 6.66683 19.9999 6.66683Z"
      fill="white"
    />
    <path
      d="M26.6667 18.3332C26.6667 18.8452 26.4721 19.3572 26.0814 19.7478L21.4147 24.4145C20.6347 25.1958 19.3667 25.1958 18.5867 24.4145L13.9201 19.7478C13.1387 18.9665 13.1387 17.7012 13.9201 16.9198C14.7001 16.1385 15.9681 16.1385 16.7481 16.9198L20.0001 20.1718L23.2521 16.9198C24.0321 16.1385 25.3001 16.1385 26.0801 16.9198C26.4721 17.3092 26.6667 17.8212 26.6667 18.3332Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_54_416"
        x1="32.1429"
        y1="-13.8182"
        x2="8.86427"
        y2="80.8996"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7B61FF" />
        <stop offset="1" stopColor="#7537FA" />
      </linearGradient>
    </defs>
  </svg>
);

export const DownIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={downIcon} {...props} />
);
