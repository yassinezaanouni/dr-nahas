import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import Logo from "../Widgets/Logo";

const Header = () => {
  const router = useRouter();
  const divNav = useRef();
  return (
    <header ref={divNav} className=" bg-grey-100 ">
      <div className="main f-ai-c  w-full justify-between gap-2">
        <Logo />
        <nav className="">
          <ul className="f-ai-c gap-6 font-bold text-light sm:gap-10">
            <li
              className={`${router.pathname == "/" ? "active" : ""}`}
              onClick={() => {
                divNav.current.classList.remove("nav-open");
              }}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className={`${router.pathname == "/gallery" ? "active" : ""}`}
              onClick={() => {
                divNav.current.classList.remove("nav-open");
              }}
            >
              <Link href="/gallery">Gallery</Link>
            </li>
            <li
              className={`${router.pathname == "/services" ? "active" : ""}`}
              onClick={() => {
                divNav.current.classList.remove("nav-open");
              }}
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              className={`${router.pathname == "/booking" ? "active" : ""}`}
              onClick={() => {
                divNav.current.classList.remove("nav-open");
              }}
            >
              <Link href="/booking">Booking</Link>
            </li>
          </ul>
        </nav>
        <div className="f-ai-c justify-between gap-[1vw] ">
          <div className={" f-ai-c  only-desktop"}>
            <Image src={"/icons/dubai.png"} width={73} height={28} />
          </div>
          <select
            name="language"
            id=""
            className="languages bg-transparent px-2 py-1"
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
        <button
          className="nav-btn"
          onClick={() => {
            divNav.current.classList.toggle("nav-open");
          }}
        >
          <div className="nav-icon" name="open-nav">
            <Image
              src={"/icons/mobile-nav.svg"}
              width={29}
              height={20}
              layout="fixed"
            />
          </div>
          <div className="nav-icon" name="close-nav">
            <Image
              src={"/icons/close-mobile-nav.svg"}
              width={29}
              height={20}
              layout="fixed"
            />
          </div>
        </button>
      </div>
      <style jsx>
        {`
          .active {
            color: #239ecb;
          }
          .nav-btn {
            display: none;
          }
          .nav-icon[name="close-nav"] {
            display: none;
          }

          @media (max-width: 768px) {
            .languages {
              display: none;
            }
            .nav-btn {
              display: unset;
              z-index: 99;
            }
            nav {
              font-size: 1.4rem;
              text-align: center;
              position: fixed;
              inset: 0;
              background: var(--clr-grey-100);
              display: grid;
              place-items: center;
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
              transition: all 300ms ease-in-out;
              transform: translateX(100%);
              z-index: 99;
            }
            .nav-open nav {
              opacity: 1;
              pointer-events: unset;
              visibility: visible;
              transform: translateX(0%);
            }
            .nav-open .nav-icon[name="close-nav"] {
              display: block;
            }
            .nav-open .nav-icon[name="open-nav"] {
              display: none;
            }
            nav ul {
              flex-direction: column;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
