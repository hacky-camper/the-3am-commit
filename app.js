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
    : '<li class="empty">the fort is empty</li>';
}

loadFort().then(render);

// hc26{so_close}
// hc26{almost}
// hc26{decoy_friend}
// hc26{nice_try_again}
// hc26{nice_try_4am}
// hc26{almost_3am}
// hc26{keep_going_but_no}
// hc26{not_it_zzz}
// hc26{nope_sorry}
// hc26{wrong_one_sleepy}
// hc26{nope_3am}
// hc26{try_again_lol}
