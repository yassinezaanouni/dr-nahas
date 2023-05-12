import Image from "next/image";
import Link from "next/link";

import Logo from "../Widgets/Logo";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  let items = [
    "Dr.Nahas",
    "We Are Ready to Help Your Dental Problems  ",
    "Dental Services  ",
    "Digital smile Design  ",
    "Root canal treatment  ",
    "Teeth Whitening  ",
    "Tooth Filling  ",
    "Veneers",
    "Pages",
    "Home",
    "Gallery",
    "Services",
    "Booking",
    "Contact",
    "Mon - Fri: 9.00Am - 11.00Pm",
    "Jumeirah | Dubai, United Arab Emirates",
  ];
  if (router.locale === "ar")
    items = [
      " د.نحاس",
      "احصل على ابتسامتك الجميلة الصحية مع الدكتور عبدالرحمن نحاس  ",
      "خدمات طب الأسنان  ",
      "تصميم الابتسامة الرقمية  ",
      "علاج عصب الأسنان  ",
      "تبييض الاسنان  ",
      "حشوات الاسنان",
      "فينير الأسنان",
      "طبيب اسنانك في دبي",
      "الرئيسية",
      "الصور",
      "الخدمة",
      "الحجز",
      "الإتصال",
      "الإثنين - الجمعة: 9.00 AM - 11.00 PM",
      "جميرا | دبى، الامارات العربية المتحدة",
    ];
  return (
    <footer className="bg-white py-5 text-center sm:py-10 lg:py-16 lg:pr-32">
      <div className="main flex flex-wrap  justify-center gap-6 md:justify-between  md:gap-8  ">
        <div className="flex flex-col gap-4">
          <Logo name={[items[0]]} tw="justify-center md:justify-start" />
          <p className="max-w-[40ch] text-light">{items[1]}</p>
          <ul className="social-medias f-ai-c  gap-3">
            <li className=" f-ai-c relative aspect-square w-10 cursor-pointer justify-center rounded-full bg-primary/30 hover:bg-primary/20 md:w-12">
              <Link href="#">
                <a style={{ height: 18 }}>
                  <Image src="/icons/social-media/fb.svg" width={18} height={18} alt="Facebook" />
                </a>
              </Link>
            </li>
            <li className=" f-ai-c relative aspect-square w-10 cursor-pointer justify-center rounded-full bg-primary/30 hover:bg-primary/20 md:w-12">
              <Link href="#">
                <a style={{ height: 24 }}>
                  <Image src="/icons/social-media/youtube.svg" width={24} height={24} alt="Youtube" />
                </a>
              </Link>
            </li>
            <li className=" f-ai-c relative aspect-square w-10 cursor-pointer justify-center rounded-full bg-primary/30 hover:bg-primary/20 md:w-12">
              <Link href="#">
                <a style={{ height: 18 }}>
                  <Image src="/icons/social-media/instagram.svg" width={18} height={18} alt="Instagram" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">{items[2]}</h3>
          <ul className="">
            <li>
              <Link href="/services?service=1#services">{items[3]}</Link>
            </li>
            <li>
              <Link href="/services?service=2#services">{items[4]}</Link>
            </li>
            <li>
              <Link href="/services?service=3#services">{items[5]}</Link>
            </li>
            <li>
              <Link href="/services?service=5#services">{items[6]}</Link>
            </li>
            <li>
              <Link href="/services?service=4#services">{items[7]}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">{items[8]}</h3>
          <ul className="">
            <li>
              <Link href="/">{items[9]}</Link>
            </li>
            <li>
              <Link href="/gallery">{items[10]}</Link>
            </li>
            <li>
              <Link href="/services">{items[11]}</Link>
            </li>

            <li>
              <Link href="/booking">{items[12]}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">{items[13]}</h3>
          <ul className="">
            <li className="f-ai-c  gap-6 ">
              <Image src="/icons/phone.svg" layout="fixed" width={18} height={18} alt="" />
              +971 54371 6446
            </li>
            <li className="hidden  items-center gap-6 md:flex">
              <Image src="/icons/clock.svg" layout="fixed" width={18} height={18} alt="" />
              {items[14]}
            </li>{" "}
            <li className="   hidden gap-6 md:flex">
              <Image src="/icons/location.svg" layout="fixed" width={18} height={18} alt="" />
              <p>{items[15]}</p>
            </li>{" "}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          li,
          p {
            @apply text-light;
            font-size: clamp(0.8rem, 0.7rem + 2vw, 1rem);
          }
          p {
            @apply max-w-[30ch];
          }
          h3 {
            @apply mb-1;
          }
          ul {
            @apply flex  list-disc flex-wrap justify-center gap-x-8 gap-y-2 md:list-none md:flex-col md:items-start md:justify-start;
          }
          .social-medias {
            @apply md:flex-row;
          }

          @media (min-width: 768px) {
            footer {
              text-align: start;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
