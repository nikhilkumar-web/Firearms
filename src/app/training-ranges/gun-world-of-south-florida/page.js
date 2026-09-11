import RangePageContent from '@/components/ranges/RangePageContent';
import { partnerRanges } from '@/data/ranges';

const range = partnerRanges.find((r) => r.slug === 'gun-world-of-south-florida');

export const metadata = {
  title: "Gun World of South Florida | AFN Training Location",
  description: "Gun World of South Florida is an American Firearms Network training location in Deerfield Beach offering professional firearms instruction.",
};

export default function RangePage() {
  return <RangePageContent range={range} />;
}
