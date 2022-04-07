import Image from "next/image";
const DropDown2 = () => {
  return (
    <div className="f-ai-c mt-12 flex-col gap-12 text-left md:gap-16 lg:mt-20 lg:gap-16">
      <div className="flex-container">
        <div className="left">
          <h2 className="text-primary">ROOT CANAL TREATMENT </h2>
          <h3 className="font-bold text-[#F89B1B]">Attention</h3>
          <p>
            Root canal treatment is not painful, if we anesthetize the tooth
            correctly
          </p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/4.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>

      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">What is a tooth nerve?</h3>
          <p>
            It is a bundle of nerves and blood vessels at the center of the
            tooth
          </p>
          <h4>Causes of pain </h4>
          <ul>
            <li>1.Deep caries reaching the nerve</li>
            <li>2.Severe tooth fracture reaching the nerve</li>
          </ul>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/5.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex-container">
        <div className="left">
          <h3 className="font-bold text-grey-200">How is it done?</h3>
          <h4 className="font-bold">Treatment</h4>
          <ol>
            <li>
              <p>1 - Removal of the nerve & infected tissue completely</p>
            </li>

            <li>
              <p>
                2 - Determine canals lengths & cleaning and shaping root canal
              </p>
            </li>
            <li>
              <p>
                3 - Filling the canals with special material till the end of the
                root
              </p>
            </li>
            <li>
              <p>4 - Ensure that the tooth surface is sealed completely</p>
            </li>
          </ol>
          <h4>Procedure</h4>
          <p className="text-[#F89B1B] ">Old School</p>
          <p>
            Using endodontics file to remove bacteria and enlarge tooth canals
          </p>
          <p className="text-[#F89B1B] ">New school</p>
          <p>
            Using rotary device to remove bacteria and enlarge tooth canals
          </p>{" "}
          <p className="text-[#F89B1B] ">Negative treatment</p>
          <p>
            Dental Abscess containing pus Lesion containing bacteria under the
            tip of the root
          </p>
        </div>
        <div className="right relative h-[28.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/6.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">Dental Implant</h3>
          <p>
            You went to the dentist to check a tooth that was causing constant
            pain. The doctor took the necessary x-rays and examined the tooth,
            he found that the tooth was unrestorable and it needed extraction.
            What should you do after extracting the tooth? or when you have a
            missing tooth?
          </p>{" "}
          <p>
            Dental implants are one of the best and most advanced solutions for
            replacing missing teeth. A titanium implant is placed in the bone;
            it acts as the tooth root and fuses to the surrounding bone. Then
            the crown is placed on it to take the role of the tooth in shape and
            function.
          </p>
        </div>
        <div className="right relative h-[28.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/7.jpg"
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
          h4 {
            @apply text-xl font-medium text-grey-200;
          }

          h4 {
            @apply text-2xl font-medium  text-[#F89B1B];
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

export default DropDown2;
