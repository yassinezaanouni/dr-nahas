import React from "react";
import Dropdown from "./Dropdown";
import DropDown1 from "./DropDown1";

const ServicesDropdowns = () => {
  const items = [
    {
      title: "Teeth Whitening",
      icon: "/img/services/dropdown/whitening.svg",
      p1: " Teeth Whitening is a procedure that helps in changing the teeth color from the present shade to a brighter one, for getting a nicer look and color. There are many types of teeth whitening: Home Bleaching, Office Bleaching, 3d crest whitening, Toothpaste Bleaching.",
      p2: "Today we will explain the bleaching at the clinic: Teeth may get stained by bacteria, food and tobacco. teeth whitening is changing the tooth color to become lighter The bleaching gel usually contains hydrogen peroxide or carbamide peroxide that is placed on the teeth, it can be chemically activated or using the blue light",
      h1: "How it works?",
      p3: " The change of shade may vary from one person to another. However a change in shades is guaranteed",
      h2: "Final Results",
      h3: "Foollow Up",
      p4: "For 48 hours: Dont smoke, drink warm water, avoid foods and liquids containing stain",
      imgs1: [
        "/img/services/service1/1.webp",
        "/img/services/service1/2.webp",
        "/img/services/service1/3.webp",
      ],
      imgs2: [
        "/img/services/service1/4.webp",
        "/img/services/service1/5.webp",
        "/img/services/service1/6.webp",
      ],
      steps: [
        "Placing the retractor",
        "Protecting the gum",
        "Placing the bleaching material",
        "activation of blue light",
        "The tooth whitening gel enters your enamel and lifts the stains",
        "Activation of blue light The process is performed 3 cycles, The gel is reapplied between each session",
        "The bleaching session is completed for a total of 45 minutes",
      ],
    },
    {
      title: "Teeth Whitening",
      icon: "/img/services/dropdown/whitening.svg",
      p1: " Teeth Whitening is a procedure that helps in changing the teeth color from the present shade to a brighter one, for getting a nicer look and color. There are many types of teeth whitening: Home Bleaching, Office Bleaching, 3d crest whitening, Toothpaste Bleaching.",
      p2: "Today we will explain the bleaching at the clinic: Teeth may get stained by bacteria, food and tobacco. teeth whitening is changing the tooth color to become lighter The bleaching gel usually contains hydrogen peroxide or carbamide peroxide that is placed on the teeth, it can be chemically activated or using the blue light",
      h1: "How it works?",
      p3: " The change of shade may vary from one person to another. However a change in shades is guaranteed",
      h2: "Final Results",
      h3: "Foollow Up",
      p4: "For 48 hours: Dont smoke, drink warm water, avoid foods and liquids containing stain",
      imgs1: [
        "/img/services/service1/1.webp",
        "/img/services/service1/2.webp",
        "/img/services/service1/3.webp",
      ],
      imgs2: [
        "/img/services/service1/4.webp",
        "/img/services/service1/5.webp",
        "/img/services/service1/6.webp",
      ],
      steps: [
        "Placing the retractor",
        "Protecting the gum",
        "Placing the bleaching material",
        "activation of blue light",
        "The tooth whitening gel enters your enamel and lifts the stains",
        "Activation of blue light The process is performed 3 cycles, The gel is reapplied between each session",
        "The bleaching session is completed for a total of 45 minutes",
      ],
    },
  ];
  return (
    <div className="mt-8 flex flex-col gap-6 md:mt-16 md:gap-10">
      {items.map((item, index) => (
        <Dropdown
          key={index}
          title={item.title}
          icon={item.icon}
          p1={item.p1}
          p2={item.p2}
          h1={item.h1}
          p3={item.p3}
          h2={item.h2}
          h3={item.h3}
          p4={item.p4}
          imgs1={item.imgs1}
          imgs2={item.imgs2}
          steps={item.steps}
        />
      ))}
    </div>
  );
};

export default ServicesDropdowns;
