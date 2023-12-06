import { car1, car2, car3 } from "../assets/images/cars/index";
import { box, pannel, piston, time } from "../assets/images/cars/index";
import { album1 } from "../assets/images/cars/car1/index";
import { album2 } from "../assets/images/cars/car2/index";
import { album3 } from "../assets/images/cars/car3/index";
export const carsPull = [
  {
    id: 1,
    src: car1,
    album: album1,
    discr: "Audi",
    price: 2500,
    settings: [
      { src: time, set: 2019 },
      { src: piston, set: "Etanol" },
      { src: pannel, set: "92 000 km" },
      { src: box, set: "Automatic" },
    ],
    checkboxes: [
      { id: 1, name: "доставка автомобиля", price: 4000, selected: false },
      { id: 2, name: "разрешение на выезд", price: 15000, selected: false },
      { id: 3, name: "страховка с полным покрытием *", price: 8000, selected: false },
      { id: 4, name: "детское оборудование *", price: 4000, selected: false },
      { id: 5, name: "WiFi роутер *", price: 2000, selected: false },
      { id: 6, name: "отказ от мойки", price: 4000, selected: false },
      { id: 7, name: "отказ от заправки", price: 4000, selected: false },
    ],
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus aliquam iusto molestias cumque a sed architecto incidunt error, soluta quas iure. Dicta eaque eius id repellendus cumque ipsa praesentium.",
  },
  {
    id: 2,
    src: car2,
    album: album2,
    discr: "Kia",
    price: 3000,
    settings: [
      { src: time, set: 2019 },
      { src: piston, set: "Disel" },
      { src: pannel, set: "92 000 km" },
      { src: box, set: "Automatic" },
    ],
    checkboxes: [
      { id: 1, name: "доставка автомобиля", price: 4000, selected: false },
      { id: 2, name: "разрешение на выезд", price: 15000, selected: false },
      { id: 3, name: "страховка с полным покрытием *", price: 8000, selected: false },
      { id: 4, name: "детское оборудование *", price: 4000, selected: false },
      { id: 5, name: "WiFi роутер *", price: 2000, selected: false },
      { id: 6, name: "отказ от мойки", price: 4000, selected: false },
      { id: 7, name: "отказ от заправки", price: 4000, selected: false },
    ],
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus aliquam iusto molestias cumque a sed architecto incidunt error, soluta quas iure. Dicta eaque eius id repellendus cumque ipsa praesentium.",
  },
  {
    id: 3,
    src: car3,
    album: album3,
    discr: "Tesla",
    price: 1400,
    settings: [
      { src: time, set: 2019 },
      { src: piston, set: "Electro" },
      { src: pannel, set: "92 000 km" },
      { src: box, set: "Automatic" },
    ],
    checkboxes: [
      { id: 1, name: "доставка автомобиля", price: 4000, selected: false },
      { id: 2, name: "разрешение на выезд", price: 15000, selected: false },
      { id: 3, name: "страховка с полным покрытием *", price: 8000, selected: false },
      { id: 4, name: "детское оборудование *", price: 4000, selected: false },
      { id: 5, name: "WiFi роутер *", price: 2000, selected: false },
      { id: 6, name: "отказ от мойки", price: 4000, selected: false },
      { id: 7, name: "отказ от заправки", price: 4000, selected: false },
    ],
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus aliquam iusto molestias cumque a sed architecto incidunt error, soluta quas iure. Dicta eaque eius id repellendus cumque ipsa praesentium.",
  },
];

export const footerInfo = [
  {
    svg: (
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24.00 24.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#a0a0a0"
        strokeWidth="0.00024000000000000003"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z"
            fill="#a0a0a0"
          ></path>{" "}
        </g>
      </svg>
    ),
    discr: "reliantridecars@gmail.com",
    link: "mailto:reliantridecars@gmail.com"
  },
  {
    svg: (
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            opacity="0.5"
            d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z"
            stroke="#a0a0a0"
            strokeWidth="1.5"
          ></path>{" "}
          <circle
            cx="12"
            cy="10"
            r="3"
            stroke="#a0a0a0"
            strokeWidth="1.5"
          ></circle>{" "}
        </g>
      </svg>
    ),
    discr: "г. Ереван, ул. Фанаржян, д. 35.",
    link: 'https://yandex.ru/maps/10262/yerevan/house/YE0YcwNhTE0OQFpqfX5weXlrYw==/?ll=44.541589%2C40.218587&z=16'
  },
  {
    svg: (
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
            fill="#a0a0a0"
          ></path>{" "}
        </g>
      </svg>
    ),
    discr: "+374(77)582588",
    link: 'tel: +374(77)582588',
  },
];

const clock = <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" >
  <path d="M32 10.6667C34.7556 10.6667 37.4 11.1111 39.9334 12C42.4667 12.8889 44.8445 14.1778 47.0667 15.8667L48.9334 14M32 10.6667C25.8222 10.6685 20.4667 12.7245 15.9334 16.8347C11.9129 20.4799 9.41303 24.8684 8.43384 30H10.4731M32 10.6667L32.0006 12.6667M32 10.6667V12.6667C26.3137 12.6685 21.4383 14.5432 17.2767 18.3164C13.6736 21.5832 11.4179 25.4612 10.4731 30M10.4731 30C10.3372 30.653 10.2284 31.3196 10.1467 32H21.3334M10.4731 30L32.0006 12.6667M21.3334 32C21.8222 31.9982 22.2889 32.12 22.7334 32.3654C23.1778 32.6107 23.5111 32.9778 23.7334 33.4667M21.3334 32L21.3261 30C21.3275 30 21.3289 30 21.3302 30C22.1715 29.9977 22.9704 30.2118 23.6999 30.6144C24.531 31.0732 25.1463 31.7619 25.5366 32.601M21.3334 32L32.0006 12.6667M23.7334 33.4667L25.5487 37.0973L26.6667 34.8612M23.7334 33.4667L25.5541 32.6391C25.5483 32.6263 25.5425 32.6136 25.5366 32.601M23.7334 33.4667L25.5222 32.5723L25.5366 32.601M26.6667 34.8612L27.7847 37.0973L34.9334 22.8M26.6667 34.8612L33.1375 21.9196M26.6667 34.8612L25.5366 32.601M34.9334 22.8C35.4222 21.7778 36.2222 21.2667 37.3334 21.2667C38.4445 21.2667 39.2445 21.7778 39.7334 22.8M34.9334 22.8L33.1445 21.9056L33.1375 21.9196M34.9334 22.8L33.1291 21.9371C33.1319 21.9313 33.1347 21.9254 33.1375 21.9196M39.7334 22.8L44.3334 32M39.7334 22.8L41.5376 21.9371C41.5348 21.9313 41.5321 21.9255 41.5293 21.9197M39.7334 22.8L41.5222 21.9056L41.5293 21.9197M44.3334 32H53.8517C53.7653 31.323 53.6508 30.6564 53.5083 30M44.3334 32L46.1222 31.1056L45.5694 30M44.3334 32V30H45.5694M53.5083 30H55.551C55.243 28.4519 54.7926 26.9523 54.2 25.5014C53.3556 23.4338 52.2222 21.4667 50.8 19.6L52.6667 17.7334C53.1556 17.2445 53.4 16.6222 53.4 15.8667C53.4 15.1111 53.1556 14.4889 52.6667 14C52.1778 13.4649 51.5556 13.2089 50.8 13.232C50.0445 13.2551 49.4222 13.5111 48.9334 14M53.5083 30C53.2291 28.7136 52.8423 27.4666 52.3485 26.2576C51.5738 24.3608 50.5303 22.546 49.2092 20.8121L48.1498 19.4218L49.3858 18.1858L51.2525 16.3191C51.3296 16.242 51.4 16.146 51.4 15.8667C51.4 15.5874 51.3296 15.4914 51.2525 15.4142L51.2206 15.3823L51.1901 15.349C51.1288 15.2819 51.0904 15.2637 51.0724 15.2563C51.0521 15.2479 50.9923 15.2271 50.8612 15.2311C50.5629 15.2402 50.4413 15.3205 50.3476 15.4142L48.9334 14M53.5083 30H45.5694M48.9334 14L50.3476 15.4142L48.4809 17.2809L47.2464 18.5154L45.8565 17.459C43.7938 15.8914 41.5999 14.7043 39.2712 13.8872C36.9564 13.075 34.5365 12.6667 32.0006 12.6667M45.5694 30L41.5293 21.9197M41.5293 21.9197C41.1554 21.1448 40.6085 20.4534 39.8435 19.9646C39.0703 19.4707 38.2043 19.2667 37.3334 19.2667C36.4624 19.2667 35.5964 19.4707 34.8232 19.9646C34.0583 20.4534 33.5113 21.1447 33.1375 21.9196M38 5.32864V5.33335C38 5.58418 37.9369 5.70134 37.8178 5.82047C37.6989 5.93936 37.5842 6.00061 37.3381 6.00002H37.3334H26.6667C26.4159 6.00002 26.3011 5.9371 26.1847 5.82027C26.0647 5.69982 26.001 5.58073 26 5.33101C26.0004 5.08187 26.0633 4.96742 26.1798 4.85136C26.3003 4.73124 26.4195 4.66759 26.6695 4.66669H37.3334C37.5842 4.66669 37.7013 4.72977 37.8205 4.8489C37.9394 4.96779 38.0006 5.08256 38 5.32864ZM46.7542 51.0204C42.6204 54.7877 37.7366 56.6649 32 56.6667L41.2667 36.968C41.7111 37.2134 42.1778 37.3351 42.6667 37.3334V39.3334H42.6705H53.5276C52.5849 43.875 50.3386 47.754 46.7542 51.0204ZM37.3334 34.4722L38.4635 36.7324L31.9995 56.6667C26.3133 56.6666 21.4381 54.7927 17.2767 51.0197C13.6735 47.7528 11.4177 43.8739 10.473 39.3334H18.4306L22.4709 47.4138C22.8447 48.1887 23.3916 48.88 24.1566 49.3687C24.9297 49.8627 25.7958 50.0667 26.6667 50.0667C27.5376 50.0667 28.4037 49.8627 29.1768 49.3687C29.9418 48.88 30.4887 48.1887 30.8625 47.4138L37.3334 34.4722Z" stroke="#FFDA1F" strokeWidth="4" />
</svg >

const car = <svg xmlns="http://www.w3.org/2000/svg" width="68" height="65" viewBox="0 0 68 65" fill="none">
  <path d="M19.7777 23.3333H48.2222" stroke="#FFDA1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M16.2222 37.5555H19.7777" stroke="#FFDA1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M48.2222 37.5555H51.7778" stroke="#FFDA1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M2 51.7778V28.3484C2 27.3856 2.19563 26.4324 2.57497 25.5474L10.8196 6.3099C11.9401 3.69525 14.5111 2 17.3557 2H50.6443C53.4891 2 56.0597 3.69525 57.1804 6.3099L65.4251 25.5474C65.8044 26.4324 66 27.3856 66 28.3484V51.7778M2 51.7778V60.3111C2 61.4894 2.95513 62.4444 4.13333 62.4444H14.0889C15.2671 62.4444 16.2222 61.4894 16.2222 60.3111V51.7778M2 51.7778H16.2222M66 51.7778V60.3111C66 61.4894 65.045 62.4444 63.8667 62.4444H53.9111C52.7328 62.4444 51.7778 61.4894 51.7778 60.3111V51.7778M66 51.7778H51.7778M16.2222 51.7778H51.7778" stroke="#FFDA1F" strokeWidth="4" />
</svg>
const service = <svg xmlns="http://www.w3.org/2000/svg" width="70" height="55" viewBox="0 0 70 55" fill="none">
  <path d="M3 52.4546V49.5455C3 38.2989 12.1171 29.1818 23.3636 29.1818C34.6102 29.1818 43.7273 38.2989 43.7273 49.5455V52.4546" stroke="#FFDA1F" strokeWidth="5" strokeLinecap="round" />
  <path d="M37.9091 35C37.9091 26.9668 44.4214 20.4545 52.4545 20.4545C60.4877 20.4545 67 26.9668 67 35V36.4545" stroke="#FFDA1F" strokeWidth="5" strokeLinecap="round" />
  <path d="M23.3636 29.1818C29.7901 29.1818 35 23.972 35 17.5455C35 11.1189 29.7901 5.90912 23.3636 5.90912C16.937 5.90912 11.7273 11.1189 11.7273 17.5455C11.7273 23.972 16.937 29.1818 23.3636 29.1818Z" stroke="#FFDA1F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M52.4545 20.4545C57.2746 20.4545 61.1818 16.5472 61.1818 11.7273C61.1818 6.90735 57.2746 3 52.4545 3C47.6344 3 43.7272 6.90735 43.7272 11.7273C43.7272 16.5472 47.6344 20.4545 52.4545 20.4545Z" stroke="#FFDA1F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
const support = <svg xmlns="http://www.w3.org/2000/svg" width="70" height="67" viewBox="0 0 70 67" fill="none">
  <path d="M60.6 28.6C60.6 14.4615 49.1386 3 35 3C20.8615 3 9.40002 14.4615 9.40002 28.6" stroke="#FFDA1F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M3 42.8029V36.7971C3 33.8602 4.99869 31.3005 7.84778 30.5882L13.4143 29.1965C14.6261 28.8934 15.8 29.8099 15.8 31.0592V48.5408C15.8 49.7901 14.6261 50.7066 13.4143 50.4035L7.84778 49.0119C4.99869 48.2995 3 45.7399 3 42.8029Z" stroke="#FFDA1F" strokeWidth="5" />
  <path d="M67 42.8029V36.7971C67 33.8602 65.0012 31.3005 62.1523 30.5882L56.5856 29.1965C55.3737 28.8934 54.2 29.8099 54.2 31.0592V48.5408C54.2 49.7901 55.3737 50.7066 56.5856 50.4035L62.1523 49.0119C65.0012 48.2995 67 45.7399 67 42.8029Z" stroke="#FFDA1F" strokeWidth="5" />
  <path d="M60.6 51V52.6C60.6 56.1347 57.7347 59 54.2 59H43" stroke="#FFDA1F" strokeWidth="5" />
  <path d="M39.8 63.8H30.2C27.549 63.8 25.4 61.6509 25.4 59C25.4 56.3491 27.549 54.2 30.2 54.2H39.8C42.4508 54.2 44.6 56.3491 44.6 59C44.6 61.6509 42.4508 63.8 39.8 63.8Z" stroke="#FFDA1F" strokeWidth="5" />
</svg>
const lock = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256"
fill='#000000'>
  <g fill="#ffda1f" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"><g transform="scale(5.33333,5.33333)"><path d="M24,4c-4.40058,0 -8,3.59941 -8,8v4h-3.5c-2.4675,0 -4.5,2.0325 -4.5,4.5v19c0,2.4675 2.0325,4.5 4.5,4.5h23c2.4675,0 4.5,-2.0325 4.5,-4.5v-19c0,-2.4675 -2.0325,-4.5 -4.5,-4.5h-3.5v-4c0,-4.40059 -3.59942,-8 -8,-8zM24,7c2.77942,0 5,2.22058 5,5v4h-10v-4c0,-2.77941 2.22058,-5 5,-5zM12.5,19h23c0.8465,0 1.5,0.6535 1.5,1.5v19c0,0.8465 -0.6535,1.5 -1.5,1.5h-23c-0.8465,0 -1.5,-0.6535 -1.5,-1.5v-19c0,-0.8465 0.6535,-1.5 1.5,-1.5zM24,27c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path></g></g>
</svg>
export const aboutItems = [
  { id: 10, name: 'Работаем на территории РА с 2022 года', src: clock },
  { id: 20, name: 'В наличии автомобили под различные нужды', src: car },
  { id: 30, name: 'Высокий уровень сервиса', src: service },
  { id: 40, name: 'На связи 24/7', src: support },
  { id: 50, name: 'Без скрытых платежей и навязанных услуг', src: lock }
]