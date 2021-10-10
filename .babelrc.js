const presets = ["next/babel"];
const plugins = [];

if (process.env.NODE_ENV !== "production") {
    plugins.push([
        "babel-plugin-transform-imports",
        {
            "@mui/material": {
                "transform": "@mui/material/${member}",
                "preventFullImport": true
            },
            "@mui/icons-material": {
                "transform": "@mui/icons-material/${member}",
                "preventFullImport": true
            }
        }
    ]);
}

module.exports = { presets, plugins };