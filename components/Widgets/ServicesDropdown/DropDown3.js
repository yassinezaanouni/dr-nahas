import Image from "next/image";

const DropDown3 = () => {
  return (
    <div className="f-ai-c mt-12 flex-col gap-12 text-left md:gap-16 lg:mt-20 lg:gap-16">
      <div className="flex-container">
        <div className="left">
          <h2 className="text-primary">Teeth Whitening </h2>
          <h3 className="font-bold text-grey-200">What is it?</h3>
          <p>
            Teeth Whitening is a procedure that helps in changing the teeth
            color from the present shade to a brighter one, for getting a nicer
            look and color. There are many types of teeth whitening: Home
            Bleaching, Office Bleaching, 3d crest whitening, Toothpaste
            Bleaching.
          </p>
          <p>
            Today we will explain the bleaching at the clinic: Teeth may get
            stained by bacteria, food and tobacco. teeth whitening is changing
            the tooth color to become lighter The bleaching gel usually contains
            hydrogen peroxide or carbamide peroxide that is placed on the teeth,
            it can be chemically activated or using the blue light
          </p>
        </div>
        <div className="right relative h-[26.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/8.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>

      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">How it works?</h3>

          <ul>
            <li>Placing the retractor</li>
            <li>Protecting the gum</li>
            <li>Placing the bleaching material</li>
            <li>
              {" "}
              The tooth whitening gel enters your enamel and lifts the stains
              activation of blue light
            </li>
            <li>
              The process is performed 3 cycles, The gel is reapplied between
              each session
            </li>
            <li>
              The bleaching session is completed for a total of 45 minutes
            </li>
          </ul>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/9.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex-container ">
        <div className="left">
          <h3 className="font-bold text-grey-200">Final Results</h3>

          <p>
            The change of shade may vary from one person to another. However a
            change in shades is guaranteed
          </p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/10.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>
      <style jsx>
        {`
          .flex-container {
            @apply flex w-full flex-wrap  gap-3 md:gap-8;
          }
          .left,
          .right {
            @apply min-w-[15.5rem] flex-1;
          }
          p {
            @apply my-2 tracking-wide text-light md:my-4;
          }
          h3 {
            font-size: clamp(1rem, 1rem + 2vw, 1.7rem);
          }
          li {
            @apply text-xl text-light;
          }
          h4 {
            @apply text-xl font-medium text-grey-200;
          }
          h4 {
            @apply text-2xl font-medium  text-primary;
          }
          h5 {
            @apply mb-1 text-2xl font-medium text-grey-200;
            font-size: clamp(1rem, 1rem + 3vw, 1.3rem);
          }
          li > p {
            @apply my-0 mb-5;
          }
        `}
      </style>
    </div>
  );
};

export default DropDown3;
