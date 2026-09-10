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
      style={style}
      className={`btn-tactical-red gap-2 text-white font-medium uppercase text-[14px] leading-none tracking-wider whitespace-nowrap cursor-pointer px-4 py-2.5 rounded-[3px] shadow-lg ${className}`}
    >
      <span>{text}</span>
      <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 448 512">
        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
      </svg>
    </a>
  );
}
