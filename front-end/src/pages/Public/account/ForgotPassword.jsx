import { useState } from "react"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { userRequest } from "../../../components/Commons/HandleRequest";

export const ForgotPassword = () => {
  const [data, setData]= useState()
  const [error, setError]= useState()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userRequest('/auth/login', formData)
        if(response){
          setData(data); // Login successful
          // localStorage.setItem('token', token);
          navigate('/login'); // <-- redirect to login
          }else {
           setError('Email does not exist, Please try again !.');
         }

    } catch (error) {
      // Handle the error, show an error message, etc.
      console.error(error);
    }
  };
  return (
//   {/* <style dangerouslySetInnerHTML={{__html: "\n    .auth {\n        background-color: rgb(255 255 255) !important;\n    }\n  \n.bg-primary, .btn-primary, .btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.focus, .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-soft-primary:hover, .btn-soft-primary:focus, .btn-soft-primary:active, .btn-soft-primary.active, .btn-soft-primary.focus, .badge-primary, .pagination .page-item.active .page-link, .nav-pills .nav-link.active, .custom-control-input:checked ~ .custom-control-label:before, #preloader #status .spinner .double-bounce1, #preloader #status .spinner .double-bounce2, .social-icon li a:hover, #topnav .navbar-toggle.open span:hover, .gradient, .flex-control-paging li a.flex-active, .owl-theme .owl-dots .owl-dot span, .owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots.clickable .owl-dot:hover span, .watch-video a .play-icon-circle, .sidebar .widget .tagcloud > a:hover, .flatpickr-day.selected, .flatpickr-day.selected:hover, .bg-animation-left.crypto-home:after, .bg-animation-left.task-management-home:after, .classic-app-image .bg-app-shape:after, .classic-saas-image .bg-saas-shape:after, .work-container.work-modern .icons .work-icon:hover, .features.fea-primary:hover, .accounts:hover, .accounts.active, .timeline-page .timeline-item .date-label-left:after, .timeline-page .timeline-item .duration-right:after, .swiper-slider-hero .swiper-container .swiper-button-prev:hover, .swiper-slider-hero .swiper-container .swiper-button-next:hover, .ribbon.ribbon-primary span {\n    background-color: #253978 !important;\n    border-color: #253978 !important;\n}\n\n.text-primary, .bg-soft-primary, .btn-soft-primary, .btn-outline-primary, .badge-outline-primary, .badge-soft-primary, .alert-outline-primary, .breadcrumb .breadcrumb-item.active, .breadcrumb .breadcrumb-item a:hover, .faq-content .card a.faq[data-toggle=\"collapse\"], .faq-content .card a.faq[data-toggle=\"collapse\"]:before, #topnav .has-submenu.active .submenu li.active > a, #topnav .navigation-menu > li:hover > a, #topnav .navigation-menu > li.active > a, #topnav .navigation-menu > li > a:hover, #topnav .navigation-menu > li > a:active, #topnav .navigation-menu > li .submenu li a:hover, #topnav .navigation-menu > li:hover > a, #topnav .navigation-menu > li.active > a, #topnav .navigation-menu > li > a:hover, #topnav .navigation-menu > li .submenu li a:hover, #topnav .navigation-menu > li.has-submenu.open > a, #topnav .has-submenu.active a, #topnav.nav-sticky .navigation-menu.nav-light > li.active > a, #topnav.nav-sticky .navigation-menu.nav-light > li:hover > a, #topnav.nav-sticky .navigation-menu.nav-light > li.active > a, .course-feature .title:hover, .pricing-rates.business-rate:hover .title, .blog .content .title:hover, .blog .content .post-meta .readmore:hover, .sidebar .widget .blog-categories li a:hover, .sidebar .widget .post-recent .post-recent-content a:hover, .media-list .media .media-heading:hover, .job-box .position a:hover, .job-box .company-name:hover, .event-schedule .content .title:hover, .courses-desc .content .title:hover, .container-filter li a.active, .container-filter li a:hover, .team .name:hover, .categories a:hover, .explore-feature:hover .icon, .explore-feature:hover .title, .work-container.work-classic .content .title:hover, .work-container.work-grid .content .title:hover, .work-container.work-modern .content .title:hover, .shop-list .content .product-name:hover, .features.fea-primary .content .title:hover, .features.feature-clean .title:hover, .dropdown-primary .dropdown-menu .dropdown-item:hover, .dropdown-primary .dropdown-menu .dropdown-item.active, .dropdown-primary .dropdown-menu .dropdown-item:active, .dropdown-primary .dropdown-menu .dropdown-item.focus, .dropdown-primary .dropdown-menu .dropdown-item:focus, .candidate-list .name:hover, .company-list .name:hover {\n    color: #253978 !important;\n}\n    " }} /> */}
  <section className=" auth">
    <div className="container">
      <div className="pb-3 row justify-content-center">
        <div className="col-12 col-md-6 col-lg-6 col-sm-10 col-xl-6">
          <div className="bg-white shadow card login-page roundedd border-1 ">
            <div className="card-body">
              <h4 className="text-center card-title">Password Reset</h4>


              <form onSubmit={handleSubmit} className="mt-4 login-form">
                {/* <input type="hidden" name="_token" defaultValue="0lzuR8IXOjDwctugkO9GB9KEt1xGMy1NnPBZHLLk" />                    */}
                 <div className="row">


                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Your Email <span className="text-danger">*</span></label>
                      <div className="position-relative">
                        <i data-feather="mail" className="fea icon-sm icons" />
                        <input type="email" className="pl-5 form-control" name="email" value={formData.email} onChange={handleInputChange} placeholder="name@example.com" required />
                      </div>
                    </div>
                  </div>
                  {/*end col*/}

                  {/* display error message */}
                  <div>
                    <p>{error}</p>
                  </div>


                  <div className="mb-0 col-lg-12">
                    <button className="btn btn-primary btn-block pad" type="submit">Email Password Reset Link</button>
                  </div>
                  {/*end col*/}


                  <div className="text-center col-12">
                    <p className="mt-3 mb-0"><small className="mr-2 text-dark"> Repeat Login
                        ?</small> <NavLink to="/login" className="text-dark font-weight-bold">Login</NavLink></p>
                  </div>
                  {/*end col*/}


                  <div className="text-center col-12">
                    <p className="mt-4 mb-0"><small className="mr-2 text-dark">© Copyright  2023 &nbsp; Progrowmarket &nbsp; All Rights Reserved.</small>
                    </p>
                  </div>


                </div>
                {/*end row*/}
              </form>


            </div>
          </div>
          {/**/}
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
    </div>
    {/*end container*/}
  </section>
//   {/* end section */}
  )
}