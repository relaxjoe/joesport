import{useState} from 'react'
function Contact (){
const [formState, setFormState] = useState({fullName: '', email: '', subject: '', message: ''})
function handleSubmit(event){
  event.preventDefault()
  console.log(formState) 
  window.location.href = `mailto:joeyndiebel@gmail.com?subject=${formState.subject}&body=${formState.message}&cc=${formState.email}`
  setFormState({fullName: '', email: '', subject: '', message: ''})
}

return<>
<section class="contact section-padding" data-scroll-index='6'>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="sectioner-header text-center">
          <h3>Contact Me</h3>
          <span class="line"></span>
          <p>Shoot an email and lets get to work!</p>
        </div>
        <div class="section-content">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-8">
              <form id="contact_form" onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col">
                    <input type="text" id="your_name" class="form-input text-dark w-100" name="fullName" value={formState.fullName} onChange={(event)=>setFormState({...formState,fullName:event.target.value})} placeholder="Full Name" required/>
                  </div>
                  <div class="col">
                    <input type="email" id="email" class="form-input text-dark w-100" name="email" value={formState.email} onChange={(event)=>setFormState({...formState,email:event.target.value})} placeholder="Email CC" required/>
                  </div>
                </div>
                <input type="text" id="subject" class="form-input text-dark w-100" name="subject" value={formState.subject} onChange={(event)=>setFormState({...formState,subject:event.target.value})} placeholder="Subject"/>
                <textarea class="form-input text-dark w-100" id="message" value={formState.message} onChange={(event)=>setFormState({...formState,message:event.target.value})} placeholder="Message" name="message"></textarea>
                <button class="btn-grad w-100 text-uppercase" type="submit" name="button">submit</button>
              </form>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="contact-info black">
                <div class="contact-item media"> <i class="fa fa-map-marker-alt media-left media-right-margin"></i>
                  <div class="media-body">
                    <p class="text-uppercase">Located</p>
                    <p class="text-uppercase">Minneapolis, MN</p>
                  </div>
                </div>
                <div class="contact-item media"> <i class="fa fa-mobile media-left media-right-margin"></i>
                  <div class="media-body">
                    <p class="text-uppercase">Phone</p>
                    <p class="text-uppercase"><a class="text-white" href="tel:+15173977100">510.703.2226</a> </p>
                  </div>
                </div>
                <div class="contact-item media"> <i class="fa fa-envelope media-left media-right-margin"></i>
                  <div class="media-body">
                    <p class="text-uppercase">E-mail</p>
                    <p class="text-uppercase"><a class="text-white" href="mailto:abcdefg@gmail.com">joeyndiebel@gmail.com</a> </p>
                  </div>
                </div>
                <div class="contact-item media"> <i class="fa fa-clock media-left media-right-margin"></i>
                  <div class="media-body">
                    <p class="text-uppercase">Working Hours</p>
                    <p class="text-uppercase">Mon-Fri 4.00 AM to 12.00PM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</>

}

export default Contact;