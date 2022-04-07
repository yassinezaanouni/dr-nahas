import Image from "next/image";

const DropDown4 = () => {
  return (
    <div className="f-ai-c mt-12 flex-col gap-12 text-left md:gap-16 lg:mt-20 lg:gap-16">
      <div className="flex-container">
        <div className="left">
          <h2 className="text-primary">Veneers </h2>
          <h3 className="font-bold text-grey-200">What is it?</h3>
          <p>
            Porcelain veneer is a layer of material placed over a tooth. Veneers
            can improve the aesthetics of a smile or can be used as treatment
            procedure
          </p>
        </div>
        <div className="right relative h-[26.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/11.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>

      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">Advantages</h3>
          <p>-The gum harmony with veneers</p>
          <p>-Natural bright smile</p>
          <p>-No need for whitening</p>
          <p>-Choosing veneers color</p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/12.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>

      <div className="flex-container ">
        <div className="left">
          <h3 className="font-bold text-grey-200">How is it done?</h3>

          <ol>
            <li>
              <h5>1.Documentation</h5>
              <p>Taking pictures to diagnose the case & digital smile design</p>
            </li>{" "}
            <li>
              <h5>2.Teeth model</h5>
              <p>
                Taking impression and send it to the lab to make teeth model
              </p>
            </li>{" "}
            <li>
              <h5>3.Preparation</h5>
              <p>
                Minimal preparation 0.3 - 0.5 mm or in some cases we don’t need
                to do any preparation
              </p>
            </li>{" "}
            <li>
              <h5>4.Impression</h5>
              <p>
                Taking impression and send it to the lab to customize the final
                veneers
              </p>
            </li>{" "}
            <li>
              <h5>5.Temporary</h5>
              <p>Placing temporary teeth for 3-5 days</p>
            </li>{" "}
            <li>
              <h5>6.Try in</h5>
              <p>
                Traying the veneers shape and colors and taking some pictures
              </p>
            </li>{" "}
            <li>
              <h5>7.Cementation</h5>
              <p>Cementing the final natural ceramic veneers</p>
            </li>
          </ol>
        </div>
        <div className="right relative h-[26.75rem] w-full overflow-hidden rounded-xl lg:h-[30.75rem]">
          <Image
            src="/img/services/dropdown/13.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">
            When venners cause discomfort?
          </h3>
          <p>1.Open gap between the tooth and the gum</p>
          <p>2.veneers that making pressure on the gum</p>
          <p>3.wrong bite</p>
          <p>4.Excess cement between teeth</p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/14.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>

      <div className="important mt-8 w-full   md:mt-12">
        <h4 className="mb-4 font-bold text-[#F48211]">Important</h4>
        <h4 className="font-bold text-grey-200">Treatment</h4>
        <p>1.Doesnt damage teeth</p>
        <p>2.Doesnt cause bad smell</p>
        <p>3.Dosent cause gum bleeding</p>
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
            font-size: clamp(1rem, 1rem + 2vw, 1.25rem);
          }
          li {
            @apply text-xl text-light;
          }
          h4 {
            @apply text-xl font-medium;
          }
          h4 {
            @apply text-2xl font-medium;
          }
          h5 {
            @apply mb-1 text-2xl font-medium text-grey-200;
            font-size: clamp(1rem, 1rem + 3vw, 1.15rem);
          }
          li > p {
            @apply my-0 mb-5;
          }
        `}
      </style>
    </div>
  );
};

export default DropDown4;
