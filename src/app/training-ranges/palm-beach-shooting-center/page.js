import RangePageContent from '@/components/ranges/RangePageContent';
import { partnerRanges } from '@/data/ranges';

const range = partnerRanges.find((r) => r.slug === 'palm-beach-shooting-center');

export const metadata = {
  title: "Palm Beach Shooting Center | AFN Training Location",
  description: "Palm Beach Shooting Center is an American Firearms Network training location in Lake Worth, Florida for professional firearms instruction.",
};

export default function RangePage() {
  return <RangePageContent range={range} />;
}
