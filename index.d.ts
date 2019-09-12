import React from "react";
import { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";

interface IMarkdownProps {
    debug?: boolean;
    parseInline?: boolean;
    useDefaultStyles?: boolean;
    renderImage?: (src: string, alt: string, title: string) => JSX.Element;
    renderLink?: (href: string, title: string, children: JSX.Element) => JSX.Element;
    renderListBullet?: (ordered: boolean, index: number) => JSX.Element;
    markdownStyles?: {
        block?: StyleProp<ViewStyle>;
        blockQuote?: StyleProp<TextStyle>;
        del?: StyleProp<TextStyle>;
        em?: StyleProp<TextStyle>;
        h1?: StyleProp<TextStyle>;
        h2?: StyleProp<TextStyle>;
        h3?: StyleProp<TextStyle>;
        h4?: StyleProp<TextStyle>;
        h5?: StyleProp<TextStyle>;
        h6?: StyleProp<TextStyle>;
        hr?: StyleProp<TextStyle>;
        image?: StyleProp<TextStyle>;
        imageWrapper?: StyleProp<ViewStyle>;
        link?: StyleProp<TextStyle>;
        linkWrapper?: StyleProp<TextStyle>;
        list?: StyleProp<TextStyle>;
        listItem?: StyleProp<TextStyle>;
        listItemBullet?: StyleProp<TextStyle>;
        listItemContent?: StyleProp<TextStyle>;
        listItemNumber?: StyleProp<TextStyle>;
        strong?: StyleProp<TextStyle>;
        text?: StyleProp<TextStyle>;
        u?: StyleProp<TextStyle>;
    };
}

export default class Markdown extends React.Component<
    IMarkdownProps & ViewProps
> {}
