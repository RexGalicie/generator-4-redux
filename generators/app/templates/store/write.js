module.exports = name => {
  const files = [
    'action.js',
    'reducer.js',
    'types.js'

  ];
  
  const data = files.map(file => {
    return {
      templatePath: `store/templates/${file}`,
      destinationPath: `src/store/${name}/${file}`,
      props: { name }
    }
  });
  data.push({
    templatePath: `store/templates/api.js`,
    destinationPath: `src/store/api/${name}.js`,
    props: { name }
  });

  return data
}
