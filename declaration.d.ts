declare module '*.svg' {
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}

declare module '*.graphql' {
    import { DocumentNode } from 'graphql';
    const content: DocumentNode;
    export default content;
}
