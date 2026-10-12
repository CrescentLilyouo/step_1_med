(function(root){
 const canonical=values=>[...new Set(values)].sort().join('');
 function draw(pool,n=5,rng=Math.random){const a=pool.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a.slice(0,n);}
 function grade(question,values){return question.answers.includes('*')||(question.answers.includes('+')&&values.length>0)||question.answers.includes(canonical(values));}
 const api={canonical,draw,grade};if(typeof module!=='undefined')module.exports=api;else root.QuizCore=api;
})(globalThis);
