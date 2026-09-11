import RangePageContent from '@/components/ranges/RangePageContent';
import { partnerRanges } from '@/data/ranges';

const range = partnerRanges.find((r) => r.slug === 'revere-gun-range');

export const metadata = {
  title: "Revere Gun Range | AFN Training Location in Florida",
  description: "Revere Gun Range is an American Firearms Network training location in Pompano Beach, Florida, offering professional firearms instruction.",
};

export default function RangePage() {
  return <RangePageContent range={range} />;
}
