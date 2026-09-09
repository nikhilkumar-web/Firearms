import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import SubscribeButton from '@/components/common/SubscribeButton';

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-[#000000] overflow-visible">
      
      {/* 1. PROMO / YOUTUBE SECTION (Elementor 1e76730 / 5381952) */}
      <div className="relative z-20 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-0">
        <div 
          className="relative rounded-[20px] overflow-hidden shadow-2xl -mb-[141px]"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            width: '1270px',
            height: '282.391px',
            maxWidth: 'none',
            maxHeight: 'none',
            boxSizing: 'border-box',
            aspectRatio: 'auto',
            flexGrow: 0,
            flexShrink: 1,
            flexBasis: 'auto',
            gridTemplateColumns: 'none',
            gridTemplateRows: 'none',
            gridColumn: 'auto',
            gridRow: 'auto',
            gap: 'normal',
            rowGap: 'normal',
            columnGap: 'normal',
            backgroundImage: 'url(/images/about/range-service.webp)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            borderRadius: '20px'
          }}
        >
          {/* Background Overlay: linear-gradient(220deg, rgb(185, 133, 20) 0%, rgb(0, 0, 0) 55%) with opacity 0.78 */}
          <div 
            className="absolute inset-0 pointer-events-none transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(220deg, rgb(185, 133, 20) 0%, rgb(0, 0, 0) 55%)',
              opacity: 0.78,
              borderRadius: '20px'
            }}
          />

          {/* Inner Content Container: 3-Column Structure matching DevTools */}
          <div className="relative z-10 p-5 sm:p-6 lg:p-[30px] flex items-center h-full">
            <div 
              className="flex flex-col lg:flex-row items-center justify-center w-full"
              style={{
                gap: '25px',
                rowGap: '25px',
                columnGap: '25px'
              }}
            >
              
              {/* Column 1: Heading + Description Container matching DevTools */}
              <div 
                className="flex flex-col justify-center text-left"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  width: '415.812px',
                  height: '222.391px',
                  minWidth: 'auto',
                  maxWidth: 'none',
                  minHeight: 'auto',
                  maxHeight: 'none',
                  boxSizing: 'border-box',
                  aspectRatio: 'auto',
                  flexGrow: 0,
                  flexShrink: 1,
                  flexBasis: 'auto',
                  gridTemplateColumns: 'none',
                  gridTemplateRows: 'none',
                  gridColumn: 'auto',
                  gridRow: 'auto',
                  paddingTop: '10px',
                  paddingRight: '10px',
                  paddingBottom: '10px',
                  paddingLeft: '10px',
                  gap: 'normal',
                  rowGap: 'normal',
                  columnGap: 'normal',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontSize: '16px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '24px',
                  letterSpacing: 'normal',
                  textAlign: 'start',
                  textDecoration: 'none',
                  textTransform: 'none',
                  textShadow: 'none',
                  whiteSpace: 'normal',
                  wordBreak: 'normal',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  backgroundImage: 'none',
                  backgroundSize: 'auto',
                  backgroundPosition: '0% 0%',
                  backgroundRepeat: 'repeat',
                  backgroundAttachment: 'scroll',
                  borderStyle: 'none',
                  boxShadow: 'none',
                  overflow: 'visible',
                  overflowX: 'visible',
                  overflowY: 'visible',
                  transform: 'none',
                  transition: 'all',
                  animation: 'none',
                  cursor: 'auto'
                }}
              >
                <h2 
                  className="text-[26px] sm:text-[30px] lg:text-[32px] font-semibold text-white font-gabarito leading-[32px] sm:leading-[38px] lg:leading-[40px] max-w-full"
                  style={{ 
                    fontFamily: "'Gabarito', sans-serif",
                    textAlign: 'start',
                    textTransform: 'none',
                    width: '395.812px'
                  }}
                >
                  THE INTEL DOESN&apos;T STOP AT THE RANGE.
                </h2>
                <p 
                  className="text-[15px] sm:text-[16px] leading-[22px] text-[#FFFFFF] font-roboto font-normal mt-2.5"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  High-cadence training, home defense breakdowns, and tactical gear reviews delivered directly to your screen. Join a community of thousands who don&apos;t just watch, but implement.
                </p>
              </div>

              {/* Column 2: YouTube Video Area matching right-side box */}
              <div 
                className="w-full flex items-center justify-center"
                style={{
                  width: '361.339px',
                  height: '222.391px',
                  boxSizing: 'border-box',
                  flexGrow: 0,
                  flexShrink: 1,
                  flexBasis: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div 
                  className="relative overflow-hidden bg-black max-w-full"
                  style={{
                    width: '360px',
                    height: '202.391px',
                    border: '1px solid rgba(184, 134, 21, 0.55)',
                    boxShadow: '0px 0px 10px 0px rgba(184, 134, 21, 0.43)',
                    borderRadius: '10px',
                    boxSizing: 'border-box'
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/3xn-gXFSZDc?start=36&autoplay=1&mute=1&loop=1&playlist=3xn-gXFSZDc&controls=1&rel=0&playsinline=1&modestbranding=1"
                    title="AFN Range Intel Video"
                    className="w-full h-full"
                    style={{ borderRadius: '10px' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Column 3: Outer Container matching DevTools (322.875px x 222.391px) */}
              <div 
                className="flex items-center justify-center lg:justify-end"
                style={{
                  color: 'rgb(51, 51, 51)',
                  caretColor: 'rgb(51, 51, 51)',
                  fill: 'rgb(0, 0, 0)',
                  stroke: 'none',
                  opacity: 1,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontSize: '16px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '24px',
                  letterSpacing: 'normal',
                  textAlign: 'start',
                  textDecoration: 'none',
                  textTransform: 'none',
                  textShadow: 'none',
                  whiteSpace: 'normal',
                  wordBreak: 'normal',
                  gap: 'normal',
                  rowGap: 'normal',
                  columnGap: 'normal',
                  width: '322.875px',
                  height: '222.391px',
                  minWidth: 'auto',
                  maxWidth: 'none',
                  minHeight: '1px',
                  maxHeight: 'none',
                  boxSizing: 'border-box',
                  aspectRatio: 'auto',
                  flexGrow: 0,
                  flexShrink: 1,
                  flexBasis: 'auto',
                  gridTemplateColumns: 'none',
                  gridTemplateRows: 'none',
                  gridColumn: 'auto',
                  gridRow: 'auto',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  backgroundImage: 'none',
                  backgroundSize: 'auto',
                  backgroundPosition: '0% 0%',
                  backgroundRepeat: 'repeat',
                  backgroundAttachment: 'scroll',
                  borderTopColor: 'rgb(51, 51, 51)',
                  borderRightColor: 'rgb(51, 51, 51)',
                  borderBottomColor: 'rgb(51, 51, 51)',
                  borderLeftColor: 'rgb(51, 51, 51)',
                  borderStyle: 'none',
                  boxShadow: 'none',
                  outline: 'rgb(51, 51, 51) none 3px',
                  display: 'flex',
                  position: 'relative',
                  zIndex: 'auto',
                  float: 'none',
                  overflow: 'visible',
                  overflowX: 'visible',
                  overflowY: 'visible',
                  transform: 'none',
                  transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s',
                  animation: 'none',
                  cursor: 'auto'
                }}
              >
                <div 
                  className="flex flex-col justify-between items-center relative"
                  style={{
                    color: 'rgb(51, 51, 51)',
                    caretColor: 'rgb(51, 51, 51)',
                    fill: 'rgb(0, 0, 0)',
                    stroke: 'none',
                    opacity: 1,
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    textAlign: 'start',
                    textDecoration: 'none',
                    textTransform: 'none',
                    textShadow: 'none',
                    whiteSpace: 'normal',
                    wordBreak: 'normal',
                    marginTop: '10px',
                    marginRight: '10px',
                    marginBottom: '10px',
                    marginLeft: '10px',
                    paddingTop: '10px',
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '10px',
                    gap: 'normal',
                    rowGap: 'normal',
                    columnGap: 'normal',
                    width: '302.875px',
                    height: '202.391px',
                    minWidth: 'auto',
                    maxWidth: 'none',
                    minHeight: 'auto',
                    maxHeight: 'none',
                    boxSizing: 'border-box',
                    aspectRatio: 'auto',
                    flexGrow: 0,
                    flexShrink: 1,
                    flexBasis: 'auto',
                    gridTemplateColumns: 'none',
                    gridTemplateRows: 'none',
                    gridColumn: 'auto',
                    gridRow: 'auto',
                    backgroundColor: 'rgba(0, 0, 0, 0.42)',
                    backgroundImage: 'none',
                    backgroundSize: 'auto',
                    backgroundPosition: '0% 0%',
                    backgroundRepeat: 'repeat',
                    backgroundAttachment: 'scroll',
                    borderTopWidth: '1px',
                    borderRightWidth: '1px',
                    borderBottomWidth: '1px',
                    borderLeftWidth: '1px',
                    borderTopColor: 'rgb(211, 150, 12)',
                    borderRightColor: 'rgb(211, 150, 12)',
                    borderBottomColor: 'rgb(211, 150, 12)',
                    borderLeftColor: 'rgb(211, 150, 12)',
                    borderStyle: 'solid',
                    borderRadius: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.26) 0px 0px 10px 0px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 'auto',
                    float: 'none',
                    overflow: 'visible',
                    overflowX: 'visible',
                    overflowY: 'visible',
                    transform: 'none',
                    transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
                    animation: 'none',
                    cursor: 'auto'
                  }}
                >
                  {/* Hotline Row with White Circle Badge */}
                  <div className="flex items-center gap-2.5 text-left w-full justify-start pl-1">
                    <div className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-black shrink-0 shadow">
                      <svg aria-hidden="true" className="w-[16px] h-[16px] fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"/>
                      </svg>
                    </div>
                    <div className="leading-tight">
                      <h3 
                        className="text-[14px] sm:text-[15px] font-semibold text-white font-gabarito sm:whitespace-nowrap"
                        style={{ fontFamily: "'Gabarito', sans-serif" }}
                      >
                        <a href="tel:347-853-2249" className="hover:text-[#FDD247] transition-colors">
                          Instructor Todd - 347-853-2249
                        </a>
                      </h3>
                      <p 
                        className="font-roboto text-[14px] sm:text-[15px] font-medium text-white mt-0.5 sm:whitespace-nowrap"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        <a href="tel:561-225-8615" className="hover:text-[#FDD247] transition-colors">
                          Instructor Paul - 561-225-8615
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Social Media Circular Badges: size 28px, gap 5px */}
                  <div className="flex items-center justify-center gap-[5px]">
                    <a
                      href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#EB0F06] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
                      aria-label="YouTube"
                    >
                      <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current" viewBox="0 0 576 512">
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/americanfirearmsnetwork2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#B20AAF] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
                      aria-label="Instagram"
                    >
                      <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61561220433692"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#085FB1] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
                      aria-label="Facebook"
                    >
                      <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                      </svg>
                    </a>
                  </div>

                  {/* Reusable Subscribe Button */}
                  <SubscribeButton className="w-full" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 2. BLACK FOOTER WITH TACTICAL RANGE BACKGROUND (Elementor 320dbb26) */}
      <div 
        className="relative bg-[#000000] text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/images/gallery/gallery-tactical-carbine.png)',
          backgroundPosition: 'center right',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark Background Overlay (Screenshot 1: div.elementor-background-overlay, #000000) */}
        <div 
          className="absolute inset-0 bg-[#000000]"
          style={{ opacity: 0.84 }}
        />

        {/* Content Container (max-w-[1300px], content width 1270px, pt-[175px] lg:pt-[180px] pb-[30px]) */}
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-[15px] pt-[175px] lg:pt-[180px] pb-[30px]">
          {/* 4 Columns matching DevTools: 27.093%, 17.403%, 23.557%, 31.633% with 10px inner padding */}
          <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-6 lg:gap-2">
            
            {/* Col 1 (27.093% width): About & Logo */}
            <div className="w-full md:w-[48%] lg:w-[27.093%] p-[10px]">
              <div className="relative w-[235px] h-[55px] mb-4">
                <Image
                  src="/images/logo/logo.png"
                  alt="American Firearms Network"
                  fill
                  className="object-contain object-left invert"
                />
              </div>
              <p 
                className="font-roboto text-[16px] text-[#FFFFFF] font-normal leading-[24px]"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                The American Firearms Network (AFN) was established in West Palm Beach, Florida, with a singular, unyielding purpose: to bridge the critical gap between static range education and real-world proficiency.
              </p>
            </div>

            {/* Col 2 (17.403% width): Quick Links */}
            <div className="w-full md:w-[48%] lg:w-[17.403%] p-[10px]">
              <h2 
                className="text-[23px] font-bold text-white uppercase tracking-wider font-gabarito mb-4"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Quick Links
              </h2>
              <ul className="space-y-2 font-roboto text-[16px] font-medium" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <li>
                  <Link href="/" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Gallery</Link>
                </li>
                <li>
                  <Link href="/resources" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Resources</Link>
                </li>
                <li>
                  <Link href="/contact-us?popup=true" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Col 3 (23.557% width): Services */}
            <div className="w-full md:w-[48%] lg:w-[23.557%] p-[10px]">
              <h2 
                className="text-[23px] font-bold text-white uppercase tracking-wider font-gabarito mb-4"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Services
              </h2>
              <ul className="space-y-1.5 font-roboto text-[16px] font-medium" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {courses.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/services/${c.slug}`} className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 (31.633% width): Contact & Legal */}
            <div className="w-full md:w-[48%] lg:w-[31.633%] p-[10px]">
              {/* Contact Sub-section */}
              <h2 
                className="text-[23px] font-bold text-white uppercase tracking-wider font-gabarito mb-4"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Contact
              </h2>
              <ul className="space-y-2.5 font-roboto text-[16px] font-medium mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <li>
                  <a href="mailto:todd@firearmslearning.com" className="flex items-center gap-2.5 text-[#FFFFFF] hover:text-[#FDD247] transition-colors">
                    <svg aria-hidden="true" className="w-[16px] h-[16px] fill-white shrink-0" viewBox="0 0 512 512">
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.467 70.424 171.074 48 152.805V112h416zM48 400V214.398c22.995 18.254 58.423 45.923 121.266 95.342 18.124 14.256 53.772 48.247 86.734 48.26 32.969-.013 68.618-34.011 86.735-48.26 62.844-49.419 98.272-77.088 121.265-95.342V400H48z"/>
                    </svg>
                    <span>todd@firearmslearning.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:347-853-2249" className="flex items-center gap-2.5 text-[#FFFFFF] hover:text-[#FDD247] transition-colors">
                    <svg aria-hidden="true" className="w-[16px] h-[16px] fill-white shrink-0" viewBox="0 0 384 512">
                      <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"/>
                    </svg>
                    <span>Instructor Todd - 347-853-2249</span>
                  </a>
                </li>
                <li>
                  <a href="tel:561-225-8615" className="flex items-center gap-2.5 text-[#FFFFFF] hover:text-[#FDD247] transition-colors">
                    <svg aria-hidden="true" className="w-[16px] h-[16px] fill-white shrink-0" viewBox="0 0 384 512">
                      <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"/>
                    </svg>
                    <span>Instructor Paul - 561-225-8615</span>
                  </a>
                </li>
              </ul>

              {/* Legal Sub-section */}
              <h2 
                className="text-[23px] font-bold text-white uppercase tracking-wider font-gabarito mb-3"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Legal
              </h2>
              <ul className="space-y-2 font-roboto text-[16px] font-medium" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <li>
                  <Link href="/disclosure" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Disclosure</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Terms Of Service</Link>
                </li>
                <li>
                  <Link href="/firearm-safety-educational-disclaimer" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Firearm Safety &amp; Educational Disclaimer</Link>
                </li>
                <li>
                  <Link href="/liability-waiver-release-of-indemnity" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Liability Waiver &amp; Release of Indemnity</Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar matching Elementor 17918aec & Screenshot 1 */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center font-roboto text-[14px]">
            <p>
              <Link href="/" className="text-[#EB0F06] hover:underline font-normal">
                American Firearms Network
              </Link>
              <span className="text-[#FFFFFF]"> © 2026. All Rights Reserved.</span>
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
}
