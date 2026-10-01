import type { Metadata } from "next"

import { Landing } from "@/components/landing"

export const metadata: Metadata = {
  title: "قاعة الراية الكويت - حفلات الزفاف والمؤتمرات والمناسبات",
  description:
    "قاعة بمساحة 1,482 م² في منطقة شرق بمدينة الكويت، قابلة للتقسيم إلى ستة صالونات لحفلات الزفاف والمؤتمرات وحفلات التخرج حتى 2,000 ضيف.",
}

export default function Page() {
  return <Landing lang="ar" />
}
