export default function SubscribeButton({ 
  text = "SUBSCRIBE NOW", 
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
        padding: '10px 15px',
        borderRadius: '3px',
        fontFamily: "'Roboto', sans-serif",
        ...style
      }}
      className={`inline-flex items-center justify-center gap-2 text-white font-medium uppercase text-[14px] leading-none tracking-wider transition-all hover:brightness-110 shadow-lg whitespace-nowrap cursor-pointer ${className}`}
    >
      <span>{text}</span>
      <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 448 512">
        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
      </svg>
    </a>
  );
}
