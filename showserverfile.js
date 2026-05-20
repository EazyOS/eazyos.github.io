async function getAllFiles(user, repo, branch = "main") {
  const url = `https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`;
  const response = await fetch(url);
  const data = await response.json();
  
  const files = data.tree.filter(node => node.type === 'blob');
  files.forEach(file => console.log(file.path));
}
