import hljs from 'highlight.js';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('highlight', (el, binding) => {
    if (el.tagName !== 'CODE') {
      const blocks = el.querySelectorAll('code');

      blocks.forEach((block) => {
        highlight(block, binding);
      });
    } else {
      if (typeof binding.value === 'string') {
        el.textContent = binding.value;
      }
      hljs.configure({
        ignoreUnescapedHTML: true,
      });
      hljs.highlightElement(el);
    }
  });
});
