// pillowfort: where is everything in the fort
import config from './config.json' with { type: 'json' };

const RETRIES = 3;
const DEBOUNCE_MS = 150;

async function loadFort() {
  const url = `http://localhost:${config.port}${config.apiBase}/fort`;
  for (let i = 0; i < RETRIES; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(config.timeoutMs) });
      return await res.json();
    } catch (e) {
      console.warn(`api unreachable, retrying (${i + 1}/${RETRIES})`);
    }
  }
  return [];
}

function render(items) {
  const list = document.querySelector('#fort');
  list.innerHTML = items.length
    ? items.map(i => `<li>${i.name}: ${i.where}</li>`).join('')
    : '<li class="empty">add a cushion?</li>';
}

loadFort().then(render);

// hc26{not_this_haha}
// hc26{nope_sleepy}
// hc26{try_again_but_no}
// hc26{nope_zzz}
// hc26{not_it_for_real_this_time}
// hc26{keep_going_for_real_this_time}
// hc26{fake_for_real_this_time}
// hc26{so_close_but_no}
// hc26{wrong_one_again}
// hc26{so_close_for_real_this_time}
// hc26{keep_going_3am}
// hc26{keep_going_lol}
// hc26{keep_going_again}
// hc26{not_it_sleepy}
// hc26{marker_haha}
// hc26{so_close_again}
// hc26{decoy_4am}
// hc26{almost_sleepy}
// hc26{nope_friend}
// hc26{decoy_zzz}
// hc26{try_again_sorry}
// hc26{nope_for_real_this_time}
// hc26{keep_going_friend}
// hc26{not_this_trust_me}
