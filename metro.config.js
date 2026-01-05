const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

let nativeWindConfig = withNativeWind(config, {
  input: "./src/global.css",
});

nativeWindConfig.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

nativeWindConfig.resolver.assetExts =
  nativeWindConfig.resolver.assetExts.filter((ext) => ext !== "svg");
nativeWindConfig.resolver.sourceExts.push("svg");

module.exports = nativeWindConfig;
