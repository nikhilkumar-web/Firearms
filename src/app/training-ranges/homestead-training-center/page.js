import RangePageContent from '@/components/ranges/RangePageContent';
import { partnerRanges } from '@/data/ranges';

const range = partnerRanges.find((r) => r.slug === 'homestead-training-center');

export const metadata = {
  title: "Homestead Training Center | AFN Training Location",
  description: "Homestead Training Center is an American Firearms Network training location in Homestead, Florida for professional firearms instruction.",
};

export default function RangePage() {
  return <RangePageContent range={range} />;
}
