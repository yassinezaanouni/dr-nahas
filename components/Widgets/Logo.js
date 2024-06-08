import Link from "next/link";
import Image from "next/legacy/image";

const Logo = ({ isDisplayed = true, name, tw }) => {
  {
    if (!isDisplayed) return null;
    return <>
      <Link href={"/"} legacyBehavior>
        <div className={`flex cursor-pointer items-center gap-4 ${tw}`}>
          <Image
            src={"/icons/logo.svg"}
            alt="Dr.Nahas"
            width={48.29}
            height={47.64}
          />
          <h2 className="">{name}</h2>
        </div>
      </Link>
      <style jsx>
        {`
          h2 {
            font-size: clamp(1rem, 1.125rem + 2vw, 1.875rem);
          }
        `}
      </style>
    </>;
  }
};

export default Logo;
