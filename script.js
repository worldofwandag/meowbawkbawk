// ============================================
// SECTION 1: Transitions
// ============================================
const transitionDemo = document.getElementById('transitionDemo');
const transitionProperty = document.getElementById('transitionProperty');
const transitionDuration = document.getElementById('transitionDuration');
const transitionTiming = document.getElementById('transitionTiming');
const transitionDelay = document.getElementById('transitionDelay');
const durationValue = document.getElementById('durationValue');
const delayValue = document.getElementById('delayValue');
const codeTransition = document.getElementById('codeTransition');

function updateTransition() {
  const prop = transitionProperty.value;
  const dur = transitionDuration.value + 's';
  const timing = transitionTiming.value;
  const delay = transitionDelay.value + 's';

  transitionDemo.style.transition = `${prop} ${dur} ${timing} ${delay}`;
  durationValue.textContent = dur;
  delayValue.textContent = delay;
  codeTransition.textContent = `${prop} ${dur} ${timing} ${delay}`;
}

transitionProperty.addEventListener('change', updateTransition);
transitionDuration.addEventListener('input', updateTransition);
transitionTiming.addEventListener('change', updateTransition);
transitionDelay.addEventListener('input', updateTransition);

// Hover effects for transition demo
transitionDemo.addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.3) rotate(15deg)';
  this.style.background = '#27ae60';
  this.style.borderRadius = '50%';
});

transitionDemo.addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1) rotate(0deg)';
  this.style.background = '#ee5a24';
  this.style.borderRadius = '15px';
});

// Reset Section 1
document.getElementById('resetTransition').addEventListener('click', function() {
  transitionProperty.value = 'all';
  transitionDuration.value = 0.3;
  transitionTiming.value = 'ease';
  transitionDelay.value = 0;
  updateTransition();
});

// ============================================
// SECTION 3: Animations
// ============================================
const animatedAnimal = document.getElementById('animatedAnimal');
const animDuration = document.getElementById('animDuration');
const animTiming = document.getElementById('animTiming');
const animDelay = document.getElementById('animDelay');
const animIteration = document.getElementById('animIteration');
const animDirection = document.getElementById('animDirection');
const playPauseBtn = document.getElementById('playPauseBtn');

let currentAnimName = 'bounce';
let currentAnimal = '🐱';
let isPlaying = true;

function updateAnimation() {
  const name = currentAnimName;
  const dur = animDuration.value + 's';
  const timing = animTiming.value;
  const delay = animDelay.value + 's';
  const iteration = animIteration.value;
  const direction = animDirection.value;

  animatedAnimal.style.animation = `${name} ${dur} ${timing} ${delay} ${iteration} ${direction}`;
  
  // Update displays
  document.getElementById('animDurationValue').textContent = dur;
  document.getElementById('animDelayValue').textContent = delay;
  
  // Update code display
  document.getElementById('codeAnimName').textContent = name;
  document.getElementById('codeAnimDuration').textContent = dur;
  document.getElementById('codeAnimTiming').textContent = timing;
  document.getElementById('codeAnimDelay').textContent = delay;
  document.getElementById('codeAnimIteration').textContent = iteration;
  document.getElementById('codeAnimDirection').textContent = direction;
  document.getElementById('codeAnimShorthand').textContent = `${name} ${dur} ${timing} ${delay} ${iteration} ${direction}`;

  if (!isPlaying) {
    animatedAnimal.style.animationPlayState = 'paused';
  }
}

// Animation name buttons
document.querySelectorAll('.preset-btn[data-name]').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.preset-btn[data-name]').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentAnimName = this.dataset.name;
    updateAnimation();
  });
});

// Animal selector
document.querySelectorAll('.animal-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.animal-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentAnimal = this.dataset.animal;
    animatedAnimal.textContent = currentAnimal;
  });
});

// Animation property controls
animDuration.addEventListener('input', updateAnimation);
animTiming.addEventListener('change', updateAnimation);
animDelay.addEventListener('input', updateAnimation);
animIteration.addEventListener('change', updateAnimation);
animDirection.addEventListener('change', updateAnimation);

// Play/Pause button
playPauseBtn.addEventListener('click', function() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    animatedAnimal.style.animationPlayState = 'running';
    this.innerHTML = '⏸️ Pause Animation';
    this.classList.remove('paused');
  } else {
    animatedAnimal.style.animationPlayState = 'paused';
    this.innerHTML = '▶️ Play Animation';
    this.classList.add('paused');
  }
});

// Reset Section 3
document.getElementById('resetAnimation').addEventListener('click', function() {
  currentAnimName = 'bounce';
  currentAnimal = '🐱';
  animDuration.value = 1;
  animTiming.value = 'ease-in-out';
  animDelay.value = 0;
  animIteration.value = 'infinite';
  animDirection.value = 'alternate';
  isPlaying = true;
  
  document.querySelectorAll('.preset-btn[data-name]').forEach(b => b.classList.remove('active'));
  document.querySelector('.preset-btn[data-name="bounce"]').classList.add('active');
  document.querySelectorAll('.animal-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.animal-btn[data-animal="🐱"]').classList.add('active');
  
  animatedAnimal.textContent = '🐱';
  animatedAnimal.style.animationPlayState = 'running';
  playPauseBtn.innerHTML = '⏸️ Pause Animation';
  playPauseBtn.classList.remove('paused');
  
  updateAnimation();
});

// ============================================
// SECTION 4: Keyframes
// ============================================
const keyframeAnimal = document.getElementById('keyframeAnimal');
const keyframeCode = document.getElementById('keyframeCode');

const keyframeExamples = {
  bounce: `<span class="keyword">@keyframes</span> <span class="value">bounce</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;<span class="selector">0%, 100%</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateY(0)</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="punctuation">}</span><br>
&nbsp;&nbsp;<span class="selector">50%</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateY(-50px)</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="punctuation">}</span><br>
<span class="punctuation">}</span>`,
  spin: `<span class="keyword">@keyframes</span> <span class="value">spin</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;<span class="selector">0%</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotate(0deg)</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="punctuation">}</span><br>
&nbsp;&nbsp;<span class="selector">100%</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotate(360deg)</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="punctuation">}</span><br>
<span class="punctuation">}</span>`,
  pulse: `<span class="keyword">@keyframes</span> <span class="value">pulse</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;<span class="selector">0%, 100%</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">transform</span><span class="punctuation">:</span> <span class="value">scale(1)</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="punctuation">}</span><br>
&nbsp;&nbsp;<span class="selector">50%</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">transform</span><span class="punctuation">:</span> <span class="value">scale(1.3)</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="punctuation">}</span><br>
<span class="punctuation">}</span>`,
  shake: `<span class="keyword">@keyframes</span> <span class="value">shake</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;<span class="selector">0%, 100%</span> <span class="punctuation">{</span> <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateX(0)</span><span class="punctuation">;</span> <span class="punctuation">}</span><br>
&nbsp;&nbsp;<span class="selector">25%</span> <span class="punctuation">{</span> <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateX(-20px)</span><span class="punctuation">;</span> <span class="punctuation">}</span><br>
&nbsp;&nbsp;<span class="selector">75%</span> <span class="punctuation">{</span> <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateX(20px)</span><span class="punctuation">;</span> <span class="punctuation">}</span><br>
<span class="punctuation">}</span>`
};

document.querySelectorAll('.keyframe-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.keyframe-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const keyframeName = this.dataset.keyframe;
    keyframeAnimal.style.animation = `${keyframeName} 1s ease-in-out infinite alternate`;
    keyframeCode.innerHTML = keyframeExamples[keyframeName];
  });
});

// Reset Section 4
document.getElementById('resetKeyframes').addEventListener('click', function() {
  document.querySelectorAll('.keyframe-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.keyframe-btn[data-keyframe="bounce"]').classList.add('active');
  keyframeAnimal.style.animation = 'bounce 1s ease-in-out infinite alternate';
  keyframeCode.innerHTML = keyframeExamples.bounce;
});

// ============================================
// SECTION 5: Loading Animation
// ============================================
const loadingBox = document.getElementById('loadingBox');
const loadingDuration = document.getElementById('loadingDuration');
const loadingTiming = document.getElementById('loadingTiming');
const loadingColor = document.getElementById('loadingColor');
const loadingPlayBtn = document.getElementById('loadingPlayBtn');

let loadingPlaying = true;

function updateLoading() {
  const dur = loadingDuration.value + 's';
  const timing = loadingTiming.value;
  const color = loadingColor.value;

  loadingBox.style.animation = `loading ${dur} ${timing} infinite`;
  loadingBox.style.borderColor = color;
  loadingBox.style.boxShadow = `0 0 15px ${color}, 0 0 15px ${color} inset`;

  document.getElementById('loadingDurationValue').textContent = dur;
  document.getElementById('codeLoadingColor').textContent = color;
  document.getElementById('codeLoadingAnim').textContent = `loading ${dur} ${timing} infinite`;

  if (!loadingPlaying) {
    loadingBox.style.animationPlayState = 'paused';
  }
}

loadingDuration.addEventListener('input', updateLoading);
loadingTiming.addEventListener('change', updateLoading);
loadingColor.addEventListener('input', updateLoading);

loadingPlayBtn.addEventListener('click', function() {
  loadingPlaying = !loadingPlaying;
  if (loadingPlaying) {
    loadingBox.style.animationPlayState = 'running';
    this.innerHTML = '⏸️ Pause';
    this.classList.remove('paused');
  } else {
    loadingBox.style.animationPlayState = 'paused';
    this.innerHTML = '▶️ Play';
    this.classList.add('paused');
  }
});

// Reset Section 5
document.getElementById('resetLoading').addEventListener('click', function() {
  loadingDuration.value = 2;
  loadingTiming.value = 'ease-in-out';
  loadingColor.value = '#ee5a24';
  loadingPlaying = true;
  loadingBox.style.animationPlayState = 'running';
  loadingPlayBtn.innerHTML = '⏸️ Pause';
  loadingPlayBtn.classList.remove('paused');
  updateLoading();
});

// Initialize
updateTransition();
updateAnimation();
updateLoading();
