// src/data/pricingData.js

import drago from "../../Assets/Projects/drago.png";
import hadaba from "../../Assets/Projects/hadaba.png";
import vuist from "../../Assets/Projects/vuist.png";

const pricingPlans = [
  {
    imgPath: drago,
    title: "Tactile",
    description:
      "Great for teams who work in weekly sprints, and need design and strategy support for improving existing areas or developing new features of their product.",
    price: "£7,500",
    billingCycle: "month",
    demoLink: "https://calendly.com/d/5c2-3g6-964/haptic?month=2025-05",
    leftColumnText: [
      "Dedicated Senior Desiger",
      "Weekly Sprint Call",
      "Async Loom updates.",
      "Unlimited slack comms",
    ],
    rightColumnText: [
      "Dedicated Design Director",
      "Scalable with your needs",
    ],
  },
  {
    imgPath: hadaba,
    title: "Immersive",
    description:
      "For teams who alongside product work need support on brand, marketing and website design & build.",
    price: "£15,500",
    billingCycle: "year",
    demoLink: "https://calendly.com/d/5c2-3g6-964/haptic?month=2025-05",
    leftColumnText: [
      "Access to our full team",
      "Daily Standups",
      "Async Loom updates.",
      "Unlimited slack comms",
    ],
    rightColumnText: [
      "Dedicated Design Director",
      "Scalable with your needs",
      "Pause or cancel anytime",
    ],
  },
  {
    imgPath: vuist,
    title: "Sprint",
    description:
      "2 weeks to deliver a product feature, brand or landing page. A dedicated team of vertical specialists will be assigned to deliver incredible results at breakneck speed.",
    price: "£10,000",
    billingCycle: "month",
    demoLink: "https://calendly.com/d/5c2-3g6-964/haptic?month=2025-05",
    leftColumnText: [
      "A specially curated team",
      "Weekly Sprint Call",
      "Async Loom updates.",
      "Unlimited slack comms",
    ],
    rightColumnText: [
      "Dedicated Design Director",
      "Scalable with your needs",
    ],
  },
];

export default pricingPlans;
