/**
 * Created by jaysen.lin@foxmail.com on 2017/5/16.
 */
export class AppData {
    title: string;
    desc: string;
    link: string;
    images: string[];
    imgAlt: string;
}
export const APP_DATA_SETS: AppData[] = [
    {
        title: "What is Currency-Rate ?"
        , desc: "It's also an application of android platform. But it's a calculator, a realtime currency rate calculator.\
        i.e. you can look for realtime currency rate of the world. And you can also calculate the rate transformation."
        , link: "./apk/CurrencyRate_v2.apk"
        ,
        images: ["../images/calc_v4_1.png",
            "../images/calc_v4_2.png",
            "../images/calc_v4_3.png",
            "../images/calc_v4_4.png",
            "../images/calc_v4_5.png",
        ]
        , imgAlt: "sample calculator"
    }
    , {
        title: "Beauty photo album set one"
        , desc: "This APP is for your pleasure.Just look at the picture in the APP, it will make you passinate! It is\
        useful for who is in frustrated, it could get you out from that case. Let's appreciate the beauty photo."
        , link: "./apk/BeautyPhoto_v1.apk"
        , images: ["../images/bp1.jpeg",
            "../images/bp2.jpeg",
            "../images/bp3.jpeg",
            "../images/bp4.jpeg",
        ]
        , imgAlt: "sample beauty photo"
    }, {
        title: "What is Beautiful-Picture-Show ?"
        , desc: "It's an browse pictures application of android platform. You can see a lot of beautiful pictures based on\
        the internet.\nSo now you can download it through the link above  try it, enjoy youself !"
        , link: "./apk/MTKK_v5.apk"
        , images: ["../images/kk_5_1.jpeg",
            "../images/kk_5_2.jpeg",
            "../images/kk_5_3.jpeg",
            "../images/kk_5_4.jpeg",
        ]
        , imgAlt: "sample picture"
    }
];