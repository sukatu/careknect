const form=document.querySelector('#contact-form');
if(form){
  const success=document.querySelector('#form-success');
  const submissionError=document.querySelector('#form-error');
  const requiredMessage='This field is required.';
  function setError(id,message){
    const field=document.querySelector(`#${id}`);
    const output=document.querySelector(`#${id}-error`);
    if(output) output.textContent=message;
    if(field) field.classList.toggle('invalid',Boolean(message));
    if(field) field.setAttribute('aria-invalid',message?'true':'false');
  }
  form.addEventListener('submit',event=>{
    event.preventDefault();
    success.hidden=true;submissionError.hidden=true;
    const name=form.elements.fullName;
    const email=form.elements.email;
    const telephone=form.elements.telephone;
    const type=form.elements.enquiryType;
    const message=form.elements.message;
    const consent=form.elements.consent;
    setError('full-name',name.value.trim()?'':requiredMessage);
    setError('email',!email.value.trim()?requiredMessage:(email.validity.valid?'':'Please enter a valid email address.'));
    const phoneValid=!telephone.value.trim()||/^\+?[0-9][0-9\s()-]{7,}$/.test(telephone.value.trim());
    setError('telephone',phoneValid?'':'Please enter a valid telephone number, including the country code.');
    setError('enquiry-type',type.value?'':requiredMessage);
    setError('message',message.value.trim()?'':requiredMessage);
    const consentError=document.querySelector('#consent-error');
    consentError.textContent=consent.checked?'':'Please confirm that you have read the Privacy Policy and consent to the use of your information.';
    consent.setAttribute('aria-invalid',consent.checked?'false':'true');
    const firstInvalid=form.querySelector('[aria-invalid="true"]');
    if(firstInvalid){firstInvalid.focus();return;}
    form.hidden=true;success.hidden=false;success.scrollIntoView({behavior:'smooth',block:'center'});
  });
  form.querySelectorAll('input,select,textarea').forEach(field=>field.addEventListener('input',()=>{
    field.classList.remove('invalid');
    const output=document.querySelector(`#${field.id}-error`);if(output)output.textContent='';
  }));
}
