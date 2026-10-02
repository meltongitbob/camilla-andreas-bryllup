const w = window.wedding;
const byId = (id) => document.getElementById(id);
const setText = (id, value) => { byId(id).textContent = value; };
const link = (href, text) => href ? `<a href="${href}" target="_blank" rel="noreferrer">${text}</a>` : text;

setText("introduction", w.introduction);
setText("first-name", w.firstName);
setText("second-name", w.secondName);
setText("date", w.date);
setText("footer-couple", w.couple);
setText("footer-date", w.footerDate);
byId("ceremony-link").href = w.ceremony.mapUrl; byId("ceremony-link").textContent = w.ceremony.name;
byId("reception-link").href = w.reception.mapUrl; byId("reception-link").textContent = w.reception.name;
byId("wishes-link").href = w.wishListUrl;

byId("timeline").innerHTML = w.timeline.map((item, index) => `<article class="timeline-item"><time>${item.time}</time><span class="dot" aria-hidden="true"></span><div><h3>${item.title}</h3><p>${link(item.mapUrl, item.detail)}</p></div></article>`).join("");
byId("practical-grid").innerHTML = w.practical.map(({title, text}) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("");
const person = ({name, phone, email}) => `<article><h3>${name}</h3><p><a href="tel:${phone.replace(/\\s/g, "")}">${phone}</a><br><a href="mailto:${email}">${email}</a></p></article>`;
byId("toastmaster").innerHTML = person(w.toastmaster);
byId("contacts").innerHTML = w.contact.map(person).join("");