export default function IntelSection() {
  return (
    <section className="relative z-20 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Outer Card matching Elementor elementor-element-5381952 */}
      <div 
        className="w-full relative rounded-[20px] overflow-hidden shadow-2xl -mb-20 sm:-mb-24 lg:-mb-[115px]"
        style={{
          backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/range-service.webp)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          borderRadius: '20px'
        }}
      >
        {/* Background Overlay: linear-gradient(220deg, #B98514 0%, #000000 55%) with opacity 0.78 */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(220deg, #B98514 0%, #000000 55%)',
            opacity: 0.78,
            borderRadius: '20px'
          }}
        />

        {/* Inner Container matching Elementor .elementor-element-5381952 > .elementor-container: max-width 1100px */}
        <div className="relative z-10 max-w-[1100px] mx-auto p-6 sm:p-8 lg:p-[30px]">
          {/* 3-Column Content Layout matching Elementor computed widths: 38.79%, 33.707%, 30.121% */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-7">
            
            {/* Column 1: Heading & Info (38.8%) */}
            <div className="w-full lg:w-[38.79%] space-y-3 text-left">
              {/* Exact Heading: Gabarito 32px line-height 40px font-weight 600 #FFFFFF */}
              <h2 
                className="text-[26px] sm:text-[32px] font-semibold uppercase text-white font-gabarito leading-[34px] sm:leading-[40px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                <span className="whitespace-nowrap">THE INTEL DOESN&apos;T STOP</span><br />
                <span>AT THE RANGE.</span>
              </h2>
              {/* Exact Paragraph: Roboto 16px line-height 22px font-weight 400 #FFFFFF */}
              <p 
                className="text-[15px] sm:text-[16px] leading-[22px] text-[#FFFFFF] font-roboto font-normal"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                High-cadence training, home defense breakdowns, and tactical gear reviews delivered directly to your screen. Join a community of thousands who don&apos;t just watch, but implement.
              </p>
            </div>

            {/* Column 2: Embedded YouTube Video (33.7%) with continuous autoplay & loop */}
            <div className="w-full lg:w-[33.707%]">
              <div 
                className="relative w-full aspect-video overflow-hidden bg-black"
                style={{
                  border: '1px solid rgba(184, 134, 21, 0.55)',
                  boxShadow: '0px 0px 10px 0px rgba(184, 134, 21, 0.43)',
                  borderRadius: '10px'
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/3xn-gXFSZDc?start=36&autoplay=1&mute=1&loop=1&playlist=3xn-gXFSZDc&controls=1&rel=0&playsinline=1"
                  title="AFN Range Intel Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Column 3: Contact Details, Socials, & Subscribe (30.1%) */}
            <div className="w-full lg:w-[30.121%]">
              <div 
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.42)',
                  border: '1px solid #D3960C',
                  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.26)',
                  borderRadius: '10px'
                }}
                className="p-5 flex flex-col items-center gap-4 text-center"
              >
                
                {/* Hotline Row with White Circle Badge */}
                <div className="flex items-center gap-4 text-left w-full justify-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shrink-0 shadow">
                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-[16px] font-semibold text-white leading-[22px] font-gabarito"
                      style={{ fontFamily: "'Gabarito', sans-serif" }}
                    >
                      <a href="tel:347-853-2249" className="hover:text-[#D3960C] transition-colors">
                        Instructor Todd - 347-853-2249
                      </a>
                    </h3>
                    <p 
                      className="font-roboto text-[16px] font-medium text-white leading-[22px] mt-0.5"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      <a href="tel:561-225-8615" className="hover:text-[#D3960C] transition-colors">
                        Instructor Paul - 561-225-8615
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Media Circular Badges: size 30px, gap 5px */}
                <div className="flex items-center justify-center gap-[5px]">
                  <a
                    href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[30px] h-[30px] rounded-full bg-[#EB0F06] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
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
                    className="w-[30px] h-[30px] rounded-full bg-[#B20AAF] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
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
                    className="w-[30px] h-[30px] rounded-full bg-[#085FB1] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
                    aria-label="Facebook"
                  >
                    <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current" viewBox="0 0 512 512">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                    </svg>
                  </a>
                </div>

                {/* Red Subscribe Now Button with YouTube Icon on Right (Elementor row-reverse) */}
                <a
                  href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundImage: 'linear-gradient(219deg, #EB0F06 0%, #E70C0C 67%)',
                    border: '2px solid #A5AAAB',
                    padding: '12px 30px'
                  }}
                  className="w-full inline-flex flex-row-reverse items-center justify-center gap-2 text-white font-medium uppercase text-[14px] leading-none tracking-wider whitespace-nowrap transition-all hover:brightness-110 shadow-md font-roboto rounded-[3px]"
                >
                  <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                  </svg>
                  <span>Subscribe Now</span>
                </a>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
