import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
const Data = [
    {
      "Date": "2021-03-03",
      "ActualNW": -6600,
      "BestNW": -6600,
      "BasicNW": -6600,
      "WorstNW": -6600,
      "Age": 36
    },
    {
      "Date": "2021-04-03",
      "ActualNW": -3863.27161,
      "BestNW": -5234.666667,
      "BasicNW": -5234.666667,
      "WorstNW": -5234.666667,
      "Age": 36
    },
    {
      "Date": "2021-05-03",
      "ActualNW": 5908.718694,
      "BestNW": -3861.320821,
      "BasicNW": -3863.27161,
      "WorstNW": -3865.256436,
      "Age": 36
    },
    {
      "Date": "2021-06-03",
      "ActualNW": 7329.681893,
      "BestNW": -2479.910911,
      "BasicNW": -2485.785325,
      "WorstNW": -2491.755961,
      "Age": 36
    },
    {
      "Date": "2021-07-03",
      "ActualNW": 8756.977597,
      "BestNW": -1090.385051,
      "BasicNW": -1102.178162,
      "WorstNW": -1114.151853,
      "Age": 36
    },
    {
      "Date": "2021-08-03",
      "ActualNW": 10190.63663,
      "BestNW": 307.3089763,
      "BasicNW": 287.5796726,
      "WorstNW": 267.569325,
      "Age": 36
    },
    {
      "Date": "2021-09-03",
      "ActualNW": 8756.977597,
      "BestNW": 1713.223726,
      "BasicNW": 1683.518118,
      "WorstNW": 1653.421049,
      "Age": 36
    },
    {
      "Date": "2021-10-03",
      "ActualNW": 13077.16872,
      "BestNW": 3127.412089,
      "BasicNW": 3085.667258,
      "WorstNW": 3043.416843,
      "Age": 37
    },
    {
      "Date": "2021-11-03",
      "ActualNW": 14530.10418,
      "BestNW": 4549.927299,
      "BasicNW": 4494.057324,
      "WorstNW": 4437.570272,
      "Age": 37
    },
    {
      "Date": "2021-12-03",
      "ActualNW": 13077.16872,
      "BestNW": 5980.822932,
      "BasicNW": 5908.718694,
      "WorstNW": 5835.894948,
      "Age": 37
    },
    {
      "Date": "2022-01-03",
      "ActualNW": 17455.47108,
      "BestNW": 7420.152906,
      "BasicNW": 7329.681893,
      "WorstNW": 7238.404527,
      "Age": 37
    },
    {
      "Date": "2022-02-03",
      "ActualNW": 14530.10418,
      "BestNW": 8867.971489,
      "BasicNW": 8756.977597,
      "WorstNW": 8645.112708,
      "Age": 37
    },
    {
      "Date": "2022-03-03",
      "ActualNW": 11630.68996,
      "BestNW": 10324.3333,
      "BasicNW": 10190.63663,
      "WorstNW": 10056.03324,
      "Age": 37
    },
    {
      "Date": "2022-04-03",
      "ActualNW": 15989.52778,
      "BestNW": 11789.2933,
      "BasicNW": 11630.68996,
      "WorstNW": 11471.1799,
      "Age": 37
    },
    {
      "Date": "2022-05-03",
      "ActualNW": 17455.47108,
      "BestNW": 13262.90681,
      "BasicNW": 13077.16872,
      "WorstNW": 12890.56654,
      "Age": 37
    },
    {
      "Date": "2022-06-03",
      "ActualNW": 23000,
      "BestNW": 14745.22951,
      "BasicNW": 14530.10418,
      "WorstNW": 14314.20704,
      "Age": 37
    },
    {
      "Date": "2022-07-03",
      "ActualNW": 21000,
      "BestNW": 16236.31744,
      "BasicNW": 15989.52778,
      "WorstNW": 15742.11531,
      "Age": 37
    },
    {
      "Date": "2022-08-03",
      "ActualNW": 13077.16872,
      "BestNW": 17736.22699,
      "BasicNW": 17455.47108,
      "WorstNW": 17174.30533,
      "Age": 37
    },
    {
      "Date": "2022-09-03",
      "ActualNW": 10190.63663,
      "BestNW": 19245.01492,
      "BasicNW": 18927.96583,
      "WorstNW": 18610.79113,
      "Age": 37
    },
    {
      "Date": "2022-10-03",
      "ActualNW": 14530.10418,
      "BestNW": 20762.73835,
      "BasicNW": 20407.04392,
      "WorstNW": 20051.58675,
      "Age": 38
    },
    {
      "Date": "2022-11-03",
      "ActualNW": 14530.10418,
      "BestNW": 22289.45478,
      "BasicNW": 21892.73739,
      "WorstNW": 21496.70632,
      "Age": 38
    },
    {
      "Date": "2022-12-03",
      "ActualNW": 17455.47108,
      "BestNW": 23825.22206,
      "BasicNW": 23385.07844,
      "WorstNW": 22946.16398,
      "Age": 38
    },
    {
      "Date": "2023-01-03",
      "ActualNW": 21000,
      "BestNW": 25370.09844,
      "BasicNW": 24884.09944,
      "WorstNW": 24399.97394,
      "Age": 38
    },
    {
      "Date": "2023-02-03",
      "ActualNW": 0,
      "BestNW": 26924.14251,
      "BasicNW": 26389.83288,
      "WorstNW": 25858.15045,
      "Age": 38
    },
    {
      "Date": "2023-03-03",
      "ActualNW": 0,
      "BestNW": 28487.41326,
      "BasicNW": 27902.31145,
      "WorstNW": 27320.7078,
      "Age": 38
    },
    {
      "Date": "2023-04-03",
      "ActualNW": 0,
      "BestNW": 30059.97006,
      "BasicNW": 29421.56799,
      "WorstNW": 28787.66034,
      "Age": 38
    },
    {
      "Date": "2023-05-03",
      "ActualNW": 0,
      "BestNW": 31641.87265,
      "BasicNW": 30947.63547,
      "WorstNW": 30259.02244,
      "Age": 38
    },
    {
      "Date": "2023-06-03",
      "ActualNW": 0,
      "BestNW": 33233.18117,
      "BasicNW": 32480.54706,
      "WorstNW": 31734.80855,
      "Age": 38
    },
    {
      "Date": "2023-07-03",
      "ActualNW": 0,
      "BestNW": 34833.95613,
      "BasicNW": 34020.33607,
      "WorstNW": 33215.03316,
      "Age": 38
    },
    {
      "Date": "2023-08-03",
      "ActualNW": 0,
      "BestNW": 36444.25845,
      "BasicNW": 35567.03598,
      "WorstNW": 34699.71078,
      "Age": 38
    },
    {
      "Date": "2023-09-03",
      "ActualNW": 0,
      "BestNW": 38064.14941,
      "BasicNW": 37120.68041,
      "WorstNW": 36188.85601,
      "Age": 38
    },
    {
      "Date": "2023-10-03",
      "ActualNW": 0,
      "BestNW": 39693.69072,
      "BasicNW": 38681.30319,
      "WorstNW": 37682.48346,
      "Age": 39
    },
    {
      "Date": "2023-11-03",
      "ActualNW": 0,
      "BestNW": 41332.94446,
      "BasicNW": 40248.93826,
      "WorstNW": 39180.60781,
      "Age": 39
    },
    {
      "Date": "2023-12-03",
      "ActualNW": 0,
      "BestNW": 42981.97313,
      "BasicNW": 41823.61978,
      "WorstNW": 40683.24378,
      "Age": 39
    },
    {
      "Date": "2024-01-03",
      "ActualNW": 0,
      "BestNW": 44640.83961,
      "BasicNW": 43405.38203,
      "WorstNW": 42190.40614,
      "Age": 39
    },
    {
      "Date": "2024-02-03",
      "ActualNW": 0,
      "BestNW": 46309.6072,
      "BasicNW": 44994.25948,
      "WorstNW": 43702.10971,
      "Age": 39
    },
    {
      "Date": "2024-03-03",
      "ActualNW": 0,
      "BestNW": 47988.33962,
      "BasicNW": 46590.28677,
      "WorstNW": 45218.36935,
      "Age": 39
    },
    {
      "Date": "2024-04-03",
      "ActualNW": 0,
      "BestNW": 49677.10096,
      "BasicNW": 48193.4987,
      "WorstNW": 46739.19999,
      "Age": 39
    },
    {
      "Date": "2024-05-03",
      "ActualNW": 0,
      "BestNW": 51375.95576,
      "BasicNW": 49803.93023,
      "WorstNW": 48264.61658,
      "Age": 39
    },
    {
      "Date": "2024-06-03",
      "ActualNW": 0,
      "BestNW": 53084.96896,
      "BasicNW": 51421.61652,
      "WorstNW": 49794.63413,
      "Age": 39
    },
    {
      "Date": "2024-07-03",
      "ActualNW": 0,
      "BestNW": 54804.20592,
      "BasicNW": 53046.59286,
      "WorstNW": 51329.26772,
      "Age": 39
    },
    {
      "Date": "2024-08-03",
      "ActualNW": 0,
      "BestNW": 56533.73242,
      "BasicNW": 54678.89476,
      "WorstNW": 52868.53245,
      "Age": 39
    },
    {
      "Date": "2024-09-03",
      "ActualNW": 0,
      "BestNW": 58273.61466,
      "BasicNW": 56318.55787,
      "WorstNW": 54412.44349,
      "Age": 39
    },
    {
      "Date": "2024-10-03",
      "ActualNW": 0,
      "BestNW": 60023.91927,
      "BasicNW": 57965.61801,
      "WorstNW": 55961.01603,
      "Age": 40
    },
    {
      "Date": "2024-11-03",
      "ActualNW": 0,
      "BestNW": 61784.71331,
      "BasicNW": 59620.11119,
      "WorstNW": 57514.26536,
      "Age": 40
    },
    {
      "Date": "2024-12-03",
      "ActualNW": 0,
      "BestNW": 63556.06427,
      "BasicNW": 61282.07359,
      "WorstNW": 59072.20677,
      "Age": 40
    },
    {
      "Date": "2025-01-03",
      "ActualNW": 0,
      "BestNW": 65338.04007,
      "BasicNW": 62951.54158,
      "WorstNW": 60634.85562,
      "Age": 40
    },
    {
      "Date": "2025-02-03",
      "ActualNW": 0,
      "BestNW": 67130.70908,
      "BasicNW": 64628.55168,
      "WorstNW": 62202.22733,
      "Age": 40
    },
    {
      "Date": "2025-03-03",
      "ActualNW": 0,
      "BestNW": 68934.14008,
      "BasicNW": 66313.14061,
      "WorstNW": 63774.33736,
      "Age": 40
    },
    {
      "Date": "2025-04-03",
      "ActualNW": 0,
      "BestNW": 70748.40233,
      "BasicNW": 68005.34525,
      "WorstNW": 65351.20122,
      "Age": 40
    },
    {
      "Date": "2025-05-03",
      "ActualNW": 0,
      "BestNW": 72573.56552,
      "BasicNW": 69705.20267,
      "WorstNW": 66932.83447,
      "Age": 40
    },
    {
      "Date": "2025-06-03",
      "ActualNW": 0,
      "BestNW": 74409.69978,
      "BasicNW": 71412.75014,
      "WorstNW": 68519.25273,
      "Age": 40
    },
    {
      "Date": "2025-07-03",
      "ActualNW": 0,
      "BestNW": 76256.87569,
      "BasicNW": 73128.02507,
      "WorstNW": 70110.47167,
      "Age": 40
    },
    {
      "Date": "2025-08-03",
      "ActualNW": 0,
      "BestNW": 78115.16431,
      "BasicNW": 74851.06508,
      "WorstNW": 71706.50699,
      "Age": 40
    },
    {
      "Date": "2025-09-03",
      "ActualNW": 0,
      "BestNW": 79984.63713,
      "BasicNW": 76581.90797,
      "WorstNW": 73307.37446,
      "Age": 40
    },
    {
      "Date": "2025-10-03",
      "ActualNW": 0,
      "BestNW": 81985.36611,
      "BasicNW": 78440.59171,
      "WorstNW": 75033.08991,
      "Age": 41
    },
    {
      "Date": "2025-11-03",
      "ActualNW": 0,
      "BestNW": 83878.19576,
      "BasicNW": 80187.73859,
      "WorstNW": 76644.06206,
      "Age": 41
    },
    {
      "Date": "2025-12-03",
      "ActualNW": 0,
      "BestNW": 85783.20393,
      "BasicNW": 81943.3898,
      "WorstNW": 78260.30811,
      "Age": 41
    },
    {
      "Date": "2026-01-03",
      "ActualNW": 0,
      "BestNW": 87700.46898,
      "BasicNW": 83707.58673,
      "WorstNW": 79881.84532,
      "Age": 41
    },
    {
      "Date": "2026-02-03",
      "ActualNW": 0,
      "BestNW": 89630.06977,
      "BasicNW": 85480.37097,
      "WorstNW": 81508.69103,
      "Age": 41
    },
    {
      "Date": "2026-03-03",
      "ActualNW": 0,
      "BestNW": 91572.08567,
      "BasicNW": 87261.78433,
      "WorstNW": 83140.86261,
      "Age": 41
    },
    {
      "Date": "2026-04-03",
      "ActualNW": 0,
      "BestNW": 93526.59656,
      "BasicNW": 89051.86881,
      "WorstNW": 84778.37749,
      "Age": 41
    },
    {
      "Date": "2026-05-03",
      "ActualNW": 0,
      "BestNW": 95493.68283,
      "BasicNW": 90850.66662,
      "WorstNW": 86421.25317,
      "Age": 41
    },
    {
      "Date": "2026-06-03",
      "ActualNW": 0,
      "BestNW": 97473.4254,
      "BasicNW": 92658.22017,
      "WorstNW": 88069.5072,
      "Age": 41
    },
    {
      "Date": "2026-07-03",
      "ActualNW": 0,
      "BestNW": 99465.90569,
      "BasicNW": 94474.57207,
      "WorstNW": 89723.15718,
      "Age": 41
    },
    {
      "Date": "2026-08-03",
      "ActualNW": 0,
      "BestNW": 101471.2057,
      "BasicNW": 96299.76516,
      "WorstNW": 91382.22078,
      "Age": 41
    },
    {
      "Date": "2026-09-03",
      "ActualNW": 0,
      "BestNW": 103489.4078,
      "BasicNW": 98133.84247,
      "WorstNW": 93046.71573,
      "Age": 41
    },
    {
      "Date": "2026-10-03",
      "ActualNW": 0,
      "BestNW": 105520.5951,
      "BasicNW": 99976.84725,
      "WorstNW": 94716.6598,
      "Age": 42
    },
    {
      "Date": "2026-11-03",
      "ActualNW": 0,
      "BestNW": 107564.8511,
      "BasicNW": 101828.8229,
      "WorstNW": 96392.07083,
      "Age": 42
    },
    {
      "Date": "2026-12-03",
      "ActualNW": 0,
      "BestNW": 109622.2599,
      "BasicNW": 103689.8132,
      "WorstNW": 98072.96672,
      "Age": 42
    },
    {
      "Date": "2027-01-03",
      "ActualNW": 0,
      "BestNW": 111692.9062,
      "BasicNW": 105559.862,
      "WorstNW": 99759.36542,
      "Age": 42
    },
    {
      "Date": "2027-02-03",
      "ActualNW": 0,
      "BestNW": 113776.875,
      "BasicNW": 107439.0133,
      "WorstNW": 101451.285,
      "Age": 42
    },
    {
      "Date": "2027-03-03",
      "ActualNW": 0,
      "BestNW": 115874.2522,
      "BasicNW": 109327.3114,
      "WorstNW": 103148.7434,
      "Age": 42
    },
    {
      "Date": "2027-04-03",
      "ActualNW": 0,
      "BestNW": 117985.124,
      "BasicNW": 111224.801,
      "WorstNW": 104851.7589,
      "Age": 42
    },
    {
      "Date": "2027-05-03",
      "ActualNW": 0,
      "BestNW": 120109.5771,
      "BasicNW": 113131.5266,
      "WorstNW": 106560.3496,
      "Age": 42
    },
    {
      "Date": "2027-06-03",
      "ActualNW": 0,
      "BestNW": 122247.6991,
      "BasicNW": 115047.5334,
      "WorstNW": 108274.5338,
      "Age": 42
    },
    {
      "Date": "2027-07-03",
      "ActualNW": 0,
      "BestNW": 124399.5778,
      "BasicNW": 116972.8664,
      "WorstNW": 109994.3298,
      "Age": 42
    },
    {
      "Date": "2027-08-03",
      "ActualNW": 0,
      "BestNW": 126565.3018,
      "BasicNW": 118907.5711,
      "WorstNW": 111719.7559,
      "Age": 42
    },
    {
      "Date": "2027-09-03",
      "ActualNW": 0,
      "BestNW": 128744.9601,
      "BasicNW": 120851.6931,
      "WorstNW": 113450.8306,
      "Age": 42
    },
    {
      "Date": "2027-10-03",
      "ActualNW": 0,
      "BestNW": 130938.6424,
      "BasicNW": 122805.2781,
      "WorstNW": 115187.5725,
      "Age": 43
    },
    {
      "Date": "2027-11-03",
      "ActualNW": 0,
      "BestNW": 133146.4389,
      "BasicNW": 124768.3723,
      "WorstNW": 116930,
      "Age": 43
    },
    {
      "Date": "2027-12-03",
      "ActualNW": 0,
      "BestNW": 135368.4404,
      "BasicNW": 126741.022,
      "WorstNW": 118678.1317,
      "Age": 43
    },
    {
      "Date": "2028-01-03",
      "ActualNW": 0,
      "BestNW": 137604.7383,
      "BasicNW": 128723.2737,
      "WorstNW": 120431.9863,
      "Age": 43
    },
    {
      "Date": "2028-02-03",
      "ActualNW": 0,
      "BestNW": 139855.4247,
      "BasicNW": 130715.1741,
      "WorstNW": 122191.5826,
      "Age": 43
    },
    {
      "Date": "2028-03-03",
      "ActualNW": 0,
      "BestNW": 142120.5921,
      "BasicNW": 132716.7701,
      "WorstNW": 123956.9394,
      "Age": 43
    },
    {
      "Date": "2028-04-03",
      "ActualNW": 0,
      "BestNW": 144400.3336,
      "BasicNW": 134728.1091,
      "WorstNW": 125728.0755,
      "Age": 43
    },
    {
      "Date": "2028-05-03",
      "ActualNW": 0,
      "BestNW": 146694.743,
      "BasicNW": 136749.2383,
      "WorstNW": 127505.0099,
      "Age": 43
    },
    {
      "Date": "2028-06-03",
      "ActualNW": 0,
      "BestNW": 149003.9147,
      "BasicNW": 138780.2054,
      "WorstNW": 129287.7614,
      "Age": 43
    },
    {
      "Date": "2028-07-03",
      "ActualNW": 0,
      "BestNW": 151327.9437,
      "BasicNW": 140821.0584,
      "WorstNW": 131076.3492,
      "Age": 43
    },
    {
      "Date": "2028-08-03",
      "ActualNW": 0,
      "BestNW": 153666.9256,
      "BasicNW": 142871.8454,
      "WorstNW": 132870.7924,
      "Age": 43
    },
    {
      "Date": "2028-09-03",
      "ActualNW": 0,
      "BestNW": 156020.9566,
      "BasicNW": 144932.6147,
      "WorstNW": 134671.1102,
      "Age": 43
    },
    {
      "Date": "2028-10-03",
      "ActualNW": 0,
      "BestNW": 158390.1334,
      "BasicNW": 147003.4148,
      "WorstNW": 136477.3217,
      "Age": 44
    },
    {
      "Date": "2028-11-03",
      "ActualNW": 0,
      "BestNW": 160774.5536,
      "BasicNW": 149084.2947,
      "WorstNW": 138289.4462,
      "Age": 44
    },
    {
      "Date": "2028-12-03",
      "ActualNW": 0,
      "BestNW": 163174.3153,
      "BasicNW": 151175.3034,
      "WorstNW": 140107.5032,
      "Age": 44
    },
    {
      "Date": "2029-01-03",
      "ActualNW": 0,
      "BestNW": 165589.5171,
      "BasicNW": 153276.4902,
      "WorstNW": 141931.5121,
      "Age": 44
    },
    {
      "Date": "2029-02-03",
      "ActualNW": 0,
      "BestNW": 168020.2584,
      "BasicNW": 155387.9046,
      "WorstNW": 143761.4922,
      "Age": 44
    },
    {
      "Date": "2029-03-03",
      "ActualNW": 0,
      "BestNW": 170466.6391,
      "BasicNW": 157509.5964,
      "WorstNW": 145597.4633,
      "Age": 44
    },
    {
      "Date": "2029-04-03",
      "ActualNW": 0,
      "BestNW": 172928.7599,
      "BasicNW": 159641.6156,
      "WorstNW": 147439.4448,
      "Age": 44
    },
    {
      "Date": "2029-05-03",
      "ActualNW": 0,
      "BestNW": 175406.7221,
      "BasicNW": 161784.0126,
      "WorstNW": 149287.4565,
      "Age": 44
    },
    {
      "Date": "2029-06-03",
      "ActualNW": 0,
      "BestNW": 177900.6276,
      "BasicNW": 163936.8378,
      "WorstNW": 151141.5182,
      "Age": 44
    },
    {
      "Date": "2029-07-03",
      "ActualNW": 0,
      "BestNW": 180410.5789,
      "BasicNW": 166100.142,
      "WorstNW": 153001.6495,
      "Age": 44
    },
    {
      "Date": "2029-08-03",
      "ActualNW": 0,
      "BestNW": 182936.6793,
      "BasicNW": 168273.9762,
      "WorstNW": 154867.8704,
      "Age": 44
    },
    {
      "Date": "2029-09-03",
      "ActualNW": 0,
      "BestNW": 185479.0328,
      "BasicNW": 170458.3916,
      "WorstNW": 156740.2009,
      "Age": 44
    },
    {
      "Date": "2029-10-03",
      "ActualNW": 0,
      "BestNW": 188037.7438,
      "BasicNW": 172653.4397,
      "WorstNW": 158618.6608,
      "Age": 45
    },
    {
      "Date": "2029-11-03",
      "ActualNW": 0,
      "BestNW": 190612.9176,
      "BasicNW": 174859.1724,
      "WorstNW": 160503.2704,
      "Age": 45
    },
    {
      "Date": "2029-12-03",
      "ActualNW": 0,
      "BestNW": 193204.6602,
      "BasicNW": 177075.6416,
      "WorstNW": 162394.0497,
      "Age": 45
    },
    {
      "Date": "2030-01-03",
      "ActualNW": 0,
      "BestNW": 195813.0781,
      "BasicNW": 179302.8996,
      "WorstNW": 164291.0188,
      "Age": 45
    },
    {
      "Date": "2030-02-03",
      "ActualNW": 0,
      "BestNW": 198438.2787,
      "BasicNW": 181540.9989,
      "WorstNW": 166194.1982,
      "Age": 45
    },
    {
      "Date": "2030-03-03",
      "ActualNW": 0,
      "BestNW": 201080.3699,
      "BasicNW": 183789.9922,
      "WorstNW": 168103.6081,
      "Age": 45
    },
    {
      "Date": "2030-04-03",
      "ActualNW": 0,
      "BestNW": 203739.4604,
      "BasicNW": 186049.9326,
      "WorstNW": 170019.2689,
      "Age": 45
    },
    {
      "Date": "2030-05-03",
      "ActualNW": 0,
      "BestNW": 206415.6595,
      "BasicNW": 188320.8734,
      "WorstNW": 171941.2011,
      "Age": 45
    },
    {
      "Date": "2030-06-03",
      "ActualNW": 0,
      "BestNW": 209109.0774,
      "BasicNW": 190602.8681,
      "WorstNW": 173869.4252,
      "Age": 45
    },
    {
      "Date": "2030-07-03",
      "ActualNW": 0,
      "BestNW": 211819.8249,
      "BasicNW": 192895.9705,
      "WorstNW": 175803.9618,
      "Age": 45
    },
    {
      "Date": "2030-08-03",
      "ActualNW": 0,
      "BestNW": 214548.0133,
      "BasicNW": 195200.2348,
      "WorstNW": 177744.8315,
      "Age": 45
    },
    {
      "Date": "2030-09-03",
      "ActualNW": 0,
      "BestNW": 277293.755,
      "BasicNW": 257515.7151,
      "WorstNW": 239692.0552,
      "Age": 45
    },
    {
      "Date": "2030-10-03",
      "ActualNW": 0,
      "BestNW": 279077.8714,
      "BasicNW": 258769.1859,
      "WorstNW": 240476.7446,
      "Age": 46
    },
    {
      "Date": "2030-11-03",
      "ActualNW": 0,
      "BestNW": 280436.2971,
      "BasicNW": 259823.4436,
      "WorstNW": 241069.8251,
      "Age": 46
    },
    {
      "Date": "2030-12-03",
      "ActualNW": 0,
      "BestNW": 281801.3349,
      "BasicNW": 260881.9964,
      "WorstNW": 241664.3683,
      "Age": 46
    },
    {
      "Date": "2031-01-03",
      "ActualNW": 0,
      "BestNW": 283173.0172,
      "BasicNW": 261944.862,
      "WorstNW": 242260.3779,
      "Age": 46
    },
    {
      "Date": "2031-02-03",
      "ActualNW": 0,
      "BestNW": 284551.3762,
      "BasicNW": 263012.0578,
      "WorstNW": 242857.8573,
      "Age": 46
    },
    {
      "Date": "2031-03-03",
      "ActualNW": 0,
      "BestNW": 285936.4444,
      "BasicNW": 264083.6014,
      "WorstNW": 243456.8103,
      "Age": 46
    },
    {
      "Date": "2031-04-03",
      "ActualNW": 0,
      "BestNW": 287328.2545,
      "BasicNW": 265159.5107,
      "WorstNW": 244057.2405,
      "Age": 46
    },
    {
      "Date": "2031-05-03",
      "ActualNW": 0,
      "BestNW": 288726.8393,
      "BasicNW": 266239.8034,
      "WorstNW": 244659.1515,
      "Age": 46
    },
    {
      "Date": "2031-06-03",
      "ActualNW": 0,
      "BestNW": 290132.2318,
      "BasicNW": 267324.4973,
      "WorstNW": 245262.547,
      "Age": 46
    },
    {
      "Date": "2031-07-03",
      "ActualNW": 0,
      "BestNW": 291544.4651,
      "BasicNW": 268413.6104,
      "WorstNW": 245867.4306,
      "Age": 46
    },
    {
      "Date": "2031-08-03",
      "ActualNW": 0,
      "BestNW": 292963.5725,
      "BasicNW": 269507.1607,
      "WorstNW": 246473.806,
      "Age": 46
    },
    {
      "Date": "2031-09-03",
      "ActualNW": 0,
      "BestNW": 294389.5875,
      "BasicNW": 270605.1662,
      "WorstNW": 247081.6769,
      "Age": 46
    },
    {
      "Date": "2031-10-03",
      "ActualNW": 0,
      "BestNW": 295822.5437,
      "BasicNW": 271707.6452,
      "WorstNW": 247691.0469,
      "Age": 47
    },
    {
      "Date": "2031-11-03",
      "ActualNW": 0,
      "BestNW": 297262.4749,
      "BasicNW": 272814.6157,
      "WorstNW": 248301.9199,
      "Age": 47
    },
    {
      "Date": "2031-12-03",
      "ActualNW": 0,
      "BestNW": 298709.415,
      "BasicNW": 273926.0962,
      "WorstNW": 248914.2994,
      "Age": 47
    },
    {
      "Date": "2032-01-03",
      "ActualNW": 0,
      "BestNW": 300163.3982,
      "BasicNW": 275042.1051,
      "WorstNW": 249528.1892,
      "Age": 47
    },
    {
      "Date": "2032-02-03",
      "ActualNW": 0,
      "BestNW": 301624.4587,
      "BasicNW": 276162.6607,
      "WorstNW": 250143.593,
      "Age": 47
    },
    {
      "Date": "2032-03-03",
      "ActualNW": 0,
      "BestNW": 303092.631,
      "BasicNW": 277287.7815,
      "WorstNW": 250760.5146,
      "Age": 47
    },
    {
      "Date": "2032-04-03",
      "ActualNW": 0,
      "BestNW": 304567.9497,
      "BasicNW": 278417.4863,
      "WorstNW": 251378.9577,
      "Age": 47
    },
    {
      "Date": "2032-05-03",
      "ActualNW": 0,
      "BestNW": 306050.4496,
      "BasicNW": 279551.7936,
      "WorstNW": 251998.926,
      "Age": 47
    },
    {
      "Date": "2032-06-03",
      "ActualNW": 0,
      "BestNW": 307540.1657,
      "BasicNW": 280690.7222,
      "WorstNW": 252620.4234,
      "Age": 47
    },
    {
      "Date": "2032-07-03",
      "ActualNW": 0,
      "BestNW": 309037.133,
      "BasicNW": 281834.2909,
      "WorstNW": 253243.4535,
      "Age": 47
    },
    {
      "Date": "2032-08-03",
      "ActualNW": 0,
      "BestNW": 310541.3868,
      "BasicNW": 282982.5187,
      "WorstNW": 253868.0201,
      "Age": 47
    },
    {
      "Date": "2032-09-03",
      "ActualNW": 0,
      "BestNW": 312052.9627,
      "BasicNW": 284135.4245,
      "WorstNW": 254494.1272,
      "Age": 47
    },
    {
      "Date": "2032-10-03",
      "ActualNW": 0,
      "BestNW": 313571.8963,
      "BasicNW": 285293.0274,
      "WorstNW": 255121.7783,
      "Age": 48
    },
    {
      "Date": "2032-11-03",
      "ActualNW": 0,
      "BestNW": 315098.2234,
      "BasicNW": 286455.3465,
      "WorstNW": 255750.9775,
      "Age": 48
    },
    {
      "Date": "2032-12-03",
      "ActualNW": 0,
      "BestNW": 316631.9799,
      "BasicNW": 287622.4011,
      "WorstNW": 256381.7284,
      "Age": 48
    },
    {
      "Date": "2033-01-03",
      "ActualNW": 0,
      "BestNW": 318173.2021,
      "BasicNW": 288794.2103,
      "WorstNW": 257014.0349,
      "Age": 48
    },
    {
      "Date": "2033-02-03",
      "ActualNW": 0,
      "BestNW": 319721.9262,
      "BasicNW": 289970.7937,
      "WorstNW": 257647.9008,
      "Age": 48
    },
    {
      "Date": "2033-03-03",
      "ActualNW": 0,
      "BestNW": 321278.1889,
      "BasicNW": 291152.1706,
      "WorstNW": 258283.3301,
      "Age": 48
    },
    {
      "Date": "2033-04-03",
      "ActualNW": 0,
      "BestNW": 322842.0267,
      "BasicNW": 292338.3606,
      "WorstNW": 258920.3264,
      "Age": 48
    },
    {
      "Date": "2033-05-03",
      "ActualNW": 0,
      "BestNW": 324413.4766,
      "BasicNW": 293529.3832,
      "WorstNW": 259558.8938,
      "Age": 48
    },
    {
      "Date": "2033-06-03",
      "ActualNW": 0,
      "BestNW": 325992.5756,
      "BasicNW": 294725.2583,
      "WorstNW": 260199.0361,
      "Age": 48
    },
    {
      "Date": "2033-07-03",
      "ActualNW": 0,
      "BestNW": 327579.361,
      "BasicNW": 295926.0055,
      "WorstNW": 260840.7571,
      "Age": 48
    },
    {
      "Date": "2033-08-03",
      "ActualNW": 0,
      "BestNW": 329173.8701,
      "BasicNW": 297131.6446,
      "WorstNW": 261484.0608,
      "Age": 48
    },
    {
      "Date": "2033-09-03",
      "ActualNW": 0,
      "BestNW": 330776.1405,
      "BasicNW": 298342.1957,
      "WorstNW": 262128.951,
      "Age": 48
    },
    {
      "Date": "2033-10-03",
      "ActualNW": 0,
      "BestNW": 332386.2101,
      "BasicNW": 299557.6788,
      "WorstNW": 262775.4317,
      "Age": 49
    },
    {
      "Date": "2033-11-03",
      "ActualNW": 0,
      "BestNW": 334004.1168,
      "BasicNW": 300778.1138,
      "WorstNW": 263423.5068,
      "Age": 49
    },
    {
      "Date": "2033-12-03",
      "ActualNW": 0,
      "BestNW": 335629.8987,
      "BasicNW": 302003.5211,
      "WorstNW": 264073.1802,
      "Age": 49
    },
    {
      "Date": "2034-01-03",
      "ActualNW": 0,
      "BestNW": 337263.5942,
      "BasicNW": 303233.9208,
      "WorstNW": 264724.4559,
      "Age": 49
    },
    {
      "Date": "2034-02-03",
      "ActualNW": 0,
      "BestNW": 338905.2418,
      "BasicNW": 304469.3334,
      "WorstNW": 265377.3379,
      "Age": 49
    },
    {
      "Date": "2034-03-03",
      "ActualNW": 0,
      "BestNW": 340554.8802,
      "BasicNW": 305709.7791,
      "WorstNW": 266031.83,
      "Age": 49
    },
    {
      "Date": "2034-04-03",
      "ActualNW": 0,
      "BestNW": 342212.5483,
      "BasicNW": 306955.2786,
      "WorstNW": 266687.9362,
      "Age": 49
    },
    {
      "Date": "2034-05-03",
      "ActualNW": 0,
      "BestNW": 343878.2852,
      "BasicNW": 308205.8524,
      "WorstNW": 267345.6606,
      "Age": 49
    },
    {
      "Date": "2034-06-03",
      "ActualNW": 0,
      "BestNW": 345552.1301,
      "BasicNW": 309461.5212,
      "WorstNW": 268005.0071,
      "Age": 49
    },
    {
      "Date": "2034-07-03",
      "ActualNW": 0,
      "BestNW": 347234.1226,
      "BasicNW": 310722.3057,
      "WorstNW": 268665.9798,
      "Age": 49
    },
    {
      "Date": "2034-08-03",
      "ActualNW": 0,
      "BestNW": 348924.3023,
      "BasicNW": 311988.2269,
      "WorstNW": 269328.5826,
      "Age": 49
    },
    {
      "Date": "2034-09-03",
      "ActualNW": 0,
      "BestNW": 350622.7089,
      "BasicNW": 313259.3055,
      "WorstNW": 269992.8195,
      "Age": 49
    },
    {
      "Date": "2034-10-03",
      "ActualNW": 0,
      "BestNW": 352329.3827,
      "BasicNW": 314535.5627,
      "WorstNW": 270658.6946,
      "Age": 50
    },
    {
      "Date": "2034-11-03",
      "ActualNW": 0,
      "BestNW": 354044.3638,
      "BasicNW": 315817.0195,
      "WorstNW": 271326.212,
      "Age": 50
    },
    {
      "Date": "2034-12-03",
      "ActualNW": 0,
      "BestNW": 355767.6926,
      "BasicNW": 317103.6972,
      "WorstNW": 271995.3756,
      "Age": 50
    },
    {
      "Date": "2035-01-03",
      "ActualNW": 0,
      "BestNW": 357499.4099,
      "BasicNW": 318395.6169,
      "WorstNW": 272666.1896,
      "Age": 50
    },
    {
      "Date": "2035-02-03",
      "ActualNW": 0,
      "BestNW": 359239.5563,
      "BasicNW": 319692.8,
      "WorstNW": 273338.658,
      "Age": 50
    },
    {
      "Date": "2035-03-03",
      "ActualNW": 0,
      "BestNW": 360988.173,
      "BasicNW": 320995.2681,
      "WorstNW": 274012.7849,
      "Age": 50
    },
    {
      "Date": "2035-04-03",
      "ActualNW": 0,
      "BestNW": 362745.3012,
      "BasicNW": 322303.0425,
      "WorstNW": 274688.5743,
      "Age": 50
    },
    {
      "Date": "2035-05-03",
      "ActualNW": 0,
      "BestNW": 364510.9823,
      "BasicNW": 323616.145,
      "WorstNW": 275366.0304,
      "Age": 50
    },
    {
      "Date": "2035-06-03",
      "ActualNW": 0,
      "BestNW": 366285.258,
      "BasicNW": 324934.5973,
      "WorstNW": 276045.1574,
      "Age": 50
    },
    {
      "Date": "2035-07-03",
      "ActualNW": 0,
      "BestNW": 368068.17,
      "BasicNW": 326258.421,
      "WorstNW": 276725.9592,
      "Age": 50
    },
    {
      "Date": "2035-08-03",
      "ActualNW": 0,
      "BestNW": 369859.7604,
      "BasicNW": 327587.6382,
      "WorstNW": 277408.4401,
      "Age": 50
    },
    {
      "Date": "2035-09-03",
      "ActualNW": 0,
      "BestNW": 371660.0715,
      "BasicNW": 328922.2708,
      "WorstNW": 278092.6041,
      "Age": 50
    },
    {
      "Date": "2035-10-03",
      "ActualNW": 0,
      "BestNW": 373469.1457,
      "BasicNW": 330262.3409,
      "WorstNW": 278778.4555,
      "Age": 51
    },
    {
      "Date": "2035-11-03",
      "ActualNW": 0,
      "BestNW": 375287.0256,
      "BasicNW": 331607.8705,
      "WorstNW": 279465.9984,
      "Age": 51
    },
    {
      "Date": "2035-12-03",
      "ActualNW": 0,
      "BestNW": 377113.7542,
      "BasicNW": 332958.882,
      "WorstNW": 280155.2369,
      "Age": 51
    },
    {
      "Date": "2036-01-03",
      "ActualNW": 0,
      "BestNW": 378949.3745,
      "BasicNW": 334315.3977,
      "WorstNW": 280846.1753,
      "Age": 51
    },
    {
      "Date": "2036-02-03",
      "ActualNW": 0,
      "BestNW": 380793.9297,
      "BasicNW": 335677.44,
      "WorstNW": 281538.8177,
      "Age": 51
    },
    {
      "Date": "2036-03-03",
      "ActualNW": 0,
      "BestNW": 382647.4634,
      "BasicNW": 337045.0315,
      "WorstNW": 282233.1684,
      "Age": 51
    },
    {
      "Date": "2036-04-03",
      "ActualNW": 0,
      "BestNW": 384510.0193,
      "BasicNW": 338418.1947,
      "WorstNW": 282929.2315,
      "Age": 51
    },
    {
      "Date": "2036-05-03",
      "ActualNW": 0,
      "BestNW": 386381.6413,
      "BasicNW": 339796.9523,
      "WorstNW": 283627.0114,
      "Age": 51
    },
    {
      "Date": "2036-06-03",
      "ActualNW": 0,
      "BestNW": 388262.3734,
      "BasicNW": 341181.3271,
      "WorstNW": 284326.5121,
      "Age": 51
    },
    {
      "Date": "2036-07-03",
      "ActualNW": 0,
      "BestNW": 390152.2602,
      "BasicNW": 342571.3421,
      "WorstNW": 285027.738,
      "Age": 51
    },
    {
      "Date": "2036-08-03",
      "ActualNW": 0,
      "BestNW": 392051.346,
      "BasicNW": 343967.0201,
      "WorstNW": 285730.6933,
      "Age": 51
    },
    {
      "Date": "2036-09-03",
      "ActualNW": 0,
      "BestNW": 393959.6758,
      "BasicNW": 345368.3844,
      "WorstNW": 286435.3822,
      "Age": 51
    },
    {
      "Date": "2036-10-03",
      "ActualNW": 0,
      "BestNW": 395877.2944,
      "BasicNW": 346775.4579,
      "WorstNW": 287141.8092,
      "Age": 52
    },
    {
      "Date": "2036-11-03",
      "ActualNW": 0,
      "BestNW": 397804.2472,
      "BasicNW": 348188.264,
      "WorstNW": 287849.9783,
      "Age": 52
    },
    {
      "Date": "2036-12-03",
      "ActualNW": 0,
      "BestNW": 399740.5794,
      "BasicNW": 349606.8261,
      "WorstNW": 288559.894,
      "Age": 52
    },
    {
      "Date": "2037-01-03",
      "ActualNW": 0,
      "BestNW": 401686.3369,
      "BasicNW": 351031.1676,
      "WorstNW": 289271.5606,
      "Age": 52
    },
    {
      "Date": "2037-02-03",
      "ActualNW": 0,
      "BestNW": 403641.5655,
      "BasicNW": 352461.312,
      "WorstNW": 289984.9823,
      "Age": 52
    },
    {
      "Date": "2037-03-03",
      "ActualNW": 0,
      "BestNW": 405606.3112,
      "BasicNW": 353897.2831,
      "WorstNW": 290700.1635,
      "Age": 52
    },
    {
      "Date": "2037-04-03",
      "ActualNW": 0,
      "BestNW": 407580.6204,
      "BasicNW": 355339.1044,
      "WorstNW": 291417.1085,
      "Age": 52
    },
    {
      "Date": "2037-05-03",
      "ActualNW": 0,
      "BestNW": 409564.5397,
      "BasicNW": 356786.7999,
      "WorstNW": 292135.8217,
      "Age": 52
    },
    {
      "Date": "2037-06-03",
      "ActualNW": 0,
      "BestNW": 411558.1158,
      "BasicNW": 358240.3935,
      "WorstNW": 292856.3074,
      "Age": 52
    },
    {
      "Date": "2037-07-03",
      "ActualNW": 0,
      "BestNW": 413561.3958,
      "BasicNW": 359699.9092,
      "WorstNW": 293578.5701,
      "Age": 52
    },
    {
      "Date": "2037-08-03",
      "ActualNW": 0,
      "BestNW": 415574.4268,
      "BasicNW": 361165.3711,
      "WorstNW": 294302.6141,
      "Age": 52
    },
    {
      "Date": "2037-09-03",
      "ActualNW": 0,
      "BestNW": 417597.2563,
      "BasicNW": 362636.8036,
      "WorstNW": 295028.4437,
      "Age": 52
    },
    {
      "Date": "2037-10-03",
      "ActualNW": 0,
      "BestNW": 419629.9321,
      "BasicNW": 364114.2308,
      "WorstNW": 295756.0634,
      "Age": 53
    },
    {
      "Date": "2037-11-03",
      "ActualNW": 0,
      "BestNW": 421672.502,
      "BasicNW": 365597.6772,
      "WorstNW": 296485.4777,
      "Age": 53
    },
    {
      "Date": "2037-12-03",
      "ActualNW": 0,
      "BestNW": 423725.0142,
      "BasicNW": 367087.1674,
      "WorstNW": 297216.6908,
      "Age": 53
    },
    {
      "Date": "2038-01-03",
      "ActualNW": 0,
      "BestNW": 425787.5171,
      "BasicNW": 368582.726,
      "WorstNW": 297949.7074,
      "Age": 53
    },
    {
      "Date": "2038-02-03",
      "ActualNW": 0,
      "BestNW": 427860.0594,
      "BasicNW": 370084.3776,
      "WorstNW": 298684.5317,
      "Age": 53
    },
    {
      "Date": "2038-03-03",
      "ActualNW": 0,
      "BestNW": 429942.6899,
      "BasicNW": 371592.1472,
      "WorstNW": 299421.1684,
      "Age": 53
    },
    {
      "Date": "2038-04-03",
      "ActualNW": 0,
      "BestNW": 432035.4577,
      "BasicNW": 373106.0596,
      "WorstNW": 300159.6217,
      "Age": 53
    },
    {
      "Date": "2038-05-03",
      "ActualNW": 0,
      "BestNW": 434138.4121,
      "BasicNW": 374626.1399,
      "WorstNW": 300899.8963,
      "Age": 53
    },
    {
      "Date": "2038-06-03",
      "ActualNW": 0,
      "BestNW": 436251.6028,
      "BasicNW": 376152.4132,
      "WorstNW": 301641.9967,
      "Age": 53
    },
    {
      "Date": "2038-07-03",
      "ActualNW": 0,
      "BestNW": 438375.0795,
      "BasicNW": 377684.9046,
      "WorstNW": 302385.9272,
      "Age": 53
    },
    {
      "Date": "2038-08-03",
      "ActualNW": 0,
      "BestNW": 440508.8924,
      "BasicNW": 379223.6397,
      "WorstNW": 303131.6925,
      "Age": 53
    },
    {
      "Date": "2038-09-03",
      "ActualNW": 0,
      "BestNW": 442653.0917,
      "BasicNW": 380768.6438,
      "WorstNW": 303879.297,
      "Age": 53
    },
    {
      "Date": "2038-10-03",
      "ActualNW": 0,
      "BestNW": 444807.728,
      "BasicNW": 382319.9423,
      "WorstNW": 304628.7453,
      "Age": 54
    },
    {
      "Date": "2038-11-03",
      "ActualNW": 0,
      "BestNW": 446972.8521,
      "BasicNW": 383877.5611,
      "WorstNW": 305380.042,
      "Age": 54
    },
    {
      "Date": "2038-12-03",
      "ActualNW": 0,
      "BestNW": 449148.5151,
      "BasicNW": 385441.5258,
      "WorstNW": 306133.1916,
      "Age": 54
    },
    {
      "Date": "2039-01-03",
      "ActualNW": 0,
      "BestNW": 451334.7682,
      "BasicNW": 387011.8623,
      "WorstNW": 306888.1986,
      "Age": 54
    },
    {
      "Date": "2039-02-03",
      "ActualNW": 0,
      "BestNW": 453531.663,
      "BasicNW": 388588.5965,
      "WorstNW": 307645.0677,
      "Age": 54
    },
    {
      "Date": "2039-03-03",
      "ActualNW": 0,
      "BestNW": 455739.2513,
      "BasicNW": 390171.7546,
      "WorstNW": 308403.8034,
      "Age": 54
    },
    {
      "Date": "2039-04-03",
      "ActualNW": 0,
      "BestNW": 457957.5851,
      "BasicNW": 391761.3626,
      "WorstNW": 309164.4104,
      "Age": 54
    },
    {
      "Date": "2039-05-03",
      "ActualNW": 0,
      "BestNW": 460186.7168,
      "BasicNW": 393357.4469,
      "WorstNW": 309926.8932,
      "Age": 54
    },
    {
      "Date": "2039-06-03",
      "ActualNW": 0,
      "BestNW": 462426.699,
      "BasicNW": 394960.0338,
      "WorstNW": 310691.2566,
      "Age": 54
    },
    {
      "Date": "2039-07-03",
      "ActualNW": 0,
      "BestNW": 464677.5843,
      "BasicNW": 396569.1499,
      "WorstNW": 311457.505,
      "Age": 54
    },
    {
      "Date": "2039-08-03",
      "ActualNW": 0,
      "BestNW": 466939.4259,
      "BasicNW": 398184.8217,
      "WorstNW": 312225.6432,
      "Age": 54
    },
    {
      "Date": "2039-09-03",
      "ActualNW": 0,
      "BestNW": 469212.2772,
      "BasicNW": 399807.0759,
      "WorstNW": 312995.6759,
      "Age": 54
    },
    {
      "Date": "2039-10-03",
      "ActualNW": 0,
      "BestNW": 471496.1917,
      "BasicNW": 401435.9395,
      "WorstNW": 313767.6077,
      "Age": 55
    },
    {
      "Date": "2039-11-03",
      "ActualNW": 0,
      "BestNW": 473791.2232,
      "BasicNW": 403071.4392,
      "WorstNW": 314541.4433,
      "Age": 55
    },
    {
      "Date": "2039-12-03",
      "ActualNW": 0,
      "BestNW": 476097.426,
      "BasicNW": 404713.6021,
      "WorstNW": 315317.1873,
      "Age": 55
    },
    {
      "Date": "2040-01-03",
      "ActualNW": 0,
      "BestNW": 478414.8543,
      "BasicNW": 406362.4554,
      "WorstNW": 316094.8446,
      "Age": 55
    },
    {
      "Date": "2040-02-03",
      "ActualNW": 0,
      "BestNW": 480743.5628,
      "BasicNW": 408018.0264,
      "WorstNW": 316874.4197,
      "Age": 55
    },
    {
      "Date": "2040-03-03",
      "ActualNW": 0,
      "BestNW": 483083.6064,
      "BasicNW": 409680.3423,
      "WorstNW": 317655.9175,
      "Age": 55
    },
    {
      "Date": "2040-04-03",
      "ActualNW": 0,
      "BestNW": 485435.0402,
      "BasicNW": 411349.4307,
      "WorstNW": 318439.3427,
      "Age": 55
    },
    {
      "Date": "2040-05-03",
      "ActualNW": 0,
      "BestNW": 487797.9198,
      "BasicNW": 413025.3192,
      "WorstNW": 319224.7,
      "Age": 55
    },
    {
      "Date": "2040-06-03",
      "ActualNW": 0,
      "BestNW": 490172.3009,
      "BasicNW": 414708.0355,
      "WorstNW": 320011.9943,
      "Age": 55
    },
    {
      "Date": "2040-07-03",
      "ActualNW": 0,
      "BestNW": 492558.2394,
      "BasicNW": 416397.6074,
      "WorstNW": 320801.2302,
      "Age": 55
    },
    {
      "Date": "2040-08-03",
      "ActualNW": 0,
      "BestNW": 494955.7915,
      "BasicNW": 418094.0628,
      "WorstNW": 321592.4125,
      "Age": 55
    },
    {
      "Date": "2040-09-03",
      "ActualNW": 0,
      "BestNW": 497365.0138,
      "BasicNW": 419797.4297,
      "WorstNW": 322385.5462,
      "Age": 55
    },
    {
      "Date": "2040-10-03",
      "ActualNW": 0,
      "BestNW": 499785.9632,
      "BasicNW": 421507.7364,
      "WorstNW": 323180.6359,
      "Age": 56
    },
    {
      "Date": "2040-11-03",
      "ActualNW": 0,
      "BestNW": 502218.6966,
      "BasicNW": 423225.0111,
      "WorstNW": 323977.6866,
      "Age": 56
    },
    {
      "Date": "2040-12-03",
      "ActualNW": 0,
      "BestNW": 504663.2715,
      "BasicNW": 424949.2822,
      "WorstNW": 324776.7029,
      "Age": 56
    },
    {
      "Date": "2041-01-03",
      "ActualNW": 0,
      "BestNW": 507119.7455,
      "BasicNW": 426680.5782,
      "WorstNW": 325577.6899,
      "Age": 56
    },
    {
      "Date": "2041-02-03",
      "ActualNW": 0,
      "BestNW": 509588.1765,
      "BasicNW": 428418.9277,
      "WorstNW": 326380.6523,
      "Age": 56
    },
    {
      "Date": "2041-03-03",
      "ActualNW": 0,
      "BestNW": 512068.6227,
      "BasicNW": 430164.3594,
      "WorstNW": 327185.595,
      "Age": 56
    },
    {
      "Date": "2041-04-03",
      "ActualNW": 0,
      "BestNW": 514561.1427,
      "BasicNW": 431916.9023,
      "WorstNW": 327992.523,
      "Age": 56
    },
    {
      "Date": "2041-05-03",
      "ActualNW": 0,
      "BestNW": 517065.795,
      "BasicNW": 433676.5852,
      "WorstNW": 328801.441,
      "Age": 56
    },
    {
      "Date": "2041-06-03",
      "ActualNW": 0,
      "BestNW": 519582.6389,
      "BasicNW": 435443.4373,
      "WorstNW": 329612.3541,
      "Age": 56
    },
    {
      "Date": "2041-07-03",
      "ActualNW": 0,
      "BestNW": 522111.7337,
      "BasicNW": 437217.4877,
      "WorstNW": 330425.2671,
      "Age": 56
    },
    {
      "Date": "2041-08-03",
      "ActualNW": 0,
      "BestNW": 524653.139,
      "BasicNW": 438998.7659,
      "WorstNW": 331240.1849,
      "Age": 56
    },
    {
      "Date": "2041-09-03",
      "ActualNW": 0,
      "BestNW": 527206.9147,
      "BasicNW": 440787.3012,
      "WorstNW": 332057.1126,
      "Age": 56
    },
    {
      "Date": "2041-10-03",
      "ActualNW": 0,
      "BestNW": 529773.121,
      "BasicNW": 442583.1232,
      "WorstNW": 332876.055,
      "Age": 57
    },
    {
      "Date": "2041-11-03",
      "ActualNW": 0,
      "BestNW": 532351.8184,
      "BasicNW": 444386.2617,
      "WorstNW": 333697.0171,
      "Age": 57
    },
    {
      "Date": "2041-12-03",
      "ActualNW": 0,
      "BestNW": 534943.0678,
      "BasicNW": 446196.7463,
      "WorstNW": 334520.004,
      "Age": 57
    },
    {
      "Date": "2042-01-03",
      "ActualNW": 0,
      "BestNW": 537546.9303,
      "BasicNW": 448014.6071,
      "WorstNW": 335345.0206,
      "Age": 57
    },
    {
      "Date": "2042-02-03",
      "ActualNW": 0,
      "BestNW": 540163.4671,
      "BasicNW": 449839.8741,
      "WorstNW": 336172.0719,
      "Age": 57
    },
    {
      "Date": "2042-03-03",
      "ActualNW": 0,
      "BestNW": 542792.7401,
      "BasicNW": 451672.5774,
      "WorstNW": 337001.1629,
      "Age": 57
    },
    {
      "Date": "2042-04-03",
      "ActualNW": 0,
      "BestNW": 545434.8112,
      "BasicNW": 453512.7474,
      "WorstNW": 337832.2987,
      "Age": 57
    },
    {
      "Date": "2042-05-03",
      "ActualNW": 0,
      "BestNW": 548089.7427,
      "BasicNW": 455360.4144,
      "WorstNW": 338665.4843,
      "Age": 57
    },
    {
      "Date": "2042-06-03",
      "ActualNW": 0,
      "BestNW": 550757.5973,
      "BasicNW": 457215.6091,
      "WorstNW": 339500.7247,
      "Age": 57
    },
    {
      "Date": "2042-07-03",
      "ActualNW": 0,
      "BestNW": 553438.4377,
      "BasicNW": 459078.3621,
      "WorstNW": 340338.0251,
      "Age": 57
    },
    {
      "Date": "2042-08-03",
      "ActualNW": 0,
      "BestNW": 556132.3273,
      "BasicNW": 460948.7042,
      "WorstNW": 341177.3905,
      "Age": 57
    },
    {
      "Date": "2042-09-03",
      "ActualNW": 0,
      "BestNW": 558839.3295,
      "BasicNW": 462826.6663,
      "WorstNW": 342018.826,
      "Age": 57
    },
    {
      "Date": "2042-10-03",
      "ActualNW": 0,
      "BestNW": 561559.5082,
      "BasicNW": 464712.2794,
      "WorstNW": 342862.3366,
      "Age": 58
    },
    {
      "Date": "2042-11-03",
      "ActualNW": 0,
      "BestNW": 564292.9275,
      "BasicNW": 466605.5748,
      "WorstNW": 343707.9277,
      "Age": 58
    },
    {
      "Date": "2042-12-03",
      "ActualNW": 0,
      "BestNW": 567039.6519,
      "BasicNW": 468506.5836,
      "WorstNW": 344555.6041,
      "Age": 58
    },
    {
      "Date": "2043-01-03",
      "ActualNW": 0,
      "BestNW": 569799.7461,
      "BasicNW": 470415.3374,
      "WorstNW": 345405.3712,
      "Age": 58
    },
    {
      "Date": "2043-02-03",
      "ActualNW": 0,
      "BestNW": 572573.2751,
      "BasicNW": 472331.8678,
      "WorstNW": 346257.234,
      "Age": 58
    },
    {
      "Date": "2043-03-03",
      "ActualNW": 0,
      "BestNW": 575360.3045,
      "BasicNW": 474256.2063,
      "WorstNW": 347111.1978,
      "Age": 58
    },
    {
      "Date": "2043-04-03",
      "ActualNW": 0,
      "BestNW": 578160.8999,
      "BasicNW": 476188.3847,
      "WorstNW": 347967.2676,
      "Age": 58
    },
    {
      "Date": "2043-05-03",
      "ActualNW": 0,
      "BestNW": 580975.1273,
      "BasicNW": 478128.4352,
      "WorstNW": 348825.4488,
      "Age": 58
    },
    {
      "Date": "2043-06-03",
      "ActualNW": 0,
      "BestNW": 583803.0531,
      "BasicNW": 480076.3896,
      "WorstNW": 349685.7465,
      "Age": 58
    },
    {
      "Date": "2043-07-03",
      "ActualNW": 0,
      "BestNW": 586644.744,
      "BasicNW": 482032.2802,
      "WorstNW": 350548.1658,
      "Age": 58
    },
    {
      "Date": "2043-08-03",
      "ActualNW": 0,
      "BestNW": 589500.267,
      "BasicNW": 483996.1394,
      "WorstNW": 351412.7122,
      "Age": 58
    },
    {
      "Date": "2043-09-03",
      "ActualNW": 0,
      "BestNW": 592369.6893,
      "BasicNW": 485967.9996,
      "WorstNW": 352279.3907,
      "Age": 58
    },
    {
      "Date": "2043-10-03",
      "ActualNW": 0,
      "BestNW": 595253.0787,
      "BasicNW": 487947.8934,
      "WorstNW": 353148.2067,
      "Age": 59
    },
    {
      "Date": "2043-11-03",
      "ActualNW": 0,
      "BestNW": 598150.5032,
      "BasicNW": 489935.8535,
      "WorstNW": 354019.1655,
      "Age": 59
    },
    {
      "Date": "2043-12-03",
      "ActualNW": 0,
      "BestNW": 601062.031,
      "BasicNW": 491931.9128,
      "WorstNW": 354892.2723,
      "Age": 59
    },
    {
      "Date": "2044-01-03",
      "ActualNW": 0,
      "BestNW": 603987.7308,
      "BasicNW": 493936.1043,
      "WorstNW": 355767.5323,
      "Age": 59
    },
    {
      "Date": "2044-02-03",
      "ActualNW": 0,
      "BestNW": 606927.6717,
      "BasicNW": 495948.4611,
      "WorstNW": 356644.9511,
      "Age": 59
    },
    {
      "Date": "2044-03-03",
      "ActualNW": 0,
      "BestNW": 609881.9228,
      "BasicNW": 497969.0166,
      "WorstNW": 357524.5337,
      "Age": 59
    },
    {
      "Date": "2044-04-03",
      "ActualNW": 0,
      "BestNW": 612850.5539,
      "BasicNW": 499997.804,
      "WorstNW": 358406.2857,
      "Age": 59
    },
    {
      "Date": "2044-05-03",
      "ActualNW": 0,
      "BestNW": 615833.6349,
      "BasicNW": 502034.8569,
      "WorstNW": 359290.2123,
      "Age": 59
    },
    {
      "Date": "2044-06-03",
      "ActualNW": 0,
      "BestNW": 618831.2363,
      "BasicNW": 504080.2091,
      "WorstNW": 360176.3188,
      "Age": 59
    },
    {
      "Date": "2044-07-03",
      "ActualNW": 0,
      "BestNW": 621843.4286,
      "BasicNW": 506133.8942,
      "WorstNW": 361064.6108,
      "Age": 59
    },
    {
      "Date": "2044-08-03",
      "ActualNW": 0,
      "BestNW": 624870.283,
      "BasicNW": 508195.9464,
      "WorstNW": 361955.0935,
      "Age": 59
    },
    {
      "Date": "2044-09-03",
      "ActualNW": 0,
      "BestNW": 627911.8707,
      "BasicNW": 510266.3996,
      "WorstNW": 362847.7725,
      "Age": 59
    },
    {
      "Date": "2044-10-03",
      "ActualNW": 0,
      "BestNW": 630968.2635,
      "BasicNW": 512345.2881,
      "WorstNW": 363742.6529,
      "Age": 60
    },
    {
      "Date": "2044-11-03",
      "ActualNW": 0,
      "BestNW": 634039.5334,
      "BasicNW": 514432.6462,
      "WorstNW": 364639.7405,
      "Age": 60
    },
    {
      "Date": "2044-12-03",
      "ActualNW": 0,
      "BestNW": 637125.7529,
      "BasicNW": 516528.5085,
      "WorstNW": 365539.0404,
      "Age": 60
    },
    {
      "Date": "2045-01-03",
      "ActualNW": 0,
      "BestNW": 640226.9947,
      "BasicNW": 518632.9095,
      "WorstNW": 366440.5583,
      "Age": 60
    },
    {
      "Date": "2045-02-03",
      "ActualNW": 0,
      "BestNW": 643343.332,
      "BasicNW": 520745.8842,
      "WorstNW": 367344.2996,
      "Age": 60
    },
    {
      "Date": "2045-03-03",
      "ActualNW": 0,
      "BestNW": 646474.8382,
      "BasicNW": 522867.4674,
      "WorstNW": 368250.2697,
      "Age": 60
    },
    {
      "Date": "2045-04-03",
      "ActualNW": 0,
      "BestNW": 649621.5871,
      "BasicNW": 524997.6942,
      "WorstNW": 369158.4742,
      "Age": 60
    },
    {
      "Date": "2045-05-03",
      "ActualNW": 0,
      "BestNW": 652783.653,
      "BasicNW": 527136.5998,
      "WorstNW": 370068.9186,
      "Age": 60
    },
    {
      "Date": "2045-06-03",
      "ActualNW": 0,
      "BestNW": 655961.1105,
      "BasicNW": 529284.2195,
      "WorstNW": 370981.6084,
      "Age": 60
    },
    {
      "Date": "2045-07-03",
      "ActualNW": 0,
      "BestNW": 659154.0344,
      "BasicNW": 531440.589,
      "WorstNW": 371896.5491,
      "Age": 60
    },
    {
      "Date": "2045-08-03",
      "ActualNW": 0,
      "BestNW": 662362.4999,
      "BasicNW": 533605.7437,
      "WorstNW": 372813.7464,
      "Age": 60
    },
    {
      "Date": "2045-09-03",
      "ActualNW": 0,
      "BestNW": 665586.5829,
      "BasicNW": 535779.7196,
      "WorstNW": 373733.2056,
      "Age": 60
    },
    {
      "Date": "2045-10-03",
      "ActualNW": 0,
      "BestNW": 668826.3593,
      "BasicNW": 537962.5525,
      "WorstNW": 374654.9325,
      "Age": 61
    },
    {
      "Date": "2045-11-03",
      "ActualNW": 0,
      "BestNW": 672081.9054,
      "BasicNW": 540154.2785,
      "WorstNW": 375578.9327,
      "Age": 61
    },
    {
      "Date": "2045-12-03",
      "ActualNW": 0,
      "BestNW": 675353.298,
      "BasicNW": 542354.9339,
      "WorstNW": 376505.2116,
      "Age": 61
    },
    {
      "Date": "2046-01-03",
      "ActualNW": 0,
      "BestNW": 678640.6144,
      "BasicNW": 544564.555,
      "WorstNW": 377433.7751,
      "Age": 61
    },
    {
      "Date": "2046-02-03",
      "ActualNW": 0,
      "BestNW": 681943.9319,
      "BasicNW": 546783.1784,
      "WorstNW": 378364.6286,
      "Age": 61
    },
    {
      "Date": "2046-03-03",
      "ActualNW": 0,
      "BestNW": 685263.3284,
      "BasicNW": 549010.8408,
      "WorstNW": 379297.7778,
      "Age": 61
    },
    {
      "Date": "2046-04-03",
      "ActualNW": 0,
      "BestNW": 688598.8823,
      "BasicNW": 551247.5789,
      "WorstNW": 380233.2285,
      "Age": 61
    },
    {
      "Date": "2046-05-03",
      "ActualNW": 0,
      "BestNW": 691950.6722,
      "BasicNW": 553493.4298,
      "WorstNW": 381170.9862,
      "Age": 61
    },
    {
      "Date": "2046-06-03",
      "ActualNW": 0,
      "BestNW": 695318.7771,
      "BasicNW": 555748.4305,
      "WorstNW": 382111.0567,
      "Age": 61
    },
    {
      "Date": "2046-07-03",
      "ActualNW": 0,
      "BestNW": 698703.2764,
      "BasicNW": 558012.6184,
      "WorstNW": 383053.4456,
      "Age": 61
    },
    {
      "Date": "2046-08-03",
      "ActualNW": 0,
      "BestNW": 702104.2499,
      "BasicNW": 560286.0309,
      "WorstNW": 383998.1587,
      "Age": 61
    },
    {
      "Date": "2046-09-03",
      "ActualNW": 0,
      "BestNW": 705521.7779,
      "BasicNW": 562568.7055,
      "WorstNW": 384945.2018,
      "Age": 61
    },
    {
      "Date": "2046-10-03",
      "ActualNW": 0,
      "BestNW": 708955.9408,
      "BasicNW": 564860.6801,
      "WorstNW": 385894.5805,
      "Age": 62
    },
    {
      "Date": "2046-11-03",
      "ActualNW": 0,
      "BestNW": 712406.8197,
      "BasicNW": 567161.9924,
      "WorstNW": 386846.3007,
      "Age": 62
    },
    {
      "Date": "2046-12-03",
      "ActualNW": 0,
      "BestNW": 715874.4959,
      "BasicNW": 569472.6806,
      "WorstNW": 387800.368,
      "Age": 62
    },
    {
      "Date": "2047-01-03",
      "ActualNW": 0,
      "BestNW": 719359.0512,
      "BasicNW": 571792.7828,
      "WorstNW": 388756.7883,
      "Age": 62
    },
    {
      "Date": "2047-02-03",
      "ActualNW": 0,
      "BestNW": 722860.5678,
      "BasicNW": 574122.3373,
      "WorstNW": 389715.5674,
      "Age": 62
    },
    {
      "Date": "2047-03-03",
      "ActualNW": 0,
      "BestNW": 726379.1282,
      "BasicNW": 576461.3828,
      "WorstNW": 390676.7112,
      "Age": 62
    },
    {
      "Date": "2047-04-03",
      "ActualNW": 0,
      "BestNW": 729914.8153,
      "BasicNW": 578809.9578,
      "WorstNW": 391640.2253,
      "Age": 62
    },
    {
      "Date": "2047-05-03",
      "ActualNW": 0,
      "BestNW": 733467.7126,
      "BasicNW": 581168.1013,
      "WorstNW": 392606.1158,
      "Age": 62
    },
    {
      "Date": "2047-06-03",
      "ActualNW": 0,
      "BestNW": 737037.9037,
      "BasicNW": 583535.852,
      "WorstNW": 393574.3884,
      "Age": 62
    },
    {
      "Date": "2047-07-03",
      "ActualNW": 0,
      "BestNW": 740625.473,
      "BasicNW": 585913.2493,
      "WorstNW": 394545.049,
      "Age": 62
    },
    {
      "Date": "2047-08-03",
      "ActualNW": 0,
      "BestNW": 744230.5049,
      "BasicNW": 588300.3324,
      "WorstNW": 395518.1035,
      "Age": 62
    },
    {
      "Date": "2047-09-03",
      "ActualNW": 0,
      "BestNW": 747853.0846,
      "BasicNW": 590697.1408,
      "WorstNW": 396493.5579,
      "Age": 62
    },
    {
      "Date": "2047-10-03",
      "ActualNW": 0,
      "BestNW": 751493.2973,
      "BasicNW": 593103.7141,
      "WorstNW": 397471.4179,
      "Age": 63
    },
    {
      "Date": "2047-11-03",
      "ActualNW": 0,
      "BestNW": 755151.2289,
      "BasicNW": 595520.092,
      "WorstNW": 398451.6897,
      "Age": 63
    },
    {
      "Date": "2047-12-03",
      "ActualNW": 0,
      "BestNW": 758826.9657,
      "BasicNW": 597946.3146,
      "WorstNW": 399434.379,
      "Age": 63
    },
    {
      "Date": "2048-01-03",
      "ActualNW": 0,
      "BestNW": 762520.5943,
      "BasicNW": 600382.4219,
      "WorstNW": 400419.492,
      "Age": 63
    },
    {
      "Date": "2048-02-03",
      "ActualNW": 0,
      "BestNW": 766232.2019,
      "BasicNW": 602828.4542,
      "WorstNW": 401407.0345,
      "Age": 63
    },
    {
      "Date": "2048-03-03",
      "ActualNW": 0,
      "BestNW": 769961.8758,
      "BasicNW": 605284.4519,
      "WorstNW": 402397.0125,
      "Age": 63
    },
    {
      "Date": "2048-04-03",
      "ActualNW": 0,
      "BestNW": 773709.7042,
      "BasicNW": 607750.4557,
      "WorstNW": 403389.4321,
      "Age": 63
    },
    {
      "Date": "2048-05-03",
      "ActualNW": 0,
      "BestNW": 777475.7753,
      "BasicNW": 610226.5063,
      "WorstNW": 404384.2992,
      "Age": 63
    },
    {
      "Date": "2048-06-03",
      "ActualNW": 0,
      "BestNW": 781260.178,
      "BasicNW": 612712.6446,
      "WorstNW": 405381.62,
      "Age": 63
    },
    {
      "Date": "2048-07-03",
      "ActualNW": 0,
      "BestNW": 785063.0014,
      "BasicNW": 615208.9118,
      "WorstNW": 406381.4004,
      "Age": 63
    },
    {
      "Date": "2048-08-03",
      "ActualNW": 0,
      "BestNW": 788884.3352,
      "BasicNW": 617715.3491,
      "WorstNW": 407383.6466,
      "Age": 63
    },
    {
      "Date": "2048-09-03",
      "ActualNW": 0,
      "BestNW": 792724.2696,
      "BasicNW": 620231.9979,
      "WorstNW": 408388.3646,
      "Age": 63
    },
    {
      "Date": "2048-10-03",
      "ActualNW": 0,
      "BestNW": 796582.8951,
      "BasicNW": 622758.8998,
      "WorstNW": 409395.5605,
      "Age": 64
    },
    {
      "Date": "2048-11-03",
      "ActualNW": 0,
      "BestNW": 800460.3026,
      "BasicNW": 625296.0966,
      "WorstNW": 410405.2404,
      "Age": 64
    },
    {
      "Date": "2048-12-03",
      "ActualNW": 0,
      "BestNW": 804356.5836,
      "BasicNW": 627843.6303,
      "WorstNW": 411417.4104,
      "Age": 64
    },
    {
      "Date": "2049-01-03",
      "ActualNW": 0,
      "BestNW": 808271.83,
      "BasicNW": 630401.543,
      "WorstNW": 412432.0767,
      "Age": 64
    },
    {
      "Date": "2049-02-03",
      "ActualNW": 0,
      "BestNW": 812206.134,
      "BasicNW": 632969.8769,
      "WorstNW": 413449.2455,
      "Age": 64
    },
    {
      "Date": "2049-03-03",
      "ActualNW": 0,
      "BestNW": 816159.5884,
      "BasicNW": 635548.6745,
      "WorstNW": 414468.9229,
      "Age": 64
    },
    {
      "Date": "2049-04-03",
      "ActualNW": 0,
      "BestNW": 820132.2865,
      "BasicNW": 638137.9785,
      "WorstNW": 415491.115,
      "Age": 64
    },
    {
      "Date": "2049-05-03",
      "ActualNW": 0,
      "BestNW": 824124.3218,
      "BasicNW": 640737.8316,
      "WorstNW": 416515.8282,
      "Age": 64
    },
    {
      "Date": "2049-06-03",
      "ActualNW": 0,
      "BestNW": 828135.7886,
      "BasicNW": 643348.2769,
      "WorstNW": 417543.0686,
      "Age": 64
    },
    {
      "Date": "2049-07-03",
      "ActualNW": 0,
      "BestNW": 832166.7815,
      "BasicNW": 645969.3574,
      "WorstNW": 418572.8425,
      "Age": 64
    },
    {
      "Date": "2049-08-03",
      "ActualNW": 0,
      "BestNW": 836217.3954,
      "BasicNW": 648601.1165,
      "WorstNW": 419605.156,
      "Age": 64
    },
    {
      "Date": "2049-09-03",
      "ActualNW": 0,
      "BestNW": 840287.7258,
      "BasicNW": 651243.5977,
      "WorstNW": 420640.0155,
      "Age": 64
    },
    {
      "Date": "2049-10-03",
      "ActualNW": 0,
      "BestNW": 844377.8688,
      "BasicNW": 653896.8448,
      "WorstNW": 421677.4273,
      "Age": 65
    },
    {
      "Date": "2049-11-03",
      "ActualNW": 0,
      "BestNW": 848487.9208,
      "BasicNW": 656560.9015,
      "WorstNW": 422717.3976,
      "Age": 65
    },
    {
      "Date": "2049-12-03",
      "ActualNW": 0,
      "BestNW": 852617.9786,
      "BasicNW": 659235.8118,
      "WorstNW": 423759.9327,
      "Age": 65
    },
    {
      "Date": "2050-01-03",
      "ActualNW": 0,
      "BestNW": 856768.1398,
      "BasicNW": 661921.6201,
      "WorstNW": 424805.039,
      "Age": 65
    },
    {
      "Date": "2050-02-03",
      "ActualNW": 0,
      "BestNW": 860938.502,
      "BasicNW": 664618.3708,
      "WorstNW": 425852.7229,
      "Age": 65
    },
    {
      "Date": "2050-03-03",
      "ActualNW": 0,
      "BestNW": 865129.1637,
      "BasicNW": 667326.1083,
      "WorstNW": 426902.9905,
      "Age": 65
    },
    {
      "Date": "2050-04-03",
      "ActualNW": 0,
      "BestNW": 869340.2236,
      "BasicNW": 670044.8774,
      "WorstNW": 427955.8485,
      "Age": 65
    },
    {
      "Date": "2050-05-03",
      "ActualNW": 0,
      "BestNW": 873571.7811,
      "BasicNW": 672774.7232,
      "WorstNW": 429011.3031,
      "Age": 65
    },
    {
      "Date": "2050-06-03",
      "ActualNW": 0,
      "BestNW": 877823.936,
      "BasicNW": 675515.6907,
      "WorstNW": 430069.3607,
      "Age": 65
    },
    {
      "Date": "2050-07-03",
      "ActualNW": 0,
      "BestNW": 882096.7884,
      "BasicNW": 678267.8253,
      "WorstNW": 431130.0277,
      "Age": 65
    },
    {
      "Date": "2050-08-03",
      "ActualNW": 0,
      "BestNW": 886390.4391,
      "BasicNW": 681031.1723,
      "WorstNW": 432193.3107,
      "Age": 65
    },
    {
      "Date": "2050-09-03",
      "ActualNW": 0,
      "BestNW": 890704.9894,
      "BasicNW": 683805.7776,
      "WorstNW": 433259.216,
      "Age": 65
    },
    {
      "Date": "2050-10-03",
      "ActualNW": 0,
      "BestNW": 895040.5409,
      "BasicNW": 686591.687,
      "WorstNW": 434327.7501,
      "Age": 66
    },
    {
      "Date": "2050-11-03",
      "ActualNW": 0,
      "BestNW": 899397.196,
      "BasicNW": 689388.9465,
      "WorstNW": 435398.9195,
      "Age": 66
    },
    {
      "Date": "2050-12-03",
      "ActualNW": 0,
      "BestNW": 903775.0574,
      "BasicNW": 692197.6024,
      "WorstNW": 436472.7307,
      "Age": 66
    },
    {
      "Date": "2051-01-03",
      "ActualNW": 0,
      "BestNW": 908174.2281,
      "BasicNW": 695017.7012,
      "WorstNW": 437549.1902,
      "Age": 66
    },
    {
      "Date": "2051-02-03",
      "ActualNW": 0,
      "BestNW": 912594.8121,
      "BasicNW": 697849.2893,
      "WorstNW": 438628.3045,
      "Age": 66
    },
    {
      "Date": "2051-03-03",
      "ActualNW": 0,
      "BestNW": 917036.9135,
      "BasicNW": 700692.4137,
      "WorstNW": 439710.0803,
      "Age": 66
    },
    {
      "Date": "2051-04-03",
      "ActualNW": 0,
      "BestNW": 921500.6371,
      "BasicNW": 703547.1213,
      "WorstNW": 440794.5239,
      "Age": 66
    },
    {
      "Date": "2051-05-03",
      "ActualNW": 0,
      "BestNW": 925986.088,
      "BasicNW": 706413.4594,
      "WorstNW": 441881.6422,
      "Age": 66
    },
    {
      "Date": "2051-06-03",
      "ActualNW": 0,
      "BestNW": 930493.3721,
      "BasicNW": 709291.4752,
      "WorstNW": 442971.4415,
      "Age": 66
    },
    {
      "Date": "2051-07-03",
      "ActualNW": 0,
      "BestNW": 935022.5957,
      "BasicNW": 712181.2165,
      "WorstNW": 444063.9286,
      "Age": 66
    },
    {
      "Date": "2051-08-03",
      "ActualNW": 0,
      "BestNW": 939573.8654,
      "BasicNW": 715082.731,
      "WorstNW": 445159.11,
      "Age": 66
    },
    {
      "Date": "2051-09-03",
      "ActualNW": 0,
      "BestNW": 944147.2887,
      "BasicNW": 717996.0665,
      "WorstNW": 446256.9925,
      "Age": 66
    },
    {
      "Date": "2051-10-03",
      "ActualNW": 0,
      "BestNW": 948742.9734,
      "BasicNW": 720921.2714,
      "WorstNW": 447357.5826,
      "Age": 67
    },
    {
      "Date": "2051-11-03",
      "ActualNW": 0,
      "BestNW": 953361.0278,
      "BasicNW": 723858.3939,
      "WorstNW": 448460.8871,
      "Age": 67
    },
    {
      "Date": "2051-12-03",
      "ActualNW": 0,
      "BestNW": 958001.5608,
      "BasicNW": 726807.4826,
      "WorstNW": 449566.9126,
      "Age": 67
    },
    {
      "Date": "2052-01-03",
      "ActualNW": 0,
      "BestNW": 962664.6818,
      "BasicNW": 729768.5862,
      "WorstNW": 450675.6659,
      "Age": 67
    },
    {
      "Date": "2052-02-03",
      "ActualNW": 0,
      "BestNW": 967350.5008,
      "BasicNW": 732741.7538,
      "WorstNW": 451787.1537,
      "Age": 67
    },
    {
      "Date": "2052-03-03",
      "ActualNW": 0,
      "BestNW": 972059.1283,
      "BasicNW": 735727.0344,
      "WorstNW": 452901.3827,
      "Age": 67
    },
    {
      "Date": "2052-04-03",
      "ActualNW": 0,
      "BestNW": 976790.6753,
      "BasicNW": 738724.4774,
      "WorstNW": 454018.3597,
      "Age": 67
    },
    {
      "Date": "2052-05-03",
      "ActualNW": 0,
      "BestNW": 981545.2533,
      "BasicNW": 741734.1323,
      "WorstNW": 455138.0914,
      "Age": 67
    },
    {
      "Date": "2052-06-03",
      "ActualNW": 0,
      "BestNW": 986322.9744,
      "BasicNW": 744756.049,
      "WorstNW": 456260.5847,
      "Age": 67
    },
    {
      "Date": "2052-07-03",
      "ActualNW": 0,
      "BestNW": 991123.9514,
      "BasicNW": 747790.2773,
      "WorstNW": 457385.8464,
      "Age": 67
    },
    {
      "Date": "2052-08-03",
      "ActualNW": 0,
      "BestNW": 995948.2973,
      "BasicNW": 750836.8675,
      "WorstNW": 458513.8833,
      "Age": 67
    },
    {
      "Date": "2052-09-03",
      "ActualNW": 0,
      "BestNW": 1000796.126,
      "BasicNW": 753895.8698,
      "WorstNW": 459644.7022,
      "Age": 67
    },
    {
      "Date": "2052-10-03",
      "ActualNW": 0,
      "BestNW": 1005667.552,
      "BasicNW": 756967.3349,
      "WorstNW": 460778.3101,
      "Age": 68
    },
    {
      "Date": "2052-11-03",
      "ActualNW": 0,
      "BestNW": 1010562.689,
      "BasicNW": 760051.3136,
      "WorstNW": 461914.7137,
      "Age": 68
    },
    {
      "Date": "2052-12-03",
      "ActualNW": 0,
      "BestNW": 1015481.654,
      "BasicNW": 763147.8567,
      "WorstNW": 463053.92,
      "Age": 68
    },
    {
      "Date": "2053-01-03",
      "ActualNW": 0,
      "BestNW": 1020424.563,
      "BasicNW": 766257.0155,
      "WorstNW": 464195.9359,
      "Age": 68
    },
    {
      "Date": "2053-02-03",
      "ActualNW": 0,
      "BestNW": 1025391.531,
      "BasicNW": 769378.8415,
      "WorstNW": 465340.7683,
      "Age": 68
    },
    {
      "Date": "2053-03-03",
      "ActualNW": 0,
      "BestNW": 1030382.676,
      "BasicNW": 772513.3861,
      "WorstNW": 466488.4242,
      "Age": 68
    },
    {
      "Date": "2053-04-03",
      "ActualNW": 0,
      "BestNW": 1035398.116,
      "BasicNW": 775660.7012,
      "WorstNW": 467638.9105,
      "Age": 68
    },
    {
      "Date": "2053-05-03",
      "ActualNW": 0,
      "BestNW": 1040437.968,
      "BasicNW": 778820.839,
      "WorstNW": 468792.2342,
      "Age": 68
    },
    {
      "Date": "2053-06-03",
      "ActualNW": 0,
      "BestNW": 1045502.353,
      "BasicNW": 781993.8515,
      "WorstNW": 469948.4023,
      "Age": 68
    },
    {
      "Date": "2053-07-03",
      "ActualNW": 0,
      "BestNW": 1050591.388,
      "BasicNW": 785179.7912,
      "WorstNW": 471107.4218,
      "Age": 68
    },
    {
      "Date": "2053-08-03",
      "ActualNW": 0,
      "BestNW": 1055705.195,
      "BasicNW": 788378.7109,
      "WorstNW": 472269.2998,
      "Age": 68
    },
    {
      "Date": "2053-09-03",
      "ActualNW": 0,
      "BestNW": 1060843.894,
      "BasicNW": 791590.6633,
      "WorstNW": 473434.0433,
      "Age": 68
    },
    {
      "Date": "2053-10-03",
      "ActualNW": 0,
      "BestNW": 1066007.605,
      "BasicNW": 794815.7017,
      "WorstNW": 474601.6594,
      "Age": 69
    },
    {
      "Date": "2053-11-03",
      "ActualNW": 0,
      "BestNW": 1071196.451,
      "BasicNW": 798053.8792,
      "WorstNW": 475772.1551,
      "Age": 69
    },
    {
      "Date": "2053-12-03",
      "ActualNW": 0,
      "BestNW": 1076410.554,
      "BasicNW": 801305.2495,
      "WorstNW": 476945.5376,
      "Age": 69
    },
    {
      "Date": "2054-01-03",
      "ActualNW": 0,
      "BestNW": 1081650.037,
      "BasicNW": 804569.8663,
      "WorstNW": 478121.814,
      "Age": 69
    },
    {
      "Date": "2054-02-03",
      "ActualNW": 0,
      "BestNW": 1086915.023,
      "BasicNW": 807847.7835,
      "WorstNW": 479300.9913,
      "Age": 69
    },
    {
      "Date": "2054-03-03",
      "ActualNW": 0,
      "BestNW": 1092205.637,
      "BasicNW": 811139.0554,
      "WorstNW": 480483.0769,
      "Age": 69
    },
    {
      "Date": "2054-04-03",
      "ActualNW": 0,
      "BestNW": 1097522.003,
      "BasicNW": 814443.7363,
      "WorstNW": 481668.0778,
      "Age": 69
    },
    {
      "Date": "2054-05-03",
      "ActualNW": 0,
      "BestNW": 1102864.247,
      "BasicNW": 817761.8809,
      "WorstNW": 482856.0012,
      "Age": 69
    },
    {
      "Date": "2054-06-03",
      "ActualNW": 0,
      "BestNW": 1108232.494,
      "BasicNW": 821093.544,
      "WorstNW": 484046.8543,
      "Age": 69
    },
    {
      "Date": "2054-07-03",
      "ActualNW": 0,
      "BestNW": 1113626.872,
      "BasicNW": 824438.7808,
      "WorstNW": 485240.6445,
      "Age": 69
    },
    {
      "Date": "2054-08-03",
      "ActualNW": 0,
      "BestNW": 1119047.507,
      "BasicNW": 827797.6464,
      "WorstNW": 486437.3788,
      "Age": 69
    },
    {
      "Date": "2054-09-03",
      "ActualNW": 0,
      "BestNW": 1124494.527,
      "BasicNW": 831170.1965,
      "WorstNW": 487637.0646,
      "Age": 69
    },
    {
      "Date": "2054-10-03",
      "ActualNW": 0,
      "BestNW": 1129968.061,
      "BasicNW": 834556.4868,
      "WorstNW": 488839.7092,
      "Age": 70
    },
    {
      "Date": "2054-11-03",
      "ActualNW": 0,
      "BestNW": 1135468.238,
      "BasicNW": 837956.5732,
      "WorstNW": 490045.3198,
      "Age": 70
    },
    {
      "Date": "2054-12-03",
      "ActualNW": 0,
      "BestNW": 1140995.187,
      "BasicNW": 841370.512,
      "WorstNW": 491253.9037,
      "Age": 70
    },
    {
      "Date": "2055-01-03",
      "ActualNW": 0,
      "BestNW": 1146549.039,
      "BasicNW": 844798.3596,
      "WorstNW": 492465.4684,
      "Age": 70
    },
    {
      "Date": "2055-02-03",
      "ActualNW": 0,
      "BestNW": 1152129.924,
      "BasicNW": 848240.1727,
      "WorstNW": 493680.0211,
      "Age": 70
    },
    {
      "Date": "2055-03-03",
      "ActualNW": 0,
      "BestNW": 1157737.975,
      "BasicNW": 851696.0082,
      "WorstNW": 494897.5692,
      "Age": 70
    },
    {
      "Date": "2055-04-03",
      "ActualNW": 0,
      "BestNW": 1163373.323,
      "BasicNW": 855165.9231,
      "WorstNW": 496118.1201,
      "Age": 70
    },
    {
      "Date": "2055-05-03",
      "ActualNW": 0,
      "BestNW": 1169036.101,
      "BasicNW": 858649.975,
      "WorstNW": 497341.6812,
      "Age": 70
    },
    {
      "Date": "2055-06-03",
      "ActualNW": 0,
      "BestNW": 1174726.444,
      "BasicNW": 862148.2212,
      "WorstNW": 498568.26,
      "Age": 70
    },
    {
      "Date": "2055-07-03",
      "ActualNW": 0,
      "BestNW": 1180444.484,
      "BasicNW": 865660.7198,
      "WorstNW": 499797.8638,
      "Age": 70
    },
    {
      "Date": "2055-08-03",
      "ActualNW": 0,
      "BestNW": 1186190.357,
      "BasicNW": 869187.5287,
      "WorstNW": 501030.5002,
      "Age": 70
    },
    {
      "Date": "2055-09-03",
      "ActualNW": 0,
      "BestNW": 1191964.199,
      "BasicNW": 872728.7063,
      "WorstNW": 502266.1765,
      "Age": 70
    },
    {
      "Date": "2055-10-03",
      "ActualNW": 0,
      "BestNW": 1197766.145,
      "BasicNW": 876284.3111,
      "WorstNW": 503504.9004,
      "Age": 71
    },
    {
      "Date": "2055-11-03",
      "ActualNW": 0,
      "BestNW": 1203596.332,
      "BasicNW": 879854.4019,
      "WorstNW": 504746.6794,
      "Age": 71
    },
    {
      "Date": "2055-12-03",
      "ActualNW": 0,
      "BestNW": 1209454.898,
      "BasicNW": 883439.0376,
      "WorstNW": 505991.5208,
      "Age": 71
    },
    {
      "Date": "2056-01-03",
      "ActualNW": 0,
      "BestNW": 1215341.981,
      "BasicNW": 887038.2776,
      "WorstNW": 507239.4324,
      "Age": 71
    },
    {
      "Date": "2056-02-03",
      "ActualNW": 0,
      "BestNW": 1221257.72,
      "BasicNW": 890652.1813,
      "WorstNW": 508490.4217,
      "Age": 71
    },
    {
      "Date": "2056-03-03",
      "ActualNW": 0,
      "BestNW": 1227202.253,
      "BasicNW": 894280.8086,
      "WorstNW": 509744.4963,
      "Age": 71
    },
    {
      "Date": "2056-04-03",
      "ActualNW": 0,
      "BestNW": 1233175.722,
      "BasicNW": 897924.2193,
      "WorstNW": 511001.6637,
      "Age": 71
    },
    {
      "Date": "2056-05-03",
      "ActualNW": 0,
      "BestNW": 1239178.267,
      "BasicNW": 901582.4737,
      "WorstNW": 512261.9317,
      "Age": 71
    },
    {
      "Date": "2056-06-03",
      "ActualNW": 0,
      "BestNW": 1245210.03,
      "BasicNW": 905255.6323,
      "WorstNW": 513525.3078,
      "Age": 71
    },
    {
      "Date": "2056-07-03",
      "ActualNW": 0,
      "BestNW": 1251271.153,
      "BasicNW": 908943.7558,
      "WorstNW": 514791.7997,
      "Age": 71
    },
    {
      "Date": "2056-08-03",
      "ActualNW": 0,
      "BestNW": 1257361.779,
      "BasicNW": 912646.9052,
      "WorstNW": 516061.4152,
      "Age": 71
    },
    {
      "Date": "2056-09-03",
      "ActualNW": 0,
      "BestNW": 1263482.051,
      "BasicNW": 916365.1416,
      "WorstNW": 517334.1618,
      "Age": 71
    },
    {
      "Date": "2056-10-03",
      "ActualNW": 0,
      "BestNW": 1269632.114,
      "BasicNW": 920098.5267,
      "WorstNW": 518610.0474,
      "Age": 72
    },
    {
      "Date": "2056-11-03",
      "ActualNW": 0,
      "BestNW": 1275812.112,
      "BasicNW": 923847.1219,
      "WorstNW": 519889.0797,
      "Age": 72
    },
    {
      "Date": "2056-12-03",
      "ActualNW": 0,
      "BestNW": 1282022.192,
      "BasicNW": 927610.9895,
      "WorstNW": 521171.2665,
      "Age": 72
    },
    {
      "Date": "2057-01-03",
      "ActualNW": 0,
      "BestNW": 1288262.5,
      "BasicNW": 931390.1915,
      "WorstNW": 522456.6154,
      "Age": 72
    },
    {
      "Date": "2057-02-03",
      "ActualNW": 0,
      "BestNW": 1294533.183,
      "BasicNW": 935184.7904,
      "WorstNW": 523745.1344,
      "Age": 72
    },
    {
      "Date": "2057-03-03",
      "ActualNW": 0,
      "BestNW": 1300834.388,
      "BasicNW": 938994.849,
      "WorstNW": 525036.8311,
      "Age": 72
    },
    {
      "Date": "2057-04-03",
      "ActualNW": 0,
      "BestNW": 1307166.266,
      "BasicNW": 942820.4302,
      "WorstNW": 526331.7136,
      "Age": 72
    },
    {
      "Date": "2057-05-03",
      "ActualNW": 0,
      "BestNW": 1313528.964,
      "BasicNW": 946661.5974,
      "WorstNW": 527629.7896,
      "Age": 72
    },
    {
      "Date": "2057-06-03",
      "ActualNW": 0,
      "BestNW": 1319922.632,
      "BasicNW": 950518.4139,
      "WorstNW": 528931.067,
      "Age": 72
    },
    {
      "Date": "2057-07-03",
      "ActualNW": 0,
      "BestNW": 1326347.422,
      "BasicNW": 954390.9436,
      "WorstNW": 530235.5537,
      "Age": 72
    },
    {
      "Date": "2057-08-03",
      "ActualNW": 0,
      "BestNW": 1332803.485,
      "BasicNW": 958279.2504,
      "WorstNW": 531543.2576,
      "Age": 72
    },
    {
      "Date": "2057-09-03",
      "ActualNW": 0,
      "BestNW": 1339290.974,
      "BasicNW": 962183.3987,
      "WorstNW": 532854.1867,
      "Age": 72
    },
    {
      "Date": "2057-10-03",
      "ActualNW": 0,
      "BestNW": 1345810.04,
      "BasicNW": 966103.453,
      "WorstNW": 534168.3489,
      "Age": 73
    },
    {
      "Date": "2057-11-03",
      "ActualNW": 0,
      "BestNW": 1352360.839,
      "BasicNW": 970039.478,
      "WorstNW": 535485.7521,
      "Age": 73
    },
    {
      "Date": "2057-12-03",
      "ActualNW": 0,
      "BestNW": 1358943.524,
      "BasicNW": 973991.539,
      "WorstNW": 536806.4044,
      "Age": 73
    },
    {
      "Date": "2058-01-03",
      "ActualNW": 0,
      "BestNW": 1365558.25,
      "BasicNW": 977959.701,
      "WorstNW": 538130.3139,
      "Age": 73
    },
    {
      "Date": "2058-02-03",
      "ActualNW": 0,
      "BestNW": 1372205.174,
      "BasicNW": 981944.0299,
      "WorstNW": 539457.4884,
      "Age": 73
    },
    {
      "Date": "2058-03-03",
      "ActualNW": 0,
      "BestNW": 1378884.452,
      "BasicNW": 985944.5914,
      "WorstNW": 540787.9361,
      "Age": 73
    },
    {
      "Date": "2058-04-03",
      "ActualNW": 0,
      "BestNW": 1385596.242,
      "BasicNW": 989961.4518,
      "WorstNW": 542121.665,
      "Age": 73
    },
    {
      "Date": "2058-05-03",
      "ActualNW": 0,
      "BestNW": 1392340.701,
      "BasicNW": 993994.6773,
      "WorstNW": 543458.6833,
      "Age": 73
    },
    {
      "Date": "2058-06-03",
      "ActualNW": 0,
      "BestNW": 1399117.99,
      "BasicNW": 998044.3346,
      "WorstNW": 544798.999,
      "Age": 73
    },
    {
      "Date": "2058-07-03",
      "ActualNW": 0,
      "BestNW": 1405928.268,
      "BasicNW": 1002110.491,
      "WorstNW": 546142.6203,
      "Age": 73
    },
    {
      "Date": "2058-08-03",
      "ActualNW": 0,
      "BestNW": 1412771.695,
      "BasicNW": 1006193.213,
      "WorstNW": 547489.5554,
      "Age": 73
    },
    {
      "Date": "2058-09-03",
      "ActualNW": 0,
      "BestNW": 1419648.432,
      "BasicNW": 1010292.569,
      "WorstNW": 548839.8123,
      "Age": 73
    },
    {
      "Date": "2058-10-03",
      "ActualNW": 0,
      "BestNW": 1426558.643,
      "BasicNW": 1014408.626,
      "WorstNW": 550193.3993,
      "Age": 74
    },
    {
      "Date": "2058-11-03",
      "ActualNW": 0,
      "BestNW": 1433502.489,
      "BasicNW": 1018541.452,
      "WorstNW": 551550.3247,
      "Age": 74
    },
    {
      "Date": "2058-12-03",
      "ActualNW": 0,
      "BestNW": 1440480.135,
      "BasicNW": 1022691.116,
      "WorstNW": 552910.5966,
      "Age": 74
    },
    {
      "Date": "2059-01-03",
      "ActualNW": 0,
      "BestNW": 1447491.745,
      "BasicNW": 1026857.686,
      "WorstNW": 554274.2233,
      "Age": 74
    },
    {
      "Date": "2059-02-03",
      "ActualNW": 0,
      "BestNW": 1454537.484,
      "BasicNW": 1031041.231,
      "WorstNW": 555641.213,
      "Age": 74
    },
    {
      "Date": "2059-03-03",
      "ActualNW": 0,
      "BestNW": 1461617.519,
      "BasicNW": 1035241.821,
      "WorstNW": 557011.5742,
      "Age": 74
    },
    {
      "Date": "2059-04-03",
      "ActualNW": 0,
      "BestNW": 1468732.016,
      "BasicNW": 1039459.524,
      "WorstNW": 558385.315,
      "Age": 74
    },
    {
      "Date": "2059-05-03",
      "ActualNW": 0,
      "BestNW": 1475881.143,
      "BasicNW": 1043694.411,
      "WorstNW": 559762.4438,
      "Age": 74
    },
    {
      "Date": "2059-06-03",
      "ActualNW": 0,
      "BestNW": 1483065.07,
      "BasicNW": 1047946.551,
      "WorstNW": 561142.969,
      "Age": 74
    },
    {
      "Date": "2059-07-03",
      "ActualNW": 0,
      "BestNW": 1490283.964,
      "BasicNW": 1052216.015,
      "WorstNW": 562526.8989,
      "Age": 74
    },
    {
      "Date": "2059-08-03",
      "ActualNW": 0,
      "BestNW": 1497537.996,
      "BasicNW": 1056502.874,
      "WorstNW": 563914.242,
      "Age": 74
    },
    {
      "Date": "2059-09-03",
      "ActualNW": 0,
      "BestNW": 1504827.338,
      "BasicNW": 1060807.197,
      "WorstNW": 565305.0067,
      "Age": 74
    },
    {
      "Date": "2059-10-03",
      "ActualNW": 0,
      "BestNW": 1512152.161,
      "BasicNW": 1065129.057,
      "WorstNW": 566699.2013,
      "Age": 75
    },
    {
      "Date": "2059-11-03",
      "ActualNW": 0,
      "BestNW": 1519512.638,
      "BasicNW": 1069468.525,
      "WorstNW": 568096.8344,
      "Age": 75
    },
    {
      "Date": "2059-12-03",
      "ActualNW": 0,
      "BestNW": 1526908.943,
      "BasicNW": 1073825.672,
      "WorstNW": 569497.9145,
      "Age": 75
    },
    {
      "Date": "2060-01-03",
      "ActualNW": 0,
      "BestNW": 1534341.25,
      "BasicNW": 1078200.57,
      "WorstNW": 570902.45,
      "Age": 75
    },
    {
      "Date": "2060-02-03",
      "ActualNW": 0,
      "BestNW": 1541809.733,
      "BasicNW": 1082593.293,
      "WorstNW": 572310.4494,
      "Age": 75
    },
    {
      "Date": "2060-03-03",
      "ActualNW": 0,
      "BestNW": 1549314.57,
      "BasicNW": 1087003.912,
      "WorstNW": 573721.9214,
      "Age": 75
    },
    {
      "Date": "2060-04-03",
      "ActualNW": 0,
      "BestNW": 1556855.937,
      "BasicNW": 1091432.501,
      "WorstNW": 575136.8744,
      "Age": 75
    },
    {
      "Date": "2060-05-03",
      "ActualNW": 0,
      "BestNW": 1564434.012,
      "BasicNW": 1095879.132,
      "WorstNW": 576555.3171,
      "Age": 75
    },
    {
      "Date": "2060-06-03",
      "ActualNW": 0,
      "BestNW": 1572048.974,
      "BasicNW": 1100343.879,
      "WorstNW": 577977.2581,
      "Age": 75
    },
    {
      "Date": "2060-07-03",
      "ActualNW": 0,
      "BestNW": 1579701.002,
      "BasicNW": 1104826.816,
      "WorstNW": 579402.7059,
      "Age": 75
    },
    {
      "Date": "2060-08-03",
      "ActualNW": 0,
      "BestNW": 1587390.276,
      "BasicNW": 1109328.017,
      "WorstNW": 580831.6693,
      "Age": 75
    },
    {
      "Date": "2060-09-03",
      "ActualNW": 0,
      "BestNW": 1595116.978,
      "BasicNW": 1113847.557,
      "WorstNW": 582264.1569,
      "Age": 75
    },
    {
      "Date": "2060-10-03",
      "ActualNW": 0,
      "BestNW": 1602881.291,
      "BasicNW": 1118385.51,
      "WorstNW": 583700.1774,
      "Age": 76
    },
    {
      "Date": "2060-11-03",
      "ActualNW": 0,
      "BestNW": 1610683.397,
      "BasicNW": 1122941.951,
      "WorstNW": 585139.7395,
      "Age": 76
    },
    {
      "Date": "2060-12-03",
      "ActualNW": 0,
      "BestNW": 1618523.48,
      "BasicNW": 1127516.955,
      "WorstNW": 586582.8519,
      "Age": 76
    },
    {
      "Date": "2061-01-03",
      "ActualNW": 0,
      "BestNW": 1626401.725,
      "BasicNW": 1132110.599,
      "WorstNW": 588029.5235,
      "Age": 76
    },
    {
      "Date": "2061-02-03",
      "ActualNW": 0,
      "BestNW": 1634318.317,
      "BasicNW": 1136722.958,
      "WorstNW": 589479.7629,
      "Age": 76
    },
    {
      "Date": "2061-03-03",
      "ActualNW": 0,
      "BestNW": 1642273.444,
      "BasicNW": 1141354.108,
      "WorstNW": 590933.579,
      "Age": 76
    },
    {
      "Date": "2061-04-03",
      "ActualNW": 0,
      "BestNW": 1650267.293,
      "BasicNW": 1146004.126,
      "WorstNW": 592390.9807,
      "Age": 76
    },
    {
      "Date": "2061-05-03",
      "ActualNW": 0,
      "BestNW": 1658300.053,
      "BasicNW": 1150673.088,
      "WorstNW": 593851.9766,
      "Age": 76
    },
    {
      "Date": "2061-06-03",
      "ActualNW": 0,
      "BestNW": 1666371.912,
      "BasicNW": 1155361.073,
      "WorstNW": 595316.5758,
      "Age": 76
    },
    {
      "Date": "2061-07-03",
      "ActualNW": 0,
      "BestNW": 1674483.062,
      "BasicNW": 1160068.157,
      "WorstNW": 596784.7871,
      "Age": 76
    },
    {
      "Date": "2061-08-03",
      "ActualNW": 0,
      "BestNW": 1682633.693,
      "BasicNW": 1164794.418,
      "WorstNW": 598256.6194,
      "Age": 76
    },
    {
      "Date": "2061-09-03",
      "ActualNW": 0,
      "BestNW": 1690823.997,
      "BasicNW": 1169539.935,
      "WorstNW": 599732.0816,
      "Age": 76
    },
    {
      "Date": "2061-10-03",
      "ActualNW": 0,
      "BestNW": 1699054.169,
      "BasicNW": 1174304.785,
      "WorstNW": 601211.1827,
      "Age": 77
    },
    {
      "Date": "2061-11-03",
      "ActualNW": 0,
      "BestNW": 1707324.401,
      "BasicNW": 1179089.048,
      "WorstNW": 602693.9316,
      "Age": 77
    },
    {
      "Date": "2061-12-03",
      "ActualNW": 0,
      "BestNW": 1715634.888,
      "BasicNW": 1183892.803,
      "WorstNW": 604180.3375,
      "Age": 77
    },
    {
      "Date": "2062-01-03",
      "ActualNW": 0,
      "BestNW": 1723985.828,
      "BasicNW": 1188716.129,
      "WorstNW": 605670.4092,
      "Age": 77
    },
    {
      "Date": "2062-02-03",
      "ActualNW": 0,
      "BestNW": 1732377.416,
      "BasicNW": 1193559.106,
      "WorstNW": 607164.1558,
      "Age": 77
    },
    {
      "Date": "2062-03-03",
      "ActualNW": 0,
      "BestNW": 1740809.851,
      "BasicNW": 1198421.813,
      "WorstNW": 608661.5864,
      "Age": 77
    },
    {
      "Date": "2062-04-03",
      "ActualNW": 0,
      "BestNW": 1749283.331,
      "BasicNW": 1203304.332,
      "WorstNW": 610162.7101,
      "Age": 77
    },
    {
      "Date": "2062-05-03",
      "ActualNW": 0,
      "BestNW": 1757798.056,
      "BasicNW": 1208206.743,
      "WorstNW": 611667.5359,
      "Age": 77
    },
    {
      "Date": "2062-06-03",
      "ActualNW": 0,
      "BestNW": 1766354.227,
      "BasicNW": 1213129.126,
      "WorstNW": 613176.0731,
      "Age": 77
    },
    {
      "Date": "2062-07-03",
      "ActualNW": 0,
      "BestNW": 1774952.045,
      "BasicNW": 1218071.565,
      "WorstNW": 614688.3307,
      "Age": 77
    },
    {
      "Date": "2062-08-03",
      "ActualNW": 0,
      "BestNW": 1783591.714,
      "BasicNW": 1223034.139,
      "WorstNW": 616204.3179,
      "Age": 77
    },
    {
      "Date": "2062-09-03",
      "ActualNW": 0,
      "BestNW": 1792273.437,
      "BasicNW": 1228016.932,
      "WorstNW": 617724.044,
      "Age": 77
    },
    {
      "Date": "2062-10-03",
      "ActualNW": 0,
      "BestNW": 1800997.419,
      "BasicNW": 1233020.025,
      "WorstNW": 619247.5182,
      "Age": 78
    },
    {
      "Date": "2062-11-03",
      "ActualNW": 0,
      "BestNW": 1809763.865,
      "BasicNW": 1238043.501,
      "WorstNW": 620774.7496,
      "Age": 78
    },
    {
      "Date": "2062-12-03",
      "ActualNW": 0,
      "BestNW": 1818572.982,
      "BasicNW": 1243087.443,
      "WorstNW": 622305.7476,
      "Age": 78
    },
    {
      "Date": "2063-01-03",
      "ActualNW": 0,
      "BestNW": 1827424.978,
      "BasicNW": 1248151.935,
      "WorstNW": 623840.5215,
      "Age": 78
    },
    {
      "Date": "2063-02-03",
      "ActualNW": 0,
      "BestNW": 1836320.061,
      "BasicNW": 1253237.061,
      "WorstNW": 625379.0805,
      "Age": 78
    },
    {
      "Date": "2063-03-03",
      "ActualNW": 0,
      "BestNW": 1845258.442,
      "BasicNW": 1258342.904,
      "WorstNW": 626921.434,
      "Age": 78
    },
    {
      "Date": "2063-04-03",
      "ActualNW": 0,
      "BestNW": 1854240.331,
      "BasicNW": 1263469.548,
      "WorstNW": 628467.5914,
      "Age": 78
    },
    {
      "Date": "2063-05-03",
      "ActualNW": 0,
      "BestNW": 1863265.939,
      "BasicNW": 1268617.08,
      "WorstNW": 630017.562,
      "Age": 78
    },
    {
      "Date": "2063-06-03",
      "ActualNW": 0,
      "BestNW": 1872335.48,
      "BasicNW": 1273785.583,
      "WorstNW": 631571.3553,
      "Age": 78
    },
    {
      "Date": "2063-07-03",
      "ActualNW": 0,
      "BestNW": 1881449.168,
      "BasicNW": 1278975.143,
      "WorstNW": 633128.9806,
      "Age": 78
    },
    {
      "Date": "2063-08-03",
      "ActualNW": 0,
      "BestNW": 1890607.217,
      "BasicNW": 1284185.846,
      "WorstNW": 634690.4475,
      "Age": 78
    },
    {
      "Date": "2063-09-03",
      "ActualNW": 0,
      "BestNW": 1899809.843,
      "BasicNW": 1289417.778,
      "WorstNW": 636255.7653,
      "Age": 78
    },
    {
      "Date": "2063-10-03",
      "ActualNW": 0,
      "BestNW": 1909057.264,
      "BasicNW": 1294671.026,
      "WorstNW": 637824.9437,
      "Age": 79
    },
    {
      "Date": "2063-11-03",
      "ActualNW": 0,
      "BestNW": 1918349.696,
      "BasicNW": 1299945.676,
      "WorstNW": 639397.9921,
      "Age": 79
    },
    {
      "Date": "2063-12-03",
      "ActualNW": 0,
      "BestNW": 1927687.361,
      "BasicNW": 1305241.815,
      "WorstNW": 640974.92,
      "Age": 79
    },
    {
      "Date": "2064-01-03",
      "ActualNW": 0,
      "BestNW": 1937070.476,
      "BasicNW": 1310559.532,
      "WorstNW": 642555.7371,
      "Age": 79
    },
    {
      "Date": "2064-02-03",
      "ActualNW": 0,
      "BestNW": 1946499.265,
      "BasicNW": 1315898.914,
      "WorstNW": 644140.4529,
      "Age": 79
    },
    {
      "Date": "2064-03-03",
      "ActualNW": 0,
      "BestNW": 1955973.948,
      "BasicNW": 1321260.049,
      "WorstNW": 645729.077,
      "Age": 79
    },
    {
      "Date": "2064-04-03",
      "ActualNW": 0,
      "BestNW": 1965494.751,
      "BasicNW": 1326643.026,
      "WorstNW": 647321.6191,
      "Age": 79
    },
    {
      "Date": "2064-05-03",
      "ActualNW": 0,
      "BestNW": 1975061.896,
      "BasicNW": 1332047.934,
      "WorstNW": 648918.0889,
      "Age": 79
    },
    {
      "Date": "2064-06-03",
      "ActualNW": 0,
      "BestNW": 1984675.609,
      "BasicNW": 1337474.862,
      "WorstNW": 650518.4959,
      "Age": 79
    },
    {
      "Date": "2064-07-03",
      "ActualNW": 0,
      "BestNW": 1994336.118,
      "BasicNW": 1342923.9,
      "WorstNW": 652122.85,
      "Age": 79
    },
    {
      "Date": "2064-08-03",
      "ActualNW": 0,
      "BestNW": 2004043.65,
      "BasicNW": 1348395.138,
      "WorstNW": 653731.1609,
      "Age": 79
    },
    {
      "Date": "2064-09-03",
      "ActualNW": 0,
      "BestNW": 2013798.434,
      "BasicNW": 1353888.667,
      "WorstNW": 655343.4383,
      "Age": 79
    },
    {
      "Date": "2064-10-03",
      "ActualNW": 0,
      "BestNW": 2023600.7,
      "BasicNW": 1359404.577,
      "WorstNW": 656959.692,
      "Age": 80
    },
    {
      "Date": "2064-11-03",
      "ActualNW": 0,
      "BestNW": 2033450.678,
      "BasicNW": 1364942.96,
      "WorstNW": 658579.9318,
      "Age": 80
    },
    {
      "Date": "2064-12-03",
      "ActualNW": 0,
      "BestNW": 2043348.602,
      "BasicNW": 1370503.906,
      "WorstNW": 660204.1676,
      "Age": 80
    },
    {
      "Date": "2065-01-03",
      "ActualNW": 0,
      "BestNW": 2053294.705,
      "BasicNW": 1376087.509,
      "WorstNW": 661832.4092,
      "Age": 80
    },
    {
      "Date": "2065-02-03",
      "ActualNW": 0,
      "BestNW": 2063289.221,
      "BasicNW": 1381693.86,
      "WorstNW": 663464.6665,
      "Age": 80
    },
    {
      "Date": "2065-03-03",
      "ActualNW": 0,
      "BestNW": 2073332.385,
      "BasicNW": 1387323.051,
      "WorstNW": 665100.9493,
      "Age": 80
    },
    {
      "Date": "2065-04-03",
      "ActualNW": 0,
      "BestNW": 2083424.436,
      "BasicNW": 1392975.177,
      "WorstNW": 666741.2677,
      "Age": 80
    },
    {
      "Date": "2065-05-03",
      "ActualNW": 0,
      "BestNW": 2093565.609,
      "BasicNW": 1398650.33,
      "WorstNW": 668385.6315,
      "Age": 80
    },
    {
      "Date": "2065-06-03",
      "ActualNW": 0,
      "BestNW": 2103756.146,
      "BasicNW": 1404348.605,
      "WorstNW": 670034.0508,
      "Age": 80
    },
    {
      "Date": "2065-07-03",
      "ActualNW": 0,
      "BestNW": 2113996.285,
      "BasicNW": 1410070.095,
      "WorstNW": 671686.5355,
      "Age": 80
    },
    {
      "Date": "2065-08-03",
      "ActualNW": 0,
      "BestNW": 2124286.269,
      "BasicNW": 1415814.895,
      "WorstNW": 673343.0957,
      "Age": 80
    },
    {
      "Date": "2065-09-03",
      "ActualNW": 0,
      "BestNW": 2134626.34,
      "BasicNW": 1421583.1,
      "WorstNW": 675003.7415,
      "Age": 80
    },
    {
      "Date": "2065-10-03",
      "ActualNW": 0,
      "BestNW": 2145016.742,
      "BasicNW": 1427374.806,
      "WorstNW": 676668.4828,
      "Age": 81
    },
    {
      "Date": "2065-11-03",
      "ActualNW": 0,
      "BestNW": 2155457.719,
      "BasicNW": 1433190.108,
      "WorstNW": 678337.3298,
      "Age": 81
    },
    {
      "Date": "2065-12-03",
      "ActualNW": 0,
      "BestNW": 2165949.518,
      "BasicNW": 1439029.101,
      "WorstNW": 680010.2927,
      "Age": 81
    },
    {
      "Date": "2066-01-03",
      "ActualNW": 0,
      "BestNW": 2176492.387,
      "BasicNW": 1444891.884,
      "WorstNW": 681687.3815,
      "Age": 81
    },
    {
      "Date": "2066-02-03",
      "ActualNW": 0,
      "BestNW": 2187086.574,
      "BasicNW": 1450778.553,
      "WorstNW": 683368.6065,
      "Age": 81
    },
    {
      "Date": "2066-03-03",
      "ActualNW": 0,
      "BestNW": 2197732.328,
      "BasicNW": 1456689.204,
      "WorstNW": 685053.9778,
      "Age": 81
    },
    {
      "Date": "2066-04-03",
      "ActualNW": 0,
      "BestNW": 2208429.902,
      "BasicNW": 1462623.936,
      "WorstNW": 686743.5057,
      "Age": 81
    },
    {
      "Date": "2066-05-03",
      "ActualNW": 0,
      "BestNW": 2219179.546,
      "BasicNW": 1468582.847,
      "WorstNW": 688437.2005,
      "Age": 81
    },
    {
      "Date": "2066-06-03",
      "ActualNW": 0,
      "BestNW": 2229981.515,
      "BasicNW": 1474566.035,
      "WorstNW": 690135.0723,
      "Age": 81
    },
    {
      "Date": "2066-07-03",
      "ActualNW": 0,
      "BestNW": 2240836.062,
      "BasicNW": 1480573.6,
      "WorstNW": 691837.1316,
      "Age": 81
    },
    {
      "Date": "2066-08-03",
      "ActualNW": 0,
      "BestNW": 2251743.445,
      "BasicNW": 1486605.64,
      "WorstNW": 693543.3886,
      "Age": 81
    },
    {
      "Date": "2066-09-03",
      "ActualNW": 0,
      "BestNW": 2262703.92,
      "BasicNW": 1492662.255,
      "WorstNW": 695253.8537,
      "Age": 81
    },
    {
      "Date": "2066-10-03",
      "ActualNW": 0,
      "BestNW": 2273717.746,
      "BasicNW": 1498743.546,
      "WorstNW": 696968.5373,
      "Age": 82
    },
    {
      "Date": "2066-11-03",
      "ActualNW": 0,
      "BestNW": 2284785.182,
      "BasicNW": 1504849.613,
      "WorstNW": 698687.4497,
      "Age": 82
    },
    {
      "Date": "2066-12-03",
      "ActualNW": 0,
      "BestNW": 2295906.49,
      "BasicNW": 1510980.556,
      "WorstNW": 700410.6014,
      "Age": 82
    },
    {
      "Date": "2067-01-03",
      "ActualNW": 0,
      "BestNW": 2307081.93,
      "BasicNW": 1517136.478,
      "WorstNW": 702138.0029,
      "Age": 82
    },
    {
      "Date": "2067-02-03",
      "ActualNW": 0,
      "BestNW": 2318311.768,
      "BasicNW": 1523317.48,
      "WorstNW": 703869.6647,
      "Age": 82
    },
    {
      "Date": "2067-03-03",
      "ActualNW": 0,
      "BestNW": 2329596.268,
      "BasicNW": 1529523.664,
      "WorstNW": 705605.5971,
      "Age": 82
    },
    {
      "Date": "2067-04-03",
      "ActualNW": 0,
      "BestNW": 2340935.696,
      "BasicNW": 1535755.133,
      "WorstNW": 707345.8109,
      "Age": 82
    },
    {
      "Date": "2067-05-03",
      "ActualNW": 0,
      "BestNW": 2352330.319,
      "BasicNW": 1542011.989,
      "WorstNW": 709090.3165,
      "Age": 82
    },
    {
      "Date": "2067-06-03",
      "ActualNW": 0,
      "BestNW": 2363780.405,
      "BasicNW": 1548294.337,
      "WorstNW": 710839.1245,
      "Age": 82
    },
    {
      "Date": "2067-07-03",
      "ActualNW": 0,
      "BestNW": 2375286.226,
      "BasicNW": 1554602.28,
      "WorstNW": 712592.2455,
      "Age": 82
    },
    {
      "Date": "2067-08-03",
      "ActualNW": 0,
      "BestNW": 2386848.052,
      "BasicNW": 1560935.922,
      "WorstNW": 714349.6903,
      "Age": 82
    },
    {
      "Date": "2067-09-03",
      "ActualNW": 0,
      "BestNW": 2398466.155,
      "BasicNW": 1567295.368,
      "WorstNW": 716111.4693,
      "Age": 82
    },
    {
      "Date": "2067-10-03",
      "ActualNW": 0,
      "BestNW": 2410140.811,
      "BasicNW": 1573680.723,
      "WorstNW": 717877.5934,
      "Age": 83
    },
    {
      "Date": "2067-11-03",
      "ActualNW": 0,
      "BestNW": 2421872.293,
      "BasicNW": 1580092.094,
      "WorstNW": 719648.0732,
      "Age": 83
    },
    {
      "Date": "2067-12-03",
      "ActualNW": 0,
      "BestNW": 2433660.879,
      "BasicNW": 1586529.584,
      "WorstNW": 721422.9195,
      "Age": 83
    },
    {
      "Date": "2068-01-03",
      "ActualNW": 0,
      "BestNW": 2445506.846,
      "BasicNW": 1592993.302,
      "WorstNW": 723202.143,
      "Age": 83
    },
    {
      "Date": "2068-02-03",
      "ActualNW": 0,
      "BestNW": 2457410.475,
      "BasicNW": 1599483.354,
      "WorstNW": 724985.7546,
      "Age": 83
    },
    {
      "Date": "2068-03-03",
      "ActualNW": 0,
      "BestNW": 2469372.044,
      "BasicNW": 1605999.847,
      "WorstNW": 726773.7651,
      "Age": 83
    },
    {
      "Date": "2068-04-03",
      "ActualNW": 0,
      "BestNW": 2481391.838,
      "BasicNW": 1612542.889,
      "WorstNW": 728566.1852,
      "Age": 83
    },
    {
      "Date": "2068-05-03",
      "ActualNW": 0,
      "BestNW": 2493470.138,
      "BasicNW": 1619112.589,
      "WorstNW": 730363.026,
      "Age": 83
    },
    {
      "Date": "2068-06-03",
      "ActualNW": 0,
      "BestNW": 2505607.23,
      "BasicNW": 1625709.054,
      "WorstNW": 732164.2982,
      "Age": 83
    },
    {
      "Date": "2068-07-03",
      "ActualNW": 0,
      "BestNW": 2517803.4,
      "BasicNW": 1632332.394,
      "WorstNW": 733970.0129,
      "Age": 83
    },
    {
      "Date": "2068-08-03",
      "ActualNW": 0,
      "BestNW": 2530058.935,
      "BasicNW": 1638982.718,
      "WorstNW": 735780.181,
      "Age": 83
    },
    {
      "Date": "2068-09-03",
      "ActualNW": 0,
      "BestNW": 2542374.125,
      "BasicNW": 1645660.137,
      "WorstNW": 737594.8134,
      "Age": 83
    },
    {
      "Date": "2068-10-03",
      "ActualNW": 0,
      "BestNW": 2554749.259,
      "BasicNW": 1652364.76,
      "WorstNW": 739413.9212,
      "Age": 84
    },
    {
      "Date": "2068-11-03",
      "ActualNW": 0,
      "BestNW": 2567184.631,
      "BasicNW": 1659096.698,
      "WorstNW": 741237.5154,
      "Age": 84
    },
    {
      "Date": "2068-12-03",
      "ActualNW": 0,
      "BestNW": 2579680.532,
      "BasicNW": 1665856.064,
      "WorstNW": 743065.6071,
      "Age": 84
    },
    {
      "Date": "2069-01-03",
      "ActualNW": 0,
      "BestNW": 2592237.257,
      "BasicNW": 1672642.967,
      "WorstNW": 744898.2073,
      "Age": 84
    },
    {
      "Date": "2069-02-03",
      "ActualNW": 0,
      "BestNW": 2604855.103,
      "BasicNW": 1679457.522,
      "WorstNW": 746735.3272,
      "Age": 84
    },
    {
      "Date": "2069-03-03",
      "ActualNW": 0,
      "BestNW": 2617534.367,
      "BasicNW": 1686299.84,
      "WorstNW": 748576.978,
      "Age": 84
    },
    {
      "Date": "2069-04-03",
      "ActualNW": 0,
      "BestNW": 2630275.348,
      "BasicNW": 1693170.034,
      "WorstNW": 750423.1708,
      "Age": 84
    },
    {
      "Date": "2069-05-03",
      "ActualNW": 0,
      "BestNW": 2643078.346,
      "BasicNW": 1700068.218,
      "WorstNW": 752273.9168,
      "Age": 84
    },
    {
      "Date": "2069-06-03",
      "ActualNW": 0,
      "BestNW": 2655943.664,
      "BasicNW": 1706994.507,
      "WorstNW": 754129.2272,
      "Age": 84
    },
    {
      "Date": "2069-07-03",
      "ActualNW": 0,
      "BestNW": 2668871.604,
      "BasicNW": 1713949.014,
      "WorstNW": 755989.1133,
      "Age": 84
    },
    {
      "Date": "2069-08-03",
      "ActualNW": 0,
      "BestNW": 2681862.471,
      "BasicNW": 1720931.854,
      "WorstNW": 757853.5864,
      "Age": 84
    },
    {
      "Date": "2069-09-03",
      "ActualNW": 0,
      "BestNW": 2694916.572,
      "BasicNW": 1727943.143,
      "WorstNW": 759722.6578,
      "Age": 84
    },
    {
      "Date": "2069-10-03",
      "ActualNW": 0,
      "BestNW": 2708034.215,
      "BasicNW": 1734982.998,
      "WorstNW": 761596.3388,
      "Age": 85
    },
    {
      "Date": "2069-11-03",
      "ActualNW": 0,
      "BestNW": 2721215.708,
      "BasicNW": 1742051.533,
      "WorstNW": 763474.6408,
      "Age": 85
    },
    {
      "Date": "2069-12-03",
      "ActualNW": 0,
      "BestNW": 2734461.364,
      "BasicNW": 1749148.867,
      "WorstNW": 765357.5753,
      "Age": 85
    },
    {
      "Date": "2070-01-03",
      "ActualNW": 0,
      "BestNW": 2747771.492,
      "BasicNW": 1756275.116,
      "WorstNW": 767245.1535,
      "Age": 85
    },
    {
      "Date": "2070-02-03",
      "ActualNW": 0,
      "BestNW": 2761146.409,
      "BasicNW": 1763430.398,
      "WorstNW": 769137.3871,
      "Age": 85
    },
    {
      "Date": "2070-03-03",
      "ActualNW": 0,
      "BestNW": 2774586.429,
      "BasicNW": 1770614.832,
      "WorstNW": 771034.2873,
      "Age": 85
    },
    {
      "Date": "2070-04-03",
      "ActualNW": 0,
      "BestNW": 2788091.869,
      "BasicNW": 1777828.536,
      "WorstNW": 772935.8659,
      "Age": 85
    },
    {
      "Date": "2070-05-03",
      "ActualNW": 0,
      "BestNW": 2801663.047,
      "BasicNW": 1785071.629,
      "WorstNW": 774842.1343,
      "Age": 85
    },
    {
      "Date": "2070-06-03",
      "ActualNW": 0,
      "BestNW": 2815300.283,
      "BasicNW": 1792344.232,
      "WorstNW": 776753.104,
      "Age": 85
    },
    {
      "Date": "2070-07-03",
      "ActualNW": 0,
      "BestNW": 2829003.9,
      "BasicNW": 1799646.464,
      "WorstNW": 778668.7867,
      "Age": 85
    },
    {
      "Date": "2070-08-03",
      "ActualNW": 0,
      "BestNW": 2842774.219,
      "BasicNW": 1806978.447,
      "WorstNW": 780589.194,
      "Age": 85
    },
    {
      "Date": "2070-09-03",
      "ActualNW": 0,
      "BestNW": 2856611.567,
      "BasicNW": 1814340.301,
      "WorstNW": 782514.3375,
      "Age": 85
    },
    {
      "Date": "2070-10-03",
      "ActualNW": 0,
      "BestNW": 2870516.268,
      "BasicNW": 1821732.148,
      "WorstNW": 784444.229,
      "Age": 86
    },
    {
      "Date": "2070-11-03",
      "ActualNW": 0,
      "BestNW": 2884488.651,
      "BasicNW": 1829154.11,
      "WorstNW": 786378.8801,
      "Age": 86
    },
    {
      "Date": "2070-12-03",
      "ActualNW": 0,
      "BestNW": 2898529.045,
      "BasicNW": 1836606.31,
      "WorstNW": 788318.3025,
      "Age": 86
    },
    {
      "Date": "2071-01-03",
      "ActualNW": 0,
      "BestNW": 2912637.782,
      "BasicNW": 1844088.872,
      "WorstNW": 790262.5081,
      "Age": 86
    },
    {
      "Date": "2071-02-03",
      "ActualNW": 0,
      "BestNW": 2926815.194,
      "BasicNW": 1851601.918,
      "WorstNW": 792211.5087,
      "Age": 86
    },
    {
      "Date": "2071-03-03",
      "ActualNW": 0,
      "BestNW": 2941061.615,
      "BasicNW": 1859145.573,
      "WorstNW": 794165.316,
      "Age": 86
    },
    {
      "Date": "2071-04-03",
      "ActualNW": 0,
      "BestNW": 2955377.381,
      "BasicNW": 1866719.962,
      "WorstNW": 796123.9419,
      "Age": 86
    },
    {
      "Date": "2071-05-03",
      "ActualNW": 0,
      "BestNW": 2969762.83,
      "BasicNW": 1874325.211,
      "WorstNW": 798087.3983,
      "Age": 86
    },
    {
      "Date": "2071-06-03",
      "ActualNW": 0,
      "BestNW": 2984218.3,
      "BasicNW": 1881961.444,
      "WorstNW": 800055.6971,
      "Age": 86
    },
    {
      "Date": "2071-07-03",
      "ActualNW": 0,
      "BestNW": 2998744.134,
      "BasicNW": 1889628.787,
      "WorstNW": 802028.8503,
      "Age": 86
    },
    {
      "Date": "2071-08-03",
      "ActualNW": 0,
      "BestNW": 3013340.673,
      "BasicNW": 1897327.369,
      "WorstNW": 804006.8698,
      "Age": 86
    },
    {
      "Date": "2071-09-03",
      "ActualNW": 0,
      "BestNW": 3028008.261,
      "BasicNW": 1905057.316,
      "WorstNW": 805989.7676,
      "Age": 86
    },
    {
      "Date": "2071-10-03",
      "ActualNW": 0,
      "BestNW": 3042747.244,
      "BasicNW": 1912818.755,
      "WorstNW": 807977.5558,
      "Age": 87
    },
    {
      "Date": "2071-11-03",
      "ActualNW": 0,
      "BestNW": 3057557.97,
      "BasicNW": 1920611.815,
      "WorstNW": 809970.2465,
      "Age": 87
    },
    {
      "Date": "2071-12-03",
      "ActualNW": 0,
      "BestNW": 3072440.788,
      "BasicNW": 1928436.626,
      "WorstNW": 811967.8516,
      "Age": 87
    },
    {
      "Date": "2072-01-03",
      "ActualNW": 0,
      "BestNW": 3087396.049,
      "BasicNW": 1936293.315,
      "WorstNW": 813970.3834,
      "Age": 87
    },
    {
      "Date": "2072-02-03",
      "ActualNW": 0,
      "BestNW": 3102424.105,
      "BasicNW": 1944182.014,
      "WorstNW": 815977.8539,
      "Age": 87
    },
    {
      "Date": "2072-03-03",
      "ActualNW": 0,
      "BestNW": 3117525.312,
      "BasicNW": 1952102.852,
      "WorstNW": 817990.2754,
      "Age": 87
    },
    {
      "Date": "2072-04-03",
      "ActualNW": 0,
      "BestNW": 3132700.024,
      "BasicNW": 1960055.961,
      "WorstNW": 820007.6601,
      "Age": 87
    },
    {
      "Date": "2072-05-03",
      "ActualNW": 0,
      "BestNW": 3147948.599,
      "BasicNW": 1968041.471,
      "WorstNW": 822030.0202,
      "Age": 87
    },
    {
      "Date": "2072-06-03",
      "ActualNW": 0,
      "BestNW": 3163271.398,
      "BasicNW": 1976059.516,
      "WorstNW": 824057.368,
      "Age": 87
    },
    {
      "Date": "2072-07-03",
      "ActualNW": 0,
      "BestNW": 3178668.782,
      "BasicNW": 1984110.227,
      "WorstNW": 826089.7158,
      "Age": 87
    },
    {
      "Date": "2072-08-03",
      "ActualNW": 0,
      "BestNW": 3194141.113,
      "BasicNW": 1992193.737,
      "WorstNW": 828127.0759,
      "Age": 87
    },
    {
      "Date": "2072-09-03",
      "ActualNW": 0,
      "BestNW": 3209688.756,
      "BasicNW": 2000310.181,
      "WorstNW": 830169.4607,
      "Age": 87
    },
    {
      "Date": "2072-10-03",
      "ActualNW": 0,
      "BestNW": 3225312.079,
      "BasicNW": 2008459.693,
      "WorstNW": 832216.8825,
      "Age": 88
    },
    {
      "Date": "2072-11-03",
      "ActualNW": 0,
      "BestNW": 3241011.448,
      "BasicNW": 2016642.406,
      "WorstNW": 834269.3539,
      "Age": 88
    },
    {
      "Date": "2072-12-03",
      "ActualNW": 0,
      "BestNW": 3256787.235,
      "BasicNW": 2024858.457,
      "WorstNW": 836326.8872,
      "Age": 88
    },
    {
      "Date": "2073-01-03",
      "ActualNW": 0,
      "BestNW": 3272639.812,
      "BasicNW": 2033107.981,
      "WorstNW": 838389.4949,
      "Age": 88
    },
    {
      "Date": "2073-02-03",
      "ActualNW": 0,
      "BestNW": 3288569.552,
      "BasicNW": 2041391.114,
      "WorstNW": 840457.1895,
      "Age": 88
    },
    {
      "Date": "2073-03-03",
      "ActualNW": 0,
      "BestNW": 3304576.83,
      "BasicNW": 2049707.995,
      "WorstNW": 842529.9837,
      "Age": 88
    },
    {
      "Date": "2073-04-03",
      "ActualNW": 0,
      "BestNW": 3320662.025,
      "BasicNW": 2058058.759,
      "WorstNW": 844607.8899,
      "Age": 88
    },
    {
      "Date": "2073-05-03",
      "ActualNW": 0,
      "BestNW": 3336825.515,
      "BasicNW": 2066443.545,
      "WorstNW": 846690.9208,
      "Age": 88
    },
    {
      "Date": "2073-06-03",
      "ActualNW": 0,
      "BestNW": 3353067.682,
      "BasicNW": 2074862.492,
      "WorstNW": 848779.0891,
      "Age": 88
    },
    {
      "Date": "2073-07-03",
      "ActualNW": 0,
      "BestNW": 3369388.909,
      "BasicNW": 2083315.738,
      "WorstNW": 850872.4073,
      "Age": 88
    },
    {
      "Date": "2073-08-03",
      "ActualNW": 0,
      "BestNW": 3385789.58,
      "BasicNW": 2091803.424,
      "WorstNW": 852970.8882,
      "Age": 88
    },
    {
      "Date": "2073-09-03",
      "ActualNW": 0,
      "BestNW": 3402270.082,
      "BasicNW": 2100325.69,
      "WorstNW": 855074.5445,
      "Age": 88
    },
    {
      "Date": "2073-10-03",
      "ActualNW": 0,
      "BestNW": 3418830.803,
      "BasicNW": 2108882.677,
      "WorstNW": 857183.389,
      "Age": 89
    },
    {
      "Date": "2073-11-03",
      "ActualNW": 0,
      "BestNW": 3435472.135,
      "BasicNW": 2117474.526,
      "WorstNW": 859297.4345,
      "Age": 89
    },
    {
      "Date": "2073-12-03",
      "ActualNW": 0,
      "BestNW": 3452194.469,
      "BasicNW": 2126101.38,
      "WorstNW": 861416.6938,
      "Age": 89
    },
    {
      "Date": "2074-01-03",
      "ActualNW": 0,
      "BestNW": 3468998.201,
      "BasicNW": 2134763.38,
      "WorstNW": 863541.1797,
      "Age": 89
    },
    {
      "Date": "2074-02-03",
      "ActualNW": 0,
      "BestNW": 3485883.725,
      "BasicNW": 2143460.67,
      "WorstNW": 865670.9052,
      "Age": 89
    },
    {
      "Date": "2074-03-03",
      "ActualNW": 0,
      "BestNW": 3502851.44,
      "BasicNW": 2152193.394,
      "WorstNW": 867805.8832,
      "Age": 89
    },
    {
      "Date": "2074-04-03",
      "ActualNW": 0,
      "BestNW": 3519901.747,
      "BasicNW": 2160961.697,
      "WorstNW": 869946.1266,
      "Age": 89
    },
    {
      "Date": "2074-05-03",
      "ActualNW": 0,
      "BestNW": 3537035.046,
      "BasicNW": 2169765.722,
      "WorstNW": 872091.6485,
      "Age": 89
    },
    {
      "Date": "2074-06-03",
      "ActualNW": 0,
      "BestNW": 3554251.743,
      "BasicNW": 2178605.616,
      "WorstNW": 874242.4617,
      "Age": 89
    },
    {
      "Date": "2074-07-03",
      "ActualNW": 0,
      "BestNW": 3571552.243,
      "BasicNW": 2187481.525,
      "WorstNW": 876398.5795,
      "Age": 89
    },
    {
      "Date": "2074-08-03",
      "ActualNW": 0,
      "BestNW": 3588936.954,
      "BasicNW": 2196393.596,
      "WorstNW": 878560.0148,
      "Age": 89
    },
    {
      "Date": "2074-09-03",
      "ActualNW": 0,
      "BestNW": 3606406.287,
      "BasicNW": 2205341.975,
      "WorstNW": 880726.7808,
      "Age": 89
    },
    {
      "Date": "2074-10-03",
      "ActualNW": 0,
      "BestNW": 3623960.652,
      "BasicNW": 2214326.811,
      "WorstNW": 882898.8907,
      "Age": 90
    },
    {
      "Date": "2074-11-03",
      "ActualNW": 0,
      "BestNW": 3641600.463,
      "BasicNW": 2223348.253,
      "WorstNW": 885076.3575,
      "Age": 90
    },
    {
      "Date": "2074-12-03",
      "ActualNW": 0,
      "BestNW": 3659326.138,
      "BasicNW": 2232406.449,
      "WorstNW": 887259.1946,
      "Age": 90
    },
    {
      "Date": "2075-01-03",
      "ActualNW": 0,
      "BestNW": 3677138.093,
      "BasicNW": 2241501.549,
      "WorstNW": 889447.4151,
      "Age": 90
    },
    {
      "Date": "2075-02-03",
      "ActualNW": 0,
      "BestNW": 3695036.748,
      "BasicNW": 2250633.704,
      "WorstNW": 891641.0324,
      "Age": 90
    },
    {
      "Date": "2075-03-03",
      "ActualNW": 0,
      "BestNW": 3713022.526,
      "BasicNW": 2259803.064,
      "WorstNW": 893840.0597,
      "Age": 90
    },
    {
      "Date": "2075-04-03",
      "ActualNW": 0,
      "BestNW": 3731095.851,
      "BasicNW": 2269009.781,
      "WorstNW": 896044.5104,
      "Age": 90
    },
    {
      "Date": "2075-05-03",
      "ActualNW": 0,
      "BestNW": 3749257.149,
      "BasicNW": 2278254.008,
      "WorstNW": 898254.3979,
      "Age": 90
    },
    {
      "Date": "2075-06-03",
      "ActualNW": 0,
      "BestNW": 3767506.848,
      "BasicNW": 2287535.897,
      "WorstNW": 900469.7356,
      "Age": 90
    },
    {
      "Date": "2075-07-03",
      "ActualNW": 0,
      "BestNW": 3785845.378,
      "BasicNW": 2296855.601,
      "WorstNW": 902690.5369,
      "Age": 90
    },
    {
      "Date": "2075-08-03",
      "ActualNW": 0,
      "BestNW": 3804273.172,
      "BasicNW": 2306213.275,
      "WorstNW": 904916.8153,
      "Age": 90
    },
    {
      "Date": "2075-09-03",
      "ActualNW": 0,
      "BestNW": 3822790.664,
      "BasicNW": 2315609.074,
      "WorstNW": 907148.5843,
      "Age": 90
    },
    {
      "Date": "2075-10-03",
      "ActualNW": 0,
      "BestNW": 3841398.291,
      "BasicNW": 2325043.152,
      "WorstNW": 909385.8574,
      "Age": 91
    },
    {
      "Date": "2075-11-03",
      "ActualNW": 0,
      "BestNW": 3860096.491,
      "BasicNW": 2334515.665,
      "WorstNW": 911628.6482,
      "Age": 91
    },
    {
      "Date": "2075-12-03",
      "ActualNW": 0,
      "BestNW": 3878885.706,
      "BasicNW": 2344026.771,
      "WorstNW": 913876.9704,
      "Age": 91
    },
    {
      "Date": "2076-01-03",
      "ActualNW": 0,
      "BestNW": 3897766.378,
      "BasicNW": 2353576.626,
      "WorstNW": 916130.8376,
      "Age": 91
    },
    {
      "Date": "2076-02-03",
      "ActualNW": 0,
      "BestNW": 3916738.953,
      "BasicNW": 2363165.389,
      "WorstNW": 918390.2634,
      "Age": 91
    },
    {
      "Date": "2076-03-03",
      "ActualNW": 0,
      "BestNW": 3935803.878,
      "BasicNW": 2372793.217,
      "WorstNW": 920655.2615,
      "Age": 91
    },
    {
      "Date": "2076-04-03",
      "ActualNW": 0,
      "BestNW": 3954961.602,
      "BasicNW": 2382460.27,
      "WorstNW": 922925.8457,
      "Age": 91
    },
    {
      "Date": "2076-05-03",
      "ActualNW": 0,
      "BestNW": 3974212.578,
      "BasicNW": 2392166.708,
      "WorstNW": 925202.0299,
      "Age": 91
    },
    {
      "Date": "2076-06-03",
      "ActualNW": 0,
      "BestNW": 3993557.259,
      "BasicNW": 2401912.692,
      "WorstNW": 927483.8277,
      "Age": 91
    },
    {
      "Date": "2076-07-03",
      "ActualNW": 0,
      "BestNW": 4012996.101,
      "BasicNW": 2411698.381,
      "WorstNW": 929771.253,
      "Age": 91
    },
    {
      "Date": "2076-08-03",
      "ActualNW": 0,
      "BestNW": 4032529.562,
      "BasicNW": 2421523.939,
      "WorstNW": 932064.3197,
      "Age": 91
    },
    {
      "Date": "2076-09-03",
      "ActualNW": 0,
      "BestNW": 4052158.104,
      "BasicNW": 2431389.527,
      "WorstNW": 934363.0418,
      "Age": 91
    },
    {
      "Date": "2076-10-03",
      "ActualNW": 0,
      "BestNW": 4071882.188,
      "BasicNW": 2441295.309,
      "WorstNW": 936667.4331,
      "Age": 92
    },
    {
      "Date": "2076-11-03",
      "ActualNW": 0,
      "BestNW": 4091702.28,
      "BasicNW": 2451241.449,
      "WorstNW": 938977.5077,
      "Age": 92
    },
    {
      "Date": "2076-12-03",
      "ActualNW": 0,
      "BestNW": 4111618.848,
      "BasicNW": 2461228.11,
      "WorstNW": 941293.2795,
      "Age": 92
    },
    {
      "Date": "2077-01-03",
      "ActualNW": 0,
      "BestNW": 4131632.361,
      "BasicNW": 2471255.458,
      "WorstNW": 943614.7627,
      "Age": 92
    },
    {
      "Date": "2077-02-03",
      "ActualNW": 0,
      "BestNW": 4151743.29,
      "BasicNW": 2481323.658,
      "WorstNW": 945941.9713,
      "Age": 92
    },
    {
      "Date": "2077-03-03",
      "ActualNW": 0,
      "BestNW": 4171952.111,
      "BasicNW": 2491432.878,
      "WorstNW": 948274.9194,
      "Age": 92
    },
    {
      "Date": "2077-04-03",
      "ActualNW": 0,
      "BestNW": 4192259.299,
      "BasicNW": 2501583.284,
      "WorstNW": 950613.6211,
      "Age": 92
    },
    {
      "Date": "2077-05-03",
      "ActualNW": 0,
      "BestNW": 4212665.333,
      "BasicNW": 2511775.044,
      "WorstNW": 952958.0908,
      "Age": 92
    },
    {
      "Date": "2077-06-03",
      "ActualNW": 0,
      "BestNW": 4233170.694,
      "BasicNW": 2522008.326,
      "WorstNW": 955308.3425,
      "Age": 92
    },
    {
      "Date": "2077-07-03",
      "ActualNW": 0,
      "BestNW": 4253775.867,
      "BasicNW": 2532283.3,
      "WorstNW": 957664.3906,
      "Age": 92
    },
    {
      "Date": "2077-08-03",
      "ActualNW": 0,
      "BestNW": 4274481.336,
      "BasicNW": 2542600.136,
      "WorstNW": 960026.2493,
      "Age": 92
    },
    {
      "Date": "2077-09-03",
      "ActualNW": 0,
      "BestNW": 4295287.59,
      "BasicNW": 2552959.004,
      "WorstNW": 962393.933,
      "Age": 92
    },
    {
      "Date": "2077-10-03",
      "ActualNW": 0,
      "BestNW": 4316195.119,
      "BasicNW": 2563360.075,
      "WorstNW": 964767.4561,
      "Age": 93
    },
    {
      "Date": "2077-11-03",
      "ActualNW": 0,
      "BestNW": 4337204.417,
      "BasicNW": 2573803.521,
      "WorstNW": 967146.8329,
      "Age": 93
    },
    {
      "Date": "2077-12-03",
      "ActualNW": 0,
      "BestNW": 4358315.979,
      "BasicNW": 2584289.515,
      "WorstNW": 969532.0779,
      "Age": 93
    },
    {
      "Date": "2078-01-03",
      "ActualNW": 0,
      "BestNW": 4379530.303,
      "BasicNW": 2594818.231,
      "WorstNW": 971923.2056,
      "Age": 93
    },
    {
      "Date": "2078-02-03",
      "ActualNW": 0,
      "BestNW": 4400847.888,
      "BasicNW": 2605389.841,
      "WorstNW": 974320.2304,
      "Age": 93
    },
    {
      "Date": "2078-03-03",
      "ActualNW": 0,
      "BestNW": 4422269.237,
      "BasicNW": 2616004.522,
      "WorstNW": 976723.1669,
      "Age": 93
    },
    {
      "Date": "2078-04-03",
      "ActualNW": 0,
      "BestNW": 4443794.856,
      "BasicNW": 2626662.448,
      "WorstNW": 979132.0298,
      "Age": 93
    },
    {
      "Date": "2078-05-03",
      "ActualNW": 0,
      "BestNW": 4465425.253,
      "BasicNW": 2637363.796,
      "WorstNW": 981546.8335,
      "Age": 93
    },
    {
      "Date": "2078-06-03",
      "ActualNW": 0,
      "BestNW": 4487160.936,
      "BasicNW": 2648108.743,
      "WorstNW": 983967.5928,
      "Age": 93
    },
    {
      "Date": "2078-07-03",
      "ActualNW": 0,
      "BestNW": 4509002.419,
      "BasicNW": 2658897.465,
      "WorstNW": 986394.3223,
      "Age": 93
    },
    {
      "Date": "2078-08-03",
      "ActualNW": 0,
      "BestNW": 4530950.216,
      "BasicNW": 2669730.143,
      "WorstNW": 988827.0368,
      "Age": 93
    },
    {
      "Date": "2078-09-03",
      "ActualNW": 0,
      "BestNW": 4553004.845,
      "BasicNW": 2680606.954,
      "WorstNW": 991265.751,
      "Age": 93
    },
    {
      "Date": "2078-10-03",
      "ActualNW": 0,
      "BestNW": 4575166.826,
      "BasicNW": 2691528.078,
      "WorstNW": 993710.4798,
      "Age": 94
    },
    {
      "Date": "2078-11-03",
      "ActualNW": 0,
      "BestNW": 4597436.682,
      "BasicNW": 2702493.697,
      "WorstNW": 996161.2379,
      "Age": 94
    },
    {
      "Date": "2078-12-03",
      "ActualNW": 0,
      "BestNW": 4619814.938,
      "BasicNW": 2713503.991,
      "WorstNW": 998618.0403,
      "Age": 94
    },
    {
      "Date": "2079-01-03",
      "ActualNW": 0,
      "BestNW": 4642302.121,
      "BasicNW": 2724559.142,
      "WorstNW": 1001080.902,
      "Age": 94
    },
    {
      "Date": "2079-02-03",
      "ActualNW": 0,
      "BestNW": 4664898.761,
      "BasicNW": 2735659.333,
      "WorstNW": 1003549.837,
      "Age": 94
    },
    {
      "Date": "2079-03-03",
      "ActualNW": 0,
      "BestNW": 4687605.392,
      "BasicNW": 2746804.748,
      "WorstNW": 1006024.862,
      "Age": 94
    },
    {
      "Date": "2079-04-03",
      "ActualNW": 0,
      "BestNW": 4710422.548,
      "BasicNW": 2757995.571,
      "WorstNW": 1008505.991,
      "Age": 94
    },
    {
      "Date": "2079-05-03",
      "ActualNW": 0,
      "BestNW": 4733350.768,
      "BasicNW": 2769231.986,
      "WorstNW": 1010993.238,
      "Age": 94
    },
    {
      "Date": "2079-06-03",
      "ActualNW": 0,
      "BestNW": 4756390.592,
      "BasicNW": 2780514.18,
      "WorstNW": 1013486.621,
      "Age": 94
    },
    {
      "Date": "2079-07-03",
      "ActualNW": 0,
      "BestNW": 4779542.564,
      "BasicNW": 2791842.339,
      "WorstNW": 1015986.152,
      "Age": 94
    },
    {
      "Date": "2079-08-03",
      "ActualNW": 0,
      "BestNW": 4802807.229,
      "BasicNW": 2803216.65,
      "WorstNW": 1018491.848,
      "Age": 94
    },
    {
      "Date": "2079-09-03",
      "ActualNW": 0,
      "BestNW": 4826185.136,
      "BasicNW": 2814637.302,
      "WorstNW": 1021003.724,
      "Age": 94
    },
    {
      "Date": "2079-10-03",
      "ActualNW": 0,
      "BestNW": 4849676.836,
      "BasicNW": 2826104.482,
      "WorstNW": 1023521.794,
      "Age": 95
    },
    {
      "Date": "2079-11-03",
      "ActualNW": 0,
      "BestNW": 4873282.883,
      "BasicNW": 2837618.382,
      "WorstNW": 1026046.075,
      "Age": 95
    },
    {
      "Date": "2079-12-03",
      "ActualNW": 0,
      "BestNW": 4897003.834,
      "BasicNW": 2849179.19,
      "WorstNW": 1028576.581,
      "Age": 95
    },
    {
      "Date": "2080-01-03",
      "ActualNW": 0,
      "BestNW": 4920840.248,
      "BasicNW": 2860787.099,
      "WorstNW": 1031113.329,
      "Age": 95
    },
    {
      "Date": "2080-02-03",
      "ActualNW": 0,
      "BestNW": 4944792.687,
      "BasicNW": 2872442.3,
      "WorstNW": 1033656.332,
      "Age": 95
    },
    {
      "Date": "2080-03-03",
      "ActualNW": 0,
      "BestNW": 4968861.715,
      "BasicNW": 2884144.985,
      "WorstNW": 1036205.608,
      "Age": 95
    },
    {
      "Date": "2080-04-03",
      "ActualNW": 0,
      "BestNW": 4993047.901,
      "BasicNW": 2895895.349,
      "WorstNW": 1038761.17,
      "Age": 95
    },
    {
      "Date": "2080-05-03",
      "ActualNW": 0,
      "BestNW": 5017351.814,
      "BasicNW": 2907693.585,
      "WorstNW": 1041323.036,
      "Age": 95
    },
    {
      "Date": "2080-06-03",
      "ActualNW": 0,
      "BestNW": 5041774.028,
      "BasicNW": 2919539.889,
      "WorstNW": 1043891.219,
      "Age": 95
    },
    {
      "Date": "2080-07-03",
      "ActualNW": 0,
      "BestNW": 5066315.118,
      "BasicNW": 2931434.456,
      "WorstNW": 1046465.737,
      "Age": 95
    },
    {
      "Date": "2080-08-03",
      "ActualNW": 0,
      "BestNW": 5090975.663,
      "BasicNW": 2943377.483,
      "WorstNW": 1049046.603,
      "Age": 95
    },
    {
      "Date": "2080-09-03",
      "ActualNW": 0,
      "BestNW": 5115756.244,
      "BasicNW": 2955369.167,
      "WorstNW": 1051633.835,
      "Age": 95
    },
    {
      "Date": "2080-10-03",
      "ActualNW": 0,
      "BestNW": 5140657.446,
      "BasicNW": 2967409.707,
      "WorstNW": 1054227.448,
      "Age": 96
    },
    {
      "Date": "2080-11-03",
      "ActualNW": 0,
      "BestNW": 5165679.856,
      "BasicNW": 2979499.301,
      "WorstNW": 1056827.457,
      "Age": 96
    },
    {
      "Date": "2080-12-03",
      "ActualNW": 0,
      "BestNW": 5190824.064,
      "BasicNW": 2991638.15,
      "WorstNW": 1059433.879,
      "Age": 96
    },
    {
      "Date": "2081-01-03",
      "ActualNW": 0,
      "BestNW": 5216090.663,
      "BasicNW": 3003826.454,
      "WorstNW": 1062046.729,
      "Age": 96
    },
    {
      "Date": "2081-02-03",
      "ActualNW": 0,
      "BestNW": 5241480.248,
      "BasicNW": 3016064.415,
      "WorstNW": 1064666.022,
      "Age": 96
    },
    {
      "Date": "2081-03-03",
      "ActualNW": 0,
      "BestNW": 5266993.418,
      "BasicNW": 3028352.235,
      "WorstNW": 1067291.776,
      "Age": 96
    },
    {
      "Date": "2081-04-03",
      "ActualNW": 0,
      "BestNW": 5292630.775,
      "BasicNW": 3040690.117,
      "WorstNW": 1069924.005,
      "Age": 96
    },
    {
      "Date": "2081-05-03",
      "ActualNW": 0,
      "BestNW": 5318392.923,
      "BasicNW": 3053078.264,
      "WorstNW": 1072562.727,
      "Age": 96
    },
    {
      "Date": "2081-06-03",
      "ActualNW": 0,
      "BestNW": 5344280.469,
      "BasicNW": 3065516.883,
      "WorstNW": 1075207.956,
      "Age": 96
    },
    {
      "Date": "2081-07-03",
      "ActualNW": 0,
      "BestNW": 5370294.025,
      "BasicNW": 3078006.178,
      "WorstNW": 1077859.709,
      "Age": 96
    },
    {
      "Date": "2081-08-03",
      "ActualNW": 0,
      "BestNW": 5396434.202,
      "BasicNW": 3090546.357,
      "WorstNW": 1080518.001,
      "Age": 96
    },
    {
      "Date": "2081-09-03",
      "ActualNW": 0,
      "BestNW": 5422701.619,
      "BasicNW": 3103137.625,
      "WorstNW": 1083182.85,
      "Age": 96
    },
    {
      "Date": "2081-10-03",
      "ActualNW": 0,
      "BestNW": 5449096.893,
      "BasicNW": 3115780.192,
      "WorstNW": 1085854.271,
      "Age": 97
    },
    {
      "Date": "2081-11-03",
      "ActualNW": 0,
      "BestNW": 5475620.648,
      "BasicNW": 3128474.266,
      "WorstNW": 1088532.281,
      "Age": 97
    },
    {
      "Date": "2081-12-03",
      "ActualNW": 0,
      "BestNW": 5502273.508,
      "BasicNW": 3141220.057,
      "WorstNW": 1091216.895,
      "Age": 97
    },
    {
      "Date": "2082-01-03",
      "ActualNW": 0,
      "BestNW": 5529056.103,
      "BasicNW": 3154017.777,
      "WorstNW": 1093908.131,
      "Age": 97
    },
    {
      "Date": "2082-02-03",
      "ActualNW": 0,
      "BestNW": 5555969.063,
      "BasicNW": 3166867.636,
      "WorstNW": 1096606.003,
      "Age": 97
    },
    {
      "Date": "2082-03-03",
      "ActualNW": 0,
      "BestNW": 5583013.023,
      "BasicNW": 3179769.846,
      "WorstNW": 1099310.529,
      "Age": 97
    },
    {
      "Date": "2082-04-03",
      "ActualNW": 0,
      "BestNW": 5610188.621,
      "BasicNW": 3192724.622,
      "WorstNW": 1102021.726,
      "Age": 97
    },
    {
      "Date": "2082-05-03",
      "ActualNW": 0,
      "BestNW": 5637496.498,
      "BasicNW": 3205732.178,
      "WorstNW": 1104739.609,
      "Age": 97
    },
    {
      "Date": "2082-06-03",
      "ActualNW": 0,
      "BestNW": 5664937.297,
      "BasicNW": 3218792.727,
      "WorstNW": 1107464.194,
      "Age": 97
    },
    {
      "Date": "2082-07-03",
      "ActualNW": 0,
      "BestNW": 5692511.666,
      "BasicNW": 3231906.487,
      "WorstNW": 1110195.5,
      "Age": 97
    },
    {
      "Date": "2082-08-03",
      "ActualNW": 0,
      "BestNW": 5720220.254,
      "BasicNW": 3245073.674,
      "WorstNW": 1112933.541,
      "Age": 97
    },
    {
      "Date": "2082-09-03",
      "ActualNW": 0,
      "BestNW": 5748063.716,
      "BasicNW": 3258294.506,
      "WorstNW": 1115678.336,
      "Age": 97
    },
    {
      "Date": "2082-10-03",
      "ActualNW": 0,
      "BestNW": 5776042.707,
      "BasicNW": 3271569.201,
      "WorstNW": 1118429.9,
      "Age": 98
    },
    {
      "Date": "2082-11-03",
      "ActualNW": 0,
      "BestNW": 5804157.887,
      "BasicNW": 3284897.979,
      "WorstNW": 1121188.249,
      "Age": 98
    },
    {
      "Date": "2082-12-03",
      "ActualNW": 0,
      "BestNW": 5832409.919,
      "BasicNW": 3298281.06,
      "WorstNW": 1123953.402,
      "Age": 98
    },
    {
      "Date": "2083-01-03",
      "ActualNW": 0,
      "BestNW": 5860799.469,
      "BasicNW": 3311718.666,
      "WorstNW": 1126725.374,
      "Age": 98
    },
    {
      "Date": "2083-02-03",
      "ActualNW": 0,
      "BestNW": 5889327.207,
      "BasicNW": 3325211.017,
      "WorstNW": 1129504.183,
      "Age": 98
    },
    {
      "Date": "2083-03-03",
      "ActualNW": 0,
      "BestNW": 5917993.804,
      "BasicNW": 3338758.339,
      "WorstNW": 1132289.845,
      "Age": 98
    },
    {
      "Date": "2083-04-03",
      "ActualNW": 0,
      "BestNW": 5946799.939,
      "BasicNW": 3352360.853,
      "WorstNW": 1135082.377,
      "Age": 98
    },
    {
      "Date": "2083-05-03",
      "ActualNW": 0,
      "BestNW": 5975746.288,
      "BasicNW": 3366018.787,
      "WorstNW": 1137881.797,
      "Age": 98
    },
    {
      "Date": "2083-06-03",
      "ActualNW": 0,
      "BestNW": 6004833.535,
      "BasicNW": 3379732.364,
      "WorstNW": 1140688.12,
      "Age": 98
    },
    {
      "Date": "2083-07-03",
      "ActualNW": 0,
      "BestNW": 6034062.366,
      "BasicNW": 3393501.812,
      "WorstNW": 1143501.365,
      "Age": 98
    },
    {
      "Date": "2083-08-03",
      "ActualNW": 0,
      "BestNW": 6063433.47,
      "BasicNW": 3407327.358,
      "WorstNW": 1146321.548,
      "Age": 98
    },
    {
      "Date": "2083-09-03",
      "ActualNW": 0,
      "BestNW": 6092947.539,
      "BasicNW": 3421209.232,
      "WorstNW": 1149148.686,
      "Age": 98
    },
    {
      "Date": "2083-10-03",
      "ActualNW": 0,
      "BestNW": 6122605.269,
      "BasicNW": 3435147.662,
      "WorstNW": 1151982.797,
      "Age": 99
    },
    {
      "Date": "2083-11-03",
      "ActualNW": 0,
      "BestNW": 6152407.36,
      "BasicNW": 3449142.878,
      "WorstNW": 1154823.897,
      "Age": 99
    },
    {
      "Date": "2083-12-03",
      "ActualNW": 0,
      "BestNW": 6182354.514,
      "BasicNW": 3463195.113,
      "WorstNW": 1157672.004,
      "Age": 99
    },
    {
      "Date": "2084-01-03",
      "ActualNW": 0,
      "BestNW": 6212447.437,
      "BasicNW": 3477304.599,
      "WorstNW": 1160527.136,
      "Age": 99
    },
    {
      "Date": "2084-02-03",
      "ActualNW": 0,
      "BestNW": 6242686.839,
      "BasicNW": 3491471.568,
      "WorstNW": 1163389.309,
      "Age": 99
    },
    {
      "Date": "2084-03-03",
      "ActualNW": 0,
      "BestNW": 6273073.433,
      "BasicNW": 3505696.256,
      "WorstNW": 1166258.541,
      "Age": 99
    },
    {
      "Date": "2084-04-03",
      "ActualNW": 0,
      "BestNW": 6303607.935,
      "BasicNW": 3519978.896,
      "WorstNW": 1169134.849,
      "Age": 99
    },
    {
      "Date": "2084-05-03",
      "ActualNW": 0,
      "BestNW": 6334291.065,
      "BasicNW": 3534319.726,
      "WorstNW": 1172018.251,
      "Age": 99
    },
    {
      "Date": "2084-06-03",
      "ActualNW": 0,
      "BestNW": 6365123.547,
      "BasicNW": 3548718.982,
      "WorstNW": 1174908.764,
      "Age": 99
    },
    {
      "Date": "2084-07-03",
      "ActualNW": 0,
      "BestNW": 6396106.108,
      "BasicNW": 3563176.902,
      "WorstNW": 1177806.406,
      "Age": 99
    },
    {
      "Date": "2084-08-03",
      "ActualNW": 0,
      "BestNW": 6427239.478,
      "BasicNW": 3577693.726,
      "WorstNW": 1180711.194,
      "Age": 99
    },
    {
      "Date": "2084-09-03",
      "ActualNW": 0,
      "BestNW": 6458524.391,
      "BasicNW": 3592269.693,
      "WorstNW": 1183623.146,
      "Age": 99
    },
    {
      "Date": "2084-10-03",
      "ActualNW": 0,
      "BestNW": 6489961.585,
      "BasicNW": 3606905.045,
      "WorstNW": 1186542.28,
      "Age": 100
    },
    {
      "Date": "2084-11-03",
      "ActualNW": 0,
      "BestNW": 6521551.801,
      "BasicNW": 3621600.022,
      "WorstNW": 1189468.614,
      "Age": 100
    },
    {
      "Date": "2084-12-03",
      "ActualNW": 0,
      "BestNW": 6553295.784,
      "BasicNW": 3636354.869,
      "WorstNW": 1192402.164,
      "Age": 100
    },
    {
      "Date": "2085-01-03",
      "ActualNW": 0,
      "BestNW": 6585194.283,
      "BasicNW": 3651169.829,
      "WorstNW": 1195342.95,
      "Age": 100
    },
    {
      "Date": "2085-02-03",
      "ActualNW": 0,
      "BestNW": 6617248.049,
      "BasicNW": 3666045.147,
      "WorstNW": 1198290.988,
      "Age": 100
    },
    {
      "Date": "2085-03-03",
      "ActualNW": 0,
      "BestNW": 6649457.839,
      "BasicNW": 3680981.068,
      "WorstNW": 1201246.297,
      "Age": 100
    },
    {
      "Date": "2085-04-03",
      "ActualNW": 0,
      "BestNW": 6681824.411,
      "BasicNW": 3695977.841,
      "WorstNW": 1204208.894,
      "Age": 100
    },
    {
      "Date": "2085-05-03",
      "ActualNW": 0,
      "BestNW": 6714348.529,
      "BasicNW": 3711035.712,
      "WorstNW": 1207178.798,
      "Age": 100
    },
    {
      "Date": "2085-06-03",
      "ActualNW": 0,
      "BestNW": 6747030.96,
      "BasicNW": 3726154.931,
      "WorstNW": 1210156.027,
      "Age": 100
    },
    {
      "Date": "2085-07-03",
      "ActualNW": 0,
      "BestNW": 6779872.475,
      "BasicNW": 3741335.747,
      "WorstNW": 1213140.598,
      "Age": 100
    },
    {
      "Date": "2085-08-03",
      "ActualNW": 0,
      "BestNW": 6812873.847,
      "BasicNW": 3756578.412,
      "WorstNW": 1216132.53,
      "Age": 100
    },
    {
      "Date": "2085-09-03",
      "ActualNW": 0,
      "BestNW": 6846035.855,
      "BasicNW": 3771883.178,
      "WorstNW": 1219131.841,
      "Age": 100
    },
    {
      "Date": "2085-10-03",
      "ActualNW": 0,
      "BestNW": 6879359.28,
      "BasicNW": 3787250.297,
      "WorstNW": 1222138.549,
      "Age": 101
    },
    {
      "Date": "2085-11-03",
      "ActualNW": 0,
      "BestNW": 6912844.909,
      "BasicNW": 3802680.023,
      "WorstNW": 1225152.672,
      "Age": 101
    },
    {
      "Date": "2085-12-03",
      "ActualNW": 0,
      "BestNW": 6946493.532,
      "BasicNW": 3818172.612,
      "WorstNW": 1228174.229,
      "Age": 101
    },
    {
      "Date": "2086-01-03",
      "ActualNW": 0,
      "BestNW": 6980305.94,
      "BasicNW": 3833728.32,
      "WorstNW": 1231203.238,
      "Age": 101
    },
    {
      "Date": "2086-02-03",
      "ActualNW": 0,
      "BestNW": 7014282.932,
      "BasicNW": 3849347.404,
      "WorstNW": 1234239.718,
      "Age": 101
    },
    {
      "Date": "2086-03-03",
      "ActualNW": 0,
      "BestNW": 7048425.309,
      "BasicNW": 3865030.122,
      "WorstNW": 1237283.686,
      "Age": 101
    },
    {
      "Date": "2086-04-03",
      "ActualNW": 0,
      "BestNW": 7082733.876,
      "BasicNW": 3880776.733,
      "WorstNW": 1240335.161,
      "Age": 101
    },
    {
      "Date": "2086-05-03",
      "ActualNW": 0,
      "BestNW": 7117209.441,
      "BasicNW": 3896587.498,
      "WorstNW": 1243394.162,
      "Age": 101
    },
    {
      "Date": "2086-06-03",
      "ActualNW": 0,
      "BestNW": 7151852.818,
      "BasicNW": 3912462.678,
      "WorstNW": 1246460.708,
      "Age": 101
    },
    {
      "Date": "2086-07-03",
      "ActualNW": 0,
      "BestNW": 7186664.823,
      "BasicNW": 3928402.535,
      "WorstNW": 1249534.816,
      "Age": 101
    },
    {
      "Date": "2086-08-03",
      "ActualNW": 0,
      "BestNW": 7221646.277,
      "BasicNW": 3944407.333,
      "WorstNW": 1252616.506,
      "Age": 101
    },
    {
      "Date": "2086-09-03",
      "ActualNW": 0,
      "BestNW": 7256798.006,
      "BasicNW": 3960477.337,
      "WorstNW": 1255705.796,
      "Age": 101
    },
    {
      "Date": "2086-10-03",
      "ActualNW": 0,
      "BestNW": 7292120.837,
      "BasicNW": 3976612.812,
      "WorstNW": 1258802.705,
      "Age": 102
    },
    {
      "Date": "2086-11-03",
      "ActualNW": 0,
      "BestNW": 7327615.604,
      "BasicNW": 3992814.024,
      "WorstNW": 1261907.252,
      "Age": 102
    },
    {
      "Date": "2086-12-03",
      "ActualNW": 0,
      "BestNW": 7363283.143,
      "BasicNW": 4009081.243,
      "WorstNW": 1265019.456,
      "Age": 102
    },
    {
      "Date": "2087-01-03",
      "ActualNW": 0,
      "BestNW": 7399124.296,
      "BasicNW": 4025414.736,
      "WorstNW": 1268139.335,
      "Age": 102
    },
    {
      "Date": "2087-02-03",
      "ActualNW": 0,
      "BestNW": 7435139.908,
      "BasicNW": 4041814.774,
      "WorstNW": 1271266.909,
      "Age": 102
    },
    {
      "Date": "2087-03-03",
      "ActualNW": 0,
      "BestNW": 7471330.828,
      "BasicNW": 4058281.628,
      "WorstNW": 1274402.196,
      "Age": 102
    },
    {
      "Date": "2087-04-03",
      "ActualNW": 0,
      "BestNW": 7507697.908,
      "BasicNW": 4074815.57,
      "WorstNW": 1277545.216,
      "Age": 102
    },
    {
      "Date": "2087-05-03",
      "ActualNW": 0,
      "BestNW": 7544242.007,
      "BasicNW": 4091416.873,
      "WorstNW": 1280695.987,
      "Age": 102
    },
    {
      "Date": "2087-06-03",
      "ActualNW": 0,
      "BestNW": 7580963.987,
      "BasicNW": 4108085.811,
      "WorstNW": 1283854.529,
      "Age": 102
    },
    {
      "Date": "2087-07-03",
      "ActualNW": 0,
      "BestNW": 7617864.712,
      "BasicNW": 4124822.662,
      "WorstNW": 1287020.86,
      "Age": 102
    },
    {
      "Date": "2087-08-03",
      "ActualNW": 0,
      "BestNW": 7654945.054,
      "BasicNW": 4141627.7,
      "WorstNW": 1290195.001,
      "Age": 102
    },
    {
      "Date": "2087-09-03",
      "ActualNW": 0,
      "BestNW": 7692205.886,
      "BasicNW": 4158501.204,
      "WorstNW": 1293376.97,
      "Age": 102
    },
    {
      "Date": "2087-10-03",
      "ActualNW": 0,
      "BestNW": 7729648.087,
      "BasicNW": 4175443.452,
      "WorstNW": 1296566.787,
      "Age": 103
    },
    {
      "Date": "2087-11-03",
      "ActualNW": 0,
      "BestNW": 7767272.54,
      "BasicNW": 4192454.726,
      "WorstNW": 1299764.47,
      "Age": 103
    },
    {
      "Date": "2087-12-03",
      "ActualNW": 0,
      "BestNW": 7805080.132,
      "BasicNW": 4209535.305,
      "WorstNW": 1302970.04,
      "Age": 103
    },
    {
      "Date": "2088-01-03",
      "ActualNW": 0,
      "BestNW": 7843071.754,
      "BasicNW": 4226685.473,
      "WorstNW": 1306183.515,
      "Age": 103
    },
    {
      "Date": "2088-02-03",
      "ActualNW": 0,
      "BestNW": 7881248.303,
      "BasicNW": 4243905.513,
      "WorstNW": 1309404.916,
      "Age": 103
    },
    {
      "Date": "2088-03-03",
      "ActualNW": 0,
      "BestNW": 7919610.677,
      "BasicNW": 4261195.709,
      "WorstNW": 1312634.262,
      "Age": 103
    },
    {
      "Date": "2088-04-03",
      "ActualNW": 0,
      "BestNW": 7958159.783,
      "BasicNW": 4278556.348,
      "WorstNW": 1315871.572,
      "Age": 103
    },
    {
      "Date": "2088-05-03",
      "ActualNW": 0,
      "BestNW": 7996896.528,
      "BasicNW": 4295987.716,
      "WorstNW": 1319116.867,
      "Age": 103
    },
    {
      "Date": "2088-06-03",
      "ActualNW": 0,
      "BestNW": 8035821.826,
      "BasicNW": 4313490.102,
      "WorstNW": 1322370.165,
      "Age": 103
    },
    {
      "Date": "2088-07-03",
      "ActualNW": 0,
      "BestNW": 8074936.595,
      "BasicNW": 4331063.795,
      "WorstNW": 1325631.486,
      "Age": 103
    },
    {
      "Date": "2088-08-03",
      "ActualNW": 0,
      "BestNW": 8114241.757,
      "BasicNW": 4348709.085,
      "WorstNW": 1328900.851,
      "Age": 103
    },
    {
      "Date": "2088-09-03",
      "ActualNW": 0,
      "BestNW": 8153738.239,
      "BasicNW": 4366426.264,
      "WorstNW": 1332178.279,
      "Age": 103
    },
    {
      "Date": "2088-10-03",
      "ActualNW": 0,
      "BestNW": 8193426.973,
      "BasicNW": 4384215.625,
      "WorstNW": 1335463.79,
      "Age": 104
    },
    {
      "Date": "2088-11-03",
      "ActualNW": 0,
      "BestNW": 8233308.893,
      "BasicNW": 4402077.462,
      "WorstNW": 1338757.404,
      "Age": 104
    },
    {
      "Date": "2088-12-03",
      "ActualNW": 0,
      "BestNW": 8273384.94,
      "BasicNW": 4420012.07,
      "WorstNW": 1342059.141,
      "Age": 104
    },
    {
      "Date": "2089-01-03",
      "ActualNW": 0,
      "BestNW": 8313656.06,
      "BasicNW": 4438019.747,
      "WorstNW": 1345369.021,
      "Age": 104
    },
    {
      "Date": "2089-02-03",
      "ActualNW": 0,
      "BestNW": 8354123.201,
      "BasicNW": 4456100.789,
      "WorstNW": 1348687.064,
      "Age": 104
    },
    {
      "Date": "2089-03-03",
      "ActualNW": 0,
      "BestNW": 8394787.318,
      "BasicNW": 4474255.495,
      "WorstNW": 1352013.29,
      "Age": 104
    },
    {
      "Date": "2089-04-03",
      "ActualNW": 0,
      "BestNW": 8435649.37,
      "BasicNW": 4492484.166,
      "WorstNW": 1355347.719,
      "Age": 104
    },
    {
      "Date": "2089-05-03",
      "ActualNW": 0,
      "BestNW": 8476710.319,
      "BasicNW": 4510787.102,
      "WorstNW": 1358690.373,
      "Age": 104
    },
    {
      "Date": "2089-06-03",
      "ActualNW": 0,
      "BestNW": 8517971.136,
      "BasicNW": 4529164.607,
      "WorstNW": 1362041.27,
      "Age": 104
    },
    {
      "Date": "2089-07-03",
      "ActualNW": 0,
      "BestNW": 8559432.791,
      "BasicNW": 4547616.984,
      "WorstNW": 1365400.431,
      "Age": 104
    },
    {
      "Date": "2089-08-03",
      "ActualNW": 0,
      "BestNW": 8601096.263,
      "BasicNW": 4566144.539,
      "WorstNW": 1368767.877,
      "Age": 104
    },
    {
      "Date": "2089-09-03",
      "ActualNW": 0,
      "BestNW": 8642962.534,
      "BasicNW": 4584747.577,
      "WorstNW": 1372143.627,
      "Age": 104
    },
    {
      "Date": "2089-10-03",
      "ActualNW": 0,
      "BestNW": 8685032.591,
      "BasicNW": 4603426.406,
      "WorstNW": 1375527.704,
      "Age": 105
    },
    {
      "Date": "2089-11-03",
      "ActualNW": 0,
      "BestNW": 8727307.426,
      "BasicNW": 4622181.335,
      "WorstNW": 1378920.126,
      "Age": 105
    },
    {
      "Date": "2089-12-03",
      "ActualNW": 0,
      "BestNW": 8769788.036,
      "BasicNW": 4641012.674,
      "WorstNW": 1382320.915,
      "Age": 105
    },
    {
      "Date": "2090-01-03",
      "ActualNW": 0,
      "BestNW": 8812475.423,
      "BasicNW": 4659920.734,
      "WorstNW": 1385730.092,
      "Age": 105
    },
    {
      "Date": "2090-02-03",
      "ActualNW": 0,
      "BestNW": 8855370.593,
      "BasicNW": 4678905.828,
      "WorstNW": 1389147.676,
      "Age": 105
    },
    {
      "Date": "2090-03-03",
      "ActualNW": 0,
      "BestNW": 8898474.557,
      "BasicNW": 4697968.27,
      "WorstNW": 1392573.689,
      "Age": 105
    },
    {
      "Date": "2090-04-03",
      "ActualNW": 0,
      "BestNW": 8941788.332,
      "BasicNW": 4717108.374,
      "WorstNW": 1396008.151,
      "Age": 105
    },
    {
      "Date": "2090-05-03",
      "ActualNW": 0,
      "BestNW": 8985312.939,
      "BasicNW": 4736326.457,
      "WorstNW": 1399451.084,
      "Age": 105
    },
    {
      "Date": "2090-06-03",
      "ActualNW": 0,
      "BestNW": 9029049.404,
      "BasicNW": 4755622.837,
      "WorstNW": 1402902.508,
      "Age": 105
    },
    {
      "Date": "2090-07-03",
      "ActualNW": 0,
      "BestNW": 9072998.758,
      "BasicNW": 4774997.834,
      "WorstNW": 1406362.444,
      "Age": 105
    },
    {
      "Date": "2090-08-03",
      "ActualNW": 0,
      "BestNW": 9117162.038,
      "BasicNW": 4794451.766,
      "WorstNW": 1409830.913,
      "Age": 105
    },
    {
      "Date": "2090-09-03",
      "ActualNW": 0,
      "BestNW": 9161540.286,
      "BasicNW": 4813984.956,
      "WorstNW": 1413307.936,
      "Age": 105
    },
    {
      "Date": "2090-10-03",
      "ActualNW": 0,
      "BestNW": 9206134.546,
      "BasicNW": 4833597.726,
      "WorstNW": 1416793.535,
      "Age": 106
    },
    {
      "Date": "2090-11-03",
      "ActualNW": 0,
      "BestNW": 9250945.872,
      "BasicNW": 4853290.402,
      "WorstNW": 1420287.73,
      "Age": 106
    },
    {
      "Date": "2090-12-03",
      "ActualNW": 0,
      "BestNW": 9295975.319,
      "BasicNW": 4873063.308,
      "WorstNW": 1423790.543,
      "Age": 106
    },
    {
      "Date": "2091-01-03",
      "ActualNW": 0,
      "BestNW": 9341223.948,
      "BasicNW": 4892916.771,
      "WorstNW": 1427301.994,
      "Age": 106
    },
    {
      "Date": "2091-02-03",
      "ActualNW": 0,
      "BestNW": 9386692.828,
      "BasicNW": 4912851.119,
      "WorstNW": 1430822.106,
      "Age": 106
    },
    {
      "Date": "2091-03-03",
      "ActualNW": 0,
      "BestNW": 9432383.03,
      "BasicNW": 4932866.683,
      "WorstNW": 1434350.899,
      "Age": 106
    },
    {
      "Date": "2091-04-03",
      "ActualNW": 0,
      "BestNW": 9475295.632,
      "BasicNW": 4949963.792,
      "WorstNW": 1434888.396,
      "Age": 106
    },
    {
      "Date": "2091-05-03",
      "ActualNW": 0,
      "BestNW": 9518417.112,
      "BasicNW": 4967130.558,
      "WorstNW": 1435427.217,
      "Age": 106
    },
    {
      "Date": "2091-06-03",
      "ActualNW": 0,
      "BestNW": 9561748.489,
      "BasicNW": 4984367.262,
      "WorstNW": 1435967.368,
      "Age": 106
    },
    {
      "Date": "2091-07-03",
      "ActualNW": 0,
      "BestNW": 9605290.783,
      "BasicNW": 5001674.192,
      "WorstNW": 1436508.851,
      "Age": 106
    },
    {
      "Date": "2091-08-03",
      "ActualNW": 0,
      "BestNW": 9649045.022,
      "BasicNW": 5019051.631,
      "WorstNW": 1437051.67,
      "Age": 106
    },
    {
      "Date": "2091-09-03",
      "ActualNW": 0,
      "BestNW": 9693012.236,
      "BasicNW": 5036499.869,
      "WorstNW": 1437595.827,
      "Age": 106
    },
    {
      "Date": "2091-10-03",
      "ActualNW": 0,
      "BestNW": 9737193.464,
      "BasicNW": 5054019.193,
      "WorstNW": 1438141.326,
      "Age": 107
    },
    {
      "Date": "2091-11-03",
      "ActualNW": 0,
      "BestNW": 9781589.745,
      "BasicNW": 5071609.893,
      "WorstNW": 1438688.17,
      "Age": 107
    },
    {
      "Date": "2091-12-03",
      "ActualNW": 0,
      "BestNW": 9826202.128,
      "BasicNW": 5089272.259,
      "WorstNW": 1439236.363,
      "Age": 107
    },
    {
      "Date": "2092-01-03",
      "ActualNW": 0,
      "BestNW": 9871031.663,
      "BasicNW": 5107006.584,
      "WorstNW": 1439785.909,
      "Age": 107
    },
    {
      "Date": "2092-02-03",
      "ActualNW": 0,
      "BestNW": 9916079.409,
      "BasicNW": 5124813.161,
      "WorstNW": 1440336.809,
      "Age": 107
    },
    {
      "Date": "2092-03-03",
      "ActualNW": 0,
      "BestNW": 9961346.427,
      "BasicNW": 5142692.285,
      "WorstNW": 1440889.068,
      "Age": 107
    }
  ];
import moment from "moment";
import { scaleLinear, scaleTime } from "d3-scale";
import { curveBasis, line } from "d3-shape";
import { Path, Svg } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const InteractiveChart = (props) => {
    
    const pathRef = useRef(null)
    const progress = useSharedValue(0);
    const [pathLength, setPathLength] = useState(0);
    
    const width = props.width;
    const height = props.height;
    
    const data = Data.filter(res => res.ActualNW > 0);
    const dates = data.map(res => moment(res.Date).unix());
    const actualNW = data.map(res => res.ActualNW);
    
    const [minY, maxY] = [Math.min(...actualNW), Math.max(...actualNW)];
    const [minX, maxX] = [Math.min(...dates), Math.max(...dates)];

    const scaleX = scaleTime().range([0, width]).domain([minX, maxX]);
    const scaleY = scaleLinear().range([height, 0]).domain([minY, maxY]);

    const path = line()
                    .x(d => scaleX(moment(d.Date).unix()))
                    .y(d => scaleY(d.ActualNW))
                    .curve(curveBasis)
                    (data);


    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: pathLength * progress.value,
      }));

      useEffect(() => {
        progress.value = withRepeat(withTiming(1, { duration: 1000 }), 2, true)
      }, []);

    return (
        <Svg width={width} height={height}>
            <AnimatedPath
                d={path}
                ref={pathRef}
                stroke={"purple"}
                fill={"transparent"}
                strokeWidth={3}
                strokeDasharray={pathLength}
                animatedProps={animatedProps}
                onLayout={() => setPathLength(pathRef.current.getTotalLength())}
              />
        </Svg>
    )
}

export default InteractiveChart;