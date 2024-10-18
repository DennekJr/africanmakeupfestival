export const PreviousSlide = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button onClick={handleClick} className="review-swiper-button-prev inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent h-[30.25px] w-[30.25px] lg:h-16 lg:w-16 rounded-full !border-[#504E56] !text-[#504E56]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-left h-4 w-4"
      >
        <path d="m15 18-6-6 6-6"></path>
      </svg>
      <span className="sr-only">Previous slide</span>
    </button>
  );
};

export const NextSlide = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button onClick={handleClick} className="review-swiper-button-next inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent h-[30.25px] w-[30.25px] lg:h-16 lg:w-16 rounded-full !border-[#504E56] !text-[#504E56]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-right h-4 w-4"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
      <span className="sr-only">Next slide</span>
    </button>
  );
};

export const TestimonialsUnderscore = () => {
  return (
    <svg
      width="229"
      height="41"
      viewBox="0 0 229 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 -bottom-10"
    >
      <g clipPath="url(#clip0_516_3736)">
        <path
          d="M219.413 6.29913C218.557 6.49001 217.787 6.49001 216.931 6.68089C215.818 6.87178 214.706 7.25354 213.507 7.44443C211.624 7.82619 209.741 8.58972 207.944 9.54414C205.975 10.6894 204.092 12.2165 202.294 14.3162C201.952 14.698 201.609 15.2706 201.181 15.4615C200.753 15.8433 200.411 16.225 199.983 16.6068C199.384 17.1794 198.87 17.5612 198.271 17.943C197.586 18.3247 196.902 18.7065 196.217 18.8974C195.618 19.0883 195.019 19.0883 194.419 19.0883C193.82 19.0883 193.307 18.8974 192.708 18.8974C191.937 18.7065 191.167 18.3247 190.396 17.7521C189.626 17.1794 188.856 16.6068 188.085 15.8433C186.801 14.5071 185.518 12.98 184.234 11.453C183.634 10.6894 183.121 9.9259 182.522 8.97149C181.837 8.01707 181.152 7.06266 180.467 6.10825C179.954 5.34472 179.355 4.77207 178.755 4.19942C178.413 3.81765 177.985 3.62677 177.557 3.43589C177.129 3.24501 176.787 3.24501 176.359 3.05412C176.102 3.05412 175.845 3.05412 175.674 3.24501C175.332 3.43589 174.989 3.62677 174.647 3.81765C174.133 4.19942 173.62 4.77207 173.106 5.34472C172.079 6.49001 171.137 7.63531 170.11 8.7806C168.826 10.3077 167.628 11.6438 166.259 12.98C165.488 13.7436 164.632 14.3162 163.862 14.8888C162.749 15.6524 161.722 16.0341 160.609 16.4159C159.582 16.7977 158.469 16.7977 157.442 16.9886C156.244 16.9886 155.046 16.7977 153.847 16.4159C152.306 15.8433 150.851 15.2706 149.311 14.5071C147.941 13.7436 146.572 12.7891 145.288 11.6438C144.004 10.3077 142.72 8.97149 141.436 7.44443C139.981 5.72648 138.526 4.00854 136.985 2.86324C136.386 2.29059 135.787 2.09971 135.102 1.71794C134.417 1.33618 133.647 1.33618 132.876 1.33618C132.106 1.33618 131.421 1.71794 130.651 2.09971C129.88 2.48148 129.196 3.24501 128.511 4.00854C126.885 5.91736 125.429 8.39884 123.974 10.8803C123.118 12.4074 122.262 13.9344 121.406 15.4615C120.722 16.6068 119.951 17.943 119.181 19.0883C118.411 20.2336 117.555 21.188 116.699 22.1424C116.271 22.5242 115.928 22.9059 115.5 23.0968C114.987 23.4786 114.388 23.6695 113.874 23.8603C113.617 23.8603 113.446 23.8603 113.189 23.8603C113.018 23.8603 112.847 23.8603 112.676 23.8603C112.248 23.6695 111.82 23.2877 111.392 22.9059C109.851 21.188 108.396 19.0883 107.026 16.7977C106.342 15.6524 105.743 14.5071 105.143 13.1709C104.715 12.2165 104.287 11.453 103.859 10.4985C102.747 8.20796 101.72 5.5356 100.521 3.43589C100.008 2.67236 99.494 1.90883 98.8949 1.1453C98.5525 0.763531 98.2101 0.572648 97.8677 0.381765C97.7821 0.381765 97.6109 0.190883 97.5253 0.190883C97.2686 0.190883 97.0118 0 96.8406 0C96.755 0 96.5838 0 96.4982 0H96.4126C96.2414 0 95.9846 0 95.8134 0.190883C95.3855 0.381765 95.0431 0.572648 94.6151 0.763531C93.8447 1.33618 93.0744 1.90883 92.304 2.67236C91.7049 3.24501 91.1057 3.81765 90.5065 4.58118C90.0785 4.96295 89.6506 5.5356 89.2226 5.91736C88.5378 6.68089 87.9387 7.44442 87.2539 8.20796C86.9115 8.58972 86.5691 8.97149 86.3123 9.35325C85.7132 10.1168 85.114 11.0712 84.6004 11.8347C84.1725 12.4074 83.7445 12.98 83.3165 13.7436C82.2038 15.2706 81.1766 16.9886 80.0639 18.5156C77.7528 21.9515 75.3561 25.3874 72.7883 27.8689C72.1891 28.4415 71.6755 28.8233 71.0763 29.3959C70.3916 29.9686 69.6212 30.3503 68.8509 30.5412C68.5085 30.5412 68.2517 30.7321 67.9093 30.7321C67.3957 30.7321 66.9678 30.7321 66.4542 30.5412C65.7694 30.3503 65.0847 29.9686 64.4855 29.3959C63.8007 28.6324 63.116 27.678 62.5168 26.7236C61.4897 25.0056 60.6337 22.9059 59.7777 20.8062C59.3498 19.8518 58.9218 18.7065 58.4938 17.7521C57.9802 16.6068 57.3811 15.4615 56.8675 14.3162C56.3539 13.3618 55.9259 12.5983 55.3268 12.0256C54.8132 12.4074 54.4708 12.0256 54.1284 11.8347C53.7861 11.6438 53.4437 11.453 53.1013 11.453C52.8445 11.453 52.6733 11.453 52.4165 11.6438C52.0741 11.8347 51.8174 12.0256 51.475 12.4074C51.2182 12.7891 50.8758 13.1709 50.619 13.5527C50.3622 14.1253 50.1054 14.698 49.9343 15.2706C49.5063 16.4159 49.0783 17.5612 48.7359 18.7065C48.3935 19.6609 48.0512 20.4244 47.7944 21.3789C47.452 22.3333 47.024 23.4786 46.6816 24.433C45.9113 26.5327 45.0553 28.2506 44.1138 29.9686C43.429 31.1139 42.6586 32.0683 41.8883 33.0227C41.1179 33.5954 40.4332 33.9771 39.6628 34.3589C38.5501 34.5498 37.5229 34.5498 36.4102 34.3589C34.6983 33.7862 33.072 32.6409 31.4456 31.1139C29.9905 29.5868 28.621 28.0598 27.2515 26.1509C26.5667 25.1965 25.8819 24.2421 25.1972 23.0968C24.5124 22.1424 23.8276 20.9971 23.1429 20.0427C22.4581 18.8974 21.7733 17.943 21.0886 16.9886C20.4038 16.0341 19.6335 15.0797 18.8631 14.3162C17.408 12.7891 15.8673 11.8347 14.3265 12.0256C13.9842 12.0256 13.5562 12.2165 13.2138 12.2165C12.7858 12.4074 12.4434 12.5983 12.1011 12.7891C11.7587 12.98 11.4163 13.3618 11.1595 13.5527C10.8171 13.9344 10.4747 14.3162 10.1324 14.5071C8.33486 15.8433 6.87974 17.7521 5.51021 19.8518C4.31187 21.7606 3.11354 23.8603 2.08639 26.3418C1.57282 27.4871 1.14484 28.6324 0.716862 29.7777C0.545671 30.3503 0.37448 30.923 0.288885 31.6865C0.288885 31.8774 0.203289 32.2592 0.203289 32.4501C0.117694 33.0227 0.117694 33.5954 0.0320983 34.168C-0.0534972 34.9315 0.0320983 35.6951 0.288885 36.2677C0.545671 36.6495 0.888053 36.8404 1.23044 36.6495C1.48722 36.4586 1.65841 36.2677 1.9152 36.2677C2.25758 36.0768 2.51437 35.6951 2.85675 35.3133C3.28473 34.7407 3.45592 33.4045 3.19913 32.4501C3.02794 31.8774 2.85675 31.6865 2.59996 31.4956C3.45592 29.3959 4.39747 27.4871 5.33902 25.5783C6.96533 22.9059 8.67724 20.8062 10.4747 18.8974C10.9027 18.5156 11.3307 18.1339 11.7587 17.7521C12.2723 17.5612 12.8714 17.1794 13.385 16.9886C13.8986 16.7977 14.3265 16.7977 14.8401 16.9886C15.1825 17.1794 15.4393 17.1794 15.7817 17.3703C16.2952 17.7521 16.7232 18.1339 17.1512 18.5156C18.0071 19.47 18.8631 20.4244 19.6335 21.5697C20.575 22.9059 21.431 24.433 22.3725 25.96C23.2285 27.2962 24.17 28.8233 25.1116 30.1595C26.0531 31.4956 26.9947 32.8318 27.9362 33.9771C29.8193 36.2677 31.788 38.1765 33.7567 39.5127C35.811 40.8489 38.0365 41.4215 40.262 40.658C41.2891 40.2762 42.2307 39.7036 43.1722 38.9401C44.1138 37.9857 44.9697 37.0312 45.7401 35.6951C46.596 34.3589 47.3664 32.6409 48.1368 30.923C48.5647 29.9686 48.9071 29.0142 49.2495 28.0598C49.7631 26.5327 50.2766 25.1965 50.7902 23.6695C51.3894 21.9515 51.9885 20.0427 52.7589 18.3247C52.8445 18.3247 52.8445 18.1339 52.9301 18.1339C53.0157 18.1339 53.1013 17.943 53.1869 17.943H53.2725C53.4437 17.943 53.5293 18.1339 53.7005 18.1339C54.0428 18.5156 54.3852 18.8974 54.7276 19.47C55.6692 20.9971 56.4395 22.9059 57.2099 24.8148C58.237 27.1053 59.2642 29.5868 60.3769 31.6865C60.8905 32.6409 61.4041 33.4045 61.9176 34.168C62.5168 35.1224 63.2016 35.6951 63.8863 36.2677C64.4855 36.8404 65.1703 37.0312 65.855 37.413C66.6254 37.6039 67.4813 37.7948 68.2517 37.6039C68.9365 37.6039 69.6212 37.2221 70.2204 37.0312C70.9907 36.6495 71.7611 36.0768 72.5315 35.5042C73.9866 34.3589 75.3561 32.8318 76.64 31.3048C78.6087 29.0142 80.4062 26.1509 82.2038 23.4786C83.0597 22.1424 83.9157 20.8062 84.8572 19.47C85.8844 17.943 86.9115 16.6068 87.9387 15.0797C88.0242 14.8888 88.1954 14.698 88.281 14.698C88.6234 14.3162 88.9658 13.9344 89.3082 13.3618C89.8218 12.7891 90.3353 12.0256 90.9345 11.453C91.0201 11.2621 91.1913 11.2621 91.2769 11.0712C91.6193 10.6894 92.0472 10.3077 92.3896 9.9259C92.9888 9.35325 93.6735 8.58972 94.2727 8.01707C94.8719 7.44442 95.5566 7.06266 96.2414 6.68089C96.4126 6.68089 96.4982 6.68089 96.6694 6.68089C96.755 6.68089 96.9262 6.68089 97.0118 6.68089C97.2686 6.87178 97.5253 7.06266 97.8677 7.25354C98.2957 7.82619 98.7237 8.39884 99.1517 9.16237C100.436 11.6438 101.548 14.3162 102.747 16.7977C103.517 18.3247 104.287 19.8518 105.058 21.3789C105.828 22.715 106.598 23.8603 107.369 25.1965C108.225 26.5327 109.081 27.4871 109.937 28.6324C110.707 29.5868 111.649 30.1595 112.505 30.5412C112.933 30.7321 113.275 30.7321 113.703 30.5412C114.216 30.5412 114.73 30.3503 115.244 29.9686C116.1 29.5868 116.956 29.0142 117.726 28.2506C118.667 27.2962 119.523 26.3418 120.379 25.1965C121.578 23.4786 122.605 21.5697 123.718 19.6609C124.317 18.5156 125.001 17.3703 125.601 16.225C126.114 15.2706 126.628 14.5071 127.141 13.5527C128.254 11.6438 129.367 10.1168 130.651 8.7806C131.25 8.20796 131.849 7.82619 132.534 7.63531C132.876 7.63531 133.133 7.44443 133.475 7.44443C133.732 7.44443 133.989 7.44443 134.331 7.63531C135.359 8.01707 136.3 8.58972 137.242 9.35325C138.012 10.1168 138.868 11.0712 139.638 11.8347C140.152 12.4074 140.58 12.98 141.093 13.5527C141.521 14.1253 142.035 14.698 142.549 15.2706C143.49 16.225 144.432 17.1794 145.373 18.1339C146.4 19.0883 147.428 19.6609 148.455 20.2336C150.68 21.5697 152.906 22.3333 155.131 22.9059C156.244 23.2877 157.442 23.2877 158.555 23.2877C159.668 23.2877 160.78 22.9059 161.893 22.5242C163.862 21.9515 165.831 20.6153 167.714 18.8974C168.912 17.7521 170.025 16.4159 171.223 15.0797C172.593 13.5527 173.962 11.8347 175.417 10.3077C175.674 10.1168 176.016 9.9259 176.273 9.73502C176.444 9.73502 176.616 9.73502 176.787 9.73502C177.215 9.9259 177.557 10.1168 177.985 10.4985C179.269 11.8347 180.382 13.7436 181.58 15.4615C182.778 17.3703 184.062 18.8974 185.346 20.4244C186.63 21.9515 188 23.0968 189.369 24.2421C190.91 25.3874 192.536 25.96 194.163 26.1509C195.618 26.3418 197.073 25.96 198.442 25.1965C199.641 24.6239 200.839 23.4786 201.952 22.3333C202.465 21.7606 202.893 21.3789 203.407 20.8062C203.749 20.4244 204.006 20.0427 204.349 19.6609C204.776 19.0883 205.29 18.7065 205.718 18.1339C208.029 16.0341 210.426 14.8888 212.908 14.1253C214.192 13.7436 215.562 13.5527 216.931 13.1709C218.044 12.98 219.242 12.7891 220.355 12.5983C222.666 12.2165 225.063 11.8347 227.374 12.0256C228.315 12.0256 229 10.3077 229 8.39884C229 6.49001 228.23 4.77207 227.374 4.77207C225.576 4.77207 223.779 5.15383 222.067 5.34472C221.125 5.91736 220.269 6.10825 219.413 6.29913ZM176.016 9.9259C176.102 9.9259 176.102 9.9259 176.188 9.9259C176.102 9.9259 176.016 9.9259 176.016 9.9259Z"
          fill="#0A090B"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_516_3736">
          <rect width="229" height="41" fill="currentColor"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};
