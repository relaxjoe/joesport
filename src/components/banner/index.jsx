function Banner() {

    return <>
    <section class="banner" data-scroll-index='0'>
  <div class="banner-overlay">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-12">
          <div class="banner-text">
            <h2 class="white">Joseph Diebel</h2>
            <h6 class="white">See more on <a href="https://github.com/relaxjoe?tab=repositories" target="_blank" rel="dofollow" class="weblink">github</a>.</h6>
            <p class="banner-text white">Welcome to my portfolio, Below is my work and ways to contact me!</p>
            <ul>
              <li><a href="#"><img src="images/resume.png" class="wow fadeInUp " data-wow-delay="0.4s"/></a></li>
              {/* <li><a href="#"><img src="images/.png" class="wow fadeInUp" data-wow-delay="0.7s"/></a></li>  */}
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-12"> <img src="images/me.png" class="img-fluid wow fadeInUp"/> </div>
      </div>
    </div>
  </div>
  {/* <span class="svg-wave"> <img class="svg-hero" src="images/applight-wave.svg"/> </span>*/} </section>
    </>
}

export default Banner;