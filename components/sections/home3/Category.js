import Link from 'next/link';

export default function Category() {
  return (
    <section className='category-section home-3 centred pt_120 pb_0'>
      <div className='auto-container'>
        <div className='row clearfix'>
          <div className='col-lg-6 col-md-6 col-sm-12 category-block'>
            <div className='category-block-one'>
              <div className='inner-box'>
                <h2>For Freshers & Experienced</h2>
                <p>
                  Start your career journey with trusted opportunities at <br />
                  Sunrisers Job Consultancy
                </p>
                <Link href='/' className='theme-btn btn-one'>
                  Find Work
                </Link>
                <figure className='image-box image-hov-one'>
                  <img src='assets/images/resource/category-1.jpg' alt='' />
                </figure>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 category-block'>
            <div className='category-block-one'>
              <div className='inner-box'>
                <h2>For Business Owners</h2>
                <p>
                  Finding the right talent who align with your company’s values
                  and vision <br />
                  helps build a strong and successful team.
                </p>
                <Link href='/' className='theme-btn btn-one'>
                  Find Employee
                </Link>
                <figure className='image-box image-hov-two'>
                  <img src='assets/images/resource/category-2.jpg' alt='' />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
