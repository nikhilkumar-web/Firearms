import RangePageContent from '@/components/ranges/RangePageContent';
import { partnerRanges } from '@/data/ranges';

const range = partnerRanges.find((r) => r.slug === 'nexus-shooting');

export const metadata = {
  title: "Nexus Shooting | AFN Training Location Florida",
  description: "Nexus Shooting is an American Firearms Network training location in Davie, Florida, offering professional firearms instruction.",
};

export default function RangePage() {
  return <RangePageContent range={range} />;
}
