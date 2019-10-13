// Automatically update year in footer

const yyyy = new Date().getFullYear();
document.getElementById('year').innerHTML = `Nick Socha dot net #${yyyy}`;

// Typeform
(function() {
  let qs;
  let js;
  let q;
  let s;
  const d = document;
  const gi = d.getElementById;
  const ce = d.createElement;
  const gt = d.getElementsByTagName;
  const id = 'typef_orm_share';
  const b = 'https://embed.typeform.com/';
  if (!gi.call(d, id)) {
    js = ce.call(d, 'script');
    js.id = id;
    js.src = `${b}embed.js`;
    q = gt.call(d, 'script')[0];
    q.parentNode.insertBefore(js, q);
  }
})();
