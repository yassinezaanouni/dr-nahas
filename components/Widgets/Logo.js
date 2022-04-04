import Link from "next/link";
import Image from "next/image";

const Logo = ({ isDisplayed = true }) => {
  {
    if (!isDisplayed) return null;
    return (
      <>
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Image
              src={"/icons/logo.svg"}
              alt="Dr.Nahas"
              width={48.29}
              height={47.64}
              style={{ transform: "rotate(131.07deg)" }}
            />
            <h2 className="">Dr.nahas</h2>
          </div>
        </Link>
        <style jsx>
          {`
            h2 {
              font-size: clamp(1rem, 1.125rem + 2vw, 1.875rem);
            }
          `}
        </style>
      </>
    );
  }
};

export default Logo;
