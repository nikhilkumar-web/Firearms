export default function SubscribeButton({ 
  text = "Subscribe Now", 
  className = "",
  style = {} 
}) {
  return (
    <a
      href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundImage: 'linear-gradient(219deg, #EB0F06 0%, #E70C0C 67%)',
        border: '2px solid #A5AAAB',
        padding: '12px 30px',
        borderRadius: '3px',
        fontFamily: "'Roboto', sans-serif",
        ...style
      }}
      className={`inline-flex flex-row-reverse items-center justify-center gap-2.5 text-white font-medium uppercase text-[14px] leading-none tracking-normal transition-all hover:brightness-110 shadow-lg whitespace-nowrap cursor-pointer ${className}`}
    >
      <svg aria-hidden="true" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 576 512">
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
      </svg>
      <span>{text}</span>
    </a>
  );
}
