import RangePageContent from '@/components/ranges/RangePageContent';
import { partnerRanges } from '@/data/ranges';

const range = partnerRanges.find((r) => r.slug === 'ok-corral-gun-club');

export const metadata = {
  title: "OK Corral Gun Club | AFN Training Location Florida",
  description: "OK Corral Gun Club is an American Firearms Network training location in Okeechobee, Florida for professional firearms instruction.",
};

export default function RangePage() {
  return <RangePageContent range={range} />;
}
