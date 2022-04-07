import Image from "next/image";

const DropDown1 = () => {
  return (
    <div className="f-ai-c mt-12 flex-col gap-12 text-left md:gap-16 lg:mt-20 lg:gap-16">
      <div className="flex-container">
        <div className="left">
          <h2 className="text-primary">Digital smile Design </h2>
          <h3 className="font-bold text-grey-200">What is it?</h3>
          <p>
            Design an approximate image of the dimensions of the teeth length,
            width and shape before obtaining the final prosthesis result
          </p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/1.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>

      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">How it works?</h3>
          <p>
            Analysis of facial proportions and teeth using high-resolution
            digital images and videos, and a normal or 3D dental impression
          </p>
          <h4>4 determinants of smile design</h4>
          <ul>
            <li>-Face</li>
            <li>-Lips</li>
            <li>-Gingiva</li>
            <li>-Teeth</li>
          </ul>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/1.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex-container">
        <div className="left">
          <ol>
            <li>
              <h5>1. Face Analysis</h5>
              <p>
                Determining the inter pupillary line, the dental midline, which
                defined as the vertical line drawn parallel to the lateral
                border of the esthetic frame through the tip of the incisal
                embrasure between the two maxillary central incisors
              </p>
            </li>

            <li>
              <h5>2. Lip Line</h5>
              <p>
                to have the most pleasant smile we usually looking forward a
                smile that shows teeth and 1-2 mm of interdental papilla
              </p>
              <p>
                {
                  "Low lip line : ( < 75%) of teeth are visible Average or Medium: (75-100%) of teeth & less than 1mm gingival margin High lip line: ( > 75%) of the visible gingiva and least 2-3 mm"
                }
              </p>
            </li>
            <li>
              <h5>3.Gingival Line</h5>
              <p>
                Symmetry of the gingival margins, gingival zenith line and
                interdental papilla is crucial for esthetics, specially in the
                high lip line patients
              </p>
            </li>
            <li>
              <h5>4. Teeth Symmetry</h5>
              <p>
                The golden proportion is that if we take the lateral incisor as
                a factor of 1, then the central incisor would be 1.6. The
                visible part of that canine, usually the mesial part of the
                canine in that front photographic view, would be 0.6
              </p>
            </li>
          </ol>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/1.jpg"
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
          li,
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

export default DropDown1;
