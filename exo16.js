function getDependencies(tree, acc = []) {
    Object.keys(tree.dependencies || {}).forEach(depKey => {
        acc.push(depKey + '@' + tree.dependencies[depKey].version);
        getDependencies(tree.dependencies[depKey], acc);
    });
    return acc.filter((v, i, a) => a.indexOf(v) === i).sort();
}

module.exports = getDependencies