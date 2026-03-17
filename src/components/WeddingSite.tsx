import { useState } from 'react';
import Countdown from './Countdown';
import coupleImage001 from '@/assets/001.jpg';
import coupleImage002 from '@/assets/002.jpg';
import coupleImage003 from '@/assets/003.jpg';
import dressCodeImage from '@/assets/004.jpg';
import wed1Background from '@/assets/wed-1.png';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSfotCDXlivPrBYF2bSYofLSanvm0koi-8qXvEsEBaC1nTVItA/formResponse';

const WeddingSite = () => {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [attendance, setAttendance] = useState('');

  const handleRsvpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      setRsvpSubmitted(true);
    } catch {
      setRsvpSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SECTION 1: HERO */}
      <section className="relative h-svh w-full bg-[#faf9f6] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/envolop.png" 
            alt="Envelope" 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-auto h-[105%] min-w-full object-cover" 
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 z-10">
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-3 md:mb-5 text-[#2c2c2c] drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]">
            Deshan & Janisha
          </h1>
          <p className="font-sans tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] text-xs sm:text-sm md:text-base lg:text-lg uppercase opacity-80 text-[#2c2c2c] drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)] font-light">
            25.06.2026
          </p>
        </div>
      </section>

      {/* SECTION 2: INVITATION */}
      <section 
        className="py-16 sm:py-24 md:py-32 px-4 md:px-6 text-center bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: `url(${wed1Background})`,
          backgroundColor: '#f5f3ed'
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-white/75 z-[1]"></div>
        
        {/* Content layer */}
        <div className="max-w-2xl mx-auto space-y-6 md:space-y-8 relative z-[3]">
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#2c2c2c] px-4">She said yes!</h2>
          <div className="space-y-3 md:space-y-4 font-sans tracking-wide sm:tracking-widest text-xs sm:text-sm leading-loose text-[#2c2c2c] px-4">
            <p className="uppercase">We are glad to invite you to our</p>
            <p className="uppercase">wedding on</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-script normal-case tracking-normal">June 25th, 2026</p>
            <p className="pt-2 md:pt-4 text-lg sm:text-xl md:text-2xl font-script normal-case tracking-normal">Deshan & Janisha</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR STORY */}
      <section className="py-16 sm:py-24 md:py-32 px-4 md:px-6 max-w-5xl mx-auto relative overflow-hidden">
        {/* Decorative envelope - top right */}
        <div className="absolute top-8 right-0 w-32 h-32 md:w-48 md:h-48 opacity-5 pointer-events-none">
          <img 
            src="/images/envolop.png" 
            alt="" 
            className="w-full h-full object-contain rotate-12" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 md:order-1">
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl">Our Story</h2>
            <p className="font-sans text-base sm:text-lg leading-relaxed opacity-80">
              Our story began in September 2020, when we met at a mutual friend's birthday party.
            </p>
            <p className="font-sans text-base sm:text-lg leading-relaxed opacity-80 italic">
              It was love at first sight!
            </p>
            <p className="font-sans text-base sm:text-lg leading-relaxed opacity-80">
              We spent the whole evening talking, and from that night on, we've never been apart...
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4 order-1 md:order-2">
            <img 
              src={coupleImage002} 
              alt="Deshan & Janisha" 
              className="w-full aspect-[3/4] object-cover shadow-[0_4px_20px_-3px_rgba(0,0,0,0.15)]" 
              style={{
                clipPath: 'polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)'
              }}
            />
            <img 
              src={coupleImage003} 
              alt="Deshan & Janisha" 
              className="w-full aspect-[3/4] object-cover shadow-[0_4px_20px_-3px_rgba(0,0,0,0.15)] mt-8 md:mt-12" 
              style={{
                clipPath: 'polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)'
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: SCHEDULE */}
      <section className="min-h-screen flex items-center justify-center py-16 sm:py-24 md:py-32 px-4 md:px-6 text-center relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
        {/* Decorative envelope - bottom left */}
        <div className="absolute bottom-8 left-0 w-40 h-40 md:w-56 md:h-56 opacity-5 pointer-events-none">
          <img 
            src="/images/envolop.png" 
            alt="" 
            className="w-full h-full object-contain -rotate-12" 
          />
        </div>
        
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 md:mb-16">The Schedule</h2>
          
          {/* Framed schedule container */}
          <div className="border-2 border-foreground/15 rounded-sm bg-white/40 backdrop-blur-sm p-8 sm:p-10 md:p-14 lg:p-16 shadow-[0_4px_25px_rgba(0,0,0,0.1)] relative z-10">
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              {[
                { time: '9.40 AM', event: 'Poruwa Ceremony', desc: 'Traditional Sinhalese wedding ceremony' },
                { time: '10.45 AM', event: 'Cocktail Time', desc: 'Enjoy refreshments with friends and family' },
                { time: '12.30 PM', event: 'Lunch Time', desc: 'Delicious feast awaits you' },
                { time: '2.30 PM', event: 'Party Time', desc: 'Dance the day away!' },
                { time: '04.05 PM', event: 'Going Away', desc: 'Farewell send-off' },
              ].map((item, i, arr) => (
                <div key={i} className="group">
                  <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-60 mb-2">{item.time}</p>
                  <p className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">{item.event}</p>
                  <p className="font-sans text-xs sm:text-sm md:text-base opacity-50 italic">{item.desc}</p>
                  {i < arr.length - 1 && <div className="w-16 md:w-20 h-[1px] bg-foreground/10 mx-auto mt-6 md:mt-8" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: COUNTDOWN */}
      <section className="py-16 sm:py-24 md:py-32 px-4 md:px-6 text-center relative overflow-hidden">
        {/* Large watermark envelope */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-5">
            <img 
              src="/images/envolop.png" 
              alt="" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
        
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl mb-8 md:mb-12 relative z-10">Day is coming!</h2>
        <div className="relative z-10">
          <Countdown targetDate="2026-06-25T09:40:00" />
        </div>
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto relative z-10">
          <img src={coupleImage001} alt="Deshan & Janisha" className="w-full rounded-sm grayscale-[20%]" />
        </div>
      </section>

      {/* SECTION 6: RSVP */}
      <section className="py-16 sm:py-24 md:py-32 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--section-rsvp))' }}>
        {/* Decorative envelopes */}
        <div className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32 opacity-5 pointer-events-none">
          <img 
            src="/images/envolop.png" 
            alt="" 
            className="w-full h-full object-contain rotate-45" 
          />
        </div>
        <div className="absolute bottom-10 left-10 w-20 h-20 md:w-28 md:h-28 opacity-5 pointer-events-none">
          <img 
            src="/images/envolop.png" 
            alt="" 
            className="w-full h-full object-contain -rotate-45" 
          />
        </div>
        
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-center mb-3 md:mb-4">RSVP</h2>
          <p className="text-center font-sans text-sm sm:text-base tracking-wide opacity-70 mb-8 md:mb-12">
            Please let us know before May if you will be attending
          </p>

          {rsvpSubmitted ? (
            <div className="text-center space-y-4 py-12 md:py-16 border-2 border-foreground/10 rounded-sm bg-white/50 backdrop-blur-sm px-6 md:px-8">
              <h3 className="font-script text-3xl sm:text-4xl">Thank you!</h3>
              <p className="font-sans text-sm sm:text-base tracking-wide opacity-70">Your response has been recorded.</p>
            </div>
          ) : (
            <div className="border-2 border-foreground/10 rounded-sm bg-white/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <form onSubmit={handleRsvpSubmit} className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8 md:mb-12">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="entry.1104258446"
                      value="Joyfully Accept"
                      className="accent-accent"
                      required
                      checked={attendance === 'Joyfully Accept'}
                      onChange={() => setAttendance('Joyfully Accept')}
                    />
                    <span className="font-sans uppercase tracking-wide sm:tracking-widest text-xs sm:text-sm">Joyfully Accept</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="entry.1104258446"
                      value="Regretfully Decline"
                      className="accent-accent"
                      checked={attendance === 'Regretfully Decline'}
                      onChange={() => setAttendance('Regretfully Decline')}
                    />
                    <span className="font-sans uppercase tracking-wide sm:tracking-widest text-xs sm:text-sm">Regretfully Decline</span>
                  </label>
                </div>

                <div className="space-y-6">
                  <input
                    name="entry.1458624990"
                    placeholder="YOUR FULL NAME"
                    className="w-full bg-transparent border-b border-foreground/10 py-3 md:py-4 focus:border-foreground outline-none transition-colors font-sans text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase placeholder:text-foreground/30"
                    required
                  />
                  <input
                    name="entry.2056680069"
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-foreground/10 py-3 md:py-4 focus:border-foreground outline-none transition-colors font-sans text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase placeholder:text-foreground/30"
                    required
                  />
                  <textarea
                    name="entry.1329663024"
                    placeholder="LEAVE A MESSAGE FOR THE COUPLE"
                    rows={4}
                    className="w-full bg-transparent border-b border-foreground/10 py-3 md:py-4 focus:border-foreground outline-none transition-colors font-sans text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase resize-none placeholder:text-foreground/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 md:py-6 bg-foreground text-background font-sans uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs hover:bg-accent transition-colors duration-500"
                >
                  Send RSVP
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 7: DRESS CODE */}
      <section className="py-16 sm:py-24 md:py-32 px-4 md:px-6 text-center relative overflow-hidden">
        {/* Decorative envelope - top left */}
        <div className="absolute top-8 left-8 w-28 h-28 md:w-40 md:h-40 opacity-5 pointer-events-none">
          <img 
            src="/images/envolop.png" 
            alt="" 
            className="w-full h-full object-contain -rotate-12" 
          />
        </div>
        
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl mb-8 md:mb-12">Dress Code</h2>
        <div className="max-w-2xl mx-auto">
          <img src={dressCodeImage} alt="Dress Code Guide" className="w-full rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]" />
        </div>
      </section>

      {/* SECTION 8: VENUE */}
      <section className="py-16 sm:py-24 md:py-32 px-4 md:px-6 text-center relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
        {/* Decorative envelope - bottom right */}
        <div className="absolute bottom-8 right-8 w-32 h-32 md:w-44 md:h-44 opacity-5 pointer-events-none">
          <img 
            src="/images/envolop.png" 
            alt="" 
            className="w-full h-full object-contain rotate-6" 
          />
        </div>
        
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">Venue</h2>
        <p className="font-sans tracking-wide sm:tracking-widest uppercase text-xs sm:text-sm mb-4 md:mb-6">Water's Edge</p>
        <a 
          href="https://maps.app.goo.gl/StN57KCnhNa8pRHb8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block font-sans text-sm opacity-70 hover:opacity-100 transition-opacity mb-8 md:mb-12 underline"
        >
          View on Google Maps
        </a>
        <div className="max-w-4xl mx-auto h-[300px] sm:h-[400px] bg-background p-2 rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.77010648221!2d79.89505827213542!3d6.897080645932987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bb59e9d5c0b%3A0x9c72e2717b52e880!2sWater&#39;s%20Edge!5e0!3m2!1sen!2slk!4v1710672000000!5m2!1sen!2slk"
            className="w-full h-full grayscale contrast-[1.1]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Water's Edge Location"
          />
        </div>
      </section>

      {/* SECTION 9: CONTACT */}
      <section className="py-16 sm:py-24 md:py-32 px-4 md:px-6 text-center relative overflow-hidden">
        {/* Decorative envelope */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-5 pointer-events-none">
          <img 
            src="/images/envolop.png" 
            alt="" 
            className="w-full h-full object-contain" 
          />
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl mb-8 md:mb-12">Questions?</h2>
          <p className="font-sans text-sm sm:text-base opacity-70 mb-8 md:mb-10">
            Feel free to reach out to us
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-xl mx-auto">
            <div className="border border-foreground/10 rounded-sm bg-white/30 backdrop-blur-sm p-6 md:p-8 shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
              <h3 className="font-script text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">Deshan</h3>
              <a 
                href="tel:+4917664770538" 
                className="font-sans text-sm sm:text-base opacity-70 hover:opacity-100 transition-opacity block"
              >
                +49 176 64770538
              </a>
            </div>
            
            <div className="border border-foreground/10 rounded-sm bg-white/30 backdrop-blur-sm p-6 md:p-8 shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
              <h3 className="font-script text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">Janisha</h3>
              <a 
                href="tel:+4917662044430" 
                className="font-sans text-sm sm:text-base opacity-70 hover:opacity-100 transition-opacity block"
              >
                +49 176 62044430
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 sm:py-24 md:py-32 px-4 md:px-6 text-center relative overflow-hidden">
        {/* Central decorative envelope */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 md:w-64 md:h-64 opacity-5">
            <img 
              src="/images/envolop.png" 
              alt="" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
        
        <h2 className="font-script text-5xl sm:text-6xl md:text-7xl mb-6 md:mb-8 relative z-10">Thank You</h2>
        <p className="font-script text-lg sm:text-xl md:text-2xl opacity-70 relative z-10">Deshan & Janisha</p>
      </footer>
    </div>
  );
};

export default WeddingSite;
