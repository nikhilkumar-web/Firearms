import RangePageContent from '@/components/ranges/RangePageContent';
import { partnerRanges } from '@/data/ranges';

const range = partnerRanges.find((r) => r.slug === 'okeechobee-shooting-sports');

export const metadata = {
  title: "Okeechobee Shooting Sports | AFN Training Location",
  description: "Okeechobee Shooting Sports is an American Firearms Network training location in Okeechobee, Florida for professional instruction.",
};

export default function RangePage() {
  return <RangePageContent range={range} />;
}
