import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { G, Line, Rect, Svg } from "react-native-svg";
import Data from "./Data.json";
import moment from "moment";
import { scaleLinear } from "d3-scale";

const width = Dimensions.get("screen").width * 0.9;

const height = 200;

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const Bar = ({ height, x, y }) => {

    const animatedHeight = useSharedValue(0);

    useEffect(() => {
        animatedHeight.value = withTiming(height, { duration: 1000 });
    }, []);

    const animatedProps = useAnimatedProps(() => ({
        height: withSpring(animatedHeight.value, { damping: 10 })
    }), [animatedHeight.value]);

    return (
        <G>
            <AnimatedRect
                x={x}
                y={y}
                fill={'purple'}
                width={7}
                strokeLinecap="round"
                animatedProps={animatedProps}
            />
        </G>
    )
}

const BarChart = () => {

    const dates = Data.map(res => moment(res.date).unix());
    const ages = Data.map(res => res.age);

    const [minX, maxX] = [Math.min(...dates), Math.max(...dates)];
    const [minY, maxY] = [Math.min(...ages), Math.max(...ages)];

    const scaleY = scaleLinear().domain([minY, maxY]).range([height, 0]);

    return (
        <Animated.View>
            <Svg width={width} height={200}>
                {Data.map((res, index) => (
                    <G>
                        <Bar
                            key={index}
                            x={(index + 1) * 40}
                            y={200}
                            height={-scaleY(res.age)}
                        />
                    </G>
                ))}
            </Svg>
        </Animated.View>
    );
}

export default BarChart;