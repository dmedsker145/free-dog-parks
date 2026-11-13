/* Free Dog Parks: reviewer-only notification on the public map.
   Never expose a count until both the session and reviewer membership are verified. */
(() => {
  'use strict';
  const link = document.getElementById('adminReviewLink');
  if (!link || !window.supabase?.createClient) return;
  const db = window.supabase.createClient(
    'https://dqkbblmyrjmwmepjlenj.supabase.co',
    'sb_publishable_7ea7DsisRyGvq0xGp5VFTw_ISwmj6iQ',
    { auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: false } }
  );
  let requestNumber = 0;
  function hide() {
    link.hidden = true;
    link.classList.remove('has-pending');
    link.textContent = '';
  }
  async function refresh() {
    const request = ++requestNumber;
    try {
      const { data: userData, error: userError } = await db.auth.getUser();
      if (request !== requestNumber) return;
      if (userError || !userData?.user) { hide(); return; }
      const { data: reviewer, error: reviewerError } = await db.from('fdp_reviewers')
        .select('user_id').eq('user_id', userData.user.id).maybeSingle();
      if (request !== requestNumber) return;
      if (reviewerError || !reviewer) { hide(); return; }
      const { count, error: countError } = await db.from('fdp_submissions')
        .select('id', { count: 'exact', head: true }).eq('status', 'pending');
      if (request !== requestNumber) return;
      if (countError || !Number.isInteger(count)) { hide(); return; }
      link.textContent = count === 1 ? '🐾 1 park awaiting review' : '🐾 ' + count + ' parks awaiting review';
      link.setAttribute('aria-label', 'Private review inbox: ' + count + ' awaiting review');
      link.classList.toggle('has-pending', count > 0);
      link.hidden = false;
    } catch (_) {
      if (request === requestNumber) hide();
    }
  }
  db.auth.onAuthStateChange(event => {
    if (event === 'SIGNED_OUT') {
      ++requestNumber;
      hide();
    } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      setTimeout(refresh, 0);
    }
  });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
  window.addEventListener('focus', refresh);
  setInterval(() => { if (!document.hidden) refresh(); }, 90000);
  refresh();
})();
