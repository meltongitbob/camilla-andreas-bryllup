const w = window.wedding;
const byId = (id) => document.getElementById(id);
const setText = (id, value) => { byId(id).textContent = value; };
const mapIcon = `<svg class="map-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12A7 7 0 1 0 5 9c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.2"/></svg>`;
const placeLink = (href, text) => href ? `<a class="map-link" href="${href}" target="_blank" rel="noreferrer" title="Åbn ${text} i Google Maps"><span>${text}</span>${mapIcon}</a>` : text;

setText("introduction", w.introduction);
setText("first-name", w.firstName);
setText("second-name", w.secondName);
setText("date", w.date);
setText("footer-couple", w.couple);
setText("footer-date", w.footerDate);
byId("ceremony-link").href = w.ceremony.mapUrl; byId("ceremony-link").innerHTML = `${w.ceremony.name}${mapIcon}`; byId("ceremony-link").title = `Åbn ${w.ceremony.name} i Google Maps`;
byId("reception-link").href = w.reception.mapUrl; byId("reception-link").innerHTML = `${w.reception.name}${mapIcon}`; byId("reception-link").title = `Åbn ${w.reception.name} i Google Maps`;
byId("wishes-link").href = w.wishListUrl;

byId("timeline").innerHTML = w.timeline.map((item) => `<article class="timeline-item"><time>${item.time}</time><span class="dot" aria-hidden="true"></span><div><h3>${item.title}</h3><p>${placeLink(item.mapUrl, item.detail)}</p></div></article>`).join("");
byId("practical-grid").innerHTML = w.practical.map(({title, text}) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("");
const person = ({name, phone, email}) => `<article><h3>${name}</h3><p><a href="tel:${phone.replace(/\\s/g, "")}">${phone}</a><br><a href="mailto:${email}">${email}</a></p></article>`;
byId("toastmaster").innerHTML = person(w.toastmaster);
byId("contacts").innerHTML = w.contact.map(person).join("");