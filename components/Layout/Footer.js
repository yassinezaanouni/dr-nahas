import Image from "next/image";
import Link from "next/link";

import Logo from "../Widgets/Logo";

const Footer = () => {
  return (
    <footer className="bg-white py-5 sm:py-10 lg:py-16 lg:pr-32">
      <div className="main flex flex-wrap justify-between gap-8   ">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-[20ch] text-light">
            We Are Ready to Help Your Dental Problems
          </p>
          <ul className="social-medias f-ai-c gap-3">
            <li className=" f-ai-c relative aspect-square w-14 justify-center rounded-full bg-primary/30">
              <Link href="#">
                <Image
                  src="/icons/social-media/fb.svg"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
            <li className=" f-ai-c relative aspect-square w-14 justify-center rounded-full bg-primary/30">
              <Link href="#">
                <Image
                  src="/icons/social-media/twitter.svg"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
            <li className=" f-ai-c relative aspect-square w-14 justify-center rounded-full bg-primary/30">
              <Link href="#">
                <Image
                  src="/icons/social-media/instagram.svg"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-xl font-bold">Dental Services</h3>
          </li>
          <li>Digital smile Design</li>
          <li>Root canal treatment</li>
          <li>Teeth Whitening</li>
          <li>Tooth Filling</li> <li>Veneers</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-xl font-bold">Pages</h3>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>

          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/booking">Booking</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-xl font-bold">Contact</h3>
          </li>
          <li className="f-ai-c  gap-6">
            <Image
              src="/icons/phone.svg"
              layout="fixed"
              width={18}
              height={18}
            />
            04 338 5677
          </li>{" "}
          <li className="f-ai-c  gap-6">
            <Image
              src="/icons/clock.svg"
              layout="fixed"
              width={18}
              height={18}
            />
            Mon - Fri: 9.00Am - 11.00Pm
          </li>{" "}
          <li className=" flex   gap-6">
            <Image
              src="/icons/location.svg"
              layout="fixed"
              width={18}
              height={18}
            />
            <p>
              Levantine Dental Clinic, SMJ1 - 22 A St - Al Safa - Al Safa 1 -
              Dubai
            </p>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          li,
          p {
            @apply text-light;
            font-size: clamp(0.8rem, 0.7rem + 2vw, 1rem);
          }
          p {
            @apply max-w-[25ch];
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
