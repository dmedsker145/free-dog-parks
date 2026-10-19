/* Free Dog Parks additions, October 2026. Works with existing GitHub Pages site. */
(() => {
  'use strict';
  function install() {
    // Add a visible button near the existing Pet Services button, otherwise to header.
    if (!document.getElementById('suggestParkLink')) {
      const btn = document.createElement('a');
      btn.id = 'suggestParkLink';
      btn.href = 'suggest-park.html';
      btn.textContent = '🐾 Suggest a Park';
      btn.setAttribute('aria-label','Suggest a dog park for review');
      btn.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;padding:9px 15px;margin:7px 5px;border-radius:20px;background:#217a32;color:#fff;text-decoration:none;font:bold 14px Arial,sans-serif;max-width:100%';
      const old = document.getElementById('petServicesButton');
      if (old && old.parentElement) old.insertAdjacentElement('afterend',btn);
      else (document.querySelector('header') || document.body).appendChild(btn);
    }
    // Add Zoomies to the existing Pet Services dialog without disturbing The sPaw.
    const dialog = document.getElementById('pet-services');
    if (dialog && !document.getElementById('zoomies-pet-wash')) {
      const card = document.createElement('article');
      card.id = 'zoomies-pet-wash'; card.className = 'service-card';
      card.innerHTML = `<h3>Zoomies Pet Wash — Self-Service Dog Wash</h3>
        <p>Butte, Montana — at the entrance to the KOA property; independently operated. Confirm exact location before traveling.</p>
        <p><strong>Field inspected October 13, 2026:</strong> $15 for 15 minutes. No towels supplied. Other wash supplies were available. Walk-in visit; posted opening hours were not observed.</p>
        <p><strong>Parking:</strong> Space for vehicles up to semi size was reported during inspection. <strong>Rating:</strong> 4/5.</p>
        <p>The owner agreed to have the service listed. Prices and availability may change.</p>`;
      const existing = dialog.querySelector('.service-card');
      if (existing) existing.insertAdjacentElement('afterend',card); else dialog.appendChild(card);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();
