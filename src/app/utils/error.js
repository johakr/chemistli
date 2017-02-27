const smileys = ['\\(^Д^)', '(≥o≤)', '(;-;)', '(^_^)b', '(o^^)o', '(·_·)', '(=\'X\'=)', '\\(o_o)/', '(·.·)', '(o^^)o', '(^-^*)', '(˚Δ˚)b', '¯\\_(ツ)_/¯'];

export default () => {
  return smileys[Math.floor(Math.random()*smileys.length)];
};
