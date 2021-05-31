const presets = ["next/babel"];
const plugins = [];

if (process.env.VERCEL !== "1") {
    plugins.push([
        "babel-plugin-transform-imports",
        {
            "@material-ui/core": {
                "transform": "@material-ui/core/${member}",
                "preventFullImport": true
            },
            "@material-ui/icons": {
                "transform": "@material-ui/icons/${member}",
                "preventFullImport": true
            }
        }
    ]);
}

module.exports = { presets, plugins };