const services = [
  {
    id: "consultation",
    number: "01",
    icon: "◈",
    category: "serviceCategories.consulting",
    title: "services.items.consultation.title",
    description: "services.items.consultation.description",
    detail: "services.items.consultation.detail",
    color: "blue",
  },
  {
    id: "setup",
    number: "02",
    icon: "⌘",
    category: "serviceCategories.setup",
    title: "services.items.setup.title",
    description: "services.items.setup.description",
    detail: "services.items.setup.detail",
    color: "purple",
  },
  {
    id: "delivery",
    number: "03",
    icon: "↗",
    category: "serviceCategories.delivery",
    title: "services.items.delivery.title",
    description: "services.items.delivery.description",
    detail: "services.items.delivery.detail",
    color: "green",
  },
  {
    id: "business",
    number: "04",
    icon: "▧",
    category: "serviceCategories.business",
    title: "services.items.business.title",
    description: "services.items.business.description",
    detail: "services.items.business.detail",
    color: "orange",
  },
];

// Кийин бул функцияны чыныгы API endpoint'ине алмаштырууга болот.
export async function getServices() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (!services.length) throw new Error("Services are not available");
  return services;
}
