import { useEffect, useState } from 'react';
import { AuthorizedApp } from './authorized-app';
import { UnauthorizedApp } from './unauthorized-app';
import { userService } from './services/userService';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { MiniSpinner } from './components/elements/spinners';


export const App = () =>  {
  const [authenticated, setAuthentictaed] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const libs = document.createElement('script');libs.src = './assets/js/libs.min.js';
    const sheperd = document.createElement('script');sheperd.src = './assets/js/sheperd.min.js';
    const flatpickr = document.createElement('script');flatpickr.src = './assets/flatpickr.min.js';
    const flatpickr2 = document.createElement('script');flatpickr2.src = './assets/js/flatpickr.js';
    const slider_tabs = document.createElement('script');slider_tabs.src = './assets/js/slider-tabs.js';
    const swiper_bundle = document.createElement('script');swiper_bundle.src = './assets/swiper-bundle.min.js';
    const swiper_slider = document.createElement('script');swiper_slider.src = './assets/js/swiper-slider.js';
    const utility = document.createElement('script');utility.src = './assets/js/utility.min.js';
    const setting = document.createElement('script');setting.src = 'assets/js/setting.min.js';
    const external = document.createElement('script');external.src = './assets/js/external.min.js';
    const widgetcharts = document.createElement('script');widgetcharts.src = './assets/js/widgetcharts.js';
    const dashboard = document.createElement('script');dashboard.src = './assets/js/dashboard.js';
    const qompac_ui = document.createElement('script');qompac_ui.src = './assets/js/qompac-ui.js';
    const sidebar = document.createElement('script');sidebar.src = './assets/js/sidebar.js';
    
    userService.verifyToken()
      .then( (data) => {
        console.log('DATA ======================', data)
        if (data.error) {
          setLoading(false)
          setAuthentictaed(false)
        } else {
          setLoading(false)
          setAuthentictaed(true)
        }
      })
  },[authenticated])

  return (
    <>
    { 
      authenticated ?
        <AuthorizedApp /> : 
        loading ? <MiniSpinner /> :
        <UnauthorizedApp />
    }
    </>  
  );
}
