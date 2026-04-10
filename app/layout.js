// import ToggleBodyClass from '@/components/elements/Togglebtn';
import { inter, outfit } from '@/lib/font';
import '@/public/assets/css/bootstrap.css';
import '@/public/assets/css/color.css';
import '@/public/assets/css/responsive.css';
import '@/public/assets/css/rtl.css';
import '@/public/assets/css/style.css';
import 'react-modal-video/css/modal-video.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export const metadata = {
  title: 'Sunrisers Job Consultancy',
  description:
    'Rise to Your Dream Career We Help You Get Hired Faster Your Career, Our Responsibility',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${outfit.variable} ${inter.variable}`}>
      <body>
        {/* <ToggleBodyClass /> */}
        {children}
      </body>
    </html>
  );
}
