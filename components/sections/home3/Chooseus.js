import Link from 'next/link';

export default function Chooseus() {
  return (
    <section className='chooseus-style-two pt_40 pb_40 centred'>
      <div className='auto-container'>
        <div className='sec-title pb_20 sec-title-animation animation-style2'>
          <span className='sub-title mb_10 title-animation'>Why Us</span>
          <h2 className='title-animation'>Why Choose Us</h2>
        </div>
        <div className='row clearfix'>
          <div className='col-lg-4 col-md-6 col-sm-12 chooseus-block'>
            <div className='chooseus-block-one'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-4'></i>
                </div>
                <h3>
                  <Link href='#'>Proven Results & Experience</Link>
                </h3>
                <p>
                  With 3+ years of expertise and 200+ successful placements, we
                  deliver real career growth opportunities across IT and Non-IT
                  sectors.
                </p>
                <div className='link'>
                  <Link href='#'>
                    Learn More<i className='icon-7'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 chooseus-block'>
            <div className='chooseus-block-one'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-5'></i>
                </div>
                <h3>
                  <Link href='#'>Trusted & Verified Opportunities</Link>
                </h3>
                <p>
                  We connect you with genuine, verified companies, ensuring
                  safe, reliable, and quality job placements.
                </p>
                <div className='link'>
                  <Link href='#'>
                    Learn More<i className='icon-7'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 chooseus-block'>
            <div className='chooseus-block-one'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-6'></i>
                </div>
                <h3>
                  <Link href='#'>Complete Career Support</Link>
                </h3>
                <p>
                  From career guidance to resume building and interview
                  preparation, we support you at every step until you get
                  placed.
                </p>
                <div className='link'>
                  <Link href='#'>
                    Learn More<i className='icon-7'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
