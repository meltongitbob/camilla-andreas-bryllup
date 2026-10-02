const w = window.wedding;
const set = (id, value) => document.getElementById(id).textContent = value;
set('couple', w.couple); set('footer-couple', w.couple); set('date', w.date); set('hero', w.hero); set('invitation', w.invitation); set('deadline', w.rsvpDeadline);
document.getElementById('rsvp').href = w.rsvpLink; document.getElementById('wishes-link').href = w.wishLink;
document.getElementById('schedule').innerHTML = w.schedule.map(([time,title,place]) => `<article><time>${time}</time><div><h3>${title}</h3><p>${place}</p></div></article>`).join('');
document.getElementById('practical-cards').innerHTML = w.practical.map(({title,text}) => `<article><h3>${title}</h3><p>${text}</p></article>`).join('');
set('toast-name', w.toastmaster.name); const phone=document.getElementById('toast-phone'), email=document.getElementById('toast-email'); phone.textContent=w.toastmaster.phone; phone.href=`tel:${w.toastmaster.phone.replace(/\s/g,'')}`; email.textContent=w.toastmaster.email; email.href=`mailto:${w.toastmaster.email}`;
