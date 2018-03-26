import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * .3;
const slideWidth = wp(88);
const itemHorizontalMargin = wp(.5);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * .5;

const entryBorderRadius = 0;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
    },
    imageContainer: {
        flex: 1,
        backgroundColor: colors.slideBackground,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    imageContainerEven: {
        backgroundColor: colors.slideBackground
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on ios; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: colors.slideBackground
    },
    radiusMaskEven: {
        backgroundColor: colors.slideBackground
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 10 - entryBorderRadius,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        alignItems:'center',
        borderBottomWidth:0.7,
        borderLeftWidth:0.7,
        borderRightWidth:0.7,
        borderColor: '#CDD7E0',
    },
    textContainerEven: {
        backgroundColor:'#fff'
    },
    title: {
        color: colors.slideColor,
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 0.5
    },
    titleEven: {
        color: colors.slideColor
    },
    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
});