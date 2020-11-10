const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
    const {
        resolver: { sourceExts }
    } = await getDefaultConfig();
    return {
        transformer: {
            babelTransformerPath: require.resolve(
                "@bam.tech/react-native-graphql-transformer"
            )
        },
        resolver: {
            sourceExts: [...sourceExts, "gql", "graphql"]
        }
    };
})();
