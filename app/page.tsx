import Link from 'next/link';
import * as Button from '@/components/ui/button';
import { RiGithubFill } from '@remixicon/react';

export default function Home() {
  return (
    <div className="w-[1440px] h-[900px] relative bg-white rounded-3xl  overflow-hidden">
  <div className="w-[1352px] left-0 top-0 absolute justify-between items-center inline-flex">
    <div className="h-[95px] justify-start items-center gap-2 flex">
      <img className="w-[95px] h-[95px] rounded shadow-[0px_2px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.08)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.20)] border-8 border-white" src="images/2gether_white.jpg" />
      <div className="text-center text-[#0e1b0d] text-2xl font-medium font-['Inter'] leading-loose"> 2Gather</div>
    </div>
    <div className="justify-start items-center gap-4 flex">
      <div className="justify-start items-center gap-2 flex">
        <div className="p-0.5 bg-[#335cff] rounded-[999px] flex-col justify-start items-center gap-0.5 inline-flex overflow-hidden">
          <div className="w-4 text-center text-white text-xs font-medium font-['Inter'] leading-none">1</div>
        </div>
        <div className="text-[#0e1b0d] text-sm font-normal font-['Inter'] leading-tight">Create Gather    </div>
      </div>
      <div data-svg-wrapper className="relative">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2958 10.4991L7.58325 6.78657L8.64375 5.72607L13.4168 10.4991L8.64375 15.2721L7.58325 14.2116L11.2958 10.4991Z" fill="#99A0AE"/>
      </svg>
      </div>
      <div className="justify-start items-center gap-2 flex">
        <div className="p-0.5 bg-white rounded-[999px] border border-[#e1e3e9] flex-col justify-start items-center gap-0.5 inline-flex overflow-hidden">
          <div className="w-4 text-center text-[#525866] text-xs font-medium font-['Inter'] leading-none">2</div>
        </div>
        <div className="text-[#525866] text-sm font-normal font-['Inter'] leading-tight">Add Contributors</div>
      </div>
      <div data-svg-wrapper className="relative">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2958 10.4991L7.58325 6.78657L8.64375 5.72607L13.4168 10.4991L8.64375 15.2721L7.58325 14.2116L11.2958 10.4991Z" fill="#99A0AE"/>
      </svg>
      </div>
      <div className="justify-start items-center gap-2 flex">
        <div className="p-0.5 bg-white rounded-[999px] border border-[#e1e3e9] flex-col justify-start items-center gap-0.5 inline-flex overflow-hidden">
          <div className="w-4 text-center text-[#525866] text-xs font-medium font-['Inter'] leading-none">3</div>
        </div>
        <div className="text-[#525866] text-sm font-normal font-['Inter'] leading-tight">Determine Split</div>
      </div>
      <div data-svg-wrapper className="relative">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.296 10.4991L7.5835 6.78657L8.644 5.72607L13.417 10.4991L8.644 15.2721L7.5835 14.2116L11.296 10.4991Z" fill="#99A0AE"/>
      </svg>
      </div>
      <div className="justify-start items-center gap-2 flex">
        <div className="p-0.5 bg-white rounded-[999px] border border-[#e1e3e9] flex-col justify-start items-center gap-0.5 inline-flex overflow-hidden">
          <div className="w-4 text-center text-[#525866] text-xs font-medium font-['Inter'] leading-none">4</div>
        </div>
        <div className="text-[#525866] text-sm font-normal font-['Inter'] leading-tight">Get Paid</div>
      </div>
    </div>
    <div className="p-2.5 bg-gradient-to-b from-white to-white rounded-[36px] shadow-[0px_0px_0px_1px_rgba(51,92,255,1.00)] shadow-[0px_1px_2px_0px_rgba(14,18,27,0.24)] border border-white justify-center items-center gap-1 flex overflow-hidden">
      <div data-svg-wrapper className="relative">
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 8.25H16.75C16.9489 8.25 17.1397 8.32902 17.2803 8.46967C17.421 8.61032 17.5 8.80109 17.5 9V16.5C17.5 16.6989 17.421 16.8897 17.2803 17.0303C17.1397 17.171 16.9489 17.25 16.75 17.25H3.25C3.05109 17.25 2.86032 17.171 2.71967 17.0303C2.57902 16.8897 2.5 16.6989 2.5 16.5V8.25ZM3.25 3.75H14.5V6.75H2.5V4.5C2.5 4.30109 2.57902 4.11032 2.71967 3.96967C2.86032 3.82902 3.05109 3.75 3.25 3.75ZM12.25 12V13.5H14.5V12H12.25Z" fill="white"/>
      </svg>
      </div>
      <div className="px-1 justify-center items-center flex">
        <div className="text-white text-sm font-medium font-['Inter'] leading-tight">marcaum.eth</div>
      </div>
      <div data-svg-wrapper className="relative">
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0001 11.379L13.7126 7.6665L14.7731 8.727L10.0001 13.5L5.22705 8.727L6.28755 7.6665L10.0001 11.379Z" fill="white"/>
      </svg>
      </div>
    </div>
  </div>
  <div className="left-[1320px] top-[856px] absolute justify-start items-center gap-1 inline-flex overflow-hidden">
    <div data-svg-wrapper className="relative">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17.5C5.85775 17.5 2.5 14.1422 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1422 2.5 17.5 5.85775 17.5 10C17.5 14.1422 14.1422 17.5 10 17.5ZM8.2825 15.7502C7.54256 14.1807 7.1139 12.4827 7.02025 10.75H4.0465C4.19244 11.9042 4.67044 12.9911 5.42243 13.8788C6.17441 14.7664 7.16801 15.4166 8.2825 15.7502ZM8.5225 10.75C8.63575 12.5792 9.1585 14.2975 10 15.814C10.8642 14.2574 11.3691 12.5271 11.4775 10.75H8.5225ZM15.9535 10.75H12.9797C12.8861 12.4827 12.4574 14.1807 11.7175 15.7502C12.832 15.4166 13.8256 14.7664 14.5776 13.8788C15.3296 12.9911 15.8076 11.9042 15.9535 10.75ZM4.0465 9.25H7.02025C7.1139 7.51734 7.54256 5.81926 8.2825 4.24975C7.16801 4.58341 6.17441 5.23356 5.42243 6.12122C4.67044 7.00888 4.19244 8.09583 4.0465 9.25ZM8.52325 9.25H11.4767C11.3686 7.47295 10.864 5.74265 10 4.186C9.13576 5.74259 8.63092 7.47289 8.5225 9.25H8.52325ZM11.7175 4.24975C12.4574 5.81926 12.8861 7.51734 12.9797 9.25H15.9535C15.8076 8.09583 15.3296 7.00888 14.5776 6.12122C13.8256 5.23356 12.832 4.58341 11.7175 4.24975Z" fill="#99A0AE"/>
    </svg>
    </div>
    <div className="justify-start items-center gap-0.5 flex">
      <div className="text-[#525866] text-sm font-normal font-['Inter'] leading-tight">ENG</div>
      <div data-svg-wrapper className="relative">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0001 10.879L13.7126 7.1665L14.7731 8.227L10.0001 13L5.22705 8.227L6.28755 7.1665L10.0001 10.879Z" fill="#525866"/>
      </svg>
      </div>
    </div>
  </div>
  <div data-svg-wrapper className="left-[150px] top-[230px] absolute">
  <svg width="1142" height="442" viewBox="0 0 1142 442" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M72.25 1H1V74.3333M72.25 1V74.3333M72.25 1H143.5M72.25 74.3333H1M72.25 74.3333V147.667M72.25 74.3333H143.5M1 74.3333V147.667M72.25 147.667H1M72.25 147.667V221M72.25 147.667H143.5M1 147.667V221M72.25 221H1M72.25 221V294.333M72.25 221H143.5M1 221V294.333M72.25 294.333H1M72.25 294.333V367.667M72.25 294.333H143.5M1 294.333V367.667M72.25 367.667H1M72.25 367.667V441M72.25 367.667H143.5M1 367.667V441H72.25M72.25 441H143.5M143.5 1V74.3333M143.5 1H214.75M143.5 74.3333V147.667M143.5 74.3333H214.75M143.5 147.667V221M143.5 147.667H214.75M143.5 221V294.333M143.5 221H214.75M143.5 294.333V367.667M143.5 294.333H214.75M143.5 367.667V441M143.5 367.667H214.75M143.5 441H214.75M214.75 1V74.3333M214.75 1H286M214.75 74.3333V147.667M214.75 74.3333H286M214.75 147.667V221M214.75 147.667H286M214.75 221V294.333M214.75 221H286M214.75 294.333V367.667M214.75 294.333H286M214.75 367.667V441M214.75 367.667H286M214.75 441H286M286 1V74.3333M286 1H357.25M286 74.3333V147.667M286 74.3333H357.25M286 147.667V221M286 147.667H357.25M286 221V294.333M286 221H357.25M286 294.333V367.667M286 294.333H357.25M286 367.667V441M286 367.667H357.25M286 441H357.25M357.25 1V74.3333M357.25 1H428.5M357.25 74.3333V147.667M357.25 74.3333H428.5M357.25 147.667V221M357.25 147.667H428.5M357.25 221V294.333M357.25 221H428.5M357.25 294.333V367.667M357.25 294.333H428.5M357.25 367.667V441M357.25 367.667H428.5M357.25 441H428.5M428.5 1V74.3333M428.5 1H499.75M428.5 74.3333V147.667M428.5 74.3333H499.75M428.5 147.667V221M428.5 147.667H499.75M428.5 221V294.333M428.5 221H499.75M428.5 294.333V367.667M428.5 294.333H499.75M428.5 367.667V441M428.5 367.667H499.75M428.5 441H499.75M499.75 1V74.3333M499.75 1H571M499.75 74.3333V147.667M499.75 74.3333H571M499.75 147.667V221M499.75 147.667H571M499.75 221V294.333M499.75 221H571M499.75 294.333V367.667M499.75 294.333H571M499.75 367.667V441M499.75 367.667H571M499.75 441H571M571 1V74.3333M571 1H642.25M571 74.3333V147.667M571 74.3333H642.25M571 147.667V221M571 147.667H642.25M571 221V294.333M571 221H642.25M571 294.333V367.667M571 294.333H642.25M571 367.667V441M571 367.667H642.25M571 441H642.25M642.25 1V74.3333M642.25 1H713.5M642.25 74.3333V147.667M642.25 74.3333H713.5M642.25 147.667V221M642.25 147.667H713.5M642.25 221V294.333M642.25 221H713.5M642.25 294.333V367.667M642.25 294.333H713.5M642.25 367.667V441M642.25 367.667H713.5M642.25 441H713.5M713.5 1V74.3333M713.5 1H784.75M713.5 74.3333V147.667M713.5 74.3333H784.75M713.5 147.667V221M713.5 147.667H784.75M713.5 221V294.333M713.5 221H784.75M713.5 294.333V367.667M713.5 294.333H784.75M713.5 367.667V441M713.5 367.667H784.75M713.5 441H784.75M784.75 1V74.3333M784.75 1H856M784.75 74.3333V147.667M784.75 74.3333H856M784.75 147.667V221M784.75 147.667H856M784.75 221V294.333M784.75 221H856M784.75 294.333V367.667M784.75 294.333H856M784.75 367.667V441M784.75 367.667H856M784.75 441H856M856 1V74.3333M856 1H927.25M856 74.3333V147.667M856 74.3333H927.25M856 147.667V221M856 147.667H927.25M856 221V294.333M856 221H927.25M856 294.333V367.667M856 294.333H927.25M856 367.667V441M856 367.667H927.25M856 441H927.25M927.25 1V74.3333M927.25 1H998.5M927.25 74.3333V147.667M927.25 74.3333H998.5M927.25 147.667V221M927.25 147.667H998.5M927.25 221V294.333M927.25 221H998.5M927.25 294.333V367.667M927.25 294.333H998.5M927.25 367.667V441M927.25 367.667H998.5M927.25 441H998.5M998.5 1V74.3333M998.5 1H1069.75M998.5 74.3333V147.667M998.5 74.3333H1069.75M998.5 147.667V221M998.5 147.667H1069.75M998.5 221V294.333M998.5 221H1069.75M998.5 294.333V367.667M998.5 294.333H1069.75M998.5 367.667V441M998.5 367.667H1069.75M998.5 441H1069.75M1069.75 1V74.3333M1069.75 1H1141V74.3333M1069.75 74.3333V147.667M1069.75 74.3333H1141M1069.75 147.667V221M1069.75 147.667H1141M1069.75 221V294.333M1069.75 221H1141M1069.75 294.333V367.667M1069.75 294.333H1141M1069.75 367.667V441M1069.75 367.667H1141M1069.75 441H1141V367.667M1141 74.3333V147.667M1141 147.667V221M1141 221V294.333M1141 294.333V367.667" stroke="url(#paint0_radial_0_18252)" stroke-opacity="0.24"/>
  <defs>
  <radialGradient id="paint0_radial_0_18252" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(571 221) rotate(90) scale(220 570)">
  <stop stop-color="#717784"/>
  <stop offset="1" stop-color="#717784" stop-opacity="0"/>
  </radialGradient>
  </defs>
  </svg>
  </div>
  <div className="w-[468px] h-[644px] p-8 left-[486px] top-[113px] absolute bg-white rounded-[20px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] border border-[#e1e3e9] flex-col justify-start items-center gap-6 inline-flex overflow-hidden">
    <div className="self-stretch h-32 flex-col justify-start items-center gap-2 flex">
      <div data-svg-wrapper>
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48Z" fill="url(#paint0_linear_0_18255)" fill-opacity="0.1"/>
      <g filter="url(#filter0_d_0_18255)">
      <path d="M16 48C16 30.3269 30.3269 16 48 16C65.6731 16 80 30.3269 80 48C80 65.6731 65.6731 80 48 80C30.3269 80 16 65.6731 16 48Z" fill="white"/>
      <path d="M16.5 48C16.5 30.603 30.603 16.5 48 16.5C65.397 16.5 79.5 30.603 79.5 48C79.5 65.397 65.397 79.5 48 79.5C30.603 79.5 16.5 65.397 16.5 48Z" stroke="#E1E4EA"/>
      <path d="M36 59.9998C36 57.4537 37.0114 55.0119 38.8118 53.2116C40.6121 51.4112 43.0539 50.3998 45.6 50.3998C48.1461 50.3998 50.5879 51.4112 52.3882 53.2116C54.1886 55.0119 55.2 57.4537 55.2 59.9998H36ZM45.6 49.1998C41.622 49.1998 38.4 45.9778 38.4 41.9998C38.4 38.0218 41.622 34.7998 45.6 34.7998C49.578 34.7998 52.8 38.0218 52.8 41.9998C52.8 45.9778 49.578 49.1998 45.6 49.1998ZM54.4356 51.8794C56.2712 52.3512 57.9111 53.39 59.122 54.848C60.3328 56.306 61.0529 58.1088 61.1796 59.9998H57.6C57.6 56.8678 56.4 54.0166 54.4356 51.8794ZM52.008 49.1482C53.0136 48.2488 53.8178 47.147 54.3679 45.9151C54.918 44.6832 55.2015 43.3489 55.2 41.9998C55.2026 40.36 54.7831 38.7471 53.982 37.3162C55.3412 37.5893 56.5638 38.3247 57.4421 39.3972C58.3205 40.4698 58.8003 41.8135 58.8 43.1998C58.8003 44.0548 58.6179 44.8999 58.2649 45.6786C57.912 46.4573 57.3966 47.1516 56.7535 47.7149C56.1103 48.2781 55.3542 48.6974 54.5357 48.9446C53.7173 49.1918 52.8555 49.2613 52.008 49.1482Z" fill="#335CFF"/>
      </g>
      <defs>
      <filter id="filter0_d_0_18255" x="14" y="15" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="1"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_18255"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_18255" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_0_18255" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse">
      <stop stop-color="#717784"/>
      <stop offset="1" stop-color="#717784" stop-opacity="0"/>
      </linearGradient>
      </defs>
      </svg>
      </div>
      <div className="self-stretch h-6 flex-col justify-start items-center gap-1 flex">
        <div className="self-stretch text-center text-[#525866] text-base font-normal font-['Inter'] leading-normal">Create a Gather</div>
      </div>
    </div>
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 h-[0px] border border-[#e1e3e9]"></div>
    </div>
    <div className="self-stretch h-[164px] flex-col justify-start items-center gap-3 flex">
      <div className="self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
        <div className="self-stretch justify-start items-center gap-px inline-flex">
          <div className="text-[#0e1b0d] text-sm font-medium font-['Inter'] leading-tight">Event Name </div>
          <div className="text-[#335cff] text-sm font-medium font-['Inter'] leading-tight">*</div>
        </div>
        <div className="self-stretch pl-3 pr-2.5 py-4 bg-white rounded-[999px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] border border-[#e1e3e9] justify-start items-center gap-2 inline-flex overflow-hidden">
          <div data-svg-wrapper className="relative">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 6.25H16.75C16.9489 6.25 17.1397 6.32902 17.2803 6.46967C17.421 6.61032 17.5 6.80109 17.5 7V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V4C2.5 3.80109 2.57902 3.61032 2.71967 3.46967C2.86032 3.32902 3.05109 3.25 3.25 3.25H14.5V6.25ZM4 7.75V15.25H16V7.75H4ZM4 4.75V6.25H13V4.75H4ZM12.25 10.75H14.5V12.25H12.25V10.75Z" fill="#525866"/>
          </svg>
          </div>
          <div className="grow shrink basis-0 text-[#99a0ad] text-sm font-normal font-['Inter'] leading-tight">Add Name</div>
        </div>
      </div>
      <div className="self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
        <div className="self-stretch justify-start items-center gap-px inline-flex">
          <div className="text-[#0e1b0d] text-sm font-medium font-['Inter'] leading-tight">Total Amount </div>
          <div className="text-[#335cff] text-sm font-medium font-['Inter'] leading-tight">*</div>
        </div>
        <div className="self-stretch pl-3 pr-2.5 py-4 bg-white rounded-[999px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] border border-[#e1e3e9] justify-start items-center gap-2 inline-flex overflow-hidden">
          <div data-svg-wrapper className="relative">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 6.25H16.75C16.9489 6.25 17.1397 6.32902 17.2803 6.46967C17.421 6.61032 17.5 6.80109 17.5 7V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V4C2.5 3.80109 2.57902 3.61032 2.71967 3.46967C2.86032 3.32902 3.05109 3.25 3.25 3.25H14.5V6.25ZM4 7.75V15.25H16V7.75H4ZM4 4.75V6.25H13V4.75H4ZM12.25 10.75H14.5V12.25H12.25V10.75Z" fill="#525866"/>
          </svg>
          </div>
          <div className="grow shrink basis-0 text-[#99a0ad] text-sm font-normal font-['Inter'] leading-tight">Add Amount</div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[468px] left-[486px] top-[784px] absolute justify-center items-center gap-1.5 inline-flex">
    <div className="p-2.5 bg-[#f5f7f9] rounded-[20px] justify-center items-center gap-1 flex overflow-hidden">
      <div data-svg-wrapper className="relative">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.871 9.25H16V10.75H6.871L10.894 14.773L9.8335 15.8335L4 10L9.8335 4.1665L10.894 5.227L6.871 9.25Z" fill="#525866"/>
      </svg>
      </div>
      <div className="px-1 justify-center items-center flex">
        <div className="text-[#525866] text-sm font-medium font-['Inter'] leading-tight">Back</div>
      </div>
    </div>
    <div className="grow shrink basis-0 h-10 p-2.5 bg-[#f5f7f9] rounded-[36px] justify-center items-center gap-1 flex overflow-hidden">
      <div className="px-1 justify-center items-center flex">
        <div className="text-[#c9cfd8] text-sm font-medium font-['Inter'] leading-tight">Add recipients</div>
      </div>
      <div data-svg-wrapper className="relative">
      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.629 9.25L9.606 5.227L10.6665 4.1665L16.5 10L10.6665 15.8335L9.606 14.773L13.629 10.75H4.5V9.25H13.629Z" fill="#CACFD8"/>
      </svg>
      </div>
    </div>
  </div>
  <div className="left-[422px] top-[270px] absolute text-center text-black text-2xl font-medium font-['Inter'] leading-loose">   </div>
</div>
  );
}
