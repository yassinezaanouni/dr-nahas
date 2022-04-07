import Image from "next/image";

const DropDown5 = () => {
  return (
    <div className="f-ai-c mt-12 flex-col gap-12 text-left md:gap-16 lg:mt-20 lg:gap-16">
      <div className="flex-container">
        <div className="left">
          <h2 className="text-primary">Tooth Filling</h2>
          <p>We do tooth filling when we have Broken Tooth and Dental Caries</p>
          <p className="text-[#F89B1B]">1-Composite</p>
          <p>
            They are made from a blend of non-toxic, tooth coloured plastic and
            powdered glass. They are used for dental restoration of fractured or
            decayed teeth
          </p>{" "}
          <p className="text-[#F89B1B]">2-Amalgam</p>
          <p>
            Is a mixture of metals, consisting of liquid (elemental) mercury
            (50%) and a powdered alloy composed of silver, tin, and copper. Its
            use has been reduced recently for its obvious look inside the mouth
            and discoloration of the tooth.
          </p>{" "}
          <p className="text-[#F89B1B]">3-Ceramic</p>
          <p>
            Inlay or onlay made from lithium disilicate material, which is known
            for its excellent strength and aesthetics
          </p>{" "}
          <p className="text-[#F89B1B]">4-Gold</p>
          <p>
            Fillings made from pure gold or combined gold with other metals,
            such as palladium, nickel, or chromium. They are characterized by
            strong durability & stiffness, and some prefer them for the
            appearance
          </p>{" "}
        </div>
        <div className="right relative h-[26.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/15.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>

      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">Treatment sequence </h3>
          <p>
            1-Finding Tooth cavity by checking inra oral and taking x-rays to
            detect the decay
          </p>
          <p>2-Caries removal by special inustremnts </p>
          <p>3-Having a good isolation and placing final filling</p>
          <p>
            4-Finishing and polishing final restoration and checking occlusion{" "}
          </p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/16.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>

      <div className="important mt-8 w-full   md:mt-12">
        <h4 className="mb-4 font-bold text-[#F48211]">Important</h4>
        <p>
          If the tooth is treated incorrectly, it may cause discomfort during
          biting, sensitivity and inflammation of the gums
        </p>
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

export default DropDown5;
