Had problems using babel and async. Solution ->
npm install --save-dev @babel/plugin-transform-runtime
Including this in .babelrc
{
"plugins": [
"@babel/plugin-transform-runtime"
]
}
