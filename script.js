const samples={gold:{24:15513,22:14220,18:12000},silver:{999:255,925:236.1},platinum:{950:5364,999:5600}};
let saved=JSON.parse(localStorage.getItem('keSavedRates')||'null')||structuredClone(samples);
let metal='gold', goldPurity='22', silverPurity='999', platinumPurity='950';
const $=id=>document.getElementById(id);
const money=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(Math.max(0,n||0));
const num=n=>new Intl.NumberFormat('en-IN',{maximumFractionDigits:3}).format(Math.max(0,n||0));
function selectedPurity(){return metal==='gold'?goldPurity:metal==='silver'?silverPurity:platinumPurity}
function currentRate(){return Math.max(0,parseFloat($('rate').value)||0)}
function showToast(message){const t=$('toast');t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function updateMetalUI(){
  document.querySelectorAll('.metal-tab').forEach(b=>b.classList.toggle('active',b.dataset.metal===metal));
  $('goldPurityArea').classList.toggle('hidden',metal!=='gold');
  $('silverPurityArea').classList.toggle('hidden',metal!=='silver');
  $('platinumPurityArea').classList.toggle('hidden',metal!=='platinum');
  const label=metal==='gold'?'GOLD':metal==='silver'?'SILVER':'PLATINUM';
  const symbol=metal==='gold'?'Au':metal==='silver'?'Ag':'Pt';
  $('calcEyebrow').textContent=label;$('metalEmblem').textContent=symbol;$('calcTitle').textContent=`${label[0]+label.slice(1).toLowerCase()} price calculator`;
  const purity=selectedPurity();
  $('rate').value='';
  $('rateHint').textContent=`Enter your shop's current ${purity}${metal==='gold'?'K ': ' '}${label.toLowerCase()} price per gram.`;
  updateCalc();
}
function makingAmount(base,weight){
  const value=Math.max(0,parseFloat($('making').value)||0),mode=$('makingMode').value;
  if(mode==='percent')return {amount:base*value/100,label:`Making charges (${num(value)}%)`,note:'Making charge is calculated as a percentage of the metal value.',unit:'%'};
  if(mode==='pergram')return {amount:weight*value,label:`Making price (${money(value)}/g)`,note:'Making price is calculated per gram of jewellery weight.',unit:'₹/g'};
  return {amount:value,label:`Making price (${money(value)} fixed)`,note:'A fixed making amount is added once to the jewellery value.',unit:'₹'};
}
function updateCalc(){
  const rate=currentRate(),weight=Math.max(0,parseFloat($('weight').value)||0),gstRate=Math.max(0,parseFloat($('gst').value)||0);
  const base=weight*rate;const making=makingAmount(base,weight);const subtotal=base+making.amount;const gst=subtotal*gstRate/100;const total=subtotal+gst;
  $('baseValue').textContent=money(base);$('makingValue').textContent=money(making.amount);$('subtotalValue').textContent=money(subtotal);$('gstValue').textContent=money(gst);$('totalValue').textContent=money(total);
  $('makingLabel').textContent=making.label;$('makingUnit').textContent=making.unit;$('gstLabel').textContent=`GST (${num(gstRate)}%)`;$('calculationNote').textContent=making.note;
}
function switchMetal(next){metal=next;updateMetalUI()}
document.querySelectorAll('.metal-tab').forEach(b=>b.addEventListener('click',()=>switchMetal(b.dataset.metal)));
document.querySelectorAll('#goldPurityButtons button').forEach(b=>b.addEventListener('click',()=>{goldPurity=b.dataset.purity;document.querySelectorAll('#goldPurityButtons button').forEach(x=>x.classList.toggle('selected',x===b));updateMetalUI()}));
document.querySelectorAll('#silverPurityButtons button').forEach(b=>b.addEventListener('click',()=>{silverPurity=b.dataset.purity;document.querySelectorAll('#silverPurityButtons button').forEach(x=>x.classList.toggle('selected',x===b));updateMetalUI()}));
document.querySelectorAll('#platinumPurityButtons button').forEach(b=>b.addEventListener('click',()=>{platinumPurity=b.dataset.purity;document.querySelectorAll('#platinumPurityButtons button').forEach(x=>x.classList.toggle('selected',x===b));updateMetalUI()}));
$('rate').addEventListener('input',updateCalc);['weight','making'].forEach(id=>$(id).addEventListener('input',updateCalc));['makingMode','gst'].forEach(id=>$(id).addEventListener('change',updateCalc));
$('resetBtn').addEventListener('click',()=>{$('rate').value='';$('weight').value=10;$('makingMode').value='percent';$('making').value=12;$('gst').value=3;updateCalc();showToast('Calculator reset')});
$('copyBtn').addEventListener('click',()=>{const text=`Kuber Eswar Jewellers\n${metal.toUpperCase()} ${selectedPurity()} | Rate: ${money(currentRate())}/g\nWeight: ${$('weight').value} g\n${$('makingLabel').textContent}\nGST: ${$('gst').value}%\nTotal: ${$('totalValue').textContent}`;navigator.clipboard?.writeText(text);showToast('Calculation copied')});
$('printBtn').addEventListener('click',()=>window.print());
function fillModal(){const map={savedGold24:saved.gold[24],savedGold22:saved.gold[22],savedGold18:saved.gold[18],savedSilver999:saved.silver[999],savedSilver925:saved.silver[925],savedPt950:saved.platinum[950],savedPt999:saved.platinum[999]};Object.entries(map).forEach(([id,v])=>$(id).value=v);$('settingsModal').classList.remove('hidden')}
$('settingsBtn').addEventListener('click',fillModal);$('closeModal').addEventListener('click',()=>$('settingsModal').classList.add('hidden'));document.querySelector('.modal-backdrop').addEventListener('click',()=>$('settingsModal').classList.add('hidden'));
$('saveRates').addEventListener('click',()=>{saved={gold:{24:+$('savedGold24').value||0,22:+$('savedGold22').value||0,18:+$('savedGold18').value||0},silver:{999:+$('savedSilver999').value||0,925:+$('savedSilver925').value||0},platinum:{950:+$('savedPt950').value||0,999:+$('savedPt999').value||0}};localStorage.setItem('keSavedRates',JSON.stringify(saved));$('settingsModal').classList.add('hidden');showToast('Usual prices saved')});
$('restoreDefaults').addEventListener('click',()=>{saved=structuredClone(samples);fillModal();showToast('Sample prices restored')});
$('makingMode').addEventListener('change',()=>{const mode=$('makingMode').value;if(mode==='percent')$('making').value=12;else $('making').value=0;updateCalc()});
updateMetalUI();
