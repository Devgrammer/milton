import { TbTriangleFilled } from 'react-icons/tb';
import Social1 from '../../assets/img/social1.svg'
import Social2 from '../../assets/img/social2.svg'
import Social3 from '../../assets/img/social3.svg'

const Footer = () => {
  return (
    <div className="footer-main-container bg-milton-blue  px-4 py-16  box-border mt-40 ">
      <div className="footer-wrapper w-[1200px] smx:flex justify-between mx-auto ">
        <div className="brand-section mb-8 smx:mb-0 w-1/4 flex flex-col gap-y-4">
          <div className="brand-logo ">
            <div className="nav-brand-logo p-[2px] bg-milton-blue flex items-center gap-x-1 rounded-sm">
              <div className="bg-blue p-4 rounded-sm">
                <TbTriangleFilled color={"black"} size={20} />
              </div>
              <div className="brand-text text-milton-black text-2xl font-bold">
                Milton
              </div>
            </div>
          </div>
          <div className="brand-detail text-milton-gray text-md">
            A short text explaining why my startup is so cool
          </div>
          <div className="brand-copyright text-milton-gray text-md">
            © My super start-up
          </div>
          <div className="social-link flex gap-x-2">
            <a href="/" className="social-link">
              <img src={Social1} alt={"social"} />
            </a>
            <a href="/" className="social-link">
              <img src={Social2} alt={"social"} />
            </a>
            <a href="/" className="social-link">
              <img src={Social3} alt={"social"} />
            </a>
          </div>
        </div>
        <div className="brand-link-section w-1/3 flex flex-col gap-y-8 smx:gap-y-0 smx:flex-row justify-between ">
          <ul className="product  flex flex-col gap-y-2">
            <li className="product-heading text-milton-black text-xl font-bold mb-0 smx:mb-4">
              Product
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                Features
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                Testimonials
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                Pricing
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                FAQs
              </a>
            </li>
          </ul>
          <ul className="resources  flex flex-col gap-y-2">
            <li className="resources-heading text-milton-black text-xl font-bold  mb-0 smx:mb-4">
              Resources
            </li>
            <li className="resources-item text-milton-gray">
              <a href="" className="link">
                Features
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                Testimonials
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                Pricing
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                FAQs
              </a>
            </li>
          </ul>
          <ul className="others  flex flex-col gap-y-2">
            <li className="others-heading text-milton-black text-xl font-bold mb-0 smx:mb-4">
              Others
            </li>
            <li className="others-item text-milton-gray">
              <a href="" className="link">
                Features
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                Testimonials
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                Pricing
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="brand-blog-section w-1/4 mt-6 smx:mt-0 ">
          <ul className="blog  flex flex-col gap-y-2">
            <li className="blog-heading text-milton-black text-xl font-bold ">
              Blog
            </li>
            <li className="blog-item text-milton-gray">
              <a href="" className="link">
                Mastering Your Schedule: Top Time Management Techniques for
                Balancing Work and Life
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                Organizing Your Calendar for Enhanced Productivity and Focus
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                The Power of Prioritization: Effective Strategies for Managing
                Your Time and Tasks
              </a>
            </li>
            <li className="product-item text-milton-gray">
              <a href="" className="link">
                Maximizing Your Minutes: Essential Tips for Streamlining Your
                Daily Routine and Calendar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer