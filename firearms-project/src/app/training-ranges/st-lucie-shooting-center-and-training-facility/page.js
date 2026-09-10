import RangePageContent from '@/components/ranges/RangePageContent';
import { partnerRanges } from '@/data/ranges';

const range = partnerRanges.find((r) => r.slug === 'st-lucie-shooting-center-and-training-facility');

export const metadata = {
  title: "St. Lucie Shooting Center | AFN Training Location",
  description: "St. Lucie Shooting Center is an American Firearms Network training location in Port St. Lucie, Florida for professional instruction.",
};

export default function RangePage() {
  return <RangePageContent range={range} />;
}
