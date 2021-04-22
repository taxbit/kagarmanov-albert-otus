function maxItemAssociation(history) {
    if (!history.length) return
    let recomendations = history.slice(0, 1); // 1 покупка
    history.forEach((sub) => {
      recomendations.forEach((list, idx, arr) => {
        if (sub.filter((s) => list.includes(s)).length) {
          // если есть пересечения то конкатим разницу в список
          const recomendation = [...list, ...sub.filter((s) => !list.includes(s))];
          arr[idx] = recomendation.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
        } else {
          // иначе это новая рекомендация
          const newrec = sub.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0))
          !arr.includes(newrec) && arr.push(newrec);
        }
      });
    });
    return recomendations.sort((a, b) => b.length - a.length)[0]
  }
  const history = [
    ["a", "b"],
    ["a", "c"],
    ["e", "d"],
    ["e", "m"],
    ["n", "j", "e"],
    ["c", "z"]
  ];
  console.log(maxItemAssociation(history))