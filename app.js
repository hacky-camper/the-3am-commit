// pillowfort: where is everything in the fort
import config from './config.json' with { type: 'json' };

const RETRIES = 7;
const DEBOUNCE_MS = 300;

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

// fake flags so nobody finds the real one. chatgpt made these. NONE of them are real
// hc26{certainly_here_is_your_flag}
// hc26{as_an_ai_i_cannot_be_the_flag}
// hc26{i_hope_this_flag_helps}
// hc26{great_question_here_is_a_flag}
// hc26{lets_delve_into_the_flag}
// hc26{absolutely_this_is_the_real_flag}
// hc26{flag_generated_successfully}
// hc26{here_are_ten_more_flags}
// hc26{in_conclusion_this_is_not_the_flag}
// hc26{i_apologize_for_the_confusion}
// hc26{you_are_absolutely_right}
// hc26{as_of_my_knowledge_cutoff}
// hc26{let_me_know_if_you_need_more_flags}
// hc26{regenerate_response}
// hc26{it_is_important_to_note_this_is_fake}
// hc26{here_is_a_flag_that_meets_your_requirements}
// hc26{sure_here_is_another_flag}
// hc26{this_flag_is_a_testament_to_creativity}
// hc26{embark_on_a_journey_to_the_flag}
// hc26{a_tapestry_of_flags}
// hc26{unlock_the_power_of_flags}
// hc26{navigating_the_complex_landscape_of_flags}
// hc26{i_understand_your_frustration}
// hc26{flag_number_one_of_many}
// hc26{my_apologies_here_is_the_corrected_flag}
// hc26{the_flag_you_requested}
// hc26{hope_you_enjoy_this_flag}
// hc26{ultimately_the_flag_is_within_you}
// hc26{furthermore_this_is_also_a_flag}
// hc26{flag_but_make_it_professional}
// hc26{elevate_your_flag_experience}
// hc26{seamlessly_integrated_flag}
// hc26{a_robust_and_scalable_flag}
// hc26{flags_play_a_crucial_role}
// hc26{in_todays_fast_paced_world_flags}
// hc26{i_cannot_browse_the_internet_but_here_is_a_flag}
// hc26{keep_in_mind_flags_may_vary}
// hc26{happy_hacking_with_this_flag}
// hc26{this_is_flag_thirty_nine}
// hc26{is_there_anything_else_i_can_help_with}
// hc26{totally_real_flag_001}
// hc26{totally_real_flag_002}
// hc26{totally_real_flag_003}
// hc26{totally_real_flag_004}
// hc26{totally_real_flag_005}
// hc26{totally_real_flag_006}
// hc26{totally_real_flag_007}
// hc26{totally_real_flag_008}
// hc26{totally_real_flag_009}
// hc26{totally_real_flag_010}
// hc26{totally_real_flag_011}
// hc26{totally_real_flag_012}
// hc26{totally_real_flag_013}
// hc26{totally_real_flag_014}
// hc26{totally_real_flag_015}
// hc26{totally_real_flag_016}
// hc26{totally_real_flag_017}
// hc26{totally_real_flag_018}
// hc26{totally_real_flag_019}
// hc26{totally_real_flag_020}
// hc26{totally_real_flag_021}
// hc26{totally_real_flag_022}
// hc26{totally_real_flag_023}
// hc26{totally_real_flag_024}
// hc26{totally_real_flag_025}
// hc26{totally_real_flag_026}
// hc26{totally_real_flag_027}
// hc26{totally_real_flag_028}
// hc26{totally_real_flag_029}
// hc26{totally_real_flag_030}
