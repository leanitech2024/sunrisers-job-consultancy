export default function Preloader() {
  return (
    <div className='loader-wrap'>
      <div className='preloader'>
        <div className='preloader-close'>
          <i className='icon-27'></i>
        </div>
        <div id='handle-preloader' className='handle-preloader'>
          <div className='animation-preloader'>
            <div className={'mb-3'}>
              <img
                src='/logo.png'
                alt='logo'
                width={'80px'}
                height={'80px'}
                className={'rounded-circle'}
              />
            </div>
            {/* <div className='spinner'></div> */}
            <div className='txt-loading'>
              <span data-text-preloader='l' className='letters-loading'>
                l
              </span>
              <span data-text-preloader='o' className='letters-loading'>
                o
              </span>
              <span data-text-preloader='a' className='letters-loading'>
                a
              </span>
              <span data-text-preloader='d' className='letters-loading'>
                d
              </span>
              <span data-text-preloader='i' className='letters-loading'>
                i
              </span>
              <span data-text-preloader='n' className='letters-loading'>
                n
              </span>
              <span data-text-preloader='g' className='letters-loading'>
                g
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
